"use client";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState, createContext } from "react";

import GlobalStyles from "./utils/GlobalStyles";
import createEmotionCache from "./utils/createEmotionCache";
import palette from "./palette";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = createContext<{
  mode?: PaletteMode;
  setColorMode: (colorMode: PaletteMode) => PaletteMode;
}>({
  setColorMode: (colorMode: PaletteMode): PaletteMode => colorMode,
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
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      setColorMode: (colorModeGet: PaletteMode): void => {
        setMode(colorModeGet);
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: palette(mode),
      }),
    [mode]
  );

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider
        value={{
          setColorMode: (setModeColor: PaletteMode): any => {
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
