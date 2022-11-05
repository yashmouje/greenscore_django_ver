from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'greenscore_app/index.html')

def scores(request):
    return render(request, 'greenscore_app/scores.html')
