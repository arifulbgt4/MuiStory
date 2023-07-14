/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import light from "src/theme/palette/light";
import dark from "src/theme/palette/dark";
import { Paper, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

const lightPallete: any = light;
const darkPallete: any = dark;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Box> = {
  title: "Themeing/Palette",
  component: Box,
  parameters: {
    // docs: {
    //   source: { language: "tsx", format: true, type: "dynamic" },
    //   canvas: { sourceState: "shown" },
    // },
    layout: "centered",
    viewport: {
      disable: true,
    },
  },
  // tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Box>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Palette: Story = {
  args: {
    children: (
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <h2>Light</h2>
          <p
            style={{
              padding: "20px",
              background: "#e65100",
            }}
          >
            If you need to change the light palette then change in the file:
            <code>
              <pre
                style={{
                  background: "#333",
                  padding: "10px",
                  color: "#92C379",
                  borderRadius: 5,
                }}
              >
                src/theme/palette/light.ts
              </pre>
            </code>
            <code
              style={{ color: "red", fontStyle: "italic", background: "#fff" }}
            >
              Note:
            </code>
            Don't change anywhere except the file.
          </p>
          {Object.keys(lightPallete as any).map((key, i) => {
            return (
              <Fragment key={i}>
                <Typography
                  variant="h6"
                  textTransform="capitalize"
                  mb={1}
                  ml={2}
                >
                  {key}
                </Typography>
                <Stack direction="row" flexWrap="wrap" mb={3}>
                  {typeof lightPallete[key] === "string" ? (
                    <Paper
                      sx={{
                        m: 2,
                        p: 2,
                      }}
                    >
                      {key}: {lightPallete[key]}
                    </Paper>
                  ) : (
                    Object.keys(lightPallete[key]).map((el, i) => (
                      <Stack
                        key={i}
                        sx={{
                          m: "16px",
                          p: 2,
                          backgroundColor: "#0f1321",
                          boxShadow: 4,
                          alignItems: "center",
                          borderRadius: 3,
                          width: `calc(50% - 32px)`,
                        }}
                      >
                        <Typography variant="subtitle2" mb={2}>
                          {el}
                        </Typography>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            mb: 2,
                            borderRadius: 2,
                            background: lightPallete[key][el],
                          }}
                        ></Box>
                        <code>{lightPallete[key][el]}</code>
                      </Stack>
                    ))
                  )}
                </Stack>
              </Fragment>
            );
          })}
        </Grid>
        <Grid item xs={6}>
          <h2>Dark</h2>
          <p
            style={{
              padding: "20px",
              background: "#e65100",
            }}
          >
            If you need to change the dark palette then change in the file:
            <code>
              <pre
                style={{
                  background: "#333",
                  padding: "10px",
                  color: "#92C379",
                  borderRadius: 5,
                }}
              >
                src/theme/palette/dark.ts
              </pre>
            </code>
            <code
              style={{ color: "red", fontStyle: "italic", background: "#fff" }}
            >
              Note:
            </code>
            Don't change anywhere except the file.
          </p>
          {Object.keys(darkPallete as any).map((key, i) => {
            return (
              <Fragment key={i}>
                <Typography
                  variant="h6"
                  textTransform="capitalize"
                  mb={1}
                  ml={2}
                >
                  {key}
                </Typography>
                <Stack direction="row" flexWrap="wrap" mb={3}>
                  {typeof darkPallete[key] === "string" ? (
                    <Paper
                      sx={{
                        m: 2,
                        p: 2,
                      }}
                    >
                      {key}: {darkPallete[key]}
                    </Paper>
                  ) : (
                    Object.keys(darkPallete[key]).map((el, i) => (
                      <Stack
                        key={i}
                        sx={{
                          m: "16px",
                          p: 2,
                          backgroundColor: "#0f1321",
                          boxShadow: 4,
                          alignItems: "center",
                          borderRadius: 3,
                          width: `calc(50% - 32px)`,
                        }}
                      >
                        <Typography variant="subtitle2" mb={1}>
                          {el}
                        </Typography>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            mb: 2,
                            borderRadius: 2,
                            background: darkPallete[key][el],
                          }}
                        ></Box>
                        <code>{darkPallete[key][el]}</code>
                      </Stack>
                    ))
                  )}
                </Stack>
              </Fragment>
            );
          })}
        </Grid>
      </Grid>
    ),
  },
};
