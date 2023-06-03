import { useContext } from "react";
import Button from "@mui/material/Button";

import { ColorModeContext } from "../../theme";

const ThemeingColorMode = () => {
  const { setColorMode } = useContext(ColorModeContext);
  return (
    <Button onClick={() => setColorMode("dark")}>ThemeingColorMode</Button>
  );
};

export default ThemeingColorMode;
