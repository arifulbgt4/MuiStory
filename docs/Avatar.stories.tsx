import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Avatar from "@mui/material/Avatar";
import { argChildren, argProps } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Avatar> = {
  title: "DATA DISPLAY/Avatar",
  component: Avatar,
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
    variant: {
      control: { type: "select" },
      options: ["circular", "rounded", "square"],
      description: "The shape of the avatar.",
      defaultValue: "circular",
    },
    alt: {
      control: { type: "string" },
      description:
        "Used in combination with `src` or `srcSet` to provide an alt attribute for the rendered `img` element.",
    },
    imgProps: {
      control: { type: "object" },
      description:
        "`Attributes` applied to the `img` element if the component is used to display an image. It can be used to listen for the loading error event.",
    },
    sizes: {
      control: { type: "string" },
      description: "The `sizes` attribute for the `img` element.",
    },
    src: {
      control: { type: "string" },
      description: "The `src` attribute for the `img` element.",
    },
    srcSet: {
      control: { type: "string" },
      description:
        "The `srcSet` attribute for the `img` element. Use this attribute for responsive image display.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Avatars: Story = {
  args: {
    children: "A",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Avatar from '@mui/material/Avatar'

${code}
        `,
      },
    },
  },
};
