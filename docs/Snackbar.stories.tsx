import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Snackbar> = {
  title: "FEEDBACK/Snackbar",
  component: Snackbar,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Snackbar",
          description:
            "Snackbars provide brief notifications. The component is also known as a toast.",
          components: [
            {
              component: "Snackbar",
              selector: "MuiSnackbar",
              props: "https://mui.com/material-ui/api/snackbar/#props",
              css: "https://mui.com/material-ui/api/snackbar/#css",
            },
            {
              component: "SnackbarContent",
              selector: "MuiSnackbarContent",
              props: "https://mui.com/material-ui/api/snackbar-content/#props",
              css: "https://mui.com/material-ui/api/snackbar-content/#css",
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
    open: {
      control: { type: "boolean" },
      description: "If `true`, the component is shown.",
      defaultValue: true,
    },
    autoHideDuration: {
      control: { type: "number" },
      description:
        "The number of milliseconds to wait before automatically calling the `onClose` function. `onClose` should then set the state of the `open` prop to hide the Snackbar. This behavior is disabled by default with the `null` value.",
    },
    disableWindowBlurListener: {
      control: { type: "boolean" },
      description:
        "If `true`, the `autoHideDuration` timer will expire even if the window is not focused.",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Snackbars: Story = {
  render: (args) => {
    return (
      <Snackbar {...args}>
        <Alert>Hello Snackbar</Alert>
      </Snackbar>
    );
  },
  args: {
    open: true,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Basic() {
  return (
    <Snackbar ${argProps(storyContext)}>
      <Alert>Hello Snackbar</Alert>
    </Snackbar>
  );
}
        `,
      },
    },
  },
};
