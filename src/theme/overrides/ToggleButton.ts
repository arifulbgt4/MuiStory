import { Theme, Components } from "@mui/material/styles";

const MuiToggleButton: Components<Theme>["MuiToggleButton"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiToggleButtonGroup: Components<Theme>["MuiToggleButtonGroup"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiToggleButton, MuiToggleButtonGroup };
