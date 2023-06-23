import type { Meta, StoryObj, StoryContext } from "@storybook/react";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { argChildren, argProps } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SpeedDial> = {
  title: "NAVIGATION/Speed Dial",
  component: SpeedDial,
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
    hidden: {
      control: { type: "boolean" },
      description: "If `true`, the SpeedDial is hidden.",
      defaultValue: false,
    },

    ariaLabel: {
      control: { type: "text" },
      description:
        "The aria-label of the button element. Also used to provide the `id` for the `SpeedDial` element and its children.",
      defaultValue: "/",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpeedDial>;

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SpeedDials: Story = {
  render: ({ ...restArgs }) => (
    <SpeedDial {...restArgs} icon={<SpeedDialIcon />}>
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  ),
  args: {
    ariaLabel: "SpeedDial basic example",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

<SpeedDial
  ${argProps(storyContext)}
  icon={<SpeedDialIcon />
>
  {actions.map((action) => (
    <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
    />
  ))}
</SpeedDial>
        `,
      },
    },
  },
};
