from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    title = forms.CharField(widget=forms.TextInput(attrs={'placeholder':'Title', 'id': 'username'}))
    # author = forms.CharField(widget=forms.TextInput(attrs={'placeholder':'Author', 'id': 'email'}))
    body = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Write what is on your mind. :)', 'id': 'body'}))
    class Meta:
        model = Post
        fields = ['title','body']