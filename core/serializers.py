from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.models import User, Group
from allauth.account.models import EmailAddress
from rest_framework.authtoken.models import Token

user = get_user_model()
class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)
    
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
class UserSignUpSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = user
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs={
            'password':{'write_only': True}
        }
    def validate_email(self, email):
        if user.objects.filter(email = email).exists():
            raise serializers.ValidationError("Email already exists")
        return email
    
    def validate_username(self, username):
        if user.objects.filter(username = username).exists():
            raise serializers.ValidationError("Username already Exists")
        return username
    
    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match")
        return data
    
    def create(self, validated_data):
        users = user.objects.create(
            email=validated_data['email'],
            username=validated_data['username']
        )
        users.set_password(validated_data['password'])
        users.save()
        return users

class UserSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'first_name', 'last_name', 'email',
                  'last_login', 'is_staff', 'is_active', 'date_joined']

class GroupSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Group
        fields = ['id', 'url', 'name']

class TokenSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    auth_token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'auth_token']

    def get_auth_token(self, obj):
        token, created = Token.objects.get_or_create(user=obj)
        return token.key

class EmailAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailAddress
        fields = ['id', 'email', 'verified', 'primary']