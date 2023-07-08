"use client";
import { FC, useState, Fragment } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";

import NestedNavs from "./NestedNavs";
import { NAVIGATIONS } from "src/global/navigations";
import { NavOptions, NavigationOptions } from "src/global/types";
import { SidebarOptions } from "./Types";

const Sidebar: FC<SidebarOptions> = () => {
  const [groupCollapse, setGroupCollapse] = useState<string[]>([""]);

  const onHandleCollapse = (navKey: string) => {
    if (!Boolean(groupCollapse.includes(navKey))) {
      setGroupCollapse((prevState: string[]) => [...prevState, navKey]);
      return;
    }
    setGroupCollapse((prevState: string[]) =>
      prevState.filter((d: string) => d !== navKey)
    );
  };

  return (
    <Paper>
      <List disablePadding>
        {NAVIGATIONS.map(({ key, title, navs }: NavOptions) => {
          return (
            <Fragment key={key}>
              <ListSubheader
                disableSticky
                onClick={() => onHandleCollapse(key)}
                sx={{
                  cursor: "pointer",
                }}
              >
                {title}
              </ListSubheader>
              <Collapse in={Boolean(!groupCollapse.includes(key))}>
                {navs.map((navigation: NavigationOptions) => (
                  <NestedNavs key={navigation.key} navigation={navigation} />
                ))}
              </Collapse>
            </Fragment>
          );
        })}
      </List>
    </Paper>
  );
};

export default Sidebar;
