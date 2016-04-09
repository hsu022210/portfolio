from django.db import models

# Create your models here.


class Item(models.Model):
    title = models.CharField(max_length=50)
    price = models.PositiveSmallIntegerField(default=0)
    description = models.TextField()
    category = models.CharField(max_length=50)
    created = models.DateTimeField('date modified', auto_now=True)

    def __str__(self):
        return self.title
