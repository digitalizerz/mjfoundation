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
      <p className="eyebrow">Placeholder</p>
      <h1>Privacy</h1>
      <p>
        A privacy policy will be published here before the site collects donations, newsletter addresses, or inquiry messages. The forms on this site do not store or transmit what you type.
      </p>
    </article>
  );
}
