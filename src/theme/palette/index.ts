import { PaletteMode, PaletteOptions } from "@mui/material";

import dark from "./dark";
import light from "./light";

export interface PaletteOptionsCustom extends PaletteOptions {}

export default (mode: PaletteMode): PaletteOptionsCustom => {
  return {
    mode,
    ...(mode === "light" ? light : dark),
  };
};
