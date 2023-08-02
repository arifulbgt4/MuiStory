import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Switch from "@mui/material/Switch";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Switch> = {
  title: "INPUTS/Switch",
  component: Switch,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Switch",
          description:
            "Switches toggle the state of a single setting on or off.",
          components: [
            {
              component: "Switch",
              selector: "MuiSwitch",
              props: "https://mui.com/material-ui/api/switch/#props",
              css: "https://mui.com/material-ui/api/switch/#css",
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
    checked: {
      control: { type: "boolean" },
      description: "If `true`, the component is checked.",
      defaultValue: false,
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    defaultChecked: {
      control: { type: "boolean" },
      description:
        "The default checked state. Use when the component is not controlled.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
      description:
        "The size of the component. `small` is equivalent to the dense switch styling.",
      defaultValue: "medium",
    },
    disabled: {
      control: { type: "boolean" },
      description: "If `true`, the component is disabled.",
      defaultValue: false,
    },
    disableRipple: {
      control: { type: "boolean" },
      description: "If `true`, the ripple effect is disabled.",
      defaultValue: false,
    },
    edge: {
      control: { type: "select" },
      options: ["end", "start", false],
      description:
        "If given, uses a negative margin to counteract the padding on one side (this is often helpful for aligning the left or right side of the icon with content above or below, without ruining the border size and shape).",
      defaultValue: false,
    },
    required: {
      control: { type: "boolean" },
      description: "If `true`, the input element is required.",
      defaultValue: false,
    },
    inputProps: {
      control: { type: "object" },
      description: "`Attributes` applied to the `input` element.",
    },
    inputRef: {
      control: { type: "object" },
      description: "Pass a `ref` to the `input` element.",
    },
    value: {
      control: { type: "string" },
      description:
        "The value of the component. The DOM API casts this to a string. The browser uses `on` as the default value.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Switchs: Story = {
  render: (args) => {
    return <Switch {...args} />;
  },
  args: {
    color: "primary",
    size: "medium",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Switch from "@mui/material/Switch";

export default function Basic() {
  return <Switch ${argProps(storyContext)} />;
}
        `,
      },
    },
  },
};
