from django.shortcuts import render,HttpResponse, redirect
from django.contrib.auth import login, authenticate
from index.forms import *
from django.contrib.auth.forms import UserCreationForm
from django.db import transaction
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib import messages
from django.utils.translation import ugettext_lazy as _
from django.urls import reverse, reverse_lazy
from index.models import * 
from django.views import generic
from django.views.generic import CreateView, DetailView, DeleteView, ListView
from django.http import JsonResponse
from index.song_utils import generate_key
from tinytag import TinyTag

def index(request):
    return render(request, 'home/new_index.html')

def songpage(request):
    return render(request, 'song/songpage.html')
    
def ContactMe(request):
    return render(request, 'home/ContactMe.html')
    
def songsView(request):
    context = {
        'artists': Artist.objects.all(),
        'genres': Genre.objects.all()[:6],
        'latest_songs': Song.objects.all()[:6]
    }
    return render(request, "songs/viewsongs.html", context)
    
    
def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Your account has been created! You are now able to log in')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'users/signup.html', {'form': form})
    
    
    
@login_required()
def profile(request):
    Profile.objects.get_or_create(user=request.user)
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(request.POST,
                                   request.FILES,
                                   instance=request.user.profile)
        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, f'Your account has been updated!')
            return redirect('profile')

    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)

    context = {
        'u_form': u_form,
        'p_form': p_form
    }

    return render(request, 'users/profile.html', context)
    



class SongUploadView(CreateView):
    form_class = SongUploadForm
    template_name = "songs/upload.html"

    @method_decorator(login_required(login_url=reverse_lazy('index')))
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(self.request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(SongUploadView, self).get_context_data(**kwargs)
        context['artists'] = Artist.objects.all()
        context['genres'] = Genre.objects.all()
        return context

    def get_form_kwargs(self):
        kwargs = super(SongUploadView, self).get_form_kwargs()
        kwargs.update({'user': self.request.user})
        return kwargs

    def post(self, request, *args, **kwargs):
        form = self.get_form()
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)

    def form_invalid(self, form):
        return JsonResponse(form.errors, status=200)

    def form_valid(self, form):
        song = TinyTag.get(self.request.FILES['song'].file.name)
        form.instance.audio_id = generate_key(15, 15)
        form.instance.user = self.request.user
        form.instance.playtime = song.duration
        form.instance.size = song.filesize
        artists = []
        for a in self.request.POST.getlist('artists[]'):
            try:
                artists.append(int(a))
            except:
                artist = Artist.objects.create(name=a)
                artists.append(artist)
        form.save()
        form.instance.artists.set(artists)
        form.save()
        data = {
            'status': True,
            'message': "Successfully submitted form data.",
            'redirect': reverse_lazy('upload-details', kwargs={'audio_id': form.instance.audio_id})
        }
        return JsonResponse(data)


class SongDetailsView(DetailView):
    model = Song
    template_name = 'songs/show.html'
    context_object_name = 'songs'
    slug_field = 'audio_id'
    slug_url_kwarg = 'audio_id'
    

class ArtistListView(ListView):
    model = Artist
    template_name = 'artists/index.html'
    context_object_name = 'artists'


class ArtistDetailView(DetailView):
    model = Artist
    template_name = 'artists/show.html'
    context_object_name = 'artist'
    slug_field = 'slug'
    slug_url_kwarg = 'slug'

    def get_context_data(self, **kwargs):
        context = super(ArtistDetailView, self).get_context_data(**kwargs)
        context['songs'] = self.get_object().songs.all()
        return context
        
    
class GenreListView(ListView):
    model = Genre
    template_name = 'genres/index.html'
    context_object_name = 'genres'
    
class SongsByGenreListView(DetailView):
    model = Genre
    template_name = 'genres/songs-by-genre.html'
    context_object_name = 'genre'

    def get_context_data(self, **kwargs):
        context = super(SongsByGenreListView, self).get_context_data(**kwargs)
        context['songs'] = self.get_object().song_set.all
        return context
        
    

class FavoriteCreateView(CreateView):
    form_class = FavoriteForm
    http_method_names = ['post']

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(FavoriteCreateView, self).form_valid(form)

    def post(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            data = {
                'status': True,
                'message': "Please login first",
                'redirect': None
            }
            return JsonResponse(data=data)
        form = self.get_form()
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)


def favoriteunfavorite(request):
    if request.method == "POST":
        if request.POST.get('decision') == 'make':
            song = Song.objects.get(id=request.POST.get('song_id'))
            if not Favorite.objects.filter(user=request.user, song=song).exists():
                Favorite.objects.create(user=request.user, song=song)
                data = {
                    'status': True,
                    'message': "Song marked as favorite",
                    'redirect': None
                }
                return JsonResponse(data)
            else:
                data = {
                    'status': True,
                    'message': "Already favorite",
                    'redirect': None
                }

                return JsonResponse(data)
        else:
            song = Song.objects.get(id=request.POST.get('song_id'))
            Favorite.objects.filter(user=request.user, song=song).delete()
            data = {
                'status': True,
                'message': "Song unfavorited",
                'redirect': None
            }
            return JsonResponse(data)
    else:
        data = {
            'status': False,
            'message': "Method not allowed",
            'redirect': None
        }

        return JsonResponse(data)


class UnFavoriteView(DeleteView):
    model = Favorite

    def delete(self, request, *args, **kwargs):
        self.object = self.get_object()
        success_url = self.get_success_url()
        self.object.delete()
        data = {
            'status': True,
            'message': "Song unfavorited.",
            'redirect': None
        }

        return JsonResponse(data)