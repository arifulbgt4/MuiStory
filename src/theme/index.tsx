"use client";

import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState, createContext } from "react";
import * as locales from "@mui/material/locale";

import GlobalStyles from "./utils/GlobalStyles";
import palette, { PaletteOptions } from "./palette";
import typography from "./typography";
import shadowsTheme from "./shadows";
import componentsOverride from "./overrides";

type SupportedLocales = keyof typeof locales;

const DEFAULT_PALETTE_MODE: PaletteMode = "dark";
const DEFAULT_LOCAL: SupportedLocales = "enUS";

export const ColorModeContext = createContext<{
  toggleColorMode: () => void;
  toggleLocalLang: (mode: SupportedLocales) => void;
}>({
  toggleColorMode: (): void => {},
  toggleLocalLang: (mode: SupportedLocales) => {},
});

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>(DEFAULT_PALETTE_MODE);
  const [locale, setLocale] = useState<SupportedLocales>(DEFAULT_LOCAL);

  const themingUpdate = useMemo(
    () => ({
      toggleColorMode: (): void => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
      toggleLocalLang: (lang: SupportedLocales): void => {
        setLocale(lang);
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme(
        {
          palette: palette(mode),
          // spacing: (factor: number) => `${0.5 * factor}rem`,
          typography,
          shadows: shadowsTheme(palette(mode) as PaletteOptions),
          components: componentsOverride,
        },
        locales[locale]
      ),
    [mode, locale]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={themingUpdate}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
};

export default ThemeContextProvider;
