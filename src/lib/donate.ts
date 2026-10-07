"use server";

import { headers } from "next/headers";
import type { DonationDraft, DonationResult } from "@/lib/actions";

export async function submitDonation(draft: DonationDraft): Promise<DonationResult> {
  const amount = Number(draft.amount);
  const email = draft.email.trim();
  const firstName = draft.firstName.trim();
  const lastName = draft.lastName.trim();
  const note = draft.note.trim();

  if (!Number.isFinite(amount) || amount < 1 || amount > 100000) {
    return { status: "invalid", message: "Enter a gift between $1 and $100,000." };
  }
  if (firstName.length < 1 || lastName.length < 1) {
    return { status: "invalid", message: "Add your first and last name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "invalid", message: "Enter a valid email address." };
  }

  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) return { status: "unavailable" };

  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "mikejamesfoundation.org";
  const proto = headerList.get("x-forwarded-proto") ?? (host.startsWith("localhost") || host.startsWith("127.") ? "http" : "https");
  const origin = `${proto}://${host}`;
  const cents = Math.round(amount * 100);
  const monthly = draft.frequency === "monthly";

  const params = new URLSearchParams();
  params.set("mode", monthly ? "subscription" : "payment");
  params.set("customer_email", email);
  params.set("success_url", `${origin}/donate?gift=received`);
  params.set("cancel_url", `${origin}/donate?gift=canceled`);
  params.set("line_items[0][quantity]", "1");
  params.set("line_items[0][price_data][currency]", "usd");
  params.set("line_items[0][price_data][unit_amount]", String(cents));
  params.set(
    "line_items[0][price_data][product_data][name]",
    monthly ? "Monthly gift to the Mike James Foundation" : "Gift to the Mike James Foundation",
  );
  if (monthly) params.set("line_items[0][price_data][recurring][interval]", "month");
  params.set("metadata[frequency]", draft.frequency);
  params.set("metadata[name]", `${firstName} ${lastName}`.slice(0, 450));
  if (note) params.set("metadata[note]", note.slice(0, 450));

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  if (!response.ok) return { status: "unavailable" };
  const payload = (await response.json()) as { url?: string };
  if (!payload.url) return { status: "unavailable" };
  return { status: "redirect", url: payload.url };
}
