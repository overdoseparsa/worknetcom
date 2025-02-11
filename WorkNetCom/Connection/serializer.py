#from rest_framework.serializers import Serializer  , ModelSerializer
from rest_framework import serializers 
from  .models import ContentConnection 



class CONTENTSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ContentConnection
        fields = [ 'id', 'name', 'phone','body_text' ,'email' , 'file' , 'created' , 'answer_time' ]

     
    def create(self, validated_data):
    
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        return super().update(instance, validated_data)

    def is_valid(self, *, raise_exception=False):
        return super().is_valid(raise_exception=raise_exception)
    
# shayed bar nadar 
from abc import abstractmethod

class uploadFileContentserializer(serializers.Serializer):
    
    name = serializers.CharField()
    phone = serializers.CharField()
    body_text = serializers.CharField()
    email = serializers.EmailField()
    file = serializers.CharField() # this is fiel get from ststic file 
    created = serializers.CharField() # this is datetime from database 
    # 2004-06-08 13:03:06

    def is_valid(self, *, raise_exception=False):
        return super().is_valid(raise_exception=raise_exception)
    
    @abstractmethod
    def create_datatime(values):
        pass


    def create(self, validated_data):
        print('the calid data is ' , validated_data)
        return ContentConnection.objects.create(
            name = validated_data.get('name') ,  
            phone = validated_data.get('phone') ,  
            body_text = validated_data.get('body_text') ,  
            email = validated_data.get('email') ,  
            file = validated_data.get('file') , 
            created = validated_data.get('created')  , 
        ) # create the system side 

# YY-MM-DD H:M:S
    def save(self, **kwargs):
        return super().save(**kwargs)
    


from django.urls import reverse # this is good 
from .models import ContentConnection 

class CONTENTSerializerInhertance(CONTENTSerializer):
    class Meta: # overload the meta 
        model = ContentConnection
        fields = [ 'id', 'name', 'phone' , 'created'  , 'link' ]


    # Parsa Khaki ha ha ha :} 
    
    def create_with_link(self):
        
        #self.data

        for  ranger ,seilated in enumerate(self.data) : 
            if not seilated['link']:
                print('data is ' , seilated)
                iFD = seilated['id'] 
                # here create the link from http file 
                reverse_data = reverse(
                    viewname = 'content_name' , 
                    kwargs={'ID_':iFD}
                )
                
                print('the reverse data is from link' ,reverse_data )
                models_cursor = ContentConnection.objects.get(id= iFD) # this is id 
                models_cursor.link = reverse_data
                models_cursor.save()

                self.data[ranger]['link'] = reverse_data
            else : 
                continue


    # def create(self, validated_data): # this is create 
    #     return super().create(validated_data)
    