import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { bookHref, cases, clientNames, products, services, site } from "@/lib/site";
import { CaseCard } from "@/components/CaseCard";
import { CtaBand } from "@/components/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = pageMeta({ description: site.description, path: "" });

const steps = [
  { title: "Discover", body: "We learn how your business works and what success looks like, then agree a written scope." },
  { title: "Plan", body: "A milestone plan with estimates, so cost and timing are clear before work starts." },
  { title: "Build", body: "Working software at every milestone, tested and signed off by you before we move on." },
  { title: "Launch & support", body: "Go-live, training and handover, and we stay on hand to keep things running." },
];

const reasons: { value?: string; title: string; body: string }[] = [
  {
    value: "15+",
    title: "Years of delivery experience",
    body: "Our team brings more than 15 years of building, running and supporting software for government and enterprise organisations.",
  },
  {
    title: "Built for how Ghana works",
    body: "Mobile money, SMS and WhatsApp are part of the design from day one, and our apps keep working when the internet drops.",
  },
  {
    title: "The people you meet build it",
    body: "No hand-offs to a team you've never spoken to. The engineers who scope your project are the ones who deliver it.",
  },
];

const tools = ["Java", "Kotlin", "Spring Boot", "React", "Next.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "Google Cloud", "Cloudflare"];

export default function Home() {
  return (
    <>
      <section className="section section--soft">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Software · Web · IT consulting · Project management</p>
            <h1 className="h-display" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
              Technology that works for your business.
            </h1>
            <p className="lead">
              An Accra-based team that builds software and websites, advises on technology, and runs IT projects from first
              idea to go-live.
            </p>
            <div className="btn-row">
              <a href={bookHref} className="btn btn--solid">
                Book a consultation
              </a>
              <Link href="/services/" className="btn btn--ghost">
                Our services
              </Link>
            </div>
          </div>

          <nav className="hero-services" aria-label="Our services">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="hero-services__item">
                <span className="hero-services__icon">
                  <ServiceIcon slug={s.slug} />
                </span>
                <span>
                  <strong>{s.name}</strong>
                  <span className="hero-services__short">{s.short}</span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section aria-label="Clients and products" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container clients">
          <div className="clients__group">
            <span className="clients__label">Our clients</span>
            {clientNames.map((n) => (
              <Link key={n} href="/clients/" className="clients__name">
                {n}
              </Link>
            ))}
          </div>
          <div className="clients__group clients__group--sep">
            <span className="clients__label">Our product</span>
            {products.map((p) => (
              <Link key={p.slug} href="/products/" className="clients__name">
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2 className="h-section" style={{ maxWidth: 720 }}>Four services, one team from start to finish.</h2>
          <div className="service-grid" style={{ marginTop: 48 }}>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="service-card">
                <span className="service-card__icon">
                  <ServiceIcon slug={s.slug} />
                </span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="service-card__more">
                  Learn more <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">How we work</p>
          <h2 className="h-section" style={{ marginBottom: 40, maxWidth: 720 }}>
            Small milestones, signed off as we go.
          </h2>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 16, marginBottom: 40 }}>
            <div>
              <p className="eyebrow">Our work</p>
              <h2 className="h-section">Recent projects</h2>
            </div>
            <Link href="/work/" style={{ fontWeight: 600 }}>All work</Link>
          </div>
          <div className="grid">
            {cases.map((c) => (
              <CaseCard key={c.slug} c={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">Why HaskeConsulting</p>
          <h2 className="h-section" style={{ marginBottom: 40, maxWidth: 720 }}>
            Experienced engineers, close to your business.
          </h2>
          <div className="grid">
            {reasons.map((r) => (
              <div key={r.title} className="reason">
                {r.value && <span className="reason__value">{r.value}</span>}
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
          <div className="tools" aria-label="Technologies we work with">
            <span className="tools__label">Technologies we work with</span>
            <ul>
              {tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
