import "@fontsource/material-icons";
import type { Preview } from "@storybook/react";
import { PaletteMode } from "@mui/material";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { themes } from "@storybook/theming";
import * as locales from "@mui/material/locale";

import light from "../src/theme/palette/light";
import dark from "../src/theme/palette/dark";
import componentsOverride from "../src/theme/overrides";
import typography from "../src/theme/typography";
import shadowsTheme from "../src/theme/shadows";

type SupportedLocales = keyof typeof locales;

export const DEFAULT_THEME: PaletteMode = "dark";
export const DEFAULT_LOCAL: SupportedLocales = "enUS";

export const lightTheme = createTheme(
  {
    palette: {
      mode: "light",
      ...light,
    },
    typography,
    shadows: shadowsTheme(light),
    components: componentsOverride,
  },
  locales[DEFAULT_LOCAL]
);

export const darkTheme = createTheme(
  {
    palette: {
      mode: "dark",
      ...dark,
    },
    typography,
    shadows: shadowsTheme(dark),
    components: componentsOverride,
  },
  locales[DEFAULT_LOCAL]
);

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
    options: {
      storySort: {
        order: [
          "Overview",
          "Installation",
          "Usage",
          "Deployment",
          "Dependencies",
          "Package & License",
          "Environment Variables",
        ],
      },
    },
    nextRouter: {
      Provider: AppRouterContext.Provider, // next 13 next 13 (using next/navigation)
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
  ] as any,
};

export default preview;
