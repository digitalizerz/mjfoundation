"use client";

import { useSyncExternalStore } from "react";
import { LOVEJOY_ANDROID_URL, LOVEJOY_IOS_URL, LOVEJOY_WEB_URL } from "@/content/lovejoy";
import { mentalHealth } from "@/content/mental-health";

function platformSnapshot() {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  return "desktop";
}

function subscribe() {
  return () => {};
}

function StoreButton({ href, label, pending }: { href: string | null; label: string; pending: string }) {
  if (!href) {
    return (
      <span className="store-btn is-pending">
        <span>{label}</span>
        <span className="store-pending">{pending}</span>
      </span>
    );
  }

  return (
    <a className="store-btn" href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export function StoreButtons() {
  const platform = useSyncExternalStore(subscribe, platformSnapshot, () => "desktop");
  const { next } = mentalHealth;
  const ios = <StoreButton key="ios" href={LOVEJOY_IOS_URL} label={next.ios} pending={next.pending} />;
  const android = <StoreButton key="android" href={LOVEJOY_ANDROID_URL} label={next.android} pending={next.pending} />;
  const stores = platform === "android" ? [android, ios] : [ios, android];

  return (
    <div className="store-stack">
      <div className="store-row">{stores}</div>
      {LOVEJOY_WEB_URL ? (
        <a className="text-link mh-web" href={LOVEJOY_WEB_URL} target="_blank" rel="noopener noreferrer">
          <span>{next.web}</span>
        </a>
      ) : null}
    </div>
  );
}
