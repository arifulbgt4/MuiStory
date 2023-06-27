import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useArgs } from "@storybook/addons";
import { argProps, argChildren } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Tabs> = {
  title: "NAVIGATION/Tabs",
  component: Tabs,
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
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  render: ({ onChange, value, ...args }) => {
    return (
      <Tabs {...args} value={value} onChange={onChange}>
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    );
  },
  args: {
    value: "one",
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();
      return (
        <>
          <Story
            args={{
              ...args,
              onChange: (e, newValue) =>
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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
     
${code}
        `,
      },
    },
  },
};
