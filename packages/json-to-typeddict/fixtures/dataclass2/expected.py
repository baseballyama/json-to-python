from dataclasses import dataclass
from typing import Union, Any

@dataclass
class Dataclass2Address:
  street: str
  city: str
  postalCode: str

@dataclass
class Dataclass2:
  name: str
  age: int
  pets: list[str]
  address: Dataclass2Address
  isEmployed: bool
  vehicles: None
