import { Config, generate } from "./main";
import {
  readdirSync,
  readFileSync,
  existsSync,
  statSync,
  mkdirSync,
  writeFileSync,
} from "fs";
import { join, extname, relative, dirname, basename } from "path";

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

const bulkGenerate = (jsonDir: string, outputDir: string, config: Config) => {
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

    if (!existsSync(outputDirPath))
      mkdirSync(outputDirPath, { recursive: true });
    const output = join(outputDirPath, `${className}.py`);
    writeFileSync(output, python, "utf-8");
    console.log(`Generated ${output}`);
  }
};

export { Config, generate, bulkGenerate };
