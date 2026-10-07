import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { images } from "@/content/images";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.donate.title,
  description: pageSeo.donate.description,
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Fuel what happens next."
        lede="Gifts support mental wellness, mentorship, basketball, and community programs. This website does not collect payment."
        image={images.ballArm}
        compact
      />
      <section className="page-section article">
        <h2>Giving</h2>
        <p>Card details are not collected here, and no gift is processed on this site. Gifts are not described as tax-deductible.</p>
      </section>
    </>
  );
}
