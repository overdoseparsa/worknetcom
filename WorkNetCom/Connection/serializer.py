#from rest_framework.serializers import Serializer  , ModelSerializer
from rest_framework import serializers 
from  .models import ContentConnection 



class CONTENTSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ContentConnection
        fields = [ 'id', 'name', 'phone','body_text' ,'email' , 'Appendix' , 'created' , 'answer_time' ]


    def create(self, validated_data):
    
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        return super().update(instance, validated_data)


# shayed bar nadar 

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
    