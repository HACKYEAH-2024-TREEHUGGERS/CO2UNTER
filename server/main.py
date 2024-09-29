import os
from typing import Generator

import uvicorn

from fastapi import FastAPI, Depends
from pymongo import MongoClient
from services import users_service, activities_service
from schemas.users import CreateUser
from schemas.activities import CreateActivity


app = FastAPI(root_path="/api")

client = MongoClient(os.environ.get("MONGODB_URL"))
db = client.database
db.users.create_index("device_id", unique=True)


def get_db() -> Generator:
    try:
        yield db
    finally:
        pass


@app.get("/users/{device_id}", tags=["users"])
def get_user(device_id: str, db=Depends(get_db), timeframe: str = "week"):
    return users_service.get_dashboard(db, device_id, timeframe)


@app.post("/users/", tags=["users"], status_code=201)
def create_user(user_in: CreateUser):
    return users_service.create_new_user(db, user_in)


@app.post("/users/{device_id}/activities", tags=["activities"], status_code=201)
def create_activity(device_id: str, activity_in: CreateActivity):
    return activities_service.insert_activity(db, device_id, activity_in)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
