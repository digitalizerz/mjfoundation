import type { Metadata } from "next";
import { legal } from "@/content/site";

import { pageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: pageSeo.terms.title,
  description: pageSeo.terms.description,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="legal-page article">
      <h1>Terms</h1>
      <p>
        {legal.legalName} is a Texas domestic nonprofit corporation, file no. {legal.fileNumber}, formed {legal.formed} and effective {legal.effective}. The certificate of formation states the purpose as mental health awareness. EIN {legal.ein}.
      </p>
      <p>
        Nothing on this site is medical, clinical, or emergency advice. Gifts are not described here as tax-deductible.
      </p>
    </article>
  );
}
