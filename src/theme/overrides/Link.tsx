import { forwardRef } from "react";
import LinkNext, { LinkProps } from "next/link";
import { Theme, Components } from "@mui/material/styles";
import { LinkProps as LinkMUIProps } from "@mui/material";

// eslint-disable-next-line react/display-name
const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, "href"> & { href: LinkProps["href"] }
>((props, ref) => {
  const { href, ...other } = props;
  return <LinkNext ref={ref} href={href} {...other} />;
});

const MuiLink: Components<Theme>["MuiLink"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
  defaultProps: {
    component: LinkBehavior,
  } as unknown as LinkMUIProps,
};

export default { MuiLink };
