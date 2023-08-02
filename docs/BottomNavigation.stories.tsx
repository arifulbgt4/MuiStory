import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useArgs } from "@storybook/addons";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BottomNavigation> = {
  title: "NAVIGATION/Bottom Navigation",
  component: BottomNavigation,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "BottomNavigation",
          description:
            "Bottom navigation bars display three to five destinations at the bottom of a screen. Each destination is represented by an icon and an optional text label. When a bottom navigation icon is tapped, the user is taken to the top-level navigation destination associated with that icon.",
          components: [
            {
              component: "BottomNavigation",
              selector: "MuiBottomNavigation",
              props: "https://mui.com/material-ui/api/bottom-navigation/#props",
              css: "https://mui.com/material-ui/api/bottom-navigation/#css",
            },
            {
              component: "BottomNavigationAction",
              selector: "MuiBottomNavigationAction",
              props:
                "https://mui.com/material-ui/api/bottom-navigation-action/#props",
              css: "https://mui.com/material-ui/api/bottom-navigation-action/#css",
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
    value: {
      control: { type: "number" },
    },
    showLabels: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  render: ({ onChange, value, ...args }) => {
    return (
      <BottomNavigation value={value} onChange={onChange} {...args}>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  },
  args: {
    value: 0,
    showLabels: true,
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();
      return (
        <>
          <Story
            args={{
              ...args,
              onChange: (ev, newValue) =>
                updateArgs({
                  value: newValue,
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
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Basic() {
  return (
    <BottomNavigation ${argProps(storyContext)}>
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

        `,
      },
    },
  },
};
