import type { Metadata } from "next";
import Link from "next/link";
import { ImpactStat } from "@/components/ImpactStat";
import { PageHero } from "@/components/PageHero";
import { featuredImpact } from "@/content/impact";
import { images } from "@/content/images";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.impact.title,
  description: pageSeo.impact.description,
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title="What the work is for."
        lede={featuredImpact.body}
        image={images.cta}
      />

      <section className="impact-band" aria-labelledby="impact-overview">
        <div className="section-intro is-center">
          <p className="eyebrow">Impact overview</p>
          <h2 id="impact-overview">{featuredImpact.headline}</h2>
        </div>
        {featuredImpact.stats.length > 0 ? (
          <div className="impact-grid">
            {featuredImpact.stats.map((stat) => (
              <ImpactStat key={stat.id} value={stat.value} label={stat.label} />
            ))}
          </div>
        ) : (
          <ul className="qual-grid">
            {featuredImpact.statements.map((statement) => (
              <li key={statement.id}>
                <h3>
                  {statement.href ? <Link href={statement.href}>{statement.title}</Link> : statement.title}
                </h3>
                <p>{statement.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

    </>
  );
}
