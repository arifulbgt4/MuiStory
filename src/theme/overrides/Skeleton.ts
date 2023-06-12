import { Theme, Components } from "@mui/material/styles";

const MuiSkeleton: Components<Theme>["MuiSkeleton"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiSkeleton };
