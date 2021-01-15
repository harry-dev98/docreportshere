from django.urls import path

from .views import *

urlpatterns = [
    path('signup/', doctorSignUp),
    path('login/', login),
    path('getdoctors/', getDoctors),
    path('getpatients/', getPatients),
    path('addpatient/', addPatient),
    path('addscan/', addScan),
    path('addreport/', addReport),
    path('assigndoctor/', assignDoctor),
    path('newmessage/', newMessage),
    path('messages/', getChat),
    path('notifications/', getNotification),
    path('validatedoctor/', validateDoctor)
]