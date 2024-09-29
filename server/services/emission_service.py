from schemas.activities import VehicleActivities

EMISSIONS_PER_KM = {
    VehicleActivities.MOVE_BY_CAR: 0.160,
    VehicleActivities.MOVE_BY_ELECTRIC_CAR: 0.050,
    VehicleActivities.MOVE_BY_MOTORBIKE: 0.095,
    VehicleActivities.MOVE_BY_PUBLIC_TRANSPORT: 0.065,
    VehicleActivities.MOVE_BY_BIKE: 0.0,
    VehicleActivities.MOVE_BY_SCOOTER: 0.035,
    VehicleActivities.MOVE_BY_WALK: 0.0
}


def calculate_transport_emission(vehicle: VehicleActivities, amount: float) -> float:
    return EMISSIONS_PER_KM[vehicle] * amount
