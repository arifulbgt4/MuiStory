"use client";

import { useContext } from "react";
import Button from "@mui/material/Button";

import { ColorModeContext } from "../../theme";

const ThemeingColorMode = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  return <Button onClick={toggleColorMode}>ThemeingColorMode</Button>;
};

export default ThemeingColorMode;
