const siteAddress =
  process.env.NEXT_PUBLIC_SITE_ADDRESS || "http://localhost:3000/";

export const siteConfig = {
  name: "MuiStory",
  shortName: "Next.js & Mui boilerplate",
  locale: "en",
  localeUpper: "enUS",
  localeUpperSpace: "en-US",
  url: siteAddress,
  ogImage: `${siteAddress}opengraph-image`,
  description:
    "MuiStory is a design system for Next.js that uses MUI Core v5 theming. It provides a boilerplate that makes it easy to integrate Storybook with MUI to preview your components and their themes in a live environment.",
  links: {
    github: "https://github.com/arifulbgt4/MuiStory",
  },
  keywords: [
    "Frontend Engineer",
    "JavaScript Develope",
    "React.js Specialis",
    "Next.js Expert",
    "Senior Web Developer",
    "User-Centric Design",
    "UI/UX Enthusiast",
    "Node.js Developer",
    "Web Application Architect",
    "Code Refactoring Pro",
  ],
  author: "Ariful",
  creator: "Ariful",
  themeColor: "dark",
  backgroundColor: "#090c24",
};
