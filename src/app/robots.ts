import type { MetadataRoute } from "next";
import { curly } from "../../data/curly";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${curly.seo.siteUrl}/sitemap.xml`,
  };
}
