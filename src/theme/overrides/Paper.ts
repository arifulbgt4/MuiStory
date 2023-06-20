import { Theme, Components } from "@mui/material/styles";

const Paper: Components<Theme>["MuiPaper"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { Paper };
