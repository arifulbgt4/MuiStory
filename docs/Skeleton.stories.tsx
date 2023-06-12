import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Skeleton from "@mui/material/Skeleton";
import { argChildren, argProps } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Skeleton> = {
  title: "FEEDBACK/Skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component:
          "The value must be chosen from a predefined set of allowed values.",
      },
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    animation: {
      control: { type: "select" },
      options: ["pulse", "wave", false],
      description: "The animation. If false the animation effect is disabled.",
      defaultValue: "pulse",
    },
    variant: {
      control: { type: "select" },
      options: ["circular", "rectangular", "rounded", "text"],
      description: "The type of content that will be rendered.",
      defaultValue: "text",
    },
    width: {
      control: { type: "number" },
      description:
        "Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.",
    },
    height: {
      control: { type: "number" },
      description:
        "	Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    width: 210,
    height: 60,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Skeleton from '@mui/material/Skeleton';

<Skeleton
  ${argProps(storyContext)}
/>
        `,
      },
    },
  },
};

export const Rounded: Story = {
  args: {
    variant: "rounded",
    width: 210,
    height: 60,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Skeleton from '@mui/material/Skeleton';

<Skeleton
  ${argProps(storyContext)}
/>
        `,
      },
    },
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    width: 60,
    height: 60,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Skeleton from '@mui/material/Skeleton';

<Skeleton
  ${argProps(storyContext)}
/>
        `,
      },
    },
  },
};
export const Text: Story = {
  args: {
    variant: "text",
    sx: { fontSize: "1rem" },
    width: 260,
    height: 30,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Skeleton from '@mui/material/Skeleton';

<Skeleton
  sx={{ fontSize: "1rem" }},
  ${argProps(storyContext, ["sx"])}
/>
        `,
      },
    },
  },
};
