import "@fontsource/material-icons";
import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { themes } from "@storybook/theming";

import light from "../src/theme/palette/light";
import dark from "../src/theme/palette/dark";

const DEFAULT_THEME: "light" | "dark" = "light";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...light,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...dark,
  },
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes[DEFAULT_THEME],
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: DEFAULT_THEME,
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
