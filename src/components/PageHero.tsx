import type { ImageAsset } from "@/content/types";
import { MediaFrame } from "./MediaFrame";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  image: ImageAsset;
  compact?: boolean;
}) {
  return (
    <section className={`page-hero ${compact ? "is-compact" : ""}`}>
      <div className="page-hero-media" data-slot={image.slot}>
        <MediaFrame image={image} priority sizes="100vw" />
      </div>
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="page-hero-copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {lede ? <p>{lede}</p> : null}
      </div>
    </section>
  );
}
