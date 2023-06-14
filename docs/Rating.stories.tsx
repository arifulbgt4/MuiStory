import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Rating from "@mui/material/Rating";
import { argProps, argChildren } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Rating> = {
  title: "INPUTS/Rating",
  component: Rating,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: "Another description, overriding the comments",
      },
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Ratings: Story = {
  args: {
    defaultValue: 3,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Rating from "@mui/material/Rating";

${code}
        `,
      },
    },
  },
};
