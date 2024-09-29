from pydantic import BaseModel


class CreateUser(BaseModel):
    name: str
    device_id: str
