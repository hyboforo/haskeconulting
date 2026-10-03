import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { cases, services } from "@/lib/site";
import { CaseCover } from "@/components/CaseCard";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMeta({
  title: "Our clients",
  description: `The businesses HaskeConsulting builds software and websites for: ${cases.map((c) => c.client).join(", ")}.`,
  path: "clients/",
});

/** "https://www.kodipetshop.com" → "www.kodipetshop.com" */
const host = (url: string) => new URL(url).hostname;

export default function Clients() {
  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">Our clients</p>
          <h1 className="h-page">Businesses we build for.</h1>
          <p className="lead">
            From a pet salon&apos;s front desk to a plant shop delivering across Ghana, these are the businesses that trust us with the
            technology they run on.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container client-list">
          {cases.map((c) => {
            const offered = c.services
              .map((name) => services.find((s) => s.name === name))
              .filter((s): s is NonNullable<typeof s> => Boolean(s));
            return (
              <article key={c.slug} className="client-row">
                <Link href={`/work/${c.slug}/`} className="client-row__cover" tabIndex={-1} aria-hidden="true">
                  <CaseCover c={c} bare />
                </Link>
                <div className="client-row__body">
                  <p className="eyebrow" style={{ marginBottom: 6 }}>{c.tag}</p>
                  <h2 className="client-row__name">{c.client}</h2>
                  <p className="muted">{c.summary}</p>
                  <ul className="chips" aria-label="What we did">
                    {offered.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}/`}>{s.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <div className="btn-row" style={{ marginTop: 20 }}>
                    <Link href={`/work/${c.slug}/`} className="btn btn--solid">
                      Read the case study
                    </Link>
                    {c.url && (
                      <a href={c.url} className="btn btn--ghost" rel="noopener">
                        Visit {host(c.url)}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
