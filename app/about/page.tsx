import type { Metadata } from "next";
import { site } from "@/lib/site";
import { founder, team, type Person } from "@/lib/team";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: `Who we are and how ${site.name} works. Led by co-founder and CEO ${founder.name}.`,
};

function Avatar({ p, size }: { p: Person; size: "lg" | "sm" }) {
  if (p.photo) {
    return <img src={p.photo} alt={p.name} className={`avatar avatar--${size}`} />;
  }
  return (
    <div className={`avatar avatar--${size} ${p.initials ? "" : "avatar--empty"}`} aria-hidden="true">
      {p.initials || "Photo"}
    </div>
  );
}

function LinkedInLink({ href, name }: { href: string; name: string }) {
  return (
    <a href={href} className="linkedin" rel="noopener" aria-label={`${name} on LinkedIn`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-3.95v-11z" />
      </svg>
      LinkedIn
    </a>
  );
}

export default function About() {
  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1 className="h-page">A small team that builds like owners.</h1>
          <p className="lead">
            {site.name} is part of <a href={site.parent.url}>{site.parent.name}</a>, which also runs HaskeHub. We build
            products for ourselves and for clients, so we know what it takes to keep software working after launch.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="founder-heading">
        <div className="container founder">
          <div className="founder__side">
            <Avatar p={founder} size="lg" />
            <div>
              <h2 id="founder-heading" className="founder__name">{founder.name}</h2>
              <p className="founder__role">{founder.role}</p>
            </div>
            {founder.linkedin && <LinkedInLink href={founder.linkedin} name={founder.name} />}
          </div>

          <div className="founder__body">
            <p className="eyebrow">Meet our founder</p>
            {founder.bio.map((para, i) => (
              <p key={i} className={i === 0 ? "founder__lead" : "muted"}>
                {para}
              </p>
            ))}

            <dl className="stats">
              {founder.highlights.map((h) => (
                <div key={h.label}>
                  <dt>{h.value}</dt>
                  <dd>{h.label}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h3 className="founder__subhead">Education</h3>
              <ul className="founder__list">
                {founder.education.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container grid grid--wide">
          <h2 className="h-section">Our story</h2>
          <p className="muted" style={{ margin: 0, fontSize: 18 }}>
            [Two or three sentences: when you started, why, and the kinds of businesses you most like working with.]
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="team-heading">
        <div className="container">
          <h2 id="team-heading" className="h-section" style={{ marginBottom: 40 }}>The team</h2>
          <div className="team-grid">
            {team.map((p, i) => (
              <article key={i} className="team-card">
                <Avatar p={p} size="sm" />
                <div className="team-card__text">
                  <h3>{p.name}</h3>
                  <p className="team-card__role">{p.role}</p>
                  <p className="muted">{p.short}</p>
                  {p.linkedin && <LinkedInLink href={p.linkedin} name={p.name} />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
