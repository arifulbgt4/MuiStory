import { Theme, Components } from "@mui/material/styles";

const MuiAppBar: Components<Theme>["MuiAppBar"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiAppBar };
