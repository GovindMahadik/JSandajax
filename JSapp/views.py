

from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt

from JSapp.models import RegistrationModel

def index(request):
    return render(request,"tempapp/index.html")

def save(request):
    RegistrationModel(name=request.POST.get("t1"),contact=request.POST.get("t2"),email=request.POST.get("t3"),password=request.POST.get("t4")).save()
    return HttpResponse("Data is Saved")

@csrf_exempt
def validate_contact(request):
    try:
        RegistrationModel.objects.get(contact=request.POST.get("cno"))
        return JsonResponse({"result":True})
    except RegistrationModel.DoesNotExist:
        return JsonResponse({"result": False})



@csrf_exempt
def validate(request):
    try:
        RegistrationModel.objects.get(email=request.POST.get("em"))
        return JsonResponse({"result":True})
    except RegistrationModel.DoesNotExist:
        return JsonResponse({"result": False})