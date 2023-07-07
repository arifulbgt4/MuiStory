import { Theme, Components } from "@mui/material/styles";

const MuiMenu: Components<Theme>["MuiMenu"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiMenuItem: Components<Theme>["MuiMenuItem"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default {
  MuiMenu,
  MuiMenuItem,
};
