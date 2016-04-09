from django.shortcuts import render

# Create your views here.


def index(request):
    # all_items = Item.objects.all()
    context = {'all_items': 'all_items', }
    return render(request, 'theme/index.html', context)
