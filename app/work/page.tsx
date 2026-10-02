import type { Metadata } from "next";
import { cases } from "@/lib/site";
import { CaseCard } from "@/components/CaseCard";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our work",
  description: "Case studies from HaskeConsulting clients across Ghana.",
};

export default function Work() {
  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">Our work</p>
          <h1 className="h-page">Businesses we've helped grow online.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container grid">
          {cases.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
