import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useArgs } from "@storybook/addons";
import { argProps, argChildren } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ToggleButtonGroup> = {
  title: "INPUTS/Toggle Button",
  component: ToggleButtonGroup,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: "Another description, overriding the comments",
      },
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "text" },
    },
    exclusive: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  render: ({ onChange, value, ...args }) => {
    return (
      <ToggleButtonGroup
        value={value}
        onChange={onChange}
        aria-label="text alignment"
        {...args}
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
  args: {
    value: "left",
    exclusive: true,
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();
      return (
        <>
          <Story
            args={{
              ...args,
              onChange: (event, newValue) =>
                updateArgs({
                  value: newValue,
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
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
     
<ToggleButtonGroup
  ${argProps(storyContext)}
  aria-label="text alignment"
>
  <ToggleButton value="left" aria-label="left aligned">
    <FormatAlignLeftIcon />
  </ToggleButton>
  <ToggleButton value="center" aria-label="centered">
    <FormatAlignCenterIcon />
  </ToggleButton>
  <ToggleButton value="right" aria-label="right aligned">
    <FormatAlignRightIcon />
  </ToggleButton>
  <ToggleButton value="justify" aria-label="justified" disabled>
    <FormatAlignJustifyIcon />
  </ToggleButton>
</ToggleButtonGroup>
        `,
      },
    },
  },
};
