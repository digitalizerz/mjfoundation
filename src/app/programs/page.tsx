import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProgramCard } from "@/components/ProgramCard";
import { CTASection } from "@/components/CTASection";
import { images } from "@/content/images";
import { programs } from "@/content/programs";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.programs.title,
  description: pageSeo.programs.description,
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  const [mind, camp, youth, community] = programs;

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="The work, gathered."
        lede="Mental wellness, basketball development, education, and community. Each one continues something Mike has already done, and each one can stand as its own program."
        image={images.sideline}
      />

      <section className="page-section">
        <div className="program-stack">
          <ProgramCard
            featured
            eyebrow={mind.eyebrow}
            title={mind.name}
            summary={mind.summary}
            href={mind.cta.href}
            cta={mind.cta.label}
            image={mind.image}
          />
          <ProgramCard
            featured
            eyebrow={camp.eyebrow}
            title={camp.name}
            summary={camp.summary}
            href={camp.cta.href}
            cta={camp.cta.label}
            image={camp.image}
          />
        </div>
        <div className="split-cards">
          <ProgramCard
            eyebrow={youth.eyebrow}
            title={youth.name}
            summary={youth.summary}
            href={youth.cta.href}
            cta={youth.cta.label}
            image={youth.image}
          />
          <ProgramCard
            eyebrow={community.eyebrow}
            title={community.name}
            summary={community.summary}
            href={community.cta.href}
            cta={community.cta.label}
            image={community.image}
          />
        </div>
      </section>

      <CTASection
        title="Bring the work to your community."
        body="Schools, teams, and organizations can host a program."
        actions={[
          { label: "Get involved", href: "/get-involved", variant: "primary" },
          { label: "Donate", href: "/donate", variant: "secondary" },
        ]}
      />
    </>
  );
}
