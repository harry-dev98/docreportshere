from db.models import *
from .serializers import *
from django.contrib.auth import authenticate # to manually authenticate user
from django.views.decorators.csrf import csrf_exempt # to use POST req without csrf
from rest_framework.authtoken.models import Token # generates/ get token for authenticated user
from rest_framework.decorators import api_view, permission_classes # some usefull decorators
from rest_framework.permissions import (
    AllowAny, 
    IsAuthenticatedOrReadOnly, 
    IsAuthenticated,
) # allowing all users to interact with the view

from rest_framework.status import (
    HTTP_302_FOUND, HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_202_ACCEPTED,
    HTTP_204_NO_CONTENT,
    HTTP_500_INTERNAL_SERVER_ERROR,
) # Some Basic HTTP responses
from rest_framework.response import Response # sending json response

@csrf_exempt
@api_view(["POST",])
@permission_classes((AllowAny, ))
def doctorSignUp(request):
    username = request.data["username"]
    userserializer = UserSerializer(data=request.data)
    if userserializer.is_valid():
        userserializer.save()
        doc = {}
        doc['user'] = User.objects.get(username=username).id
        doc['name'] = request.data["name"] or request.data["username"]
        doc['domain'] = request.data["domain"]
        serializer = DoctorSerializer(data=doc)
        if(serializer.is_valid()):
            serializer.save()
        return Response({"message": "success"}, status=HTTP_201_CREATED)
    
    return Response({"error": True, "message": userserializer.errors}, status=HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(["POST",])
@permission_classes((AllowAny, ))
def login(request):
    username = request.data["username"]
    password = request.data["password"]
    user = authenticate(username=username, password=password)
    if user == None:
        return Response({"message": "no user", "error": True})
    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key, "auth": True}, status=HTTP_201_CREATED)

@csrf_exempt
@api_view(["GET",])
@permission_classes((IsAuthenticated, ))
def getDoctors(request):
    docs = Doctor.objects.all()
    serialized = DoctorSerializer(docs, many=True)
    return Response(serialized.data, status=HTTP_200_OK)


@csrf_exempt
@api_view(["GET",])
@permission_classes((IsAuthenticated, ))
def getPatients(request):
    allPatients = Patient.objects.all()
    data = []
    for patient in allPatients:
        tempData = dict(PatientSerializer(patient).data)
        tempData['scans'] = list(ScansSerializer(patient.scans.all(), many=True).data)
        data.append(tempData)

    return Response(data, status=HTTP_200_OK)



@csrf_exempt
@api_view(["POST",])
@permission_classes((IsAuthenticated, ))
def addPatient(request):
    serialized = PatientSerializer(data=request.data)
    if serialized.is_valid():
        serialized.save()
        return Response({"message": "success"}, status=HTTP_201_CREATED)
    return Response({"message": serialized.errors, "error": True}, status=HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(["POST",])
@permission_classes((IsAuthenticated, ))
def addScan(request):
    serialized = ScansSerializer(data=request.data)
    if serialized.is_valid():
        serialized.save()
        return Response({"message": "success"}, status=HTTP_201_CREATED)
    return Response({"message": serialized.errors, "error": True}, status=HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(["POST",])
@permission_classes((IsAuthenticated, ))
def addReport(request):
    scanId = request.data['scan']
    report = request.data['report']
    try:
        scan = Scan.objects.get(id=scanId)
        scan.isReported = True
        scan.report = report
        scan.save()
        return Response({"message": "success"}, status=HTTP_201_CREATED)
    except Scan.DoesNotExist as err:
        return Response({"message":"no such scan", "error": True}, status=HTTP_204_NO_CONTENT)

@csrf_exempt
@api_view(["POST",])
@permission_classes((IsAuthenticated, ))
def assignDoctor(request):
    doctor = request.data['doctor']
    patient = request.data['patient']
    try:
        patient = Patient.objects.get(id=patient)
        patient.isAssigned = True
        patient.doctor = Doctor.objects.get(id=doctor)
        patient.save()
        return Response({"message": "success"}, status=HTTP_201_CREATED)
    except Patient.DoesNotExist as err:
        return Response({"message":"no such patient", "error": True}, status=HTTP_204_NO_CONTENT)
    except Doctor.DoesNotExist as err:
        return Response({"message":"no such doctor", "error": True}, status=HTTP_204_NO_CONTENT)
    

@csrf_exempt
@api_view(["POST",])
@permission_classes((IsAuthenticated, ))
def newMessage(request):
    user = request.user
    serialized = ChatSerializer(data=request.data)
    if serialized.is_valid():
        serialized.save()
        return Response({"message": "success"}, status=HTTP_201_CREATED)

    return Response({"message": serialized.errors, "error": True}, status=HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(["GET",])
@permission_classes((IsAuthenticated, ))
def getChat(request):
    patient = request.data["patient"]
    chat = Chat.objects.filter(patient_id=patient)
    serialized = ChatSerializer(chat, many=True)
    return Response(serialized.data, status=HTTP_200_OK)
