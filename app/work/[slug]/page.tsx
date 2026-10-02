import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, services } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  return c ? { title: `${c.client}: our work`, description: c.summary } : {};
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();
  const others = cases.filter((x) => x.slug !== c.slug);
  const serviceLinks = c.services
    .map((name) => services.find((s) => s.name === name))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <Link href="/work/" style={{ fontWeight: 600, fontSize: 15 }}>← All work</Link>
          <p className="eyebrow" style={{ marginTop: 28 }}>{c.tag}</p>
          <h1 className="h-page">{c.client}</h1>
          <p className="lead">{c.summary}</p>
          {c.url && (
            <div className="btn-row">
              <a href={c.url} className="btn btn--ghost" rel="noopener">
                Visit the live site
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <dl className="facts" style={{ margin: 0 }}>
            {c.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2 style={{ marginTop: 0 }}>The brief</h2>
          <p>{c.brief}</p>
          <h2>What we built</h2>
          <ul>
            {c.built.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          {serviceLinks.length > 0 && (
            <>
              <h2>Services</h2>
              <p>
                {serviceLinks.map((s, i) => (
                  <span key={s.slug}>
                    {i > 0 && " · "}
                    <Link href={`/services/${s.slug}/`}>{s.name}</Link>
                  </span>
                ))}
              </p>
            </>
          )}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 32 }}>More work</h2>
          <div className="grid">
            {others.map((o) => (
              <Link key={o.slug} href={`/work/${o.slug}/`} className="card">
                <span className="case__tag">{o.tag}</span>
                <h3>{o.client}</h3>
                <p>{o.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
