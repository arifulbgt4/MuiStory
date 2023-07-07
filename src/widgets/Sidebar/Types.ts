import { ReactElement } from "react";

export interface SidebarOptions {}

interface NavsOptions {
  key: string;
  name: string;
  href: string;
  icon: ReactElement;
  nested?: NavsOptions[];
}

export interface NavigationOptions {
  key: string;
  title: string;
  navs: NavsOptions[];
}
