import { Theme, Components } from "@mui/material/styles";

const MuiDivider: Components<Theme>["MuiDivider"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiDivider };
