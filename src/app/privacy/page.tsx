import type { Metadata } from "next";
import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.privacy.title,
  description: pageSeo.privacy.description,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="legal-page article">
      <h1>Privacy</h1>
      <p>
        The contact form asks for your name, email, organization, and message. The donate form asks for your name, email, and gift amount, then opens Stripe Checkout, where the card number is entered. This site does not store card numbers. You can read these pages without an account.
      </p>
      <p>
        Links to Instagram and LoveJoy Health leave this site. Those organizations handle any information you give them under their own policies.
      </p>
    </article>
  );
}
