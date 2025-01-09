from django.db import models
from django.utils.translation import gettext_lazy as _

class Project(models.Model):
    
    title = models.CharField(
        max_length=122 , 
        verbose_name=_('title') , 
    )
    body = models.TextField()
    dateproject = models.DateTimeField()
    dateFinished = models.DateTimeField()
    
    def __str__(self):
        return f'{self.title}'

    
class Content(models.Model):
    project = models.ForeignKey(
        Project , on_delete=models.CASCADE  , related_name="content_images"
    )
    image = models.ImageField(upload_to='static')
    published = models.DateTimeField()

    def __str__(self):
        return f'{self.image} {self.published}'


# 