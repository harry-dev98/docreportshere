from django.db.models import fields
from rest_framework import serializers

from django.contrib.auth import get_user_model

User = get_user_model()

from db.models import *
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    
    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
    
    class Meta:
        model = User
        fields = ('id', 'username', 'password')


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        exclude = ( 'user', )


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
        

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = '__all__'

class ScansSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scan
        fields = '__all__'


class ChatSerializer(serializers.ModelSerializer):
        
    class Meta:
        model = Chat
        fields = '__all__'
