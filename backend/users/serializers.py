from djoser.serializers import UserSerializer

from rest_framework import serializers

from .models import User


class CurrentUserSerializer(UserSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'username',
            'first_name',
            'last_name',
            'password',
        )
