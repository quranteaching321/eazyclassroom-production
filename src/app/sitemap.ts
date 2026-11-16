import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eazyclassroom.net";
  const now = new Date();
  const paths = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/download", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/features/scheduling", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/features/recording", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/features/ai", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/features/monitoring", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/features/marketing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/features/courses", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  ];
  return paths.map((p) => ({ url: base + p.url, lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority }));
}
