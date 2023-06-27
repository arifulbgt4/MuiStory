import { Theme, Components } from "@mui/material/styles";

const MuiPagination: Components<Theme>["MuiPagination"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiPaginationItem: Components<Theme>["MuiPaginationItem"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiPagination, MuiPaginationItem };
