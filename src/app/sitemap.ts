import type { MetadataRoute } from "next";
import { curly } from "../../data/curly";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: curly.seo.siteUrl,
      lastModified: new Date("2026-08-18"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
