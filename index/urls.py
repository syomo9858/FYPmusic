from django.urls import path
from django.conf.urls import include, url
from . import views
from index.views import *
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.index),
    url(r"^index/", index, name="index"),
    url(r'^login/', auth_views.LoginView.as_view(), {'template_name': 'users/login.html'}, name='login'),
    url(r'^logout/', auth_views.LogoutView.as_view(), {'next_page': 'login'}, name='logout'),
    url(r'^signup/', register, name='signup'),
    url(r'^profile/', profile, name='profile'),
    url(r'^ContactMe/', ContactMe ,name='ContactMe'),
    url(r'^songsView', songsView, name='songsView'),
    url(r'^artists', ArtistListView.as_view(), name='artists'),
    url(r'^artists/<slug:slug>', ArtistDetailView.as_view(), name='artist-details'),
    url(r'^genres', GenreListView.as_view(), name='genres'),
    path('genres/<int:pk>', SongsByGenreListView.as_view(), name='songs-by-genre'),
    url(r'^songs/', include([
        url(r'^make-favorite', favoriteunfavorite, name='song-favorite'),
        url(r'^upload', SongUploadView.as_view(), name='upload'),
        path('<slug:audio_id>', SongDetailsView.as_view(), name='upload-details'),
    ])),
    
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)