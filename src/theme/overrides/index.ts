import { ThemeOptions } from "@mui/material";
import Card from "./Card";

export default function ComponentsOverrides(theme: ThemeOptions) {
  return Object.assign(Card(theme));
}
