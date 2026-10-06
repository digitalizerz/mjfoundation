import Image from "next/image";
import type { ImageAsset } from "@/content/types";

export function MediaFrame({
  image,
  priority = false,
  sizes,
  quality,
  unoptimized = false,
  className = "media-img",
}: {
  image: ImageAsset;
  priority?: boolean;
  sizes: string;
  quality?: number;
  unoptimized?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      priority={priority}
      quality={quality}
      unoptimized={unoptimized}
      sizes={sizes}
      className={className}
      style={{ objectPosition: image.objectPosition ?? "center" }}
    />
  );
}
