import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RadioGroup> = {
  title: "INPUTS/RadioGroup",
  component: RadioGroup,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Radio",
          description:
            "The Radio Group allows the user to select one option from a set.",
          components: [
            {
              component: "RadioGroup",
              selector: "MuiRadioGroup",
              props: "https://mui.com/material-ui/api/radio-group/#props",
              css: "https://mui.com/material-ui/api/radio-group/#css",
            },
            {
              component: "Radio",
              selector: "MuiRadio",
              props: "https://mui.com/material-ui/api/radio/#props",
              css: "https://mui.com/material-ui/api/radio/#css",
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
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Fabs: Story = {
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    );
  },
  args: {
    color: "primary",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Basic() {
  return (
    <RadioGroup color="primary">
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  )
}
        `,
      },
    },
  },
};
