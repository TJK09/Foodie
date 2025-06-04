from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth.tokens import default_token_generator
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from .utils import send_verification_email

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        user = serializer.save(is_active=False)  # Save user as inactive
        send_verification_email(user, self.request)

class VerifyEmailView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, uid, token):
        user = get_object_or_404(User, pk=uid)

        if default_token_generator.check_token(user, token):
            user.is_active = True
            user.save()
            return Response({'message': 'Email verified successfully! You can now log in.'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid or expired token.'}, status=status.HTTP_400_BAD_REQUEST)

from rest_framework import viewsets, permissions
from .models import Blog
from .serializers import BlogSerializer
from .permissions import IsOwnerOrReadOnly

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('-created_at')
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from django.urls import reverse

class RequestPasswordReset(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        username = request.data.get('username')

        if not email or not username:
            return Response({'error': 'Username and email are required.'}, status=400)

        # Find user matching both username and email
        user = User.objects.filter(username=username, email=email).first()

        if user:
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))

            # Build frontend reset URL, replace localhost:5173 with your actual frontend host if different
            frontend_url = f"http://localhost:5173/reset-password/{uid}/{token}"

            subject = 'Reset Your Password - Foodie'
            message = f'Hi {user.username},\n\nClick the link to reset your password:\n{frontend_url}'
            from_email = 'no-reply@foodie.com'

            send_mail(subject, message, from_email, [email])

        # Always return this message regardless to avoid exposing user existence
        return Response({'message': 'If your username and email exist, a reset link has been sent.'})
    

class PasswordResetConfirm(APIView):
    permission_classes = [AllowAny]

    def post(self, request, uidb64, token):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except Exception:
            return Response({'error': 'Invalid reset link.'}, status=status.HTTP_400_BAD_REQUEST)

        if default_token_generator.check_token(user, token):
            new_password = request.data.get('password')
            if not new_password:
                return Response({'error': 'Password required.'}, status=status.HTTP_400_BAD_REQUEST)

            user.set_password(new_password)
            user.save()
            return Response({'message': 'Password reset successful!'})
        else:
            return Response({'error': 'Token is invalid or expired.'}, status=status.HTTP_400_BAD_REQUEST)


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactSerializer, SubscriptionSerializer
from .models import ContactMessage, Subscription
from rest_framework.permissions import AllowAny

class ContactAPIView(APIView):
    permission_classes = [AllowAny]  # 👈 Allow public access

    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            ContactMessage.objects.create(**serializer.validated_data)
            return Response({"message": "Contact message received"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SubscribeAPIView(APIView):
    permission_classes = [AllowAny]  # 👈 Allow public access

    def post(self, request):
        serializer = SubscriptionSerializer(data=request.data)
        if serializer.is_valid():
            subscription, created = Subscription.objects.get_or_create(email=serializer.validated_data['email'])
            if created:
                return Response({"message": "Subscribed successfully"}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Email already subscribed"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
