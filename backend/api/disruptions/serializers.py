from rest_framework import serializers
from api.disruptions.models import Disruption


class DisruptionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Disruption
        fields = ('id', 'line', 'toStation', 'fromStation', 'description')