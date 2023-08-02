import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LoadingButton> = {
  title: "INPUTS/Loading Buttons",
  component: LoadingButton,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Button",
          description:
            "@mui/lab offers loading buttons that can show loading state and disable interactions.",
          components: [
            {
              component: "LoadingButton",
              props: "https://mui.com/material-ui/api/loading-button/#props",
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
  render: (args) => {
    return <LoadingButton {...args}>Hello</LoadingButton>;
  },
  args: {
    loading: true,
    variant: "contained",
    color: "primary",
    size: "medium",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import LoadingButton from "@mui/lab/LoadingButton";

export default function Basic() {
  return <LoadingButton ${argProps(storyContext)}>Hello</LoadingButton>;
}
        `,
      },
    },
  },
};

export const LoadingLeftIconButtons: Story = {
  render: (args) => {
    return <LoadingButton {...args}>Hello</LoadingButton>;
  },
  args: {
    loading: true,
    variant: "contained",
    color: "primary",
    size: "medium",
    startIcon: <ArrowBackIcon />,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import LoadingButton from "@mui/lab/LoadingButton";

export default function Basic() {
  return <LoadingButton ${argProps(storyContext)} >Hello</LoadingButton>;
}
        `,
      },
    },
  },
};
export const LoadingRightIconButtons: Story = {
  render: (args) => {
    return <LoadingButton {...args}>Hello</LoadingButton>;
  },
  args: {
    loading: true,
    variant: "contained",
    color: "primary",
    size: "medium",
    endIcon: <SendIcon />,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

export default function Basic() {
  return <LoadingButton ${argProps(storyContext)} >Hello</LoadingButton>;
}
        `,
      },
    },
  },
};
export const LoadingPositionLeftIconButtons: Story = {
  render: (args) => {
    return <LoadingButton {...args}>Hello</LoadingButton>;
  },
  args: {
    loadingPosition: "start",
    loading: true,
    variant: "contained",
    color: "primary",
    size: "medium",
    startIcon: <ArrowBackIcon />,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

export default function Basic() {
  return <LoadingButton ${argProps(storyContext)} >Hello</LoadingButton>;
}
        `,
      },
    },
  },
};
export const LoadingPositionRightIconButtons: Story = {
  render: (args) => {
    return <LoadingButton {...args}>Hello</LoadingButton>;
  },
  args: {
    loadingPosition: "end",
    loading: true,
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
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

export default function Basic() {
  return <LoadingButton ${argProps(storyContext)} >Hello</LoadingButton>;
}
        `,
      },
    },
  },
};
export const LoadingIndicatorButtons: Story = {
  render: (args) => {
    return <LoadingButton {...args}>Hello</LoadingButton>;
  },
  args: {
    loading: true,
    loadingIndicator: "Loading…",
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Hello",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

export default function Basic() {
  return <LoadingButton ${argProps(storyContext)} >Hello</LoadingButton>;
}
        `,
      },
    },
  },
};
