from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission: only owners can edit/delete; others read-only.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions allowed for any request
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions only for author of the blog
        return obj.author == request.user
