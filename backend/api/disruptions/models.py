from __future__ import unicode_literals

from django.db import models

# Create your models here.
# Create your models here.
class Disruption(models.Model):
  created     = models.DateTimeField(auto_now_add=True)
  line        = models.IntegerField()
  toStation   = models.IntegerField()
  fromStation = models.IntegerField()
  description = models.TextField()
 
  class Meta:
    ordering = ('-created',)