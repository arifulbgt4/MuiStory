import { Theme, Components } from "@mui/material/styles";

const MuiAvatar: Components<Theme>["MuiAvatar"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiAvatarGroup: Components<Theme>["MuiAvatarGroup"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiAvatar, MuiAvatarGroup };
