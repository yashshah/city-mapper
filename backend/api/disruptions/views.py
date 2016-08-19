from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.disruptions.models import Disruption
from api.disruptions.serializers import DisruptionSerializer


@api_view(['GET', 'POST'])
def disruption_list(request, format=None):
    """
    List all disruptions, or create a new Disruption.
    """
    if request.method == 'GET':
        disruptions = Disruption.objects.all()
        serializer = DisruptionSerializer(disruptions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DisruptionSerializer(data=request.data )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def disruption_detail(request, pk, format=None):
    """
    Get, udpate, or delete a specific disruption
    """
    try:
        disruption = Disruption.objects.get(pk=pk)
    except Disruption.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DisruptionSerializer(disruption)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DisruptionSerializer(disruption, data=request.data )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(
                serilizer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        disruption.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)