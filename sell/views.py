from django.shortcuts import render

# Create your views here.


def index(request):
    context = {'all_items': 'all_items', }
    return render(request, 'sell/sell.html', context)
