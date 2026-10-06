import type { Metadata } from "next";
import { ImpactStat } from "@/components/ImpactStat";
import { PageHero } from "@/components/PageHero";
import { annualReports, featuredImpact, impactAreas } from "@/content/impact";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Our Impact",
  description: featuredImpact.body,
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title="The record, when it is real."
        lede={featuredImpact.body}
        image={images.cta}
      />

      <section className="impact-band" aria-labelledby="impact-overview">
        <div className="section-intro is-center">
          <p className="eyebrow">Impact overview</p>
          <h2 id="impact-overview">{featuredImpact.headline}</h2>
          <p>{featuredImpact.note}</p>
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
                <h3>{statement.title}</h3>
                <p>{statement.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="band" aria-labelledby="impact-areas">
        <div className="section-intro">
          <p className="eyebrow">Where results will live</p>
          <h2 id="impact-areas">Ready for real counts.</h2>
          <p>Each area below is a slot. Add a metric in the content file and it will render. Empty means we do not have a confirmed number.</p>
        </div>
        <div className="impact-areas">
          {impactAreas.map((area) => (
            <article key={area.id} className="impact-area" id={area.id}>
              <h3>{area.title}</h3>
              <p>{area.summary}</p>
              {area.metrics.length === 0 ? (
                <p className="empty-state">{area.emptyLabel}</p>
              ) : (
                <div className="impact-grid">
                  {area.metrics.map((metric) => (
                    <ImpactStat key={metric.id} value={metric.value} label={metric.label} />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="band-cream" aria-labelledby="reports-heading">
        <div className="section-intro">
          <p className="eyebrow">Annual reports</p>
          <h2 id="reports-heading">Filed when a year is complete.</h2>
        </div>
        <ul className="schedule-list">
          {annualReports.map((report) => (
            <li key={report.id}>
              <strong>{report.year}</strong>
              <span>{report.href ? report.title : "No report file is available yet."}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
