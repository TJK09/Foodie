from django.contrib.auth.models import User
from rest_framework import serializers
from .utils import send_verification_email

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        user.is_active = False  # User inactive until email is verified
        user.save()

        request = self.context.get('request')
        if request:
            send_verification_email(user, request)

        return user

from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')  # Show username of author, read-only

    class Meta:
        model = Blog
        fields = '__all__'
        read_only_fields = ['author']

    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['author'] = user
        return super().create(validated_data)
    

class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=20)
    message = serializers.CharField()

class SubscriptionSerializer(serializers.Serializer):
    email = serializers.EmailField()

