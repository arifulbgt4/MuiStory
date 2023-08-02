import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: "SURFACES/Card",
  component: Card,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Card",
          description:
            "Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.",
          components: [
            {
              component: "Card",
              selector: "MuiCard",
              props: "https://mui.com/material-ui/api/card/#props",
              css: "https://mui.com/material-ui/api/card/#css",
            },
            {
              component: "CardActionArea",
              selector: "MuiCardActionArea",
              props: "https://mui.com/material-ui/api/card-action-area/#props",
              css: "https://mui.com/material-ui/api/card-action-area/#css",
            },
            {
              component: "CardActions",
              selector: "MuiCardActions",
              props: "https://mui.com/material-ui/api/card-actions/#props",
              css: "https://mui.com/material-ui/api/card-actions/#css",
            },
            {
              component: "CardContent",
              selector: "MuiCardContent",
              props: "https://mui.com/material-ui/api/card-content/#props",
              css: "https://mui.com/material-ui/api/card-content/#css",
            },
            {
              component: "CardHeader",
              selector: "MuiCardHeader",
              props: "https://mui.com/material-ui/api/card-header/#props",
              css: "https://mui.com/material-ui/api/card-header/#css",
            },
            {
              component: "CardMedia",
              selector: "MuiCardMedia",
              props: "https://mui.com/material-ui/api/card-media/#props",
              css: "https://mui.com/material-ui/api/card-media/#css",
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
    raised: {
      control: { type: "boolean" },
      description: "If `true`, the card will use raised styling.",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Cards: Story = {
  render: (args) => {
    return (
      <>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </>
    );
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Basic() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <Card ${argProps(storyContext)}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

        `,
      },
    },
  },
};
