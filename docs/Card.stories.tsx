import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { CardActionArea, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardMedia } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Favorite } from "@mui/icons-material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

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

export const OutLined: Story = {
  render: (args) => {
    return (
      <Card {...args} sx={{ maxWidth: 345 }}>
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
  },
  args: {
    variant: "outlined",
  },
};
export const RecipeReviewCard: Story = {
  render: (args) => {
    return (
      <Card {...args} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>
          <ExpandMoreIcon />
        </CardActions>
      </Card>
    );
  },
  args: {},
};
export const MediaCard: Story = {
  render: (args) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.cnn.com/api/v1/images/stellar/prod/230322124550-06-kangaroo-culls-nike-puma.jpg?c=16x9&q=w_800,c_fill"
          title="kangaroo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  },
  args: {},
};
export const ActionAreaCard: Story = {
  render: (args) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://media.cnn.com/api/v1/images/stellar/prod/230712115127-white-tailed-deer-file.jpg?c=original"
            alt="deer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  },
  args: {},
};
export const MultiActionAreaCard: Story = {
  render: (args) => {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://media.cnn.com/api/v1/images/stellar/prod/230712115127-white-tailed-deer-file.jpg?c=original"
            alt="deer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    );
  },
  args: {},
};
export const MediaControlCard: Story = {
  render: (args) => {
    return (
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              <SkipNextIcon />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=1024"
          alt="Live from space album cover"
        />
      </Card>
    );
  },
  args: {},
};
