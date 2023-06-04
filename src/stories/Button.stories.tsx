import type { Meta, StoryObj } from "@storybook/react";
import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send";
import ArrowBack from "@mui/icons-material/ArrowBack";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "INPUTS/Buttons",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
        "inherit",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    disableElevation: {
      control: { type: "boolean" },
    },
    disableFocusRipple: {
      control: { type: "boolean" },
    },
    disableRipple: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Buttons: Story = {
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
  },
};

export const LeftIconButtons: Story = {
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
    startIcon: <ArrowBack />,
  },
};
export const RightIconButtons: Story = {
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
    endIcon: <Send />,
  },
};
