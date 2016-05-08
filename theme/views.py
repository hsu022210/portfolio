from django.shortcuts import render
from sell.models import Item

# Create your views here.


def index(request):
    items = Item.objects.order_by('-posted')[0:6]
    context = {'items': items, }
    return render(request, 'theme/index.html', context)
