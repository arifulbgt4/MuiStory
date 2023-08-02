import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useArgs } from "@storybook/addons";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: "UTILS/Modal",
  component: Modal,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Modal",
          description:
            "The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.",
          components: [
            {
              component: "Modal",
              selector: "MuiModal",
              props: "https://mui.com/material-ui/api/modal/#props",
              css: "https://mui.com/material-ui/api/modal/#css",
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
    open: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  render: ({ onClose, open, ...args }) => {
    return (
      <Modal open={open} onClose={onClose} {...args}>
        <Box
          sx={(theme) => ({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: theme.palette.background.paper,
            boxShadow: 24,
            p: 4,
          })}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    );
  },
  args: {
    open: false,
  },
  decorators: [
    (Story: any) => {
      const [args, updateArgs] = useArgs();
      return (
        <>
          <Button
            variant="contained"
            onClick={() =>
              updateArgs({
                open: !args?.open,
              })
            }
          >
            Open Modal
          </Button>
          <Story
            args={{
              ...args,
              onClose: () =>
                updateArgs({
                  open: !args?.open,
                }),
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
import React, { useState } from "react";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Basic() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={(theme) => ({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: theme.palette.background.paper,
            boxShadow: 24,
            p: 4,
          })}
        >
          <Typography component="h2" id="modal-modal-title" variant="h6">
            Text in a modal
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
            }}
          >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
        `,
      },
    },
  },
};
