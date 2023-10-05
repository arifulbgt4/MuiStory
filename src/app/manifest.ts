import { MetadataRoute } from "next";
import { siteConfig } from "src/global/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.backgroundColor,
    theme_color: siteConfig.themeColor,
    icons: [
      {
        src: "/icon/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
