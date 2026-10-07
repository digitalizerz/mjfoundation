import type { MetadataRoute } from "next";
import { programs } from "@/content/programs";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/programs",
    "/impact",
    "/get-involved",
    "/contact",
    "/donate",
    "/mental-health",
    "/privacy",
    "/terms",
    ...programs.map((program) => `/programs/${program.slug}`),
  ];

  const priority: Record<string, number> = {
    "": 1,
    "/mental-health": 0.9,
    "/programs": 0.9,
    "/about": 0.8,
    "/get-involved": 0.7,
    "/contact": 0.7,
    "/donate": 0.7,
    "/impact": 0.6,
    "/privacy": 0.2,
    "/terms": 0.2,
  };

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/privacy" || path === "/terms" ? "yearly" : "weekly",
    priority: priority[path] ?? (path.startsWith("/programs/") ? 0.8 : 0.5),
  }));
}
