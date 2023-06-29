import type { StorybookConfig } from "@storybook/nextjs";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  stories: [
    "../docs/*.mdx",
    "../docs/**/*.mdx",
    "../docs/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "@storybook/addon-mdx-gfm",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
  refs: {
    "design-system": {
      title: "Mui default Design System",
      url: "https://dev--647c84907213dc4172ffdcde.chromatic.com/",
      disable: true,
    },
  },
  managerHead: `
  <style>
    html, body{
      font-size: 16px;
      background: #0f1321 !important;
    }
    .css-mt2ehb, .css-1qjsijr {
      width: auto !important;
      top: 18px !important;
      left: 14px !important;
      height: auto !important;
      bottom: 18px;
      right: 18px;
      border-radius: 10px !important;
      box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12) !important;
    }
    .css-1nepfrt{
      background-color: transparent !important;
    }
    .os-scrollbar>.os-scrollbar-track>.os-scrollbar-handle{
      opacity: 0 !important;
    }
    .css-q22hxw :where(p:not(.sb-anchor, .sb-unstyled, .sb-unstyled p)){
      font-family: 'Roboto';
      font-size: 16px;
      color: #ffffffa8;
    }
    #storybook-preview-wrapper{
      background: #131829;
    }
    .css-j2chfn{
      background: #222941 !important;
      box-shadow: none !important;
    }
    .css-c3junj{
      display: none !important;
    }
  </style>
  `,
  previewBody: `
  <style>
    .sbdocs-wrapper{
      background: #131829;
    }
    .sbdocs-preview{
      box-shadow: 0px 6px 20px rgba(9, 11, 25, 0.5) !important;
      border-width: 0 !important;
    }
  </style>
  `,
  previewHead: `
  <style>
    .css-j2chfn{
      background: #252c45;
      box-shadow: none;
    }
   
  </style>
  `,
};
export default config;
