from django.contrib import admin
from .models import UserProfile

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'is_email_verified')
    search_fields = ('user__username', 'user__email')
    list_filter = ('is_email_verified',)
    readonly_fields = ('user',)


from django.contrib import admin
from .models import Blog

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at')
    search_fields = ('title', 'author__username')
    list_filter = ('created_at',)
