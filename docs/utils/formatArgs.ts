import type { StoryContext } from "@storybook/react";
import { ReactElement } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

export const argProps = (context: StoryContext): string => {
  const argsKey = Object.keys(context.args);
  const argsKeySolid = argsKey.filter(
    (d) => d !== "children" && !d.includes("Icon") && !d.includes("icon")
  );
  const argsIconKey = argsKey.filter(
    (d) => d.includes("Icon") || d.includes("icon")
  );
  const str: string[] = argsKeySolid?.map(
    (d) =>
      `${d}=${
        context.args[d] === true || context.args[d] === false
          ? `{${context.args[d]}}`
          : `"${context.args[d]}"`
      }`
  );
  const strIcon: string[] = argsIconKey?.map(
    (d) => `${d}={${reactElementToJSXString(context.args[d] as ReactElement)}}`
  );

  return strIcon.concat(str).join(`
  `);
};

export const argChildren = (context: StoryContext): string => {
  return reactElementToJSXString(context.args.children as ReactElement);
};
