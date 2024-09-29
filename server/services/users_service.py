import datetime

from fastapi import HTTPException
from pymongo.database import Database

from schemas.users import CreateUser


def get_dashboard(db: Database, device_id: str, timeframe: str):
    now = datetime.datetime.utcnow()
    if timeframe == "day":
        start_time = now - datetime.timedelta(days=1)
    elif timeframe == "week":
        start_time = now - datetime.timedelta(weeks=1)
    elif timeframe == "month":
        start_time = now - datetime.timedelta(days=30)
    else:
        start_time = now - datetime.timedelta(days=365)

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

    return user[0]


def create_new_user(db: Database, user_in: CreateUser):
    db.users.insert_one(user_in.model_dump())
