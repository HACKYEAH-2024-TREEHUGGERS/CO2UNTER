from fastapi import HTTPException
from pymongo.synchronous.database import Database

from schemas.activities import CreateActivity


def insert_activity(db: Database, device_id: str, activity_in: CreateActivity):
    emission = activity_in.amount * 2
    payload = {**activity_in.model_dump(), "emission": emission}
    result = db.users.update_one(
        {"device_id": device_id},
        {"$push": {"activities": payload}}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="User not found")

    return payload
