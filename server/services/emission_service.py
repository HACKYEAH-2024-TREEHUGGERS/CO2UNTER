from constants import EMISSIONS_PER_KM
from schemas.activities import VehicleActivities


def calculate_transport_emission(vehicle: VehicleActivities, amount: float) -> float:
    return EMISSIONS_PER_KM[vehicle] * amount
