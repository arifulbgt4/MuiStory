import { Theme, Components } from "@mui/material/styles";

const MuiSelect: Components<Theme>["MuiSelect"] = {
  styleOverrides: {
    select: ({ theme, ownerState }) => ({}),
  },
};

const MuiNativeSelect: Components<Theme>["MuiNativeSelect"] = {
  styleOverrides: {
    select: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiSelect, MuiNativeSelect };
