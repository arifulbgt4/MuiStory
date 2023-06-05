import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { argProps } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  title: "INPUTS/Checkbox",
  component: Checkbox,
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
    checked: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    value: {
      control: { type: "string" },
    },
    id: {
      control: { type: "string" },
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    defaultChecked: {
      control: { type: "boolean" },
    },
    disableRipple: {
      control: { type: "boolean" },
    },
    indeterminate: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Checkboxs: Story = {
  args: {
    color: "primary",
    size: "medium",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Checkbox from "@mui/material/Checkbox";

${code}
        `,
      },
    },
  },
};

export const IconCheckbox: Story = {
  args: {
    color: "primary",
    size: "medium",
    icon: <BookmarkBorderOutlinedIcon />,
    checkedIcon: <BookmarkIcon />,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";

<Checkbox
  ${argProps(storyContext)}
/>
        `,
      },
    },
  },
};
