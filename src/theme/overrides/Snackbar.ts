import { Theme, Components } from "@mui/material/styles";

const MuiSnackbar: Components<Theme>["MuiSnackbar"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiSnackbarContent: Components<Theme>["MuiSnackbarContent"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiSnackbar, MuiSnackbarContent };
