import { Theme, Components } from "@mui/material/styles";

const MuiSwitch: Components<Theme>["MuiSwitch"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiSwitch };
