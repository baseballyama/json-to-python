#!/usr/bin/env node

/**
 * usage: npx json-to-typeddict <json-dir> <output-dir> --casing <camel|snake|none> --generate <typeddict|dataclass>
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
import { generate, type Config } from "./index";

type Casing = NonNullable<Config["casing"]>;
type Generate = NonNullable<Config["generate"]>;

const getCasing = (args: string[]): Casing => {
  const casingIndex = args.indexOf("--casing");
  if (casingIndex === -1 || casingIndex === args.length - 1) {
    return "none";
  }

  return (args[casingIndex + 1] ?? "none") as Casing;
};

const getGenerate = (args: string[]): Generate => {
  const generateIndex = args.indexOf("--generate");
  if (generateIndex === -1 || generateIndex === args.length - 1) {
    return "typeddict";
  }

  return (args[generateIndex + 1] ?? "typeddict") as Generate;
};

const getJsonFiles = (dir: string): string[] => {
  let filesToReturn: string[] = [];
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
const casingConfig = getCasing(args);
const generateConfig = getGenerate(args);
const config: Config = { casing: casingConfig, generate: generateConfig };

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
