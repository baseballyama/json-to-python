from typing import TypedDict, Union, Any

class Map1AdditionalInfo(TypedDict):
  favoriteFood: str
  favoriteMovie: str

class Map1(TypedDict):
  name: str
  age: int
  loggedIn: bool
  additionalInfo: Map1AdditionalInfo
