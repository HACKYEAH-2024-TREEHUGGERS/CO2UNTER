from fastapi import HTTPException
from pymongo.synchronous.database import Database

from schemas.activities import CreateActivity, VehicleActivities
from services.emission_service import calculate_transport_emission


def insert_activity(db: Database, device_id: str, activity_in: CreateActivity):
    if activity_in.activity in [a.value for a in VehicleActivities]:
        emission = calculate_transport_emission(activity_in.activity, activity_in.amount)
    else:
        emission = activity_in.amount * 2

    payload = {**activity_in.model_dump(), "emission": emission}
    result = db.users.update_one(
        {"device_id": device_id},
        {"$push": {"activities": payload}}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="User not found")

    return payload
