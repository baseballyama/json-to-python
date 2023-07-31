from typing import TypedDict, Union, Any

class SnakeCase1Address(TypedDict):
  street: str
  city: str
  postal_code: str

class SnakeCase1(TypedDict):
  name: str
  age: int
  pets: list[str]
  address: SnakeCase1Address
  is_employed: bool
  vehicles: None
