from django.shortcuts import render
from .models import Item
# Create your views here.


def index(request):
    all_items = Item.objects.all()
    context = {'all_items': all_items, }
    return render(request, 'sell/index.html', context)
