import { SvgIconComponent } from "@mui/icons-material";

export interface AnyObject {
  [key: string]: any;
}

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

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}
