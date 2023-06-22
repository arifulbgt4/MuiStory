/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj, StoryContext } from "@storybook/react";
import Typography from "@mui/material/Typography";
import typographyVars from "src/theme/typography";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Typography> = {
  title: "Themeing/Typography",
  component: Typography,
  parameters: {
    docs: {
      source: { language: "tsx", format: true, type: "dynamic" },
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
    viewport: {
      disable: true,
    },
  },
  // tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "button",
        "caption",
        "overline",
      ],
    },
    gutterBottom: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const H1Typography: Story = {
  args: {
    variant: "h1",
    children: "h1. Heading",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const H2Typography: Story = {
  args: {
    variant: "h2",
    children: "h2. Heading",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const H3Typography: Story = {
  args: {
    variant: "h3",
    children: "h3. Heading",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const H4Typography: Story = {
  args: {
    variant: "h4",
    children: "h4. Heading",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const H5Typography: Story = {
  args: {
    variant: "h5",
    children: "h5. Heading",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const H6Typography: Story = {
  args: {
    variant: "h6",
    children: "h6. Heading",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const Subtitle1Typography: Story = {
  args: {
    variant: "subtitle1",
    children:
      "subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const Subtitle2Typography: Story = {
  args: {
    variant: "subtitle2",
    children:
      "subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const Body1Typography: Story = {
  args: {
    variant: "body1",
    children:
      "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const Body2Typography: Story = {
  args: {
    variant: "body2",
    children:
      "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const ButtonTypography: Story = {
  args: {
    variant: "button",
    children: "button text",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const CaptionTypography: Story = {
  args: {
    variant: "caption",
    children: "caption text",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};
export const OverlinenTypography: Story = {
  args: {
    variant: "overline",
    children: "overline text",
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext): string => `
import Typography from "@mui/lab/Typography";

${code}
        `,
      },
    },
  },
};

export const Coustomize: Story = {
  args: {
    variant: "h6",
    children: (
      <p>
        If you need to change the typography style then change in the file:
        <code>
          <pre
            style={{
              background: "#333",
              padding: "10px",
              color: "#92C379",
              borderRadius: 5,
            }}
          >
            src/theme/typography.ts
          </pre>
        </code>
        <code style={{ color: "red", fontStyle: "italic" }}>Note:</code> Don't
        change anywhere except the file.
      </p>
    ),
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: { sourceState: "hide" },
      source: {
        transform: (code: string, storyContext: StoryContext): string => `

${JSON.stringify(typographyVars, null, 4)}
        `,
      },
    },
  },
};
