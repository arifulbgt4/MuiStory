import { Theme, Components } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

const MuiButton: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
  variants: [
    {
      props: { variant: "dashed" },
      style: ({ theme }) => ({}),
    },
    {
      props: { variant: "dashed", color: "secondary" },
      style: ({ theme }) => ({}),
    },
  ],
};

export default { MuiButton };
