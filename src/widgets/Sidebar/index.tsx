"use client";
import { FC, useState, Fragment } from "react";
import Paper from "@mui/material/Paper";
import { Theme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Home from "@mui/icons-material/Home";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import Divider from "@mui/material/Divider";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Collapse from "@mui/material/Collapse";
import { useRouter } from "next/navigation";

import { SidebarOptions, NavigationOptions } from "./Types";

const DATA: NavigationOptions[] = [
  {
    key: "OverView",
    title: "Over view",
    navs: [
      {
        key: "OverView_home",
        name: "Home",
        href: "/",
        icon: <Home />,
      },
      {
        key: "OverView_details",
        name: "Details",
        href: "/details",
        icon: <Home />,
      },
    ],
  },
  {
    key: "Management",
    title: "Management",
    navs: [
      {
        key: "Management_faq",
        name: "Faq",
        href: "#",
        icon: <Home />,
        nested: [
          {
            key: "Management_faq__post",
            name: "Faq",
            href: "/faq",
            icon: <CircleRoundedIcon fontSize="small" />,
          },
          {
            key: "Management_faq__about",
            name: "Details about",
            href: "/details/about",
            icon: <CircleRoundedIcon />,
          },
        ],
      },
      {
        key: "Management_details",
        name: "Details",
        href: "",
        icon: <Home />,
        nested: [
          {
            key: "Management_details__post",
            name: "Details post",
            href: "/details/post",
            icon: <Home />,
          },
          {
            key: "Management_details__about",
            name: "Details about",
            href: "/details/about",
            icon: <Home />,
            nested: [
              {
                key: "Management_details__about_as",
                name: "Details about as",
                href: "/details/aboutas",
                icon: <Home />,
              },
            ],
          },
        ],
      },
    ],
  },
];

const NestedNavs = ({ nav }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  return (
    <Fragment key={nav?.key}>
      <ListItemButton onClick={() => setOpen((prev) => !prev)}>
        <ListItemIcon>{nav?.icon}</ListItemIcon>
        <ListItemText primary={nav?.name} />

        <KeyboardArrowRight
          sx={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "0.2s",
          }}
        />
      </ListItemButton>
      <Collapse in={open}>
        <List disablePadding>
          {nav?.nested?.map((nest: any) => {
            if (!Boolean(nest?.nested)) {
              return (
                <ListItemButton
                  key={nest.key}
                  onClick={() => router.push(nest.href)}
                >
                  <ListItemIcon>{nest.icon}</ListItemIcon>
                  <ListItemText primary={nest.name} />
                </ListItemButton>
              );
            }
            return <NestedNavs key={nest.key} nav={nest} />;
          })}
        </List>
      </Collapse>
    </Fragment>
  );
};

const Sidebar: FC<SidebarOptions> = () => {
  const [groupCollapse, setGroupCollapse] = useState<string[]>([""]);

  const router = useRouter();

  return (
    <Paper>
      <List disablePadding>
        {DATA.map((item) => {
          return (
            <Fragment key={item.key}>
              <ListSubheader
                disableSticky
                onClick={() => {
                  if (!Boolean(groupCollapse.includes(item.key))) {
                    setGroupCollapse((prevState) => [...prevState, item.key]);
                  } else {
                    setGroupCollapse((prevState) =>
                      prevState.filter((d) => d !== item.key)
                    );
                  }
                }}
                sx={{
                  cursor: "pointer",
                }}
              >
                {item.title}
              </ListSubheader>
              <Collapse in={Boolean(!groupCollapse.includes(item.key))}>
                {item.navs.map((nav) => {
                  if (!Boolean(nav?.nested)) {
                    return (
                      <ListItemButton
                        key={nav.key}
                        onClick={() => router.push(nav.href)}
                      >
                        <ListItemIcon>{nav.icon}</ListItemIcon>
                        <ListItemText primary={nav.name} />
                      </ListItemButton>
                    );
                  }

                  return <NestedNavs key={nav.key} nav={nav} />;
                })}
              </Collapse>
            </Fragment>
          );
        })}
      </List>
    </Paper>
  );
};

export default Sidebar;
