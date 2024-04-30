from django.urls import path
from core.views import index, home_page
from . import views


app_name = "core"

urlpatterns = [
    path("", index, name ='index'),
    path('ticker/', views.home_page, name = 'ticker')
]