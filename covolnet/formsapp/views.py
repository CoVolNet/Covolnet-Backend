from django.shortcuts import render

from rest_framework import viewsets, status
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from .models import VolunteerModel
from .serializers import VolunteerSerializer


class VolunteerView(APIView):

    parser_classes = [JSONParser, ]

    def get(self, request, format=None):
        queryset = VolunteerModel.objects.all()
        serializer = VolunteerSerializer(queryset, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = VolunteerSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
