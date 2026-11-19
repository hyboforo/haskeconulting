import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMeta({
  title: "About",
  description: `Who we are and how ${site.name} works.`,
  path: "about/",
});

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

      <CtaBand />
    </>
  );
}
