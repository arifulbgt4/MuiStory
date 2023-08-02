import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { argProps, overView } from "./utils/formatArgs";
import Box from "@mui/material/Box";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Backdrop> = {
  title: "FEEDBACK/Backdrop",
  component: Backdrop,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Backdrop",
          description:
            "The Backdrop component narrows the user's focus to a particular element on the screen.",
          components: [
            {
              component: "Backdrop",
              selector: "MuiBackdrop",
              props: "https://mui.com/material-ui/api/backdrop/#props",
              css: "https://mui.com/material-ui/api/backdrop/#css",
            },
          ],
        }),
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
    invisible: {
      control: { type: "boolean" },
      description:
        "If `true`, the backdrop is invisible. It can be used when rendering a popover or a custom select component.",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Backdrops: Story = {
  render: (args) => {
    return (
      <Box minHeight={50}>
        <Backdrop {...args}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    );
  },
  args: {
    open: true,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Basic() {
  return (
    <Backdrop ${argProps(storyContext)}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
        `,
      },
    },
  },
};
