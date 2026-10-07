import type { Metadata } from "next";
import { InterestForm } from "@/components/InterestForm";
import { PageHero } from "@/components/PageHero";
import { images } from "@/content/images";
import { pathways } from "@/content/involvement";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const pathway = pathways.find((item) => item.id === interest && item.id !== "donate");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={pathway?.title ?? "Reach the foundation."}
        lede={
          pathway?.summary ??
          "Volunteer, mentor, partner, or ask about bringing a program to your community."
        }
        image={images.community}
        compact
      />
      <section className="page-section" aria-label="Contact form">
        <div className="involve-layout">
          <div className="involve-copy">
            <h2>Tell us how you want to help.</h2>
            <p>Choose a path, leave your name and email, and write a few lines about what you have in mind.</p>
          </div>
          <InterestForm initialInterest={pathway?.id} />
        </div>
      </section>
    </>
  );
}
