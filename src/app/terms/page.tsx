import type { Metadata } from "next";
import { legal } from "@/content/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <article className="legal-page article">
      <p className="eyebrow">Placeholder</p>
      <h1>Terms</h1>
        <p>
          {legal.legalName} is a Texas domestic nonprofit corporation, file no. {legal.fileNumber}, formed {legal.formed} and effective {legal.effective}. The certificate of formation states the purpose as mental health awareness. EIN {legal.ein}.
        </p>
        <p>
          Full terms of use are still being prepared. Nothing on this site is medical, clinical, or emergency advice. Gifts are not described here as tax-deductible.
        </p>
    </article>
  );
}
