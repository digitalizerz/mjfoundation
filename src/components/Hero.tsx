import type { ImageAsset } from "@/content/types";
import { ButtonLink } from "./TextLink";
import { MediaFrame } from "./MediaFrame";

type Action = { label: string; href: string; variant: "primary" | "secondary" };

export function Hero({
  image,
  signature,
  title,
  body,
  actions,
}: {
  image: ImageAsset;
  signature?: string;
  title: string[];
  body: string;
  actions: Action[];
}) {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-media" data-slot={image.slot}>
        <MediaFrame image={image} priority sizes="100vw" className="media-img hero-img" />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy">
        {signature ? <p className="hero-signature">{signature}</p> : null}
        <h1>
          {title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero-body">{body}</p>
        <div className="hero-actions">
          {actions.map((action) => (
            <ButtonLink key={action.href} href={action.href} variant={action.variant}>
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
