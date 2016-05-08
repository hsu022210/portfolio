from django.shortcuts import render
from .models import Item

# Create your views here.


def index(request):
    items = Item.objects.all().order_by('-posted')
    context = {'items': items, }
    return render(request, 'sell/sell.html', context)
