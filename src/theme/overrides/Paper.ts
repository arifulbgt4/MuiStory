import { Theme, Components } from "@mui/material/styles";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {}
}

const Paper: Components<Theme>["MuiPaper"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { Paper };
