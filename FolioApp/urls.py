from django.urls import path
from . import views


urlpatterns = [
    path('', views.home),
    path('jobs/', views.jobs),
    path('about/', views.about),
    path('insights/', views.insights),
]