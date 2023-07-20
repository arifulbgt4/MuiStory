import { Theme, Components } from "@mui/material/styles";

const MuiTextField: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiTextField };
