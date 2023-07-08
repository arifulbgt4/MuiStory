"use client";
import { FC, useState, Fragment } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Collapse from "@mui/material/Collapse";
import { useRouter } from "next/navigation";

import { NavigationOptions } from "src/global/types";
import { NestedNavOptioms } from "./Types";

const DEFUALT_NESTED_LEFT_PADDING: number = 1;

const NestedNavs: FC<NestedNavOptioms> = ({ navigation, nested = 2 }) => {
  const { icon: NavIcon } = navigation;

  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  const onNavigationHandle = (href: string, isNested: boolean) => {
    if (isNested) {
      setOpen((prevState: boolean) => !prevState);
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
        <ListItemIcon>
          <NavIcon fontSize={nested === 2 ? "medium" : "small"} />
        </ListItemIcon>
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
            {navigation?.nested?.map((nest: NavigationOptions) => {
              if (!Boolean(nest.nested)) {
                const { icon: NestIcon } = nest;
                return (
                  <ListItemButton
                    key={nest.key}
                    onClick={() =>
                      onNavigationHandle(nest.href, Boolean(nest.nested))
                    }
                    sx={{
                      pl: nested + DEFUALT_NESTED_LEFT_PADDING,
                    }}
                  >
                    <ListItemIcon>
                      <NestIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={nest.name} />
                  </ListItemButton>
                );
              }
              return (
                <NestedNavs
                  key={nest.key}
                  navigation={nest}
                  nested={nested + DEFUALT_NESTED_LEFT_PADDING}
                />
              );
            })}
          </List>
        </Collapse>
      )}
    </Fragment>
  );
};

export default NestedNavs;
