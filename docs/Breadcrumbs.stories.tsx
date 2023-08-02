import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Breadcrumbs> = {
  title: "NAVIGATION/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Breadcrumbs",
          description:
            "A breadcrumbs is a list of links that help visualize a page's location within a site's hierarchical structure, it allows navigation up to any of the ancestors.",
          components: [
            {
              component: "Breadcrumbs",
              selector: "MuiBreadcrumbs",
              props: "https://mui.com/material-ui/api/breadcrumbs/#props",
              css: "https://mui.com/material-ui/api/breadcrumbs/#css",
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
    itemsAfterCollapse: {
      control: { type: "number" },
      description:
        "If max items is exceeded, the number of items to show after the ellipsis.",
      defaultValue: 1,
    },
    itemsBeforeCollapse: {
      control: { type: "number" },
      description:
        "If max items is exceeded, the number of items to show before the ellipsis.",
      defaultValue: 1,
    },
    separator: {
      control: { type: "text" },
      description: "Custom separator node.",
      defaultValue: "/",
    },
    maxItems: {
      control: { type: "number" },
      description:
        "Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse` will be shown, with an ellipsis in between.",
      defaultValue: 1,
    },
    expandText: {
      control: { type: "text" },

      description:
        "Override the default label for the expand button. For localization purposes, you can use the provided `translations`.",
      defaultValue: "Show path",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Breadcrumbss: Story = {
  render: (args) => {
    return (
      <Breadcrumbs {...args}>
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    );
  },
  args: {
    separator: "/",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function BAsic() {
  return (
    <Breadcrumbs ${argProps(storyContext)}>
      <Link color="inherit" href="/" underline="hover">
        MUI
      </Link>
      <Link
        color="inherit"
        href="/material-ui/getting-started/installation/"
        underline="hover"
      >
        Core
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  );
}
        `,
      },
    },
  },
};
