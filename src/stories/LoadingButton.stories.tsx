import type { Meta, StoryObj } from "@storybook/react";
import LoadingButton from "@mui/lab/LoadingButton";
import { ArrowBack, Send } from "@mui/icons-material";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LoadingButton> = {
  title: "INPUTS/Loding Buttons",
  component: LoadingButton,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" },
    },
    loadingIndicator: {
      control: { type: "string" },
    },
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
    loadingPosition: {
      control: { type: "select" },
      options: ["end", "start", "center"],
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
type Story = StoryObj<typeof LoadingButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LoadingButtons: Story = {
  args: {
    loading: true,
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
  },
};

export const LoadingLeftIconButtons: Story = {
  args: {
    loading: true,
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
    startIcon: <ArrowBack />,
  },
};
export const LoadingRightIconButtons: Story = {
  args: {
    loading: true,
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
    endIcon: <Send />,
  },
};
export const LoadingPositionLeftIconButtons: Story = {
  args: {
    loadingPosition: "start",
    loading: true,
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
    startIcon: <ArrowBack />,
  },
};
export const LoadingPositionRightIconButtons: Story = {
  args: {
    loadingPosition: "end",
    loading: true,
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
    endIcon: <Send />,
  },
};
export const LoadingIndicatorButtons: Story = {
  args: {
    loading: true,
    loadingIndicator: "Loading…",
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
  },
};
