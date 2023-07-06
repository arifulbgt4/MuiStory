import { forwardRef } from "react";
import LinkNext, { LinkProps } from "next/link";
import { Theme, Components } from "@mui/material/styles";
import { MenuItemProps as MenuItemMUIProps } from "@mui/material";

// eslint-disable-next-line react/display-name
const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, "href"> & { href: LinkProps["href"] }
>((props, ref) => {
  const { href, ...other } = props;
  return <LinkNext ref={ref} href={href} {...other} />;
});

const MuiMenu: Components<Theme>["MuiMenu"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiMenuItem: Components<Theme>["MuiMenuItem"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
  defaultProps: {
    component: LinkBehavior,
  } as MenuItemMUIProps,
};

export default {
  MuiMenu,
  MuiMenuItem,
};
