from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import transaction

from .models import Patient, Chat, Scan

@receiver(post_save, sender=Patient)
def addNotificationForNewPatient(sender, instance, created, **kwargs):
    if created:
        notif = Chat()
        notif.isNotification = True
        notif.message = "New patient {0} added".format(instance.name)
        notif.sender = "hospital"
        notif.patient = instance
        notif.save()

@receiver(post_save, sender=Scan)
def addNotificationForNewReport(sender, instance, created, **kwargs):
    if not created:
        if instance.isReported:
            notif = Chat()
            notif.isNotification = True
            notif.message = "New report added"
            notif.sender = "doctor"
            notif.patient = instance.patient
            notif.save()
    

