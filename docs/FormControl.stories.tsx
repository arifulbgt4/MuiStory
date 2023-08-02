import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import FormControl from "@mui/material/FormControl";
import { argProps, overView } from "./utils/formatArgs";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FormControl> = {
  title: "Forms/FormControl",
  component: FormControl,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "FormControl",
          components: [
            {
              component: "FormControl",

              selector: "MuiFormControl",
              props: "https://mui.com/material-ui/api/form-control/#props",
              css: "https://mui.com/material-ui/api/form-control/#css",
            },
            {
              component: "FormControlLabel",
              selector: "MuiFormControlLabel",
              props:
                "https://mui.com/material-ui/api/form-control-label/#props",
              css: "https://mui.com/material-ui/api/form-control-label/#css",
            },
            {
              component: "FormGroup",
              selector: "MuiFormGroup",
              props: "https://mui.com/material-ui/api/form-group/#props",
              css: "https://mui.com/material-ui/api/form-group/#css",
            },
            {
              component: "FormHelperText",
              selector: "MuiFormHelperText",
              props: "https://mui.com/material-ui/api/form-helper-text/#props",
              css: "https://mui.com/material-ui/api/form-helper-text/#css",
            },
            {
              component: "FormLabel",
              selector: "MuiFormLabel",
              props: "https://mui.com/material-ui/api/form-label/#props",
              css: "https://mui.com/material-ui/api/form-label/#css",
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
      options: ["primary", "secondary", "error", "warning", "info", "success"],
      description:
        "The color of the component. It supports both default and custom theme colors, which can be added as shown in the `palette customization guide`.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
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
    hiddenLabel: {
      control: { type: "boolean" },
      description:
        "If `true`, the label is hidden. This is used to increase density for a `FilledInput`. Be sure to add `aria-label` to the `input` element.",
      defaultValue: false,
    },
    margin: {
      control: { type: "select" },
      options: ["dense", "none", "normal"],
      defaultValue: "none",
      description:
        "If `dense` or `normal`, will adjust vertical spacing of this and contained components.",
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
    focused: {
      control: { type: "boolean" },
      description: "If `true`, the component is displayed in focused state.",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormControl>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FormControls: Story = {
  render: (args) => {
    return (
      <FormControl {...args}>
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    );
  },
  args: {
    color: "primary",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputLabel from "@mui/material/InputLabel";

export default function Basic() {
  return (
    <FormControl ${argProps(storyContext)}>
      <InputLabel htmlFor="input-with-icon-adornment">
        With a start adornment
      </InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

        `,
      },
    },
  },
};
