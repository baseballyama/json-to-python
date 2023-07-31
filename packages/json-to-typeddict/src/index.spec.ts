import { expect, describe, it } from "vitest";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { generate } from "./index";

const getDirectories = (pathToDir: string): string[] => {
  return readdirSync(pathToDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => join(pathToDir, dirent.name));
};

const getFiles = (pathToDir: string): string[] => {
  return readdirSync(pathToDir, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => join(pathToDir, dirent.name));
};

const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

describe("fixture test", () => {
  for (const dir of getDirectories("./fixtures")) {
    it(dir, () => {
      const dirName = dir.split("/").pop() ?? "";
      const files = getFiles(dir);
      const configPath =
        files.find((file) => file.endsWith("config.json")) ?? "";
      const inputPath = files.find((file) => file.endsWith("input.json")) ?? "";
      const expectedPath =
        files.find((file) => file.endsWith("expected.py")) ?? "";

      expect(inputPath).toBeTruthy();
      expect(expectedPath).toBeTruthy();

      const consig = configPath
        ? JSON.parse(readFileSync(configPath, "utf-8"))
        : {};
      const input = readFileSync(inputPath, "utf-8");
      const expected = readFileSync(expectedPath, "utf-8");
      const actual = generate(input, capitalize(dirName), consig);
      writeFileSync(`./fixtures/${dirName}/actual.py`, actual);
      expect(actual).toBe(expected);
    });
  }
});
