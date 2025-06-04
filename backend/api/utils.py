from django.core.mail import send_mail
from django.contrib.auth.tokens import default_token_generator
from django.urls import reverse

def send_verification_email(user, request):
    token = default_token_generator.make_token(user)
    uid = user.pk

    verification_url = request.build_absolute_uri(
        reverse('verify-email', kwargs={'uid': uid, 'token': token})
    )

    subject = 'Verify Your Email - Foodie'
    message = f"""Hello {user.username},

Please click the link below to verify your email address:

{verification_url}

If you did not sign up, you can ignore this email.

Thanks,
The Foodie Team
"""
    from_email = 'no-reply@foodie.com'
    recipient_list = [user.email]

    send_mail(subject, message, from_email, recipient_list)
