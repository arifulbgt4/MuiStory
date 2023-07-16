import { Theme, Components } from "@mui/material/styles";

const MuiFormControl: Components<Theme>["MuiFormControl"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};
const MuiAutocomplete: Components<Theme>["MuiAutocomplete"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiFormControl,MuiAutocomplete };
