import { ReactElement } from "react";

export interface SidebarOptions {}

export interface NestedNavOptioms {
  navigation: NavigationOptions;
  nested?: number;
}

export interface NavigationOptions {
  key: string;
  name: string;
  href: string;
  icon: ReactElement;
  nested?: NavigationOptions[];
}

export interface NavOptions {
  key: string;
  title: string;
  navs: NavigationOptions[];
}
