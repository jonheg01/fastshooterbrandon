import type { MetadataRoute } from "next";
import { site, categories } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...categories.map((c) => ({
      url: `${site.url}${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
