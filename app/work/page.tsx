import type { Metadata } from "next";
import { cases } from "@/lib/site";
import { CaseCard } from "@/components/CaseCard";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our work",
  description: "Software and websites HaskeConsulting has built for businesses in Ghana.",
};

export default function Work() {
  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">Our work</p>
          <h1 className="h-page">Work we've delivered.</h1>
          <p className="lead">Projects we have delivered for our clients.</p>
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
