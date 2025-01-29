from rest_framework.serializers import Serializer  , ModelSerializer
from  .models import ContentConnection 

class CONTENTSerializer(ModelSerializer):
    
    class Meta:
        model = ContentConnection
        fields = [ 'id', 'name', 'phone','body_text' ,'email' , 'Appendix' , 'created' , 'answer_time' ]