import { Theme, Components } from "@mui/material/styles";

const MuiTooltip: Components<Theme>["MuiTooltip"] = {
  styleOverrides: {
    popper: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiTooltip };
