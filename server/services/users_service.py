from fastapi import HTTPException
from pymongo.database import Database

from schemas.users import CreateUser


def get_user_by_device_id(db: Database, device_id: str):
    user = db.users.find_one({"device_id": device_id}, {"_id": 0})

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return user


def create_new_user(db: Database, user_in: CreateUser):
    db.users.insert_one(user_in.model_dump())
