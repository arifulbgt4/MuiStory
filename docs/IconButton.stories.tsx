import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof IconButton> = {
  title: "INPUTS/Icon Buttons",
  component: IconButton,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Button",
          description:
            "Icon buttons are commonly found in app bars and toolbars.Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.",
          components: [
            {
              component: "IconButton",
              selector: "MuiIconButton",
              props: "https://mui.com/material-ui/api/icon-button/#props",
              css: "https://mui.com/material-ui/api/icon-button/#css",
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
  render: (args) => {
    return (
      <IconButton {...args}>
        <DeleteIcon />
      </IconButton>
    );
  },
  args: {
    color: "primary",
    size: "medium",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Basic() {
  return (
    <IconButton ${argProps(storyContext)}>
      <DeleteIcon />
    </IconButton>
  );
}
        `,
      },
    },
  },
};
