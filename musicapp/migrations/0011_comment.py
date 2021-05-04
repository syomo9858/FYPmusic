# Generated by Django 2.1.7 on 2021-05-04 21:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('musicapp', '0010_song_singer'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField()),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('Creator', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('song', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='musicapp.Song')),
            ],
            options={
                'ordering': ['created_on'],
            },
        ),
    ]
