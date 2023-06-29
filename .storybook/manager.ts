import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import { create } from "@storybook/theming/create";
import { DEFAULT_THEME } from "./preview";

const theme = create({
  base: "dark",
  brandTitle: "Mui & Next.js Design System",
  // brandUrl: 'https://example.com',
  //   brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  brandTarget: "_self",
});

addons.setConfig({
  theme,
});
