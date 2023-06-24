import { Theme, Components } from "@mui/material/styles";

const MuiModal: Components<Theme>["MuiModal"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiModal };
