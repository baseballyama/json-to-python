from typing import TypedDict, Union, Any

class CamelCaseAddress(TypedDict):
  street: str
  city: str
  postalCode: str

class CamelCase(TypedDict):
  name: str
  age: int
  pets: list[str]
  address: CamelCaseAddress
  isEmployed: bool
  vehicles: None
