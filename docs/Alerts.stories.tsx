import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Alert> = {
  title: "FEEDBACK/Alerts",
  component: Alert,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Alert",
          description:
            "An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.",
          components: [
            {
              component: "Alert",
              selector: "MuiAlert",
              props: "https://mui.com/material-ui/api/alert/#props",
              css: "https://mui.com/material-ui/api/alert/#css",
            },
            {
              component: "AlertTitle",
              selector: "MuiAlertTitle",
              props: "https://mui.com/material-ui/api/alert-title/#props",
              css: "https://mui.com/material-ui/api/alert-title/#css",
            },
          ],
        }),
      },
      canvas: { sourceState: "shown" },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "standard"],
      description: "The variant to use.",
      defaultValue: "standard",
    },
    severity: {
      control: { type: "select" },
      options: ["error", "info", "success", "warning"],
      description:
        "The severity of the alert. This defines the color and icon used.",
      defaultValue: "success",
    },
    color: {
      control: { type: "select" },
      options: ["error", "info", "success", "warning"],
      description:
        "The color of the component. Unless provided, the value is taken from the `severity prop. It supports both default and custom theme colors, which can be added as shown in the `palette customization guide`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Alerts: Story = {
  render: (args) => {
    return (
      <Alert {...args}>
        <AlertTitle>Hey</AlertTitle>
        <p>Some text</p>
      </Alert>
    );
  },
  args: {
    severity: "error",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function Basic() {
  return (
    <Alert ${argProps(storyContext)}>
      <AlertTitle>Hey</AlertTitle>
      <p>Some text</p>
    </Alert>
  );
}
        `,
      },
    },
  },
};
