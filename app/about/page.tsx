import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are and how HaskeConsulting works.",
};

// TODO: replace with real people.
const team = [
  { name: "[Name]", role: "[Role]" },
  { name: "[Name]", role: "[Role]" },
  { name: "[Name]", role: "[Role]" },
];

export default function About() {
  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1 className="h-page">A small team that builds like owners.</h1>
          <p className="lead">
            {site.name} is part of{" "}
            <a href={site.parent.url}>{site.parent.name}</a>, which also runs HaskeHub. We build products for ourselves and
            for clients, so we know what it takes to keep software working after launch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--wide">
          <h2 className="h-section">Our story</h2>
          <p className="muted" style={{ margin: 0, fontSize: 18 }}>
            [Two or three sentences: when you started, why, and the kinds of businesses you most like working with.]
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 40 }}>The team</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
            {team.map((p, i) => (
              <div key={i} className="person">
                <div className="person__photo">[Photo]</div>
                <strong>{p.name}</strong>
                <span className="muted" style={{ fontSize: 15 }}>{p.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
