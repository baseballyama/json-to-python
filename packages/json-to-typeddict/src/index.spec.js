import { expect, describe, it } from "vitest";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { generate } from "./index.mjs";

/**
 * @param {string} pathToDir
 * @returns {string[]}
 */
const getDirectories = (pathToDir) => {
  return readdirSync(pathToDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => join(pathToDir, dirent.name));
};

/**
 * @param {string} pathToDir
 * @returns {string[]}
 */
const getFiles = (pathToDir) => {
  return readdirSync(pathToDir, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => join(pathToDir, dirent.name));
};

/**
 * @param {string} str
 * @returns {string}
 */
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

describe("fixture test", () => {
  for (const dir of getDirectories("./fixtures")) {
    it(dir, () => {
      const dirName = dir.split("/").pop() ?? "";
      const files = getFiles(dir);
      const inputPath = files.find((file) => file.endsWith("input.json")) ?? "";
      const expectedPath =
        files.find((file) => file.endsWith("expected.py")) ?? "";

      expect(inputPath).toBeTruthy();
      expect(expectedPath).toBeTruthy();

      const input = readFileSync(inputPath, "utf-8");
      const expected = readFileSync(expectedPath, "utf-8");
      const actual = generate(input, capitalize(dirName));
      writeFileSync(`./fixtures/${dirName}/actual.py`, actual);
      expect(actual).toBe(expected);
    });
  }
});
