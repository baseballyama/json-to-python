[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://github.com/baseballyama/json-to-python/workflows/CI/badge.svg?branch=main)](https://github.com/baseballyama/json-to-python/actions?query=workflow:ci)
[![Coverage Status](https://coveralls.io/repos/github/baseballyama/json-to-python/badge.svg?branch=main)](https://coveralls.io/github/baseballyama/json-to-python?branch=main)

# json-to-python

Simple utility to convert JSON to Python TypedDict or dataclass.

# Playground

https://baseballyama.github.io/json-to-python/

# Motivation

I am an engineer who likes types, and with the recent AI boom, I have been working with Python more and more.
When developing functions using AI, there are opportunities to communicate with external APIs, such as calling the API of a vector database server.
If the official SDK is not provided, we will need to execute the API yourself. I wanted to use types this request and response.
In other words, I want to convert JSON to TypedDict, but I could not find an easy way to achieve this. So I decided to implement this myself.

# Usage

This library supports browser execution and CLI execution and library mode.

**Browser Execution**

To execute in a browser, please execute from the [Playground](https://baseballyama.github.io/json-to-python/).

**CLI**

To execute via CLI, use the following command.

```sh
npx json-to-python <json-dir> <output-dir>
npx json-to-python <json-dir> <output-dir> --casing <camel|snake|none> --generate <typeddict|dataclass>
```

**Library**

To use this repository as a library, at first, please install this repository.

```sh
npm install json-to-python
```

Then, for converting single JSON, please use the library like below.

```js
import { generate } from "json-to-python/browser";

const jsonString = JSON.stringify({ name: "Mr X", age: 30, city: "New York" });
const className = "Main";
const config = {
  casing: "camel",
  generate: "typeddict",
};
const python = generate(jsonString, className, config);
```

For converting a folder, please use the library like below.

```js
import { bulkGenerate } from "json-to-python";

const config = {
  casing: "camel",
  generate: "typeddict",
};
const python = bulkGenerate(
  "./path_to_input_dir",
  "./path_to_output_dir",
  config
);
```

# Changelog

Please see [./packages/json-to-python/CHANGELOG.md](./packages/json-to-python/CHANGELOG.md)

# Contributing

If you find a bug or new feature request, please feel free to open an issue. PR is also welcome.
