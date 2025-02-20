from django.contrib import admin
from .models import ContentConnection
# Register your models here.
# admin.site.register(
#     ContentConnection
# )


@admin.register(ContentConnection)
class PostAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'email', 'created',]
    list_filter = [ 'created',]
    search_fields = ['name', 'phone', 'body_text', 'email',]
    ordering = ['created' , 'created']
