import { ThemeOptions, CardClasses } from "@mui/material";

export interface CardOptions {
  MuiCard: {
    styleOverrides?: {
      root?: {};
    };
  };
}

export default function Card(theme: ThemeOptions): CardOptions {
  return {
    MuiCard: {},
  };
}
