import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { products, site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMeta({
  title: "Products",
  description: "Taskers Ghana, the in-house product built and run by HaskeConsulting.",
  path: "products/",
});

export default function Products() {
  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1 className="h-page">Our product.</h1>
          <p className="lead">
            Alongside client work, we build and run our own product, Taskers Ghana. Running it every day keeps us honest about
            what it takes to keep software working after launch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {products.map((p) => (
            <article key={p.slug} id={p.slug} className="card hero-grid" style={{ padding: 40, gap: 40, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <h2 style={{ fontSize: 32 }}>{p.name}</h2>
                <p style={{ fontSize: 19, color: "var(--text)" }}>{p.tagline}</p>
                <p><strong>Best for:</strong> {p.forWho}</p>
                {p.price && <p style={{ fontWeight: 600, color: "var(--accent)" }}>{p.price}</p>}
                <div className="btn-row" style={{ marginTop: 8 }}>
                  {p.url ? (
                    <a href={p.url} className="btn btn--solid" rel="noopener">
                      Visit {p.url.replace(/^https?:\/\/(www\.)?/, "")}
                    </a>
                  ) : (
                    <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Demo request: ${p.name}`)}`} className="btn btn--solid">
                      Ask for a demo
                    </a>
                  )}
                </div>
              </div>
              <ul className="tiles">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
