import type { Metadata } from "next";
import { DonationForm } from "@/components/DonationForm";
import { PageHero } from "@/components/PageHero";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support the Mike James Foundation with a one-time or monthly gift.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Fuel what happens next."
        lede="A gift supports mental wellness, mentorship, basketball, and community programs. Payment is not processed on this site yet."
        image={images.ballArm}
        compact
      />
      <section className="donate-layout">
        <div className="donate-aside">
          <h2>Give in a way that fits.</h2>
          <p>Choose one-time or monthly, then an amount. $25, $50, $100, $250, $500, or a custom gift.</p>
          <p>
            When a provider such as Stripe is connected, this form can open a secure checkout without a redesign. Until then, nothing is charged and no card details are collected. Gifts are not described on this site as tax-deductible.
          </p>
        </div>
        <DonationForm />
      </section>
    </>
  );
}
