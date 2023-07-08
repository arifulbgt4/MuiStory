"use client";
import { FC, useState, Fragment } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Collapse from "@mui/material/Collapse";
import { useRouter } from "next/navigation";
// Icons
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ImageIcon from "@mui/icons-material/Image";
import HomeIcon from "@mui/icons-material/Home";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

import {
  SidebarOptions,
  NestedNavOptioms,
  NavOptions,
  NavigationOptions,
} from "./Types";

const NAVIGATIONS: NavOptions[] = [
  {
    key: "OverView",
    title: "Overview",
    navs: [
      {
        key: "OverView_Menu_one_example",
        name: "Menu one example",
        href: "/",
        icon: <HomeIcon />,
      },
      {
        key: "OverView_Menu_two_example",
        name: "Menu two example",
        href: "/menutwo",
        icon: <ImageIcon />,
      },
    ],
  },
  {
    key: "Management",
    title: "Management",
    navs: [
      {
        key: "Management_Menu Label one",
        name: "Menu Label one",
        href: "#",
        icon: <AutoGraphOutlinedIcon />,
        nested: [
          {
            key: "Management_Menu_Label_two",
            name: "Menu Label two",
            href: "/faq",
            icon: <AlignHorizontalCenterIcon fontSize="small" />,
          },
          {
            key: "Management_Menu_Label_2.2",
            name: "Menu Label 2.2",
            href: "/details/about",
            icon: <WorkOutlineIcon fontSize="small" />,
          },
        ],
      },
      {
        key: "Management_Menu_two_Label_one",
        name: "Menu two Label one",
        href: "",
        icon: <BeachAccessIcon />,
        nested: [
          {
            key: "Management_Menu_two_Label_2.1",
            name: "Menu two Label 2.1",
            href: "/details/post",
            icon: <AspectRatioIcon fontSize="small" />,
          },
          {
            key: "Management_Menu_two_Label_2.2",
            name: "Menu two Label 2.2",
            href: "/details/about",
            icon: <AllInclusiveIcon fontSize="small" />,
            nested: [
              {
                key: "Management_Menu_two_Label_3.1",
                name: "Menu two Label 3.1",
                href: "/details/aboutas",
                icon: <AutoAwesomeMotionIcon fontSize="small" />,
              },
            ],
          },
        ],
      },
    ],
  },
];

const NestedNavs: FC<NestedNavOptioms> = ({ navigation, nested = 2 }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  const onNavigationHandle = (href: string, isNested: boolean) => {
    if (isNested) {
      setOpen((prev) => !prev);
      return;
    }
    router.push(href);
  };

  return (
    <Fragment key={navigation.key}>
      <ListItemButton
        onClick={() =>
          onNavigationHandle(navigation.href, Boolean(navigation.nested))
        }
        sx={{
          pl: nested,
        }}
      >
        <ListItemIcon>{navigation.icon}</ListItemIcon>
        <ListItemText primary={navigation.name} />

        {Boolean(navigation.nested) && (
          <KeyboardArrowRight
            sx={{
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
              transition: "0.2s",
            }}
          />
        )}
      </ListItemButton>
      {Boolean(navigation.nested) && (
        <Collapse in={open}>
          <List disablePadding>
            {navigation.nested.map((nest: NavigationOptions) => {
              if (!Boolean(nest.nested)) {
                return (
                  <ListItemButton
                    key={nest.key}
                    onClick={() =>
                      onNavigationHandle(nest.href, Boolean(nest.nested))
                    }
                    sx={{
                      pl: nested + 1,
                    }}
                  >
                    <ListItemIcon>{nest.icon}</ListItemIcon>
                    <ListItemText primary={nest.name} />
                  </ListItemButton>
                );
              }
              return (
                <NestedNavs
                  key={nest.key}
                  navigation={nest}
                  nested={nested + 1}
                />
              );
            })}
          </List>
        </Collapse>
      )}
    </Fragment>
  );
};

const Sidebar: FC<SidebarOptions> = () => {
  const [groupCollapse, setGroupCollapse] = useState<string[]>([""]);

  return (
    <Paper>
      <List disablePadding>
        {NAVIGATIONS.map((nav: NavOptions) => {
          return (
            <Fragment key={nav.key}>
              <ListSubheader
                disableSticky
                onClick={() => {
                  if (!Boolean(groupCollapse.includes(nav.key))) {
                    setGroupCollapse((prevState) => [...prevState, nav.key]);
                  } else {
                    setGroupCollapse((prevState) =>
                      prevState.filter((d) => d !== nav.key)
                    );
                  }
                }}
                sx={{
                  cursor: "pointer",
                }}
              >
                {nav.title}
              </ListSubheader>
              <Collapse in={Boolean(!groupCollapse.includes(nav.key))}>
                {nav.navs.map((navigation: NavigationOptions) => (
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
