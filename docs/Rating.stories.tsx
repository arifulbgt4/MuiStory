import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Rating from "@mui/material/Rating";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Rating> = {
  title: "INPUTS/Rating",
  component: Rating,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Rating",
          description:
            "Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.",
          components: [
            {
              component: "Rating",
              selector: "MuiRating",
              props: "https://mui.com/material-ui/api/rating/#props",
              css: "https://mui.com/material-ui/api/rating/#css",
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
    defaultValue: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Ratings: Story = {
  render: (args) => {
    return <Rating {...args} />;
  },
  args: {
    defaultValue: 3,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Rating from "@mui/material/Rating";
export default function Basic() {
  return <Rating ${argProps(storyContext)} />;
}
        `,
      },
    },
  },
};
