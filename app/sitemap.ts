import type { MetadataRoute } from "next";
import { cases, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "products/", "bespoke/", "work/", "about/", "contact/", "privacy/", ...cases.map((c) => `work/${c.slug}/`)];
  return pages.map((p) => ({ url: `${site.url}/${p}` }));
}
