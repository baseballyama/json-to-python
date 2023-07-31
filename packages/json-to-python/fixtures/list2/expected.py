from typing import TypedDict, Union, Any

class List2Employees(TypedDict):
  name: str
  age: int
  city: str

class List2(TypedDict):
  employees: list[List2Employees]
