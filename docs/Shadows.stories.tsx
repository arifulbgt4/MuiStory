/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Shadows as ShadowsOptions } from "@mui/material/styles";
import shadows from "src/theme/shadows";

const SHADOWS: ShadowsOptions = shadows;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Box> = {
  title: "Themeing/Shadows",
  component: Box,
  parameters: {
    // docs: {
    //   source: { language: "tsx", format: true, type: "dynamic" },
    //   canvas: { sourceState: "shown" },
    // },
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Box>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Shadows: Story = {
  args: {
    children: (
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <h2>Shadows</h2>
          <p
            style={{
              padding: "20px",
              background: "#ffa9a9",
            }}
          >
            If you need to change the Shadows then change in the file:
            <code>
              <pre
                style={{
                  background: "#333",
                  padding: "10px",
                  color: "#92C379",
                  borderRadius: 5,
                }}
              >
                src/theme/shadows.ts
              </pre>
            </code>
            <code style={{ color: "red", fontStyle: "italic" }}>Note:</code>
            Don't change anywhere except the file.
          </p>
        </Grid>
        {SHADOWS.map((el, i) => (
          <Grid key={i} item xs={2}>
            <Box
              sx={{
                width: "100%",
                height: "100px",
                boxShadow: el,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                borderRadius: "10px",
              }}
            >
              {i}
            </Box>
          </Grid>
        ))}
      </Grid>
    ),
  },
};
