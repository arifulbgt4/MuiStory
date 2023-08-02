import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextField> = {
  title: "INPUTS/TextFields",
  component: TextField,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "TextField",
          description: "Text Fields let users enter and edit text.",
          components: [
            {
              component: "TextField",
              selector: "MuiTextField",
              props: "https://mui.com/material-ui/api/text-field/#props",
              css: "https://mui.com/material-ui/api/text-field/#css",
            },
            {
              component: "Input",
              selector: "MuiInput",
              props: "https://mui.com/material-ui/api/input/#props",
              css: "https://mui.com/material-ui/api/input/#css",
            },
            {
              component: "FilledInput",
              selector: "MuiFilledInput",
              props: "https://mui.com/material-ui/api/filled-input/#props",
              css: "https://mui.com/material-ui/api/filled-input/#css",
            },
            {
              component: "InputAdornment",
              selector: "MuiInputAdornment",
              props: "https://mui.com/material-ui/api/input-adornment/#props",
              css: "https://mui.com/material-ui/api/input-adornment/#css",
            },
            {
              component: "InputBase",
              selector: "MuiInputBase",
              props: "https://mui.com/material-ui/api/input-base/#props",
              css: "https://mui.com/material-ui/api/input-base/#css",
            },
            {
              component: "InputLabel",
              selector: "MuiInputLabel",
              props: "https://mui.com/material-ui/api/input-label/#props",
              css: "https://mui.com/material-ui/api/input-label/#css",
            },
            {
              component: "OutlinedInput",
              selector: "MuiOutlinedInput",
              props: "https://mui.com/material-ui/api/outlined-input/#props",
              css: "https://mui.com/material-ui/api/outlined-input/#css",
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
    autoFocus: {
      control: { type: "boolean" },
      description:
        "If true, the input element is focused during the first mount.",
      defaultValue: false,
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "standard"],
      description: "The variant to use.",
      defaultValue: "outlined",
    },
    defaultValue: {
      description:
        "The default value. Use when the component is not controlled.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
      description: "If `true`, the component is disabled.",
      defaultValue: false,
    },
    error: {
      control: { type: "boolean" },
      description: "If `true`, the label is displayed in an error state.",
      defaultValue: false,
    },
    fullWidth: {
      control: { type: "boolean" },
      description:
        "If `true`, the input will take up the full width of its container.",
      defaultValue: false,
    },
    helperText: {
      control: { type: "node" },
      description: "The helper text content.",
    },
    InputLabelProps: {
      control: { type: "object" },
      description:
        "Props applied to the `InputLabel` element. Pointer events like onClick are enabled if and only if `shrink` is `true`.",
    },
    inputProps: {
      control: { type: "object" },
      description: "`Attributes` applied to the `input` element.",
    },
    inputRef: {
      control: { type: "object" },
      description: "Pass a `ref` to the `input` element.",
    },
    label: {
      control: { type: "string" },
      description: "The label content.",
    },
    margin: {
      control: { type: "select" },
      options: ["dense", "none", "normal"],
      defaultValue: "none",
      description:
        "If `dense` or `normal`, will adjust vertical spacing of this and contained components.",
    },
    multiline: {
      control: { type: "boolean" },
      description:
        "If `true`, a `textarea` element is rendered instead of an input.",
      defaultValue: false,
    },
    maxRows: {
      control: { type: "number" },
      description:
        "Maximum number of rows to display when `multiline` option is set to `true`.",
    },
    minRows: {
      control: { type: "number" },
      description:
        "Minimum number of rows to display when `multiline` option is set to `true`.",
    },
    name: {
      control: { type: "string" },
      description: "Name attribute of the `input` element.",
    },
    placeholder: {
      control: { type: "string" },
      description:
        "The short hint displayed in the `input` before the user enters a value.",
    },
    required: {
      control: { type: "boolean" },
      description:
        "If `true`, the label is displayed as required and the `input` element is required.",
      defaultValue: false,
    },
    rows: {
      control: { type: "number" },
      description:
        "Number of rows to display when `multiline` option is set to `true`.",
    },
    select: {
      control: { type: "boolean" },
      description:
        "Render a `Select` element while passing the `Input` element to Select as `input` parameter. If this option is set you must pass the options of the select as children.",
      defaultValue: false,
    },
    SelectProps: {
      control: { type: "object" },
      description: "Props applied to the `Select` element.",
    },
    type: {
      control: { type: "string" },
      description:
        "Type of the `input` element. It should be a `valid HTML5 input type`.",
    },
    value: {
      control: { type: "string" },
      description:
        "The value of the `input` element, required for a controlled component.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextFields: Story = {
  render: (args) => {
    return <TextField {...args} />;
  },
  args: {
    color: "primary",
    size: "medium",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import TextField from "@mui/material/TextField";

export default function Basic() {
  return <TextField ${argProps(storyContext)} />;
}

        `,
      },
    },
  },
};
