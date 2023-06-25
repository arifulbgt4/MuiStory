import { Theme, Components } from "@mui/material/styles";

const MuiDrawer: Components<Theme>["MuiDrawer"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiDrawer };
