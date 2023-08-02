import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Dialog from "@mui/material/Dialog";
import { Button, Typography } from "@mui/material";
import { argProps, overView } from "./utils/formatArgs";
import { useArgs } from "@storybook/addons";

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
          description:
            "Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",
          components: [
            {
              component: "Dialog",
              selector: "MuiDialog",
              props: "https://mui.com/material-ui/api/dialog/#props",
              css: "https://mui.com/material-ui/api/dialog/#css",
            },
            {
              component: "DialogActions",
              selector: "MuiDialogActions",
              props: "https://mui.com/material-ui/api/dialog-actions/#props",
              css: "https://mui.com/material-ui/api/dialog-actions/#css",
            },
            {
              component: "DialogContent",
              selector: "MuiDialogContent",
              props: "https://mui.com/material-ui/api/dialog-content/#props",
              css: "https://mui.com/material-ui/api/dialog-content/#css",
            },
            {
              component: "DialogContentText",
              selector: "MuiDialogContentText",
              props:
                "https://mui.com/material-ui/api/dialog-content-text/#props",
              css: "https://mui.com/material-ui/api/dialog-content-text/#css",
            },
            {
              component: "DialogTitle",
              selector: "MuiDialogTitle",
              props: "https://mui.com/material-ui/api/dialog-title/#props",
              css: "https://mui.com/material-ui/api/dialog-title/#css",
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
  render: ({ onClose, ...args }) => {
    return (
      <Dialog onClose={onClose} {...args}>
        <Typography variant="h4">Hello modal</Typography>
        <Typography>Hello modal</Typography>
      </Dialog>
    );
  },
  args: {
    open: false,
  },
  decorators: [
    (Story: any) => {
      const [args, setArgs] = useArgs();
      const onCloseDialog = () => setArgs({ open: false });
      return (
        <>
          <Button onClick={() => setArgs({ open: true })}>Open dialog</Button>
          <Story
            args={{
              ...args,
              onClose: () => onCloseDialog(),
            }}
          />
        </>
      );
    },
  ],
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
"use client";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Basic() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Open dailog</Button>
      <Dialog onClose={() => setOpen(false)} open={open} ${argProps(
        storyContext,
        ["open"]
      )}>
        <Typography variant="h4">Hello modal</Typography>
        <Typography>Some text</Typography>
      </Dialog>
    </Box>
  );
}
        `,
      },
    },
  },
};
