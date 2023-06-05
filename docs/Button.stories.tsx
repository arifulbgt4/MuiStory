import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { argProps, argChildren } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "INPUTS/Buttons",
  component: Button,
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
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Button from "@mui/material/Button";

${code}
        `,
      },
    },
  },
};

export const LeftIconButtons: Story = {
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
    startIcon: <ArrowBackIcon />,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

<Button 
  ${argProps(storyContext)}
>
  ${argChildren(storyContext)}
</Button>
        `,
      },
    },
  },
};
export const RightIconButtons: Story = {
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
    endIcon: <SendIcon />,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

<Button 
  ${argProps(storyContext)}
>
  ${argChildren(storyContext)}
</Button>
        `,
      },
    },
  },
};
