import type { StoryContext } from "@storybook/react";

export const argProps = (context: StoryContext, args: string[]): string => {
  const str: string[] = args?.map((d) => `${d}="${context.args[d]}"`);
  return str.join(`
  `);
};
