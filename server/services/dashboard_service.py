import math
import datetime

from fastapi import HTTPException
from pymongo.synchronous.database import Database

from constants import EMISSIONS_PER_HUMAN_PER_DAY, EMISSIONS_PER_TREE_PER_KG
from services.activities_service import aggregate_emissions_summary
from services.green_areas_service import get_jordan_percentage


def get_dashboard(db: Database, device_id: str, timeframe: str):
    now = datetime.datetime.utcnow()
    if timeframe == "day":
        start_time = now - datetime.timedelta(days=1)
        day_multiplier = 1
    elif timeframe == "week":
        start_time = now - datetime.timedelta(weeks=1)
        day_multiplier = 7
    elif timeframe == "month":
        start_time = now - datetime.timedelta(days=30)
        day_multiplier = 30
    else:
        start_time = now - datetime.timedelta(days=365)
        day_multiplier = 365

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

    total_emissions = aggregate_emissions_summary(user[0].get("activities"))
    return {
        "summary": total_emissions,
        "country_emission_per_timeline": {
            country: emissions * day_multiplier
            for country, emissions in EMISSIONS_PER_HUMAN_PER_DAY.items()
        },
        "trees": {
            tree: math.ceil(tree_multiplier * total_emissions)
            for tree, tree_multiplier in EMISSIONS_PER_TREE_PER_KG.items()
        },
        "jordan_trees_percentage": get_jordan_percentage(db, total_emissions)
    }
