import { Theme, Components } from "@mui/material/styles";

const MuiCircularProgress: Components<Theme>["MuiCircularProgress"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiLinearProgress: Components<Theme>["MuiLinearProgress"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiCircularProgress, MuiLinearProgress };
