import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<any> = {
  title: "SURFACES/Accordion",
  component: Box,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Accordion",
          description:
            "An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.",
          components: [
            {
              component: "Accordion",
              selector: "MuiAccordion",
              props: "https://mui.com/material-ui/api/accordion/#props",
              css: "https://mui.com/material-ui/api/accordion/#css",
            },
            {
              component: "AccordionDetails",
              selector: "MuiAccordionDetails",
              props: "https://mui.com/material-ui/api/accordion-details/#props",
              css: "https://mui.com/material-ui/api/accordion-details/#css",
            },
            {
              component: "AccordionSummary",
              selector: "MuiAccordionSummary",
              props: "https://mui.com/material-ui/api/accordion-summary/#props",
              css: "https://mui.com/material-ui/api/accordion-summary/#css",
            },
            {
              component: "AccordionActions",
              selector: "MuiAccordionActions",
              props: "https://mui.com/material-ui/api/accordion-actions/#props",
              css: "https://mui.com/material-ui/api/accordion-actions/#css",
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
    defaultExpanded: {
      control: { type: "boolean" },
      description: "If `true`, expands the accordion by default.",
      defaultValue: false,
    },
    disabled: {
      control: { type: "boolean" },
      description: "If `true`, expands the accordion by default.",
      defaultValue: false,
    },
    disableGutters: {
      control: { type: "boolean" },
      description: "If `true`, expands the accordion by default.",
      defaultValue: false,
    },
    expanded: {
      control: { type: "boolean" },
      description: "If `true`, expands the accordion by default.",
      defaultValue: false,
    },
    square: {
      control: { type: "boolean" },
      description: "If `true`, expands the accordion by default.",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Accordions: Story = {
  render: (args) => {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Basic() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
        `,
      },
    },
  },
};
