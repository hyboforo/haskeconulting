import Link from "next/link";
import { bookHref, cases, products } from "@/lib/site";
import { CaseCard } from "@/components/CaseCard";
import { CtaBand } from "@/components/CtaBand";

const reasons = [
  { title: "Built for Ghana", body: "Mobile money, WhatsApp and local delivery are first-class, not add-ons." },
  { title: "We run our own products", body: "HaskeHub is ours, so we build like owners, not just contractors." },
  { title: "Support after launch", body: "[Your support promise, e.g. response times or monthly care plans.]" },
];

export default function Home() {
  return (
    <>
      <section className="section section--soft">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Digital products · Bespoke software</p>
            <h1 className="h-display" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
              Software that runs your business, built in Ghana.
            </h1>
            <p className="lead">
              Start with one of our ready-made products, or let us design and build something made around how you work.
            </p>
            <div className="btn-row">
              <a href={bookHref} className="btn btn--solid">
                Book a consultation
              </a>
              <Link href="/products/" className="btn btn--ghost">
                See our products
              </Link>
            </div>
          </div>
          {/* TODO: replace with a real image in /public, e.g. a client site on a laptop and phone. */}
          <div className="placeholder" style={{ aspectRatio: "4 / 3" }}>
            [Hero image: a laptop and phone showing a client site]
          </div>
        </div>
      </section>

      <section aria-label="Clients" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container clients">
          <span className="clients__label">Trusted by</span>
          {cases.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}/`} className="clients__name">
              {c.client}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h-section">Two ways to work with us</h2>
          <p className="lead" style={{ marginTop: 12, marginBottom: 48 }}>
            Need something now, or something made just for you?
          </p>
          <div className="grid">
            <article className="path path--outline">
              <span className="eyebrow" style={{ margin: 0 }}>Ready-made</span>
              <h3>Our products</h3>
              <p className="muted">Proven tools you can set up in days, with local support.</p>
              <ul className="tiles">
                {products.map((p) => (
                  <li key={p.slug}>
                    <strong>{p.name}</strong> — {p.tagline}
                  </li>
                ))}
              </ul>
              <Link href="/products/" className="path__link">
                Browse all products →
              </Link>
            </article>

            <article className="path path--filled">
              <span className="eyebrow" style={{ margin: 0, color: "#cfe3db" }}>Made for you</span>
              <h3>Bespoke builds</h3>
              <p>Websites, apps and internal systems designed around your customers and your operations.</p>
              <ol className="tiles tiles--2">
                <li><strong>1. Discover</strong><br />Your goals &amp; users</li>
                <li><strong>2. Design</strong><br />Screens you approve</li>
                <li><strong>3. Build</strong><br />Shipped in stages</li>
                <li><strong>4. Support</strong><br />We stay on call</li>
              </ol>
              <Link href="/bespoke/" className="path__link">
                How bespoke builds work →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 16, marginBottom: 40 }}>
            <h2 className="h-section">Our work</h2>
            <Link href="/work/" style={{ fontWeight: 600 }}>All case studies</Link>
          </div>
          <div className="grid">
            {cases.map((c) => (
              <CaseCard key={c.slug} c={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--wide">
          <h2 className="h-section">Why businesses choose us</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 32 }}>
            {reasons.map((r) => (
              <div key={r.title}>
                <strong style={{ display: "block", fontSize: 18, marginBottom: 8 }}>{r.title}</strong>
                <p className="muted" style={{ margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
