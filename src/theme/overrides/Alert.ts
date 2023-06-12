import { Theme, Components } from "@mui/material/styles";

const MuiAlert: Components<Theme>["MuiAlert"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiAlertTitle: Components<Theme>["MuiAlertTitle"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiAlert, MuiAlertTitle };
