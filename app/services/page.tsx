import type { Metadata } from "next";
import Link from "next/link";
import { bookHref, services } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, web development, IT consulting and IT project management from HaskeConsulting in Accra.",
};

const engagements = [
  {
    title: "A fixed-scope project",
    body: "A defined system or website, delivered in milestones with an agreed price for each one.",
  },
  {
    title: "Advice and reviews",
    body: "A consultation, an architecture or security review, or a second opinion on a supplier's proposal.",
  },
  {
    title: "Ongoing support",
    body: "Hosting, monitoring, updates and improvements after launch, on a monthly plan.",
  },
];

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
                  More about {s.name.toLowerCase()} <Arrow />
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
          <h2 className="h-section" style={{ marginBottom: 40 }}>Start small or hand us the whole project.</h2>
          <div className="grid">
            {engagements.map((e) => (
              <div key={e.title} className="card">
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
