import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`logo ${compact ? "is-compact" : ""}`}>
      <Image
        src="/brand/mj-mark.png"
        alt=""
        width={433}
        height={336}
        priority
        className="logo-mark"
      />
      <span className="logo-words">
        <span>Mike James</span>
        <span>Foundation</span>
      </span>
    </span>
  );
}
