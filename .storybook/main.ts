import type { StorybookConfig } from "@storybook/nextjs";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  stories: [
    "../docs/*.mdx",
    "../docs/**/*.mdx",
    "../docs/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)",
    {
      directory: "../src/widgets",
      files: "**/*.stories.@(js|jsx|ts|tsx)",
      titlePrefix: "Widgets",
    },
    {
      directory: "../src/layouts",
      files: "**/*.stories.@(js|jsx|ts|tsx)",
      titlePrefix: "Layouts",
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "storybook-addon-next-router",
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
    .css-ky0vih{
      background: transparent !important;
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
    #storybook-preview-wrapper,#storybook-preview-wrapper iframe{
      background: #131829;
    }
    .css-j2chfn{
      background: #222941 !important;
      box-shadow: none !important;
    }
    .css-vkdvsj{
      color: #FFF !important;
    }
    #storybook-explorer-menu svg {
      color: #368bc8;
    }
    #storybook-explorer-menu button{
      font-size: 16px;
      border-radius: 0 20px 20px 0;
      font-weight: 500;
    }
    
    #storybook-explorer-menu button[aria-expanded="true"],
    #storybook-explorer-menu button:focus,
    #storybook-explorer-menu a[data-selected]:hover {
      color: #f0f3ff;
      background: transparent;
    }
    #storybook-explorer-menu .sidebar-subheading button{
      font-size: 12px;
      color: #7f7f7f;
      letter-spacing: 2.5px;
    }
  
    #storybook-explorer-menu a[data-selected="true"],
    #storybook-explorer-menu a[data-selected="true"]:hover {
      background-color: #131829;
      color: #f0f3ff;
      box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
    }
    #storybook-explorer-menu a{
      border-radius: 0 20px 20px 0;
      font-size: 15px;
      padding-top: 5px;
      padding-bottom: 5px;
      font-weight: 500;
    }
    #storybook-explorer-menu a.css-q4vohu{
      display: none;
    }
    #storybook-explorer-menu a[data-selected="true"] svg {
      color: #f0f3ff;
    }
  
    .os-content button:hover {
      color: #fff;
      background: transparent;
    }
  
    .os-content button:hover svg {
      color: #fff;
    }
  `,
  previewBody: `
  <style>
    .css-1edx1qr{
      background: #131829;
    }
    .sbdocs-wrapper{
      background: #131829;
    }
    .sbdocs-preview {
      box-shadow: 0px 6px 20px rgba(9, 11, 25, 0.5) !important;
      border-width: 0 !important;
    }
    mark {
      background: #104b49;
      color: #d5d5d5;
      border-radius: 5px;
      padding: 2px 5px;
      font-size: 16px;
      font-weight: 700;
    }
    /*
    .sbdocs-content p,.sbdocs-content h1, .sbdocs-content h2, .sbdocs-content h3,.sbdocs-content h4,.sbdocs-content h5,.sbdocs-content h6{
      font-family: "Roboto";
      letter-spacing: 0.2px;
    }
    .sbdocs-content h4 {
      color: #c1c1c1;
    }
    .sbdocs-content p, .sbdocs-content h4 {
      font-size: 20px;
      color: #b4b4b4;
    }
    */
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
