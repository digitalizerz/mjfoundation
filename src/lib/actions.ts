import type { GiftFrequency } from "@/content/involvement";

export type DonationDraft = {
  frequency: GiftFrequency;
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
  note: string;
};

export type DonationResult =
  | { status: "redirect"; url: string }
  | { status: "invalid"; message: string }
  | { status: "unavailable" };

export type NewsletterResult = { status: "not_connected"; email: string };

/** Replace with the newsletter provider. The address is not saved. */
export async function submitNewsletter(email: string): Promise<NewsletterResult> {
  return { status: "not_connected", email };
}
