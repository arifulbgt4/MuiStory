import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Chip from "@mui/material/Chip";
import { argChildren, argProps } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Chip> = {
  title: "DATA DISPLAY/Chip",
  component: Chip,
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
      options: ["filled", "outlined"],
      description: "The variant to use.",
      defaultValue: "filled",
    },
    size: {
      control: { type: "select" },
      options: ["medium", "small"],
      description: "The size of the component.",
      defaultValue: "medium",
    },
    color: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
      description:
        "The color of the component. It supports both default and custom theme colors, which can be added as shown in the `palette customization guide`.",
      defaultValue: "default",
    },
    label: {
      control: { type: "string" },
      description: "The content of the component.",
    },
    clickable: {
      control: { type: "boolean" },
      description:
        "If `true`, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined. If `false`, the chip will not appear clickable, even if onClick prop is defined. This can be used, for example, along with the component prop to indicate an anchor Chip is clickable. Note: this controls the UI and does not affect the onClick event.",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "If `true`, the component is disabled.",
    },
    skipFocusWhenDisabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "If `true`, allows the disabled chip to escape focus. If `false`, allows the disabled chip to receive focus.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Chips: Story = {
  args: {
    label: "Chip Filled",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Chip from "@mui/material/Chip";

${code}
        `,
      },
    },
  },
};
