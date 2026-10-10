import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { services, site } from "@/lib/site";
import { founder } from "@/lib/team";
import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-500.css";
import "@fontsource/ibm-plex-sans/latin-600.css";
import "./globals.css";

export const metadata: Metadata = {
  // Absolute base for social preview links. Without it, previews point at localhost.
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
};

/** Who we are, for search engines: shown beside the site in results and used for the knowledge panel. */
const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  image: `${site.url}/opengraph-image.png`,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
  areaServed: { "@type": "Country", name: "Ghana" },
  parentOrganization: { "@type": "Organization", name: site.parent.name, url: site.parent.url },
  founder: { "@type": "Person", name: founder.name, jobTitle: founder.role, sameAs: founder.linkedin ? [founder.linkedin] : undefined },
  knowsAbout: services.map((s) => s.name),
};

export const viewport: Viewport = { themeColor: "#0f5c4a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        {site.analyticsToken && (
          <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon={JSON.stringify({ token: site.analyticsToken })} />
        )}
      </body>
    </html>
  );
}
