import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TextLink } from "@/components/TextLink";
import { images } from "@/content/images";
import { pathways } from "@/content/involvement";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.getInvolved.title,
  description: pageSeo.getInvolved.description,
  alternates: { canonical: "/get-involved" },
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="The next chapter takes all of us."
        lede="This work did not start from zero. It still takes partners, volunteers, mentors, and people willing to give. Choose a way in."
        image={images.community}
        compact
      />

      <section className="page-section" aria-label="Ways to take part">
        <div className="pathway-blocks">
          {pathways.map((pathway) => (
            <article key={pathway.id} id={pathway.id} className="pathway-block">
              <h2>{pathway.title}</h2>
              <p>{pathway.summary}</p>
              {pathway.href === "/donate" ? <TextLink href={pathway.href}>{pathway.cta}</TextLink> : null}
            </article>
          ))}
        </div>
      </section>

    </>
  );
}
