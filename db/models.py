from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Doctor(models.Model):
    name = models.CharField(max_length=30)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='doctorData')
    domain = models.CharField(max_length=200, null=True, blank=True)
    isApproved = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Hospital(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="hospitalData")

    def __str__(self):
        return self.name


class Patient(models.Model):
    name = models.CharField(max_length=20)
    age = models.IntegerField()
    gender = models.CharField(max_length=6)
    cause = models.CharField(max_length=200)
    isAssigned = models.BooleanField(default=False)
    doctor = models.ForeignKey(Doctor, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name


def uploadImg(instance, filename):
    # file will be uploaded to MEDIA_ROOT/scan_<str:pateint.name>/<str:filename>
    return 'scan_{0}/{1}'.format(instance.patient.name, filename)

class Scan(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='scans')
    date = models.CharField(max_length=12)
    src = models.FileField(upload_to=uploadImg)
    isReported = models.BooleanField(default=False)
    report = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.patient.name + "_scan_"+str(self.id)


class Chat(models.Model):
    message = models.TextField()
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    sender = models.CharField(max_length=10, null=True, blank=True)
    timestamp = models.DateTimeField(auto_now=True)
    isNotification = models.BooleanField(default=False)

    def __str__(self):
        if self.isNotification:
            return "notfication_from_"+self.sender
        else:
            return "msg_from_"+self.sender