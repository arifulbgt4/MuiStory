import { Theme, Components } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }
  interface ButtonPropsColorOverrides {}
  interface ButtonPropsSizeOverrides {}
}

const MuiButton: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
  variants: [
    {
      props: { variant: "rounded" },
      style: ({ theme }) => ({
        borderRadius: 20,
      }),
    },
  ],
};

export default { MuiButton };
