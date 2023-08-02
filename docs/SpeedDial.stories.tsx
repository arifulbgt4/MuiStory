import type { Meta, StoryObj, StoryContext } from "@storybook/react";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SpeedDial> = {
  title: "NAVIGATION/Speed Dial",
  component: SpeedDial,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "SpeedDial",
          description:
            "When pressed, a floating action button can display three to six related actions in the form of a Speed Dial.",
          components: [
            {
              component: "SpeedDial",
              selector: "MuiSpeedDial",
              props: "https://mui.com/material-ui/api/speed-dial/#props",
              css: "https://mui.com/material-ui/api/speed-dial/#css",
            },
            {
              component: "SpeedDialAction ",
              selector: "MuiSpeedDialAction",
              props: "https://mui.com/material-ui/api/speed-dial-action/#props",
              css: "https://mui.com/material-ui/api/speed-dial-action/#css",
            },
            {
              component: "SpeedDialIcon  ",
              selector: "MuiSpeedDialIcon",
              props: "https://mui.com/material-ui/api/speed-dial-icon/#props",
              css: "https://mui.com/material-ui/api/speed-dial-icon/#css",
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
  render: (args) => {
    return (
      <SpeedDial {...args} icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    );
  },
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

export default function Basic() {
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  return (
    <SpeedDial ${argProps(storyContext)} icon={<SpeedDialIcon />}>
      {actions.map((action) => {
        return (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        );
      })}
    </SpeedDial>
  );
}

        `,
      },
    },
  },
};
