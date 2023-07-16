import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Dialog from "@mui/material/Dialog";
import { argChildren, argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Dialog> = {
  title: "FEEDBACK/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Dialog",
          description: "Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",
          components: [
            {
              component: "Dialog",
              selector: "MuiDialog",
              props: "https://mui.com/material-ui/api/dialog/#props",
              css: "https://mui.com/material-ui/api/dialog/#css"
            },
            {
              component: "DialogActions",
              selector: "MuiDialogActions",
              props: "https://mui.com/material-ui/api/dialog-actions/#props",
              css: "https://mui.com/material-ui/api/dialog-actions/#css"
            },
            {
              component: "DialogContent",
              selector: "MuiDialogContent",
              props: "https://mui.com/material-ui/api/dialog-content/#props",
              css: "https://mui.com/material-ui/api/dialog-content/#css"
            },
            {
              component: "DialogContentText",
              selector: "MuiDialogContentText",
              props: "https://mui.com/material-ui/api/dialog-content-text/#props",
              css: "https://mui.com/material-ui/api/dialog-content-text/#css"
            },
            {
              component: "DialogTitle",
              selector: "MuiDialogTitle",
              props: "https://mui.com/material-ui/api/dialog-title/#props",
              css: "https://mui.com/material-ui/api/dialog-title/#css"
            }
          ]
        })
      },
      canvas: { sourceState: "shown" },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "If `true`, the component is shown.",
      defaultValue: true,
    },
    fullScreen: {
      control: { type: "boolean" },
      description: "If `true`, the dialog is full-screen.",
      defaultValue: false,
    },
    fullWidth: {
      control: { type: "boolean" },
      description:
        "If `true`, the dialog stretches to `maxWidth`. Notice that the dialog width grow is limited by the default margin.",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dialogs: Story = {
  args: {
    open: true,
    children: (
      <>
        <h2>Hello modal</h2>
        <p>Some text</p>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Dialog from "@mui/material/Dialog";

<Dialog
  ${argProps(storyContext)}
>
  <h2>Hello modal</h2>
  <p>Some text</p>
</Dialog>
        `,
      },
    },
  },
};
