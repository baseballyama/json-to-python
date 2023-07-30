/**
 * @typedef {{className: string, content: string}} PythonClass
 */

/**
 * @param {string} className
 * @returns {string}
 */
const normalizeClassName = (className) => {
  const parts = className
    .split("_")
    .map((part) => part.split("-"))
    .flat();
  return parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
};

/**
 * @returns {string}
 */
const getTemplate = () => `\
from typing import TypedDict, Union, Any

`;

/**
 *
 * @param {string} jsonAsString
 * @returns {Record<string, unknown>}
 */
const parseJson = (jsonAsString) => {
  try {
    return JSON.parse(jsonAsString);
  } catch (e) {
    throw new Error("Failed to parse JSON");
  }
};

/**
 *
 * @param {Record<string, unknown>} json
 * @param {string} className
 * @param {PythonClass[]} classes
 * @returns {PythonClass[]}
 */
const generateClass = (json, className, classes) => {
  let mClasses = [...classes];

  /**
   * @param {string} key
   * @param {unknown} value
   * @param {string} className
   * @returns {string}
   */
  const getPyType = (key, value, className) => {
    const type = typeof value;
    if (value == null) {
      return "None";
    } else if (Array.isArray(value)) {
      if (value.length === 0) {
        return "list";
      } else {
        let classCount = 1;
        /** @type {string[]} */
        let types = [];
        for (const item of value) {
          const prevLength = mClasses.length;
          types.push(getPyType(key, item, className));
          const curLength = mClasses.length;
          if (curLength >= 2 && prevLength + 1 === curLength) {
            const last = mClasses[mClasses.length - 1];
            const secondLast = mClasses[mClasses.length - 2];
            if (last && secondLast) {
              if (last.content === secondLast.content) {
                mClasses.pop();
                types.pop();
              } else {
                classCount += 1;
                last.className = `${last.className}${classCount}`;
              }
            }
          }
        }
        types = Array.from(new Set(types));
        if (types.length === 1) {
          return `list[${types[0]}]`;
        } else {
          return `list[Union[${types.join(", ")}]]`;
        }
      }
    } else if (type === "string") {
      return "str";
    } else if (type === "number") {
      if (Number.isInteger(value)) {
        return "int";
      }
      return "float";
    } else if (type === "boolean") {
      return "bool";
    } else if (type === "object") {
      const innerClassName = className + normalizeClassName(key);
      mClasses = generateClass(
        /** @type {any} */ (value),
        innerClassName,
        mClasses,
      );
      return innerClassName;
    }
    console.error(`Unknown type ${type}`);
    return "Any";
  };

  className = normalizeClassName(className);
  /** @type {PythonClass} */
  const pythonClass = {
    className,
    content: `class ${className}(TypedDict):\n`,
  };
  mClasses.push(pythonClass);
  const keys = Object.keys(json);
  if (keys.length === 0) {
    pythonClass.content += "  pass\n";
  } else {
    for (const key of keys) {
      const value = json[key];
      const pyTyoe = getPyType(key, value, className);
      pythonClass.content += `  ${key}: ${pyTyoe}\n`;
    }
  }

  return mClasses;
};

/**
 * @param {string} jsonAsString
 * @param {string} className
 * @param {Config} config
 */
export const generate = (jsonAsString, className, config = {}) => {
  const json = parseJson(jsonAsString);
  className = normalizeClassName(className);

  const classes = generateClass(json, className, []);

  return (
    getTemplate() +
    classes
      .reverse()
      .map((c) => c.content)
      .join("\n")
  );
};
