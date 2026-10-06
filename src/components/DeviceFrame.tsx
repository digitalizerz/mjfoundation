import Image from "next/image";
import type { AppScreen } from "@/content/lovejoy";

export function DeviceFrame({ screen, label }: { screen: AppScreen | null; label: string }) {
  if (screen) {
    return (
      <Image
        src={screen.src}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
        className="device-shot"
      />
    );
  }

  return (
    <div className="device">
      <div className="device-screen">
        <div className="device-empty">
          <Image src="/brand/lovejoy-health-light.png" alt="" width={981} height={207} />
          <p>{label}</p>
        </div>
      </div>
    </div>
  );
}
