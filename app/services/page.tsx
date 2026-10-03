import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { bookHref, engagements, faqs, services } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Software development, web development, IT consulting and IT project management from HaskeConsulting in Accra.",
  path: "services/",
});

export default function Services() {
  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1 className="h-page">From the first idea to a system your team relies on.</h1>
          <p className="lead">
            We can take on a whole project, from planning through to launch, or step in where you need us: building,
            advising or keeping a project on track.
          </p>
          <div className="btn-row">
            <a href={bookHref} className="btn btn--solid">Book a consultation</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="service-row">
              <div className="service-row__head">
                <span className="service-card__icon">
                  <ServiceIcon slug={s.slug} />
                </span>
                <h2>{s.name}</h2>
                <p className="muted">{s.short}</p>
                <Link href={`/services/${s.slug}/`} className="service-card__more">
                  More about {s.name.replace(/^(?!IT )\w/, (c) => c.toLowerCase())} <Arrow />
                </Link>
              </div>
              <ul className="tiles service-row__list">
                {s.offerings.map((o) => (
                  <li key={o.title}>
                    <strong>{o.title}</strong>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">Ways to work with us</p>
          <h2 className="h-section" style={{ marginBottom: 16 }}>Start small or hand us the whole project.</h2>
          <p className="lead" style={{ marginBottom: 40 }}>
            Your first consultation is free. After that, you always know the price before the work starts.
          </p>
          <div className="grid">
            {engagements.map((e) => (
              <div key={e.title} className="card">
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <p className="engagement__price">
                  <strong>How it&apos;s priced:</strong> {e.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="container faq">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="faq-heading" className="h-section">What people ask us first.</h2>
          </div>
          <div className="faq__list">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            }),
          }}
        />
      </section>

      <CtaBand />
    </>
  );
}
