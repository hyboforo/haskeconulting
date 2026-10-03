import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description: "How HaskeConsulting handles the personal information you share with us.",
  path: "privacy/",
});

// TODO: have this reviewed against Ghana's Data Protection Act, 2012 (Act 843) before launch.
export default function Privacy() {
  return (
    <section className="section">
      <div className="container prose">
        <p className="eyebrow">Privacy</p>
        <h1 className="h-page">Privacy notice</h1>
        <p>Last updated: 2 October 2026</p>
        <p>
          This notice covers {site.url.replace("https://", "")}, run by {site.name}, a {site.parent.name} company.
        </p>
        <h2>What we collect</h2>
        <p>
          This site does not use accounts, tracking cookies or advertising. If you email, book a call or message us on WhatsApp,
          we keep your message and contact details so we can reply and, if you become a client, run your project.
        </p>
        <h2>How we use it</h2>
        <p>To answer your enquiry and deliver work you've agreed with us. We do not sell your details or use them for advertising.</p>
        <h2>Your rights</h2>
        <p>
          You can ask to see, correct or delete what we hold about you by writing to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <h2>Who we are</h2>
        <p>
          {site.name}, {site.address}.
        </p>
      </div>
    </section>
  );
}
