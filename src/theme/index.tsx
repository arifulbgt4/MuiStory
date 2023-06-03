"use client";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState, createContext } from "react";

import GlobalStyles from "./utils/GlobalStyles";
import createEmotionCache from "./utils/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Themeing mode options
export type ModeOptions = "light" | "dark";

export const ColorModeContext = createContext({
  setColorMode: (colorMode: ModeOptions) => {},
});

export interface ThemeContextProviderProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}
export const ThemeContextProvider = ({
  children,
  emotionCache = clientSideEmotionCache,
}: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<ModeOptions>("light");

  // TODO Remove as soon as possible the console
  console.log("mode", mode);

  const colorMode = useMemo(
    () => ({
      setColorMode: (colorMode: ModeOptions) => {
        setMode(colorMode);
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
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
