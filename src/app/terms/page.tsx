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
        This site offers education and a way to reach the foundation. For a crisis, call or text 988. A gift is not called tax-deductible on this site.
      </p>
    </article>
  );
}
