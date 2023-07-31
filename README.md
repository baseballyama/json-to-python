# json-to-python

[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://github.com/baseballyama/json-to-python/workflows/CI/badge.svg?branch=main)](https://github.com/baseballyama/json-to-python/actions?query=workflow:ci)
[![Coverage Status](https://coveralls.io/repos/github/baseballyama/json-to-python/badge.svg?branch=main)](https://coveralls.io/github/baseballyama/json-to-python?branch=main)

Simple utility to convert JSON to Python TypedDict or dataclass.

## Playground

Try it out: [json-to-python Playground](https://baseballyama.github.io/json-to-python/)

## Motivation

As an engineer who appreciates types and works extensively with Python, especially in the realm of AI development, I often encounter the need to communicate with external APIs, like calling a vector database server's API. In cases where an official SDK is not provided, I have to handle the API calls manually. I strongly prefer using types for requests and responses, and I found myself needing an easy way to convert JSON to TypedDict. Not finding a suitable solution, I decided to implement this utility myself.

## Usage

This library can be executed in a browser, through the CLI, or used as a library.

### Browser Execution

To execute in a browser, please use the [json-to-python Playground](https://baseballyama.github.io/json-to-python/).

### CLI

To execute via CLI, use the following command:

```sh
npx json-to-python <json-dir> <output-dir>
npx json-to-python <json-dir> <output-dir> --casing <camel|snake|none> --generate <typeddict|dataclass>
```

### Library

To use this repository as a library, first, install this repository:

```sh
npm install json-to-python
```

Single JSON Conversion

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

Folder Conversion

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

## Changelog

Please see [./packages/json-to-python/CHANGELOG.md](./packages/json-to-python/CHANGELOG.md)

## Contributing

If you find a bug or have a new feature request, please feel free to open an issue. Pull requests are also welcome.
