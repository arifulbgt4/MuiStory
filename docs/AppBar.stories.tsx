import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { argProps, overView } from "./utils/formatArgs";
import Box from "@mui/material/Box";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AppBar> = {
  title: "SURFACES/AppBar",
  component: AppBar,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "AppBar",
          description:
            "The top App bar provides content and actions related to the current screen. It's used for branding, screen titles, navigation, and actions.",
          components: [
            {
              component: "AppBar",
              selector: "MuiAppBar",
              props: "https://mui.com/material-ui/api/app-bar/#props",
              css: "https://mui.com/material-ui/api/app-bar/#css",
            },
            {
              component: "Toolbar",
              selector: "MuiToolbar",
              props: "https://mui.com/material-ui/api/toolbar/#props",
              css: "https://mui.com/material-ui/api/toolbar/#css",
            },
          ],
        }),
      },
      canvas: { sourceState: "shown" },
    },
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    enableColorOnDark: {
      control: { type: "boolean" },
      description: "If `true`, the `color` prop is applied in dark mode.",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AppBars: Story = {
  render: (args) => {
    return (
      <Box
        sx={{
          minHeight: 50,
        }}
      >
        <AppBar {...args}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Basic() {
  return (
    <AppBar ${argProps(storyContext)}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}        
        `,
      },
    },
  },
};
