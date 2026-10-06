import type { Metadata } from "next";
import { InterestForm } from "@/components/InterestForm";
import { PageHero } from "@/components/PageHero";
import { TextLink } from "@/components/TextLink";
import { images } from "@/content/images";
import { pathways } from "@/content/involvement";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Donate, volunteer, mentor, or bring a Mike James Foundation program to your community.",
};

export default async function GetInvolvedPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;

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
              <TextLink href={pathway.href}>{pathway.cta}</TextLink>
            </article>
          ))}
        </div>
      </section>

      <section className="involve-layout" aria-labelledby="interest-heading">
        <div className="involve-copy">
          <p className="eyebrow">Contact</p>
          <h2 id="interest-heading">Tell us where you fit.</h2>
          <p>
            Volunteers, mentors, schools, companies, athletes, and neighborhood organizations can all start here. Giving has its own page.
          </p>
          <TextLink href="/donate">Go to donate</TextLink>
        </div>
        <InterestForm initialInterest={interest} />
      </section>
    </>
  );
}
