from pydantic import BaseModel, Field
from enum import Enum
from typing import Optional
from datetime import datetime


class ActivityName(str, Enum):
    MOVE_BY_CAR = 'move_by_car'
    MOVE_BY_ELECTRIC_CAR = 'move_by_electric_car'
    MOVE_BY_MOTORBIKE = 'move_by_motorbike'
    MOVE_BY_PUBLIC_TRANSPORT = 'move_by_public_transport'
    MOVE_BY_BIKE = 'move_by_bike'
    MOVE_BY_SCOOTER = 'move_by_scooter'
    MOVE_BY_WALK = 'move_by_walk'
    CONSUMPTION_ENERGY = 'consumption_energy'
    GARBAGE_WASTE = 'garbage_waste'


class ActivityType(str, Enum):
    MEDIA = 'media'
    TRANSPORT = 'transport'


class CreateActivity(BaseModel):
    activity: ActivityName
    type: ActivityType
    amount: float
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
