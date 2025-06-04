from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView, VerifyEmailView,ContactAPIView,SubscribeAPIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),

    # User authentication and verification
    path('api/user/register/', CreateUserView.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='get_token'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('api/user/verify-email/<int:uid>/<str:token>/', VerifyEmailView.as_view(), name='verify-email'),

    # DRF browsable API login/logout
    path('api-auth/', include('rest_framework.urls')),

    # Include API routes (blogs and others)
    path('api/', include('api.urls')),
    path('api/contact/', ContactAPIView.as_view(), name='contact'),
    path('api/subscribe/', SubscribeAPIView.as_view(), name='subscribe'),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
