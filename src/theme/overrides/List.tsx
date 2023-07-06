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

const MuiListItemButton: Components<Theme>["MuiListItemButton"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiListItemIcon: Components<Theme>["MuiListItemIcon"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiList, MuiListItem, MuiListItemIcon, MuiListItemButton };
