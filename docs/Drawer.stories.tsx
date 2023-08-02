import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useArgs } from "@storybook/addons";
import { argProps, overView } from "./utils/formatArgs";
import { Fragment } from "react";

type Anchor = "top" | "left" | "bottom" | "right";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Drawer> = {
  title: "NAVIGATION/Drawer",
  component: Drawer,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Drawer",
          description:
            "The navigation drawers (or 'sidebars') provide ergonomic access to destinations in a site or app functionality such as switching accounts.",
          components: [
            {
              component: "Drawer",
              selector: "MuiDrawer",
              props: "https://mui.com/material-ui/api/drawer/#props",
              css: "https://mui.com/material-ui/api/drawer/#css",
            },
            {
              component: "SwipeableDrawer",
              props: "https://mui.com/material-ui/api/swipeable-drawer/#props",
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
    open: {
      control: { type: "boolean" },
    },
    anchor: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  render: ({ onClick, toggleDrawer, anchor, open, ...args }: any) => {
    const list = (anchor: Anchor) => (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={() => toggleDrawer(anchor, false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
    return (
      <div>
        {(["left", "right", "top", "bottom"] as const).map((anch) => (
          <Fragment key={anch}>
            <Button onClick={() => toggleDrawer(anch, true)}>{anch}</Button>
            <Drawer
              anchor={anchor}
              open={open}
              onClose={() => toggleDrawer(anchor, false)}
              {...args}
            >
              {list(anchor)}
            </Drawer>
          </Fragment>
        ))}
      </div>
    );
  },
  args: {
    open: false,
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();

      const toggleDrawer = (anchor: Anchor, open: boolean) => {
        console.log("first");
        updateArgs({
          open: open,
          anchor: anchor,
        });
      };
      return (
        <>
          <Story
            args={
              {
                ...args,
                toggleDrawer,
              } as any
            }
          />
        </>
      );
    },
  ],
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
     
const list = (anchor: Anchor) => (
  <Box
    sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
    role="presentation"
    onClick={() => toggleDrawer(anchor, false)}
  >
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

<div>
  {(["left", "right", "top", "bottom"] as const).map((anch) => (
    <Fragment key={anch}>
      <Button onClick={() => toggleDrawer(anch, true)}>{anch}</Button>
      <Drawer
        ${argProps(storyContext)}
      >
        {list(anchor)}
      </Drawer>
    </Fragment>
  ))}
</div>
        `,
      },
    },
  },
};
