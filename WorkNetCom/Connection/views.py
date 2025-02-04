from django.shortcuts import render
from django.http import JsonResponse  , Http404  ,HttpRequest
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.decorators import api_view, renderer_classes
import json
# Create api here # simple api 
# file upload for pass farda \

# dont use seriaizer 

from .models import ContentConnection
from .serializer import CONTENTSerializer
'/get/contentsid={}' # GET # POST __> BADREQUESTS
@api_view(('GET',)) # TODO class base 
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

from .serializer import CONTENTSerializerInhertance
'/content/all' 
@api_view(('GET',))
def get_Content_admin_link(request):
    data = ContentConnection.objects.all() 
    serializer_content_All = CONTENTSerializerInhertance(data , many = True)
    CONTENTSerializerInhertance.create_with_link(serializer_content_All)
    return Response(serializer_content_All.data , status=status.HTTP_200_OK)

# create 
# update 
# class save Fiel from server 

from .FIleManager import FileUploadSimple
from  .serializer import uploadFileContentserializer
from django.http import QueryDict

@api_view(('POST' ,))
def create_the_content(request:HttpRequest):
    upload = FileUploadSimple(request.FILES.get('file'))
    print(upload)
    print('the file is ....////', type(request.FILES.get('file')))
    # for i in request.FILES.get('Appendix'):
    #     print('requests is '  , i)
    data_context  = QueryDict('' , mutable=True) 
    data_context.update(request.POST)
    if request.FILES : 
        #this is get file 
        data_context.update({'file':upload.create_file_uploaded()})
        print('data context is ' , data_context)
        # data_context.pop('Appendix')
    print(data_context.get('file'))
    print('the data is ' , data_context)
    print('converting data mager dunmpus' , json.dumps(data_context) )
    serializer_content = uploadFileContentserializer(
        data =data_context
    )
    
    print(serializer_content.is_valid()) 
    print(serializer_content.errors)
    print(serializer_content)
   
    serializer_content.save()
    return Response(
            serializer_content.data  , status=status.HTTP_200_OK
        )
    # else : 
    #     return Response(
    #         {'400':'bad request arggumans'}, status=status.HTTP_400_BAD_REQUEST
    #     )
