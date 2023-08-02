import React from "react";
import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useArgs, useState } from "@storybook/addons";
import { argProps, overView } from "./utils/formatArgs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Stepper> = {
  title: "NAVIGATION/Stepper",
  component: Stepper,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      description: {
        component: overView({
          override: "Stepper",
          description:
            "Steppers convey progress through numbered steps. It provides a wizard-like workflow.",
          components: [
            {
              component: "Stepper",
              selector: "MuiStepper",
              props: "https://mui.com/material-ui/api/stepper/#props",
              css: "https://mui.com/material-ui/api/stepper/#css",
            },
            {
              component: "MobileStepper",
              selector: "MuiMobileStepper",
              props: "https://mui.com/material-ui/api/mobile-stepper/#props",
              css: "https://mui.com/material-ui/api/mobile-stepper/#props",
            },
            {
              component: "Step",
              selector: "MuiStep",
              props: "https://mui.com/material-ui/api/step/#props",
              css: "https://mui.com/material-ui/api/step/#css",
            },
            {
              component: "StepLabel",
              selector: "MuiStepLabel",
              props: "https://mui.com/material-ui/api/step-label/#props",
              css: "https://mui.com/material-ui/api/step-label/#css",
            },
            {
              component: "StepButton",
              selector: "MuiStepButton",
              props: "https://mui.com/material-ui/api/step-button/#props",
              css: "https://mui.com/material-ui/api/step-button/#css",
            },
            {
              component: "StepConnector",
              selector: "MuiStepConnector",
              props: "https://mui.com/material-ui/api/step-connector/#props",
              css: "https://mui.com/material-ui/api/step-connector/#css",
            },
            {
              component: "StepContent",
              selector: "MuiStepContent",
              props: "https://mui.com/material-ui/api/step-content/#props",
              css: "https://mui.com/material-ui/api/step-content/#css",
            },
            {
              component: "StepIcon",
              selector: "MuiStepIcon",
              props: "https://mui.com/material-ui/api/step-icon/#props",
              css: "https://mui.com/material-ui/api/step-icon/#css",
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
    activeStep: {
      control: { type: "number" },
    },
    nonLinear: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template: Story = {
  render: ({ onChange, handleStep, completed, activeStep, ...args }: any) => {
    return (
      <Stepper activeStep={activeStep} {...args}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={(e) => onChange(e, index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    );
  },
  args: {
    nonLinear: true,
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();
      const [completed, setcompleted] = useState<{ [k: number]: boolean }>({
        0: true,
      });
      return (
        <Story
          args={
            {
              ...args,
              completed,
              onChange: (event: any, step: number) => {
                setcompleted((prevState) => ({
                  ...prevState,
                  [step]: true,
                }));
                updateArgs({
                  activeStep: step,
                });
              },
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
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

export default function Basic() {
  return (
    <Stepper activeStep={0} ${argProps(storyContext)}>
      <Step completed>
        <StepButton color="inherit" onClick={() => {}}>
          Select campaign settings
        </StepButton>
      </Step>
      <Step>
        <StepButton color="inherit" onClick={() => {}}>
          Create an ad group
        </StepButton>
      </Step>
      <Step>
        <StepButton color="inherit" onClick={() => {}}>
          Create an ad
        </StepButton>
      </Step>
    </Stepper>
  );
}

        `,
      },
    },
  },
};
