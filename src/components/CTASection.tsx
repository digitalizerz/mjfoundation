import type { ImageAsset } from "@/content/types";
import { MediaFrame } from "./MediaFrame";
import { ButtonLink } from "./TextLink";

export function CTASection({
  title,
  body,
  actions,
  image,
}: {
  title: string;
  body: string;
  actions: { label: string; href: string; variant: "primary" | "secondary" }[];
  image?: ImageAsset;
}) {
  return (
    <section className={`cta-section ${image ? "has-image" : ""}`}>
      {image ? (
        <>
          <div className="cta-media" data-slot={image.slot}>
            <MediaFrame image={image} sizes="100vw" />
          </div>
          <div className="cta-shade" aria-hidden="true" />
        </>
      ) : null}
      <div className="cta-copy">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="hero-actions">
          {actions.map((action) => (
            <ButtonLink key={action.href + action.label} href={action.href} variant={action.variant}>
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
