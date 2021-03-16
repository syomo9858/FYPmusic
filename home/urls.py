from django.urls import path
from django.conf.urls import include, url
from home.views import home, register, index
from . import views

urlpatterns = [
    path('', views.home),
    url(r"^home/", home, name="home"),
    url(r"^register/", register, name="register"),
    url(r"^index/", index, name="index"),
    
]