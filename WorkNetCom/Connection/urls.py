from django.urls import path
from .views import get_content , get_Content_admin_link , create_the_content









urlpatterns = [
    path('content/ID=<int:ID_>' , get_content , name='content_name') , 
    path('content/all' , get_Content_admin_link , name='get_all_content') , 
    path('content/create', create_the_content , name='create_content') , 

]