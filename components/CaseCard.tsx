import Link from "next/link";
import type { CaseStudy } from "@/lib/site";

export function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <Link href={`/work/${c.slug}/`} className="case">
      {/* TODO: replace with a screenshot: put it in /public/work/<slug>.jpg and swap this div for an <img>. */}
      <div className="placeholder case__img" style={{ background: c.imageBg }}>
        [Screenshot: {c.client}]
      </div>
      <div className="case__body">
        <span className="case__tag">{c.tag}</span>
        <h3>{c.client}</h3>
        <p>{c.summary}</p>
      </div>
    </Link>
  );
}
