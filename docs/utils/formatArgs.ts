import type { StoryContext } from "@storybook/react";
import { ReactElement } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

export const argProps = (
  context: StoryContext,
  argsOmit: string[] = []
): string => {
  let argsKey = Object.keys(context.args);
  argsKey = argsKey.filter((value) => {
    return !argsOmit.includes(value);
  });
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

export const overViewRef = ({
  component,
  selector,
  props,
  css,
}: {
  component: string;
  selector?: string;
  props: string;
  css?: string;
}): string => {
  return `<hr> 
  \`${component}\` ${
    selector && `- Style selector \`${selector}\``
  } ∞ <a href="${props}" target="_blank">props</a>  ∞ ${
    css && `<a href="${css}" target="_blank">css</a>`
  } `;
};
