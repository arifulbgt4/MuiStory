import { Theme, Components } from "@mui/material/styles";

const MuiTableContainer: Components<Theme>["MuiTableContainer"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiTable: Components<Theme>["MuiTable"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiTableContainer, MuiTable };
