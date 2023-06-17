import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Divider from "@mui/material/Divider";
import { argChildren, argProps } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Divider> = {
  title: "DATA DISPLAY/Divider",
  component: Divider,
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
      options: ["fullWidth", "inset", "middle"],
      description: "The variant to use.",
      defaultValue: "fullWidth",
    },
    textAlign: {
      control: { type: "select" },
      options: ["center", "left", "right"],
      description: "The text alignment.",
      defaultValue: "center",
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
      description: "The component orientation.",
    },
    light: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "If `true`, the divider will have a lighter color.",
    },
    flexItem: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "If `true`, a vertical divider will have the correct height when used in flex container. (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)",
    },
    absolute: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Absolutely position the element.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dividers: Story = {
  args: {
    children: "Center",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Divider from "@mui/material/Divider";

${code}
        `,
      },
    },
  },
};
