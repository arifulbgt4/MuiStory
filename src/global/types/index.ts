import { SvgIconComponent } from "@mui/icons-material";

export interface NavOptions {
  key: string;
  title: string;
  navs: NavigationOptions[];
}

export interface NavigationOptions {
  key: string;
  name: string;
  href: string;
  icon: SvgIconComponent;
  nested?: NavigationOptions[];
}
