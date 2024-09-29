import datetime

from fastapi import HTTPException
from pymongo.database import Database

from schemas.users import CreateUser
from services.activities_service import aggregate_emissions_summary
from services.emission_service import EMISSIONS_PER_HUMAN_PER_DAY


def get_user_by_device_id(db: Database, device_id: str):
    user = db.users.find_one({"device_id": device_id}, {"_id": 0})

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return user


def get_dashboard(db: Database, device_id: str, timeframe: str):
    now = datetime.datetime.utcnow()
    if timeframe == "day":
        start_time = now - datetime.timedelta(days=1)
        multiplier = 1
    elif timeframe == "week":
        start_time = now - datetime.timedelta(weeks=1)
        multiplier = 7
    elif timeframe == "month":
        start_time = now - datetime.timedelta(days=30)
        multiplier = 30
    else:
        start_time = now - datetime.timedelta(days=365)
        multiplier = 365

    user = list(db.users.aggregate([
        {"$match": {"device_id": device_id}},
        {"$project": {
            "_id": 0,
            "activities": {
                "$filter": {
                    "input": "$activities",
                    "as": "activity",
                    "cond": {"$gte": ["$$activity.created_at", start_time]}
                }
            }
        }}
    ]))

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return {
        "summary": aggregate_emissions_summary(user[0].get("activities")),
        "comparison": {
            "poland": EMISSIONS_PER_HUMAN_PER_DAY["poland"] * multiplier,
            "eu": EMISSIONS_PER_HUMAN_PER_DAY["eu"] * multiplier
        }
    }


def create_new_user(db: Database, user_in: CreateUser):
    db.users.insert_one(user_in.model_dump())
