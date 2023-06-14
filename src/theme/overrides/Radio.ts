import { Theme, Components } from "@mui/material/styles";

const MuiRadio: Components<Theme>["MuiRadio"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

// TODO MuiRadioGroup styles missing here
// Didn't get the variants property

export default { MuiRadio };
