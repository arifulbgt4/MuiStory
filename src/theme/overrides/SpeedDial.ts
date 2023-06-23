import { Theme, Components } from "@mui/material/styles";

const MuiSpeedDial: Components<Theme>["MuiSpeedDial"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiSpeedDialAction: Components<Theme>["MuiSpeedDialAction"] = {
  styleOverrides: {
    fab: ({ theme, ownerState }) => ({}),
  },
};

const MuiSpeedDialIcon: Components<Theme>["MuiSpeedDialIcon"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiSpeedDial, MuiSpeedDialAction, MuiSpeedDialIcon };
