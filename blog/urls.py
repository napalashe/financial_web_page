from django.urls import path
from blog import views

app_name = 'blog'

urlpatterns = [
    path('', views.blog_list, name ='blog-home'),
    path('create-blog/', views.create_post, name = 'create-blog'),
    
]