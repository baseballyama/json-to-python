from typing import TypedDict, Union, Any

class Mix1Address(TypedDict):
  street: str
  city: str
  postalCode: str

class Mix1(TypedDict):
  name: str
  age: int
  pets: list[str]
  address: Mix1Address
  isEmployed: bool
  vehicles: None
