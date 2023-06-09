"use client";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState, createContext } from "react";

import GlobalStyles from "./utils/GlobalStyles";
import createEmotionCache from "./utils/createEmotionCache";
import palette from "./palette";
import typography from "./typography";
import shadows from "./shadows";
import componentsOverride from "./overrides";

const DEFAULT_PALETTE_MODE: PaletteMode = "light";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = createContext<{
  toggleColorMode: () => void;
}>({
  toggleColorMode: (): void => {},
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

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (): void => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: palette(mode),
        // spacing: (factor: number) => `${0.5 * factor}rem`,
        typography,
        shadows,
        components: componentsOverride,
      }),
    [mode]
  );

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider value={colorMode}>
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
