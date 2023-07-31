export interface Config {
  casing?: "camel" | "snake" | "none";
}

interface PythonClass {
  className: string;
  content: string;
}

const normalizeClassName = (className: string): string => {
  const parts = className
    .split("_")
    .map((part) => part.split("-"))
    .flat();
  return parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
};

const getTemplate = (): string => `\
from typing import TypedDict, Union, Any

`;

const parseJson = (jsonAsString: string): Record<string, unknown> => {
  try {
    return JSON.parse(jsonAsString);
  } catch (e) {
    throw new Error("Failed to parse JSON");
  }
};

const normalizePropertyName = (
  propertyName: string,
  config: Config,
): string => {
  if (config.casing === "none") return propertyName;
  if (config.casing === "snake") {
    return propertyName
      .split("-")
      .map((n) => n.split(/(?=[A-Z])/))
      .flat()
      .join("_")
      .toLowerCase();
  }

  return propertyName
    .split("-")
    .map((n) => n.split("_"))
    .flat()
    .map((n, i) => (i === 0 ? n : n.charAt(0).toUpperCase() + n.slice(1)))
    .join("");
};

const generateClass = (
  json: Record<string, unknown>,
  className: string,
  classes: PythonClass[],
  config: Config,
): PythonClass[] => {
  let mClasses = [...classes];

  const getPyType = (
    key: string,
    value: unknown,
    className: string,
  ): string => {
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
      mClasses = generateClass(value as any, innerClassName, mClasses, config);
      return innerClassName;
    }
    console.error(`Unknown type ${type}`);
    return "Any";
  };

  className = normalizeClassName(className);
  const pythonClass: PythonClass = {
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
      const name = normalizePropertyName(key, config);
      pythonClass.content += `  ${name}: ${pyTyoe}\n`;
    }
  }

  return mClasses;
};

export const generate = (
  jsonAsString: string,
  className: string,
  config: Config = {},
) => {
  const json = parseJson(jsonAsString);
  className = normalizeClassName(className);

  const classes = generateClass(json, className, [], config);

  return (
    getTemplate() +
    classes
      .reverse()
      .map((c) => c.content)
      .join("\n")
  );
};
