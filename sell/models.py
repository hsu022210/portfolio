from django.db import models

# Create your models here.


class Item(models.Model):
    title = models.CharField(max_length=50)
    price = models.PositiveSmallIntegerField(default=0)
    image = models.ImageField(upload_to='uploaded_image/')
    description = models.TextField()
    posted = models.DateTimeField('date posted', auto_now=True)

    class Meta:
        ordering = ['-posted']

    def image_tag(self):
        return '<img src="{}" height="100" />'.format(self.image.url)
    image_tag.allow_tags = True

    def __str__(self):
        return self.title
