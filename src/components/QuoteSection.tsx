import type { ImageAsset } from "@/content/types";
import { MediaFrame } from "./MediaFrame";
import { PlaceholderNote } from "./PlaceholderNote";

export function QuoteSection({
  text,
  attribution,
  image,
  placeholderNote,
}: {
  text: string;
  attribution: string;
  image: ImageAsset;
  placeholderNote?: string;
}) {
  return (
    <section className="quote-section" aria-label="Quote">
      <div className="quote-media" data-slot={image.slot}>
        <MediaFrame image={image} sizes="(min-width: 800px) 42vw, 100vw" />
      </div>
      <figure className="quote-copy">
        <blockquote>
          <p>“{text}”</p>
        </blockquote>
        <figcaption>— {attribution}</figcaption>
        {placeholderNote ? <PlaceholderNote>{placeholderNote}</PlaceholderNote> : null}
      </figure>
    </section>
  );
}
