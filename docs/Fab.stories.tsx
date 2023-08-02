import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Fab> = {
  title: "INPUTS/Floating Action Button",
  component: Fab,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Fab",
          description:
            "A Floating Action Button (FAB) performs the primary, or most common, action on a screen.",
          components: [
            {
              component: "Fab",
              selector: "MuiFab",
              props: "https://mui.com/material-ui/api/fab/#props",
              css: "https://mui.com/material-ui/api/fab/#css",
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
  render: (args) => {
    return (
      <Fab {...args}>
        <AddIcon />
      </Fab>
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
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function Basic() {
  return (
    <Fab ${argProps(storyContext)}>
      <AddIcon />
    </Fab>
  );
}
        `,
      },
    },
  },
};
