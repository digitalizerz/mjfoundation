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
    "/donate",
    "/mental-health",
    "/privacy",
    "/terms",
    ...programs.map((program) => `/programs/${program.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
