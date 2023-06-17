import { Theme, Components } from "@mui/material/styles";

const MuiList: Components<Theme>["MuiList"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiListItem: Components<Theme>["MuiListItem"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiList, MuiListItem };
