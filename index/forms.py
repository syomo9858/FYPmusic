from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from index.models import *


class LoginForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username','password']
        

class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email']


class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['image']


class SongUploadForm(forms.ModelForm):
    class Meta:
        model = Song
        fields = ("title", "description", "type", "genre", "thumbnail", "song")

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        super(SongUploadForm, self).__init__(*args, **kwargs)

    def clean_user(self):
        return self.user

class FavoriteForm(forms.ModelForm):
    class Meta:
        model = Favorite
        fields = ("song",)

    def clean_song(self):
        pass