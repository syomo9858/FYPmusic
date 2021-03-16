from django.shortcuts import render,HttpResponse, redirect
from django.contrib.auth import login
from django.urls import reverse
from home.forms import CustomeUserCreationForm

def home(request):
    return render(request, 'home/home.html')
    
def index(request):
    return render(request, 'home/index.html')

def register(request):

    if request.method == "GET":

        return render(

            request, "users/signup.html",

            {"form": CustomeUserCreationForm}

        )

    elif request.method == "POST":

        form = CustomeUserCreationForm(request.POST)

        if form.is_valid():

            user = form.save()

            login(request, user)

            return redirect(reverse("home"))