from django.db import models
import re

# from django.db.models.signals import pre_save

## create validator here we have to create in nother file v2  

def mail_validator(values): # will add if we need 
    print(values)
    return True 

# v1 ---> urls create 
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
    file = models.FileField(null=True , default=...) # connect static 


    created = models.DateTimeField(default=now)

    answer_time = models.DateTimeField(
        null= True , blank=True 
    )
    link = models.CharField(null=True , max_length=122 , blank=True) # dont mater when it is create 

    def __str__(self):
        return f'id--{self.id}--{self.name}'
    # create the time line 

class Link(models.Model):
    post_content = models.ForeignKey(
        ContentConnection , related_name='POST_CON' , on_delete=models.CASCADE
    )
# bekar biad
    link = models.CharField(
        max_length=122 
    )


    def __str__(self):
        return str(self.post_content)+'--'+self.link 
    

    def save(self,*args,**kwargs ):
        return super().save(*args,**kwargs)

# create the file file now we start with api without the drf for start 
# get api 


