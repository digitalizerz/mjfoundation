"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ImageAsset } from "@/content/types";
import { MediaFrame } from "./MediaFrame";

export function PhotoGallery({
  images,
  title = "Photography",
}: {
  images: ImageAsset[];
  title?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((index) => (index === null ? index : (index + 1) % images.length));
      if (event.key === "ArrowLeft") {
        setActive((index) => (index === null ? index : (index - 1 + images.length) % images.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  if (images.length === 0) return null;
  const current = active === null ? null : images[active];

  return (
    <div className="gallery">
      <ul className="gallery-grid">
        {images.map((image, index) => (
          <li key={image.slot + image.src}>
            <button type="button" className="gallery-button" onClick={() => setActive(index)} data-slot={image.slot}>
              <MediaFrame image={image} sizes="(min-width: 900px) 33vw, 100vw" />
              <span className="sr-only">Open larger view: {image.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby={titleId}>
          <p id={titleId} className="sr-only">
            {title}, image {active! + 1} of {images.length}
          </p>
          <button ref={closeRef} type="button" className="lightbox-close" onClick={() => setActive(null)}>
            Close
          </button>
          <div className="lightbox-frame" data-slot={current.slot}>
            <MediaFrame image={current} sizes="100vw" />
          </div>
          <p className="lightbox-caption">{current.alt}</p>
          {images.length > 1 ? (
            <div className="lightbox-nav">
              <button type="button" onClick={() => setActive((active! - 1 + images.length) % images.length)}>
                Previous
              </button>
              <button type="button" onClick={() => setActive((active! + 1) % images.length)}>
                Next
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
