#!/usr/bin/env node

/**
 * usage: npx json-to-typeddict <json-dir> <output-dir> --casing <camel|snake|none>
 */
import {
  readdirSync,
  readFileSync,
  existsSync,
  statSync,
  mkdirSync,
  writeFileSync,
} from "fs";
import { join, extname, relative, dirname, basename } from "path";
import { generate } from "./index.mjs";

/**
 * @param {string[]} args
 * @returns {NonNullable<Parameters<typeof generate>[2]>["casing"]}
 */
const getCasing = (args) => {
  const casingIndex = args.indexOf("--casing");
  if (casingIndex === -1 || casingIndex === args.length - 1) {
    return "none";
  }
  // @ts-ignore
  return args[casingIndex + 1] ?? "none";
};

/**
 * @param {string} dir
 * @returns {string[]}
 */
const getJsonFiles = (dir) => {
  /** @type {string[]} */
  let filesToReturn = [];
  const files = readdirSync(dir);

  for (let file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      filesToReturn = filesToReturn.concat(getJsonFiles(filePath));
    } else if (stat.isFile() && extname(filePath) === ".json") {
      filesToReturn.push(filePath);
    }
  }

  return filesToReturn;
};
const args = process.argv.slice(2);

const jsonDir = args[0];
const outputDir = args[1];
const casing = getCasing(args);
/** @type {NonNullable<Parameters<typeof generate>[2]>} */
const config = casing ? { casing } : {};

if (!jsonDir || !existsSync(jsonDir)) {
  throw new Error("Please set a valid JSON directory");
}
if (!outputDir) {
  throw new Error("Please set a valid output directory");
}
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

for (const jsonFile of getJsonFiles(jsonDir)) {
  const json = readFileSync(jsonFile, "utf-8");
  const className = basename(jsonFile).split(".").slice(0, -1).join(".");
  const python = generate(json, className, config);
  const outputDirPath = join(outputDir, relative(jsonDir, dirname(jsonFile)));

  if (!existsSync(outputDirPath)) mkdirSync(outputDirPath, { recursive: true });
  const output = join(outputDirPath, `${className}.py`);
  writeFileSync(output, python, "utf-8");
  console.log(`Generated ${output}`);
}
