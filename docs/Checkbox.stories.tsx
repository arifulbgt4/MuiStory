import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  title: "INPUTS/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Checkbox",
          description:
            "Checkboxes allow the user to select one or more items from a set.",
          components: [
            {
              component: "Checkbox",
              selector: "MuiCheckbox",
              props: "https://mui.com/material-ui/api/checkbox/#props",
              css: "https://mui.com/material-ui/api/checkbox/#css",
            },
          ],
        }),
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
  render: (args) => {
    return <Checkbox {...args} />;
  },
  args: {
    color: "primary",
    size: "medium",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Checkbox from "@mui/material/Checkbox";

export default function Basic() {
  return <Checkbox ${argProps(storyContext)} />
}
        `,
      },
    },
  },
};

export const IconCheckbox: Story = {
  render: (args) => {
    return <Checkbox {...args} />;
  },
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

export default function Basic() {
     return <Checkbox ${argProps(storyContext)} />
  }
        `,
      },
    },
  },
};
