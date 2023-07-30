from typing import TypedDict, Union, Any

class List3Data(TypedDict):
  age: int

class List3(TypedDict):
  data: list[Union[int, str, bool, None, List3Data]]
