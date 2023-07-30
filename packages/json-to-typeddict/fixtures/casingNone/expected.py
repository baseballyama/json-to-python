from typing import TypedDict, Union, Any

class CasingNoneAddress(TypedDict):
  street: str
  city: str
  postalCode: str

class CasingNone(TypedDict):
  name: str
  age: int
  pets: list[str]
  address: CasingNoneAddress
  is_employed: bool
  vehicles: None
