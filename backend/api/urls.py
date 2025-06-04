from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet
from .views import RequestPasswordReset, PasswordResetConfirm
from .views import ContactAPIView, SubscribeAPIView

router = DefaultRouter()
router.register(r'blogs', BlogViewSet, basename='blogs')

urlpatterns = [
    path('', include(router.urls)),
    path('user/request-reset-password/', RequestPasswordReset.as_view(), name='request-password-reset'),
    path('user/reset-password/<uidb64>/<token>/', PasswordResetConfirm.as_view(), name='password-reset-confirm'),
]


