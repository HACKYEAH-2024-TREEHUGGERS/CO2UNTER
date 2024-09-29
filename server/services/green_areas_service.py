import math
import requests
from pymongo.synchronous.database import Database


def fetch_green_area(db: Database, district_id: int) -> dict:
    district = db.districts.find_one({"id_district": district_id})
    if district:
        return district

    API_URL = 'https://krakow.lifeurbangreen.eu/api/krakow/ecosystem_data_district_A_V1?filter={"where":{"id_district":%s}}' % district_id
    res = requests.get(API_URL)

    data = res.json()
    if not data:
        return {}

    district = data[0]
    db.districts.insert_one(district)

    return district


def get_jordan_percentage(db: Database, emission: float) -> float:
    jordan_id = 5
    jordan_data = fetch_green_area(db, jordan_id)

    number_of_plants = jordan_data.get("number_of_plants")
    co_absorbed = jordan_data.get("co_absorbed")
    tree_efficiency = co_absorbed / number_of_plants

    trees_needed = math.ceil(emission / tree_efficiency)
    percentage_of_jordan = trees_needed / number_of_plants * 100

    return percentage_of_jordan
