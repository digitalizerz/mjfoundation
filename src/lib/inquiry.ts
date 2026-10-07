"use server";

import { interestOptions } from "@/content/involvement";

export type InquiryResult =
  | { status: "sent" }
  | { status: "invalid"; message: string }
  | { status: "unavailable" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(draft: {
  interest: string;
  name: string;
  email: string;
  organization: string;
  message: string;
}): Promise<InquiryResult> {
  const interest = interestOptions.find((option) => option.id === draft.interest);
  const name = draft.name.trim();
  const email = draft.email.trim();
  const organization = draft.organization.trim();
  const message = draft.message.trim();

  if (!interest) return { status: "invalid", message: "Choose how you want to be involved." };
  if (name.length < 2) return { status: "invalid", message: "Add your name." };
  if (!emailPattern.test(email)) return { status: "invalid", message: "Enter a valid email address." };
  if (message.length < 8) return { status: "invalid", message: "Share a few words about how you want to help." };

  const to = process.env.CONTACT_TO?.trim();
  const key = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM?.trim();
  if (!to || !key || !from) return { status: "unavailable" };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Mike James Foundation — ${interest.label}`,
      text: [`Path: ${interest.label}`, `Name: ${name}`, `Email: ${email}`, organization ? `Organization: ${organization}` : "", "", message]
        .filter((line) => line !== "")
        .join("\n"),
    }),
  });

  if (!response.ok) return { status: "unavailable" };
  return { status: "sent" };
}
