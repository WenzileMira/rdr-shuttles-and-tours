from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, GroupViewSet, TokenList, TokenDetail, EmailAddressList, EmailAddressDetail
from . import views

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

urlpatterns = [
    path('', views.Index, name='index'),
    path('rest-auth/', include(router.urls)),
    path('rest-auth/admin-user/', UserViewSet.as_view({'get': 'list'}), name='users'),
    path('rest-auth/admin-group/', GroupViewSet.as_view({'get': 'list'}), name='groups'),
    path('rest-auth/admin-token/', TokenList.as_view(), name='token-list'),
    path('rest-auth/admin-token/<int:pk>/', TokenDetail.as_view(), name='token-detail'),
    path('rest-auth/admin-email/', EmailAddressList.as_view(), name='email-list'),
    path('rest-auth/admin-email/<int:pk>/', EmailAddressDetail.as_view(), name='email-detail'),
    path('rest-auth/register/', views.SignUp.as_view(), name='signup'),
    path('rest-auth/signin/', views.Login.as_view(), name='login'),
]