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
  | { status: "provider_not_connected"; draft: DonationDraft }
  | { status: "redirect"; url: string };

/**
 * Donation integration point.
 * Replace this function with a call that creates a Stripe Checkout Session
 * (or another provider) and return { status: "redirect", url }.
 * Nothing is charged and nothing is stored here.
 */
export async function submitDonation(draft: DonationDraft): Promise<DonationResult> {
  return { status: "provider_not_connected", draft };
}

export type InquiryDraft = {
  interest: string;
  name: string;
  email: string;
  organization: string;
  message: string;
};

export type InquiryResult = { status: "not_connected"; draft: InquiryDraft };

/** Replace with the foundation's form endpoint or email service. */
export async function submitInquiry(draft: InquiryDraft): Promise<InquiryResult> {
  return { status: "not_connected", draft };
}

export type NewsletterResult = { status: "not_connected"; email: string };

/** Replace with the newsletter provider. The address is not saved. */
export async function submitNewsletter(email: string): Promise<NewsletterResult> {
  return { status: "not_connected", email };
}
