import {
  PaletteMode,
  PaletteOptions as PaletteOptionsCustom,
  SimplePaletteColorOptions,
  Color,
  TypeText as TypeTextOptions,
  TypeAction as TypeActionOption,
  TypeBackground as TypeBackgroundOption,
} from "@mui/material";

import dark from "./dark";
import light from "./light";

export interface PaletteColorOptions extends SimplePaletteColorOptions {
  darkens: string;
}

export interface GreyColorOptions extends Color {}

export interface TypeText extends TypeTextOptions {}

export interface TypeAction extends TypeActionOption {}

export interface TypeBackground extends TypeBackgroundOption {}

export interface PaletteOptions extends PaletteOptionsCustom {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  info?: PaletteColorOptions;
  success?: PaletteColorOptions;
  grey?: GreyColorOptions;
  text?: TypeText;
  action: TypeAction;
  background: TypeBackground;
}

export default (mode: PaletteMode): PaletteOptionsCustom => {
  return {
    mode,
    ...(mode === "light" ? light : dark),
  };
};
