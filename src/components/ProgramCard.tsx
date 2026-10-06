import type { ImageAsset } from "@/content/types";
import { MediaFrame } from "./MediaFrame";
import { TextLink } from "./TextLink";

export function ProgramCard({
  eyebrow,
  title,
  summary,
  href,
  cta,
  image,
  featured = false,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  href: string;
  cta: string;
  image: ImageAsset;
  featured?: boolean;
}) {
  return (
    <article className={`program-card ${featured ? "is-featured" : ""}`} data-slot={image.slot}>
      <div className="program-card-media">
        <MediaFrame image={image} sizes={featured ? "(min-width: 800px) 46vw, 100vw" : "(min-width: 800px) 30vw, 100vw"} />
      </div>
      <div className="program-card-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p>{summary}</p>
        <TextLink href={href}>{cta}</TextLink>
      </div>
    </article>
  );
}
