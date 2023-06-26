import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Pagination from "@mui/material/Pagination";
import { argChildren, argProps } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Pagination> = {
  title: "NAVIGATION/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component:
          "The value must be chosen from a predefined set of allowed values.",
      },
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["outlined", "text"],
      description: "The variant to use.",
      defaultValue: "text",
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "standard"],
      description:
        "The active color. It supports both default and custom theme colors, which can be added as shown in the `palette customization guide`.",
      defaultValue: "standard",
    },
    count: {
      control: { type: "number" },
      defaultValue: 1,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  args: {
    variant: "text",
    count: 10,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Pagination from "@mui/material/Pagination";

${code}
        `,
      },
    },
  },
};
