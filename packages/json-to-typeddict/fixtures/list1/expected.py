from typing import TypedDict, Union, Any

class List1(TypedDict):
  name: str
  age: int
  loggedIn: bool
  tags: list[str]
