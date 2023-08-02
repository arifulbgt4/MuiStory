import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Paper from "@mui/material/Paper";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Paper> = {
  title: "SURFACES/Paper",
  component: Paper,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Paper",
          description:
            "In Material Design, the physical properties of paper are translated to the screen.",
          components: [
            {
              component: "Paper",
              selector: "MuiPaper",
              props: "https://mui.com/material-ui/api/paper/#props",
              css: "https://mui.com/material-ui/api/paper/#css",
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
    elevation: {
      control: { type: "select" },
      options: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24,
      ],

      description:
        "Shadow depth, corresponds to `dp` in the spec. It accepts values between 0 and 24 inclusive.",
      defaultValue: 1,
    },
    square: {
      control: { type: "boolean" },
      description: "If `true`, the card will use raised styling.",
      defaultValue: false,
    },
    variant: {
      control: { type: "select" },
      options: ["elevation", "outlined"],

      description: "The variant to use.",
      defaultValue: "elevation",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Papers: Story = {
  render: (args) => {
    return <Paper {...args} />;
  },
  args: {
    elevation: 5,
    sx: {
      height: "200px",
      width: "200px",
    },
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Paper from "@mui/material/Paper";

export default function Basic() {
  return (
    <Paper ${argProps(storyContext)}
      elevation={5}
      sx={{
        height: "200px",
        width: "200px",
      }}
    />
  );
}
        `,
      },
    },
  },
};
