import type { MetadataRoute } from "next";
import { cases, services, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "services/",
    ...services.map((s) => `services/${s.slug}/`),
    "work/",
    ...cases.map((c) => `work/${c.slug}/`),
    "products/",
    "about/",
    "contact/",
    "privacy/",
  ];
  return pages.map((p) => ({ url: `${site.url}/${p}` }));
}
