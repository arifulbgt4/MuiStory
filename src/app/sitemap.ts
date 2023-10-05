import { MetadataRoute } from "next";

import { AnyObject } from "src/global/types";

export const ROUTES_SITEMAP: AnyObject = {
  default: "/",
  faq: "/faq",
  policy: "/policy",
  signin: "/signin",
  signup: "/signup",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(ROUTES_SITEMAP).map((d) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}${ROUTES_SITEMAP[d].slice(1)}`,
    lastModified: new Date(),
  }));
}
