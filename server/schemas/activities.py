from pydantic import BaseModel, Field
from enum import Enum
from typing import Optional
from datetime import datetime


class VehicleActivities(str, Enum):
    MOVE_BY_CAR = 'move_by_car'
    MOVE_BY_ELECTRIC_CAR = 'move_by_electric_car'
    MOVE_BY_MOTORBIKE = 'move_by_motorbike'
    MOVE_BY_PUBLIC_TRANSPORT = 'move_by_public_transport'
    MOVE_BY_BIKE = 'move_by_bike'
    MOVE_BY_SCOOTER = 'move_by_scooter'
    MOVE_BY_WALK = 'move_by_walk'


class MediaActivities(str, Enum):
    CONSUMPTION_ENERGY = 'consumption_energy'
    GARBAGE_WASTE = 'garbage_waste'


class ActivityName(str, Enum):
    MOVE_BY_CAR = VehicleActivities.MOVE_BY_CAR.value
    MOVE_BY_ELECTRIC_CAR = VehicleActivities.MOVE_BY_ELECTRIC_CAR.value
    MOVE_BY_MOTORBIKE = VehicleActivities.MOVE_BY_MOTORBIKE.value
    MOVE_BY_PUBLIC_TRANSPORT = VehicleActivities.MOVE_BY_PUBLIC_TRANSPORT.value
    MOVE_BY_BIKE = VehicleActivities.MOVE_BY_BIKE.value
    MOVE_BY_SCOOTER = VehicleActivities.MOVE_BY_SCOOTER.value
    MOVE_BY_WALK = VehicleActivities.MOVE_BY_WALK.value
    CONSUMPTION_ENERGY = MediaActivities.CONSUMPTION_ENERGY.value
    GARBAGE_WASTE = MediaActivities.GARBAGE_WASTE.value


class ActivityType(str, Enum):
    MEDIA = 'media'
    TRANSPORT = 'transport'


class CreateActivity(BaseModel):
    activity: ActivityName
    type: ActivityType
    amount: float
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
