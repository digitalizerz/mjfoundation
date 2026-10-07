import type { Metadata } from "next";
import { DonationForm } from "@/components/DonationForm";
import { PageHero } from "@/components/PageHero";
import { images } from "@/content/images";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.donate.title,
  description: pageSeo.donate.description,
  alternates: { canonical: "/donate" },
};

export default async function DonatePage({
  searchParams,
}: {
  searchParams: Promise<{ gift?: string }>;
}) {
  const { gift } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Fuel what happens next."
        lede="Gifts support mental wellness, mentorship, basketball, and community programs."
        image={images.ballArm}
        compact
      />
      <section className="donate-layout">
        <div className="donate-aside">
          <h2>Give</h2>
          <p>Choose a one-time or monthly amount. Checkout opens with Stripe, and the card number is entered there.</p>
          <p>A gift is not called tax-deductible on this site.</p>
          {gift === "received" ? <p>Thank you. Stripe emails a receipt for the gift.</p> : null}
          {gift === "canceled" ? <p>The gift was not completed. You can start again in the form.</p> : null}
        </div>
        <DonationForm />
      </section>
    </>
  );
}
