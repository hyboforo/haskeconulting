import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Matches app/opengraph-image.alt.txt. */
const SHARE_IMAGE_ALT = "Software that runs your business, built in Ghana. — haskeconsulting.com";

/**
 * A page's title, description, canonical address and link preview, in one place.
 *
 * Next.js replaces a parent's openGraph object rather than merging it, so a page that sets only its title still
 * shared the home page's preview on WhatsApp and LinkedIn. Every page goes through this instead.
 *
 * @param path the page's address after the domain, with the trailing slash, e.g. "work/kodi-pets/". "" for home.
 */
export function pageMeta({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const url = `${site.url}/${path}`;
  // Named here because a page's own openGraph drops the image Next.js adds from app/opengraph-image.png.
  const images = [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: SHARE_IMAGE_ALT }];
  const shareTitle = title ? `${title} · ${site.name}` : `${site.name}: ${site.tagline}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", siteName: site.name, locale: "en_GH", url, title: shareTitle, description, images },
    twitter: { card: "summary_large_image", title: shareTitle, description, images },
  };
}
