import type { ImageAsset } from "@/content/types";
import { MediaFrame } from "./MediaFrame";

export function VideoSection({
  poster,
  src,
  caption,
}: {
  poster: ImageAsset;
  src: string | null;
  caption: string;
}) {
  return (
    <figure className="video-section">
      <div className="video-frame" data-slot={poster.slot}>
        {src ? (
          <video controls poster={poster.src} preload="none">
            <source src={src} />
            <track kind="captions" />
          </video>
        ) : (
          <>
            <MediaFrame image={poster} sizes="(min-width: 900px) 80vw, 100vw" />
            <div className="video-pending">
              <p>Film coming soon</p>
            </div>
          </>
        )}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
