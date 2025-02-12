from django.urls import path  ,include
from .views import get_content , get_Content_admin_link , create_the_content


from .views import ContentViewSet 
from rest_framework.routers import DefaultRouter  

# _route = DefaultRouter()
# # Register content viewset 
# _route.register(
#     r'contents' , ContentViewSet , basename='contents'
# )








urlpatterns = [
    path('content/ID=<int:ID_>/' , get_content , name='content_name') , 
    path('content/all/' , get_Content_admin_link , name='get_all_content') , 
    path('content/create/', create_the_content , name='create_content') , 
    
    # path('' , include(_route.urls))
]