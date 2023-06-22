/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import light from "src/theme/palette/light";
import dark from "src/theme/palette/dark";

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
              background: "#ffa9a9",
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
            <code style={{ color: "red", fontStyle: "italic" }}>Note:</code>
            Don't change anywhere except the file.
          </p>
          {Object.keys(lightPallete as any).map((key, q) => {
            return (
              <div key={q} style={{ margin: "0 0 40px" }}>
                <p style={{ textTransform: "uppercase", fontWeight: 500 }}>
                  {key}
                </p>

                <Box
                  sx={{
                    background: "transparent",
                  }}
                >
                  {typeof lightPallete[key] === "string" ? (
                    <Box
                      sx={{
                        backgroundColor: lightPallete[key],
                        padding: "10px",
                        boxShadow:
                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                      }}
                    >
                      {key}: {lightPallete[key]}
                    </Box>
                  ) : (
                    Object.keys(lightPallete[key]).map((el, i) => (
                      <Box
                        key={i}
                        sx={{
                          backgroundColor: lightPallete[key][el],
                          padding: "10px",
                          boxShadow:
                            "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                        }}
                      >
                        {key} - {el}: {lightPallete[key][el]}
                      </Box>
                    ))
                  )}
                </Box>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={6}>
          <h2>Dark</h2>
          <p
            style={{
              padding: "20px",
              background: "#ffa9a9",
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
            <code style={{ color: "red", fontStyle: "italic" }}>Note:</code>
            Don't change anywhere except the file.
          </p>
          {Object.keys(darkPallete as any).map((key, q) => {
            return (
              <div key={q} style={{ margin: "0 0 40px" }}>
                <p style={{ textTransform: "uppercase", fontWeight: 500 }}>
                  {key}
                </p>
                <Box
                  sx={{
                    background: "transparent",
                  }}
                >
                  {typeof darkPallete[key] === "string" ? (
                    <Box
                      sx={{
                        backgroundColor: darkPallete[key],
                        padding: "10px",
                        boxShadow:
                          "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                      }}
                    >
                      {key}: {darkPallete[key]}
                    </Box>
                  ) : (
                    Object.keys(darkPallete[key]).map((el, i) => (
                      <Box
                        key={i}
                        sx={{
                          backgroundColor: darkPallete[key][el],
                          padding: "10px",
                          boxShadow:
                            "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
                        }}
                      >
                        {key} - {el}: {darkPallete[key][el]}
                      </Box>
                    ))
                  )}
                </Box>
              </div>
            );
          })}
        </Grid>
      </Grid>
    ),
  },
};
