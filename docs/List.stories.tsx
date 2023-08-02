import { ReactElement, Fragment, FC } from "react";
import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Collapse from "@mui/material/Collapse";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { argProps, overView } from "./utils/formatArgs";
import Paper from "@mui/material/Paper";
import { useArgs, useState } from "@storybook/addons";
import { SvgIconComponent } from "@mui/icons-material";

// Icons
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WorkIcon from "@mui/icons-material/Work";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ImageIcon from "@mui/icons-material/Image";
import HomeIcon from "@mui/icons-material/Home";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof List> = {
  title: "DATA DISPLAY/List",
  component: List,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "List",
          description:
            "Lists are continuous, vertical indexes of text or images.",
          components: [
            {
              component: "List",
              selector: "MuiList",
              props: "https://mui.com/material-ui/api/list/#props",
              css: "https://mui.com/material-ui/api/list/#css",
            },
            {
              component: "ListItem",
              selector: "MuiListItem",
              props: "https://mui.com/material-ui/api/list-item/#props",
              css: "https://mui.com/material-ui/api/list-item/#css",
            },
            {
              component: "ListItemAvatar",
              selector: "MuiListItemAvatar",
              props: "https://mui.com/material-ui/api/list-item-avatar/#props",
              css: "https://mui.com/material-ui/api/list-item-avatar/#css",
            },
            {
              component: "ListItemButton",
              selector: "MuiListItemButton",
              props: "https://mui.com/material-ui/api/list-item-button/#props",
              css: "https://mui.com/material-ui/api/list-item-button/#css",
            },
            {
              component: "ListItemIcon",
              selector: "MuiListItemIcon",
              props: "https://mui.com/material-ui/api/list-item-icon/#props",
              css: "https://mui.com/material-ui/api/list-item-icon/#css",
            },
            {
              component: "ListItemSecondaryAction",
              selector: "MuiListItemSecondaryAction",
              props:
                "https://mui.com/material-ui/api/list-item-secondary-action/#props",
              css: "https://mui.com/material-ui/api/list-item-secondary-action/#css",
            },
            {
              component: "ListItemText",
              selector: "MuiListItemText",
              props: "https://mui.com/material-ui/api/list-item-text/#props",
              css: "https://mui.com/material-ui/api/list-item-text/#css",
            },
            {
              component: "ListSubheader",
              selector: "MuiListSubheader",
              props: "https://mui.com/material-ui/api/list-subheader/#props",
              css: "https://mui.com/material-ui/api/list-subheader/#css",
            },
          ],
        }),
      },
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disablePadding: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "If `true`, vertical padding is removed from the list.",
    },
    dense: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "If `true`, compact vertical padding designed for keyboard and mouse input is used for the list and list items. The prop is available to descendant components as the `dense` context.",
    },
    subheader: {
      control: { type: "string" },
      description: "The content of the subheader, normally `ListSubheader`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

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

const NAVIGATIONS: NavOptions[] = [
  {
    key: "OverView",
    title: "Overview",
    navs: [
      {
        key: "OverView_Menu_one_example",
        name: "Menu one example",
        href: "/",
        icon: HomeIcon,
      },
      {
        key: "OverView_Menu_two_example",
        name: "Menu two example",
        href: "/menutwo",
        icon: BeachAccessIcon,
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
        icon: AutoGraphOutlinedIcon,
        nested: [
          {
            key: "Management_Menu_Label_two",
            name: "Menu Label two",
            href: "/faq",
            icon: AlignHorizontalCenterIcon,
          },
          {
            key: "Management_Menu_Label_2.2",
            name: "Menu Label 2.2",
            href: "/details/about",
            icon: WorkOutlineIcon,
          },
        ],
      },
      {
        key: "Management_Menu_two_Label_one",
        name: "Menu two Label one",
        href: "",
        icon: ImageIcon,
        nested: [
          {
            key: "Management_Menu_two_Label_2.1",
            name: "Menu two Label 2.1",
            href: "/details/post",
            icon: AspectRatioIcon,
          },
          {
            key: "Management_Menu_two_Label_2.2",
            name: "Menu two Label 2.2",
            href: "/details/about",
            icon: AllInclusiveIcon,
            nested: [
              {
                key: "Management_Menu_two_Label_3.1",
                name: "Menu two Label 3.1",
                href: "/details/aboutas",
                icon: AutoAwesomeMotionIcon,
              },
            ],
          },
        ],
      },
    ],
  },
];

const DEFUALT_NESTED_LEFT_PADDING: number = 1;

const NestedNavs = ({ navigation, nested = 2, open, setOpen }: any) => {
  const { icon: NavIcon } = navigation;

  const onNavigationHandle = (href: string, isNested: boolean) => {
    if (!Boolean(open.includes(isNested))) {
      setOpen((prevState: string[]) => [...prevState, isNested]);
      return;
    }
    setOpen((prevState: string[]) =>
      prevState.filter((d: any) => d !== isNested)
    );
  };

  return (
    <Fragment key={navigation.key}>
      <ListItemButton
        onClick={() => onNavigationHandle(navigation.href, navigation.key)}
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
              transform: Boolean(open.includes(navigation.key))
                ? "rotate(90deg)"
                : "rotate(0deg)",
              transition: "0.2s",
            }}
          />
        )}
      </ListItemButton>
      {Boolean(navigation.nested) && (
        <Collapse in={Boolean(open.includes(navigation.key))}>
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
                  open={open}
                  setOpen={setOpen}
                />
              );
            })}
          </List>
        </Collapse>
      )}
    </Fragment>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Lists: Story = {
  render: (args) => {
    return (
      <List {...args}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    );
  },
  args: {
    disablePadding: true,
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function Basic() {
  return (
    <List ${argProps(storyContext)}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}
        `,
      },
    },
  },
};

export const ListNavigation: Story = {
  render: ({
    groupCollapse,
    setGroupCollapse,
    open,
    setOpen,
    ...args
  }: any) => {
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
        <List {...args}>
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
                    <NestedNavs
                      key={navigation.key}
                      navigation={navigation}
                      open={open}
                      setOpen={setOpen}
                    />
                  ))}
                </Collapse>
              </Fragment>
            );
          })}
        </List>
      </Paper>
    );
  },
  args: {
    disablePadding: true,
  },
  decorators: [
    (Story) => {
      const [groupCollapse, setGroupCollapse] = useState<string[]>([""]);
      const [open, setOpen] = useState<string[]>([""]);
      const [args, updateArgs] = useArgs();
      return (
        <Story
          args={
            {
              open,
              setOpen,
              ...args,
              groupCollapse,
              setGroupCollapse,
            } as any
          }
        />
      );
    },
  ],
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
"use client";
import { FC, useState, Fragment } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ListSubheader from "@mui/material/ListSubheader";
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

export const NAVIGATIONS: NavOptions[] = [
  {
    key: "OverView",
    title: "Overview",
    navs: [
      {
        key: "OverView_Menu_one_example",
        name: "Menu one example",
        href: "/",
        icon: HomeIcon,
      },
      {
        key: "OverView_Menu_two_example",
        name: "Menu two example",
        href: "/menutwo",
        icon: BeachAccessIcon,
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
        icon: AutoGraphOutlinedIcon,
        nested: [
          {
            key: "Management_Menu_Label_two",
            name: "Menu Label two",
            href: "/faq",
            icon: AlignHorizontalCenterIcon,
          },
          {
            key: "Management_Menu_Label_2.2",
            name: "Menu Label 2.2",
            href: "/details/about",
            icon: WorkOutlineIcon,
          },
        ],
      },
      {
        key: "Management_Menu_two_Label_one",
        name: "Menu two Label one",
        href: "",
        icon: ImageIcon,
        nested: [
          {
            key: "Management_Menu_two_Label_2.1",
            name: "Menu two Label 2.1",
            href: "/details/post",
            icon: AspectRatioIcon,
          },
          {
            key: "Management_Menu_two_Label_2.2",
            name: "Menu two Label 2.2",
            href: "/details/about",
            icon: AllInclusiveIcon,
            nested: [
              {
                key: "Management_Menu_two_Label_3.1",
                name: "Menu two Label 3.1",
                href: "/details/aboutas",
                icon: AutoAwesomeMotionIcon,
              },
            ],
          },
        ],
      },
    ],
  },
];

export interface NestedNavOptioms {
  navigation: NavigationOptions;
  nested?: number;
}

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
          <List ${argProps(storyContext)}>
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

     
export default function Basic(){
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

  return(
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
  )
}
        `,
      },
    },
  },
};
