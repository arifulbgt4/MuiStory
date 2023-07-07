"use client";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState, createContext } from "react";
import * as locales from "@mui/material/locale";

import GlobalStyles from "./utils/GlobalStyles";
import createEmotionCache from "./utils/createEmotionCache";
import palette, { PaletteOptions } from "./palette";
import typography from "./typography";
import shadowsTheme from "./shadows";
import componentsOverride from "./overrides";

type SupportedLocales = keyof typeof locales;

const DEFAULT_PALETTE_MODE: PaletteMode = "dark";
const DEFAULT_LOCAL: SupportedLocales = "enUS";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = createContext<{
  toggleColorMode: () => void;
  toggleLocalLang: (mode: SupportedLocales) => void;
}>({
  toggleColorMode: (): void => {},
  toggleLocalLang: (mode: SupportedLocales) => {},
});

export interface ThemeContextProviderProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

const ThemeContextProvider = ({
  children,
  emotionCache = clientSideEmotionCache,
}: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>(DEFAULT_PALETTE_MODE);
  const [locale, setLocale] = useState<SupportedLocales>(DEFAULT_LOCAL);

  const themingUpdate = useMemo(
    () => ({
      toggleColorMode: (): void => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
      toggleLocalLang: (mode: SupportedLocales): void => {
        setLocale(mode);
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
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider value={themingUpdate}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
};

export default ThemeContextProvider;
