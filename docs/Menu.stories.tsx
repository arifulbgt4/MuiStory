import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useArgs } from "@storybook/addons";
import { argProps, argChildren } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Menu> = {
  title: "NAVIGATION/Menu",
  component: Menu,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: "Another description, overriding the comments",
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
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  render: ({ onClose, anchorEl, open, ...args }) => {
    return (
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        {...args}
      >
        <MenuItem onClick={onClose as any}>Profile</MenuItem>
        <MenuItem onClick={onClose as any}>My account</MenuItem>
        <MenuItem onClick={onClose as any}>Logout</MenuItem>
      </Menu>
    );
  },
  args: {
    open: false,
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();
      return (
        <>
          <Button
            variant="contained"
            onClick={(event) =>
              updateArgs({
                open: !args?.open,
                anchorEl: event.currentTarget,
              })
            }
          >
            Dashboard
          </Button>
          <Story
            args={{
              ...args,
              onClose: () =>
                updateArgs({
                  open: !args?.open,
                  anchorEl: null,
                }),
            }}
          />
        </>
      );
    },
  ],
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
     
${code}
        `,
      },
    },
  },
};
