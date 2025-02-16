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

'/get/contentsid={}' # GET # POST __> BADREQUESTS --> /# this is leanr 
@api_view(('GET',)) # TODO class base a
def get_content(request , ID_):
    # try : 
    #seriaizer = CONTENTSerializer

    try : 
        data_model = ContentConnection.objects.get(id = ID_) # this is get here 
    except : 
        raise Http404('this is not exit') # save 
    
    seriaizer = CONTENTSerializer(data_model)


    print('This is seriazler off data ',seriaizer.data ,'The models is file' ,  ContentConnection.objects.get(id = ID_).file)
    return Response(
        seriaizer.data , status=status.HTTP_200_OK
    )


from rest_framework.parsers import  FileUploadParser


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

from django.http import HttpResponseBadRequest


@api_view(('POST' ,))
def create_the_content(request:HttpRequest):
    if not request.POST :
        raise BaseException('dont have any pyload')
    else : 
        print('the post data is ...>' , request.POST)
        upload = FileUploadSimple(request.FILES.get('file'))
        print(upload)
        print('the file is ....////', type(request.FILES.get('file')))
        # for i in request.FILES.get('Appendix'):
        #     print('requests is '  , i)

        data_context  = QueryDict('' , mutable=True) 
        data_context.update(request.POST)
        
        print(

            f"""
            the data context is  {data_context}
            
            """ 
        )

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
                serializer_content.data  ,status=status.HTTP_200_OK , 
            )
        # else : 
        #     return Response(
        #         {'400':'bad request arggumans'}, status=status.HTTP_400_BAD_REQUEST
        #     )



# create view set for django inssert off create sub mhetods difreent 
from rest_framework.viewsets import  ModelViewSet 
from .serializer import TestViewSetSeriaizler
# create seriaizer 
class ContentViewSet(
    ModelViewSet # adding models view set 
): 
    # lookup_field = 'id'
    serializer_class = TestViewSetSeriaizler
    
    queryset = ContentConnection.objects.all() # where 



    def retrieve(self, request, *args, **kwargs): # GET 
        return super().retrieve(request, *args, **kwargs) # get 
    




    def list(self, request, *args, **kwargs): # GET ALL 
        return super().list(request, *args, **kwargs)
    def update(self, request, *args, **kwargs): # UPDATE 
        return super().update(request, *args, **kwargs)
    def destroy(self, request, *args, **kwargs): # Delete
        return super().destroy(request, *args, **kwargs)
    

