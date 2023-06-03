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

export const ColorModeContext = createContext<{
  mode?: ModeOptions;
  setColorMode: (colorMode: ModeOptions) => ModeOptions;
}>({
  setColorMode: (colorMode: ModeOptions): ModeOptions => colorMode,
  mode: "light",
});

export interface ThemeContextProviderProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

const ThemeContextProvider = ({
  children,
  emotionCache = clientSideEmotionCache,
}: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<ModeOptions>("light");

  const colorMode = useMemo(
    () => ({
      setColorMode: (colorModeGet: ModeOptions): void => {
        setMode(colorModeGet);
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
      <ColorModeContext.Provider
        value={{
          setColorMode: (setModeColor: ModeOptions): any => {
            colorMode.setColorMode(setModeColor);
          },
          mode,
        }}
      >
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
