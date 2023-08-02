import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import CircularProgress from "@mui/material/CircularProgress";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CircularProgress> = {
  title: "FEEDBACK/Progress",
  component: CircularProgress,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Progress",
          description:
            "Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.",
          components: [
            {
              component: "CircularProgress",
              selector: "MuiCircularProgress",
              props: "https://mui.com/material-ui/api/circular-progress/#props",
              css: "https://mui.com/material-ui/api/circular-progress/#css",
            },
            {
              component: "LinearProgress",
              selector: "MuiLinearProgress",
              props: "https://mui.com/material-ui/api/linear-progress/#props",
              css: "https://mui.com/material-ui/api/linear-progress/#css",
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
      description:
        "The color of the component. It supports both default and custom theme colors, which can be added as shown in the `palette customization guide`.",
      defaultValue: "primary",
    },
    variant: {
      control: { type: "select" },
      options: ["determinate", "indeterminate"],
      description:
        "The variant to use. Use indeterminate when there is no progress value.",
      defaultValue: "indeterminate",
    },
    disableShrink: {
      control: { type: "boolean" },
      description:
        "If `true`, the shrink animation is disabled. This only works if variant is `indeterminate`.",
      defaultValue: false,
    },
    size: {
      control: { type: "number" },
      description:
        "The size of the component. If using a number, the pixel unit is assumed. If using a string, you need to provide the CSS unit, e.g `3rem`.",
      defaultValue: 40,
    },
    thickness: {
      control: { type: "number" },
      description: "The thickness of the circle.",
      defaultValue: 3.6,
    },
    value: {
      control: { type: "number" },
      description:
        "The value of the progress indicator for the determinate variant. Value between `0` and `100`.",
      defaultValue: 0,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CircularProgresses: Story = {
  render: (args) => {
    return <CircularProgress {...args} />;
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularIndeterminate() {
  return <CircularProgress ${argProps(storyContext)} />;
}
        `,
      },
    },
  },
};
