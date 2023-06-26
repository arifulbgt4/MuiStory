import { Theme, Components } from "@mui/material/styles";

const MuiBottomNavigation: Components<Theme>["MuiBottomNavigation"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};
const MuiBottomNavigationAction: Components<Theme>["MuiBottomNavigationAction"] =
  {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({}),
    },
  };

export default { MuiBottomNavigation, MuiBottomNavigationAction };
