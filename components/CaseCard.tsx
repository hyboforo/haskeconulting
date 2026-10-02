import Link from "next/link";
import type { CaseStudy } from "@/lib/site";

/** Typographic cover in the client's colour. Swap for a real screenshot when you have one. */
export function CaseCover({ c, large = false, heading = false }: { c: CaseStudy; large?: boolean; heading?: boolean }) {
  return (
    <div className={`case-cover ${large ? "case-cover--lg" : ""}`} style={{ background: c.cover }} aria-hidden={heading ? undefined : true}>
      <span className="case-cover__tag">{c.tag}</span>
      {heading ? <h3 className="case-cover__name">{c.client}</h3> : <span className="case-cover__name">{c.client}</span>}
    </div>
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
