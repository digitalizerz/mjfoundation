"use client";

import { FormEvent, useState } from "react";
import { donationAmounts, type GiftFrequency } from "@/content/involvement";
import { submitDonation, type DonationDraft } from "@/lib/actions";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function DonationForm() {
  const [frequency, setFrequency] = useState<GiftFrequency>("once");
  const [preset, setPreset] = useState<number | "custom">(100);
  const [custom, setCustom] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<DonationDraft | null>(null);

  const amount = preset === "custom" ? Number(custom) : preset;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!Number.isFinite(amount) || amount < 1) {
      setError("Enter a gift of at least $1.");
      return;
    }
    if (amount > 100000) {
      setError("For a gift above $100,000, use the contact form so the team can follow up directly.");
      return;
    }
    if (!firstName.trim() || !lastName.trim()) {
      setError("Add your first and last name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    const draft: DonationDraft = {
      frequency,
      amount,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      note: note.trim(),
    };
    const response = await submitDonation(draft);
    if (response.status === "redirect") {
      window.location.assign(response.url);
      return;
    }
    setResult(response.draft);
  }

  if (result) {
    return (
      <div className="donate-result" role="status">
        <p className="eyebrow">Gift prepared</p>
        <h2>
          {currency.format(result.amount)} {result.frequency === "monthly" ? "monthly" : "one-time"}
        </h2>
        <p>
          Nothing was charged. Payment processing is not connected yet. This screen is the handoff for Stripe or
          another giving provider — the amount, frequency, and donor fields are already collected.
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => setResult(null)}>
          Edit gift
        </button>
      </div>
    );
  }

  return (
    <form className="donate-form" onSubmit={onSubmit} noValidate>
      <fieldset>
        <legend>Frequency</legend>
        <div className="segmented" role="group" aria-label="Gift frequency">
          {(
            [
              ["once", "One-time"],
              ["monthly", "Monthly"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={frequency === value ? "is-selected" : ""}
              aria-pressed={frequency === value}
              onClick={() => setFrequency(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Amount</legend>
        <div className="amount-grid">
          {donationAmounts.map((value) => (
            <button
              key={value}
              type="button"
              className={preset === value ? "is-selected" : ""}
              aria-pressed={preset === value}
              onClick={() => setPreset(value)}
            >
              ${value}
            </button>
          ))}
          <button
            type="button"
            className={preset === "custom" ? "is-selected" : ""}
            aria-pressed={preset === "custom"}
            onClick={() => setPreset("custom")}
          >
            Custom
          </button>
        </div>
        {preset === "custom" ? (
          <label className="field">
            <span>Custom amount (USD)</span>
            <input
              inputMode="decimal"
              name="amount"
              value={custom}
              onChange={(event) => setCustom(event.target.value)}
              placeholder="75"
            />
          </label>
        ) : null}
      </fieldset>

      <div className="field-grid">
        <label className="field">
          <span>First name</span>
          <input name="given-name" autoComplete="given-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
        </label>
        <label className="field">
          <span>Last name</span>
          <input name="family-name" autoComplete="family-name" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
        </label>
      </div>
      <label className="field">
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <label className="field">
        <span>Note (optional)</span>
        <textarea name="note" rows={3} value={note} onChange={(event) => setNote(event.target.value)} />
      </label>

      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary">
        Continue
        <span className="sr-only">
          {" "}
          with a {frequency === "monthly" ? "monthly" : "one-time"} gift
          {Number.isFinite(amount) ? ` of ${currency.format(amount)}` : ""}
        </span>
      </button>
      <p className="form-hint">
        You will not be charged on this page. A payment provider can be connected later without redesigning the form.
      </p>
    </form>
  );
}
