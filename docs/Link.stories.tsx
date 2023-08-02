import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Link from "@mui/material/Link";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Link> = {
  title: "NAVIGATION/Link",
  component: Link,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Link",
          description:
            "The Link component allows you to easily customize anchor elements with your theme colors and typography styles.",
          components: [
            {
              component: "Link",
              selector: "MuiLink",
              props: "https://mui.com/material-ui/api/link/#props",
              css: "https://mui.com/material-ui/api/link/#css",
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
    href: {
      control: { type: "text" },
    },
    underline: {
      control: { type: "select" },
      options: ["always", "hover", "none"],
      defaultValue: "always",
      description: "Controls when the link should have an underline.",
    },
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
      defaultValue: "primary",
      description: "The color of the link.",
    },
    variant: {
      control: { type: "select" },
      options: [
        "body1",
        "body2",
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
      defaultValue: "inherit",
      description: "Applies the theme typography styles.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Links: Story = {
  render: (args) => {
    return <Link {...args}>Link</Link>;
  },
  args: {
    href: "/",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `

import Link from "@mui/material/Link";

export default function Basic() {
  return <Link ${argProps(storyContext)}>Link</Link>;
}
        `,
      },
    },
  },
};
