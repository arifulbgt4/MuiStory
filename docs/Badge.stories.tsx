import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Badge> = {
  title: "DATA DISPLAY/Badge",
  component: Badge,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Badge",
          description:
            "Badge generates a small badge to the top-right of its children.",
          components: [
            {
              component: "Badge",
              selector: "MuiBadge",
              props: "https://mui.com/material-ui/api/badge/#props",
              css: "https://mui.com/material-ui/api/badge/#css",
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
    badgeContent: {
      control: { type: "number" },
    },
    overlap: {
      control: { type: "select" },
      options: ["circular", "rectangular"],
      description: "Wrapped shape the badge should overlap.",
      defaultValue: "rectangular",
    },
    variant: {
      control: { type: "select" },
      options: ["dot", "standard"],
      description: "The variant to use.",
      defaultValue: "standard",
    },
    color: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
      description:
        "The color of the component. It supports both default and custom theme colors, which can be added as shown in the `palette customization guide`.",
      defaultValue: "default",
    },
    invisible: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "If `true`, the badge is invisible.",
    },
    max: {
      control: { type: "number" },
      defaultValue: 99,
      description: "Max count to show.",
    },
    showZero: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "Controls whether the badge is hidden when `badgeContent` is zero.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Badges: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <MailIcon color="action" />
      </Badge>
    );
  },
  args: {
    badgeContent: 5,
    color: "primary",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export default function LabPage() {
  return (
    <Badge ${argProps(storyContext)}>
      <MailIcon color="action" />
    </Badge>
  );
}
        `,
      },
    },
  },
};
