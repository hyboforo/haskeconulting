import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bookHref, cases, services } from "@/lib/site";
import { CaseCard } from "@/components/CaseCard";
import { CtaBand } from "@/components/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? pageMeta({ title: s.name, description: s.short, path: `services/${s.slug}/` }) : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const work = cases.filter((c) => s.work.includes(c.slug));
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <Link href="/services/" style={{ fontWeight: 600, fontSize: 15 }}>← All services</Link>
          <div className="service-hero">
            <span className="service-card__icon service-card__icon--lg">
              <ServiceIcon slug={s.slug} size={34} />
            </span>
            <div>
              <h1 className="h-page">{s.name}</h1>
              <p className="lead">{s.intro}</p>
              <div className="btn-row">
                <a href={`${bookHref}${bookHref.startsWith("mailto:") ? `%20-%20${encodeURIComponent(s.name)}` : ""}`} className="btn btn--solid">
                  Talk to us about {s.name.toLowerCase()}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 40 }}>What we do</h2>
          <div className="offerings">
            {s.offerings.map((o) => (
              <div key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
          {s.tools && (
            <div className="tools" aria-label="Technologies">
              <span className="tools__label">Technologies</span>
              <ul>
                {s.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {work.length > 0 && (
        <section className="section section--soft">
          <div className="container">
            <h2 className="h-section" style={{ marginBottom: 40 }}>
              {s.name} in our work
            </h2>
            <div className="grid">
              {work.map((c) => (
                <CaseCard key={c.slug} c={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 32 }}>Other services</h2>
          <div className="service-grid service-grid--3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}/`} className="service-card">
                <span className="service-card__icon">
                  <ServiceIcon slug={o.slug} />
                </span>
                <h3>{o.name}</h3>
                <p>{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
