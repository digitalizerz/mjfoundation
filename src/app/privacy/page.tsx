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
        The Mike James Foundation website does not collect donations, newsletter addresses, or contact-form messages, and it does not ask you to create an account.
      </p>
      <p>
        Links to Instagram and LoveJoy Health leave this site. Those organizations handle any information you give them under their own policies.
      </p>
    </article>
  );
}
