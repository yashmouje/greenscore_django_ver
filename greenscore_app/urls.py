from django.urls import path
from . import views

app_name = 'greenscore_app'
urlpatterns = [
    path('', views.index, name='index'),
    path('my-score/', views.scores, name='scores')

]
