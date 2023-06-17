import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { argProps, argChildren } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Fab> = {
  title: "INPUTS/Floating Action Button",
  component: Fab,
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
      options: ["circular", "extended"],
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
    disableFocusRipple: {
      control: { type: "boolean" },
    },
    disableRipple: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fab>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Fabs: Story = {
  args: {
    color: "primary",
    size: "medium",
    children: <AddIcon />,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
<Fab
  ${argProps(storyContext)}
>
  ${argChildren(storyContext)}
</Fab>
        `,
      },
    },
  },
};
