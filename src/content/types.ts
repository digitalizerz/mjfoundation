/** Shared content types. Copy and numbers live in /src/content, not in components. */

export type ImageAsset = {
  /** Public path. Replace the file, or point this src at official photography. */
  src: string;
  alt: string;
  /** Stable slot name so art direction can be swapped without hunting through JSX. */
  slot: string;
  objectPosition?: string;
};

export type LinkItem = {
  label: string;
  href: string;
};
