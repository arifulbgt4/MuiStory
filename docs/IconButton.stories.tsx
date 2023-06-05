import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { argProps, argChildren } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof IconButton> = {
  title: "INPUTS/Icon Buttons",
  component: IconButton,
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
    disableFocusRipple: {
      control: { type: "boolean" },
    },
    disableRipple: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const IconButtons: Story = {
  args: {
    color: "primary",
    size: "medium",
    children: <DeleteIcon />,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

<IconButton
  ${argProps(storyContext)}
>
  ${argChildren(storyContext)}
</IconButton>
        `,
      },
    },
  },
};
