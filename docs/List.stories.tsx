import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { argChildren, argProps } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof List> = {
  title: "FEEDBACK/List",
  component: List,
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
    disablePadding: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "If `true`, vertical padding is removed from the list.",
    },
    dense: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "If `true`, compact vertical padding designed for keyboard and mouse input is used for the list and list items. The prop is available to descendant components as the `dense` context.",
    },
    subheader: {
      control: { type: "string" },
      description: "The content of the subheader, normally `ListSubheader`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Lists: Story = {
  args: {
    disablePadding: true,
    children: (
      <>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

<List
  ${argProps(storyContext)}
>
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <ImageIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
  </ListItem>
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <WorkIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Work" secondary="Jan 7, 2014" />
  </ListItem>
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <BeachAccessIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Vacation" secondary="July 20, 2014" />
  </ListItem>
</List>
        `,
      },
    },
  },
};
