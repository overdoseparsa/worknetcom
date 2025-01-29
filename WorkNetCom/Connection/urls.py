from django.urls import path
from .views import get_content









urlpatterns = [
    path('content/ID=<int:ID_>' , get_content , name='content_name')
]