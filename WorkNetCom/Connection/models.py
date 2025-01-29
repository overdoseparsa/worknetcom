from django.db import models
import re

## create validator here we have to create in nother file v2  

def mail_validator(values): # will add if we need 
    print(values)
    return True 


####
"""
test 
django.db.models.fields.files.FieldFile

"""
from django.db.models.fields.files import FieldFile
####
from django.utils.timezone import now

class ContentConnection(
    models.Model
):
    name = models.CharField(
        max_length=125 ,  # this is name from server 

    )
    phone = models.CharField(
        max_length=11 
    )
    body_text =  models.TextField() # this is text field form models 
 
    email  =  models.EmailField(
        validators=[mail_validator]
    )
    Appendix = models.FileField(null=True)


    created = models.DateTimeField(default=now)

    answer_time = models.DateTimeField(
        null= True , blank=True 
    )

    def __str__(self):
        return f'{self.name}'



# create the file file now we start with api without the drf for start 
# get api 