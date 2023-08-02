import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "INPUTS/Buttons",
  component: Button,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Button",
          description:
            "Buttons allow users to take actions, and make choices, with a single tap.",
          components: [
            {
              component: "Button",
              selector: "MuiButton",
              props: "https://mui.com/material-ui/api/button/#props",
              css: "https://mui.com/material-ui/api/button/#css",
            },
            {
              component: "ButtonBase",
              selector: "MuiButtonBase",
              props: "https://mui.com/material-ui/api/button-base/#props",
              css: "https://mui.com/material-ui/api/button-base/#css",
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
  render: (args) => {
    return <Button {...args}>Hello</Button>;
  },
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Button from "@mui/material/Button";

export default function Basic() {
  return (
    <Button ${argProps(storyContext)}>
      Hello
    </Button>
  );
}
        `,
      },
    },
  },
};

export const LeftIconButtons: Story = {
  render: (args) => {
    return <Button {...args}>Hello</Button>;
  },
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
    startIcon: <ArrowBackIcon />,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Basic() {
  return (
    <Button ${argProps(storyContext)}>
      Hello
    </Button>
  );
}
        `,
      },
    },
  },
};
export const RightIconButtons: Story = {
  render: (args) => {
    return <Button {...args}>Hello</Button>;
  },
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
    endIcon: <SendIcon />,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
export default function Basic() {
  return (
    <Button ${argProps(storyContext)}>
      Hello
    </Button>
  );
}
        `,
      },
    },
  },
};
