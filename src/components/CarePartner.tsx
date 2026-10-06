import Image from "next/image";
import { partnership } from "@/content/partnership";
import { ButtonLink, TextLink } from "./TextLink";

export function CarePartnerSection() {
  return (
    <section className="care-partner" id="care-partner" aria-labelledby="care-partner-heading">
      <div className="care-rule" aria-hidden="true" />
      <div className="care-inner">
        <div className="care-layout">
          <div className="care-copy">
            <p className="eyebrow">{partnership.eyebrow}</p>
            <h2 id="care-partner-heading">{partnership.title}</h2>
            {partnership.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="care-actions">
              <ButtonLink href={partnership.cta.href}>{partnership.cta.label}</ButtonLink>
              <div className="care-paths">
                {partnership.paths.map((path) => (
                  <TextLink key={path.href} href={path.href}>
                    {path.label}
                  </TextLink>
                ))}
              </div>
            </div>
          </div>
          <figure className="care-mark">
            <Image
              src={partnership.logo.src}
              alt={partnership.logo.alt}
              width={partnership.logo.width}
              height={partnership.logo.height}
              className="care-logo"
            />
            <figcaption>{partnership.partnerLabel}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
