import Link from "next/link";
import type { CaseStudy } from "@/lib/site";

/**
 * The card's cover in the client's colour: their name, and a screenshot of the live product rising from the bottom
 * when there is one (CaseStudy.image).
 */
export function CaseCover({ c, large = false, heading = false }: { c: CaseStudy; large?: boolean; heading?: boolean }) {
  return (
    <div
      className={`case-cover ${large ? "case-cover--lg" : ""} ${c.image ? "case-cover--shot" : ""}`}
      style={{ background: c.cover }}
      aria-hidden={heading ? undefined : true}
    >
      <span className="case-cover__tag">{c.tag}</span>
      {heading ? <h3 className="case-cover__name">{c.client}</h3> : <span className="case-cover__name">{c.client}</span>}
      {c.image && <img src={c.image.src} alt="" className="case-cover__shot" loading="lazy" width={1200} height={750} />}
    </div>
  );
}

/** The live product in a simple browser frame, for the top of a case study. */
export function CaseScreenshot({ c }: { c: CaseStudy }) {
  if (!c.image) return null;
  const host = c.url ? new URL(c.url).hostname : null;
  return (
    <figure className="browser">
      <div className="browser__bar" aria-hidden="true">
        <span />
        <span />
        <span />
        {host && <span className="browser__url">{host}</span>}
      </div>
      <img src={c.image.src} alt={c.image.alt} width={1200} height={750} />
    </figure>
  );
}

export function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <Link href={`/work/${c.slug}/`} className="case">
      <CaseCover c={c} heading />
      <div className="case__body">
        <span className="case__tag">{c.services.join(" · ")}</span>
        <p>{c.summary}</p>
      </div>
    </Link>
  );
}
