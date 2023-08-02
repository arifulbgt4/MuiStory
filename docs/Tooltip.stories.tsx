import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Tooltip> = {
  title: "DATA DISPLAY/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Tooltip",
          description:
            "Tooltips display informative text when users hover over, focus on, or tap an element.",
          components: [
            {
              component: "Tooltip",
              selector: "MuiTooltip",
              props: "https://mui.com/material-ui/api/tooltip/#props",
              css: "https://mui.com/material-ui/api/tooltip/#css",
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
    title: {
      control: { type: "text" },
      description:
        "Tooltip title. Zero-length titles string, undefined, null and false are never displayed.",
      defaultValue: "elevation",
    },
    arrow: {
      control: { type: "boolean" },
      description: "If true, adds an arrow to the tooltip.",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Tooltips: Story = {
  render: (args) => {
    return (
      <Tooltip {...args}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    );
  },
  args: {
    title: "Delete",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function Basic() {
  return (
    <Tooltip ${argProps(storyContext)} >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

        `,
      },
    },
  },
};
