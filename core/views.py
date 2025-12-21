from django.shortcuts import render
from rest_framework.generics import CreateAPIView, ListCreateAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model, login
from . serializers import UserSignUpSerializer, UserLoginSerializer, UserSerializer, GroupSerializer, TokenSerializer, EmailAddressSerializer
from django.contrib.auth.models import User, Group
from allauth.account.models import EmailAddress
from django.contrib.auth import get_user_model
from rest_framework import permissions, viewsets
# Create your views here.
user = get_user_model()

def Index(request):
    return render(request, 'index.html')

class SignUp(CreateAPIView):
    serializer_class = UserSignUpSerializer

class Login(GenericAPIView):
    serializer_class = UserLoginSerializer
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, created = Token.objects.get_or_create(user=user)
        login(request, user)
        return Response({'token': token.key, 'user_id': int(user.id), 'is_superuser': user.is_superuser})

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class TokenList(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = TokenSerializer
    permission_classes = [permissions.IsAuthenticated]

class TokenDetail(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = TokenSerializer
    permission_classes = [permissions.IsAuthenticated]

class EmailAddressList(ListCreateAPIView):
    queryset = EmailAddress.objects.all()
    serializer_class = EmailAddressSerializer
    permission_classes = [permissions.IsAuthenticated]

class EmailAddressDetail(RetrieveUpdateDestroyAPIView):
    queryset = EmailAddress.objects.all()
    serializer_class = EmailAddressSerializer
    permission_classes = [permissions.IsAuthenticated]
    

