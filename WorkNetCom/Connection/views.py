from django.shortcuts import render
from django.http import JsonResponse  , Http404
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.decorators import api_view, renderer_classes
# Create api here # simple api 

# dont use seriaizer 

from .models import ContentConnection
from .serializer import CONTENTSerializer
'/get/contentsid={}' # GET # POST __> BADREQUESTS
@api_view(('GET',))
def get_content(request , ID_):
    # try : 
    #seriaizer = CONTENTSerializer

    try : 
        data_model = ContentConnection.objects.get(id = ID_) # this is get here 
    except : 
        raise Http404('this is not exit') # save 
    seriaizer = CONTENTSerializer(data_model)

    # except :
    #     raise Http404('this is Not Exits')
    
     
    # return JsonResponse(
    #     {
    #         'id':data.id , 
    #         'phone':data.phone , 
    #         'body':data.body_text , 
    #         'email' : data.email , 
    #         'Appendix' : data.Appendix , 
    #         'time_created':data.created  , 
    #         'answer_time':data.answer_time , 

    #     }
    # )

    return Response(
        seriaizer.data , status=status.HTTP_200_OK
    )
'/get/content/all'

def get_Content_admin_link(requests , ID):
    pass


