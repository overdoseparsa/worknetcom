from django.db import models
from django.utils.translation import gettext_lazy as _

class Project(models.Model):
      
    title = models.CharField(
        max_length=122 , 
        verbose_name=_('title') , 
    )
    body = models.TextField()
    dateproject = models.DateTimeField() # Date time 
    dateFinished = models.DateTimeField()
    
    def __str__(self):
        return f'{self.title}'

    
class Content(models.Model):
    project = models.ForeignKey(
        Project , on_delete=models.CASCADE  , related_name="content_images"
    )
    image = models.ImageField()
    published = models.DateTimeField()

    def __str__(self):
        return f'{self.image} {self.published}'

# api ro minivisam 
# set DATABASE 
# it is in ver2 


class File(models.Model):
    title = models.CharField(max_length=220)

    file = models.FileField()

    

