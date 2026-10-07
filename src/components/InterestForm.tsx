"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { interestOptions, type InterestId } from "@/content/involvement";
import { submitInquiry } from "@/lib/inquiry";

export function InterestForm({ initialInterest }: { initialInterest?: string }) {
  const starting = useMemo<InterestId | "">(() => {
    const match = interestOptions.find((option) => option.id === initialInterest);
    return match?.id ?? "";
  }, [initialInterest]);

  const [interest, setInterest] = useState<InterestId | "">(starting);

  useEffect(() => {
    setInterest(starting);
  }, [starting]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!interest) {
      setError("Choose how you want to be involved.");
      return;
    }
    if (name.trim().length < 2) {
      setError("Add your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    if (message.trim().length < 8) {
      setError("Share a few words about how you want to help.");
      return;
    }
    setError("");
    setPending(true);
    const result = await submitInquiry({
      interest,
      name: name.trim(),
      email: email.trim(),
      organization: organization.trim(),
      message: message.trim(),
    });
    setPending(false);
    if (result.status === "sent") {
      setDone(true);
      return;
    }
    setError(result.status === "invalid" ? result.message : "We couldn't send that message.");
  }

  if (done) {
    return (
      <div className="form-success" role="status">
        <p className="eyebrow">Sent</p>
        <h2>Thanks. We have your message.</h2>
        <p>The foundation will reply at the email you gave.</p>
      </div>
    );
  }

  return (
    <form id="contact-form" className="interest-form" onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>I want to</span>
        <select
          name="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value as InterestId)}
          required
        >
          <option value="" disabled>
            Choose one
          </option>
          {interestOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Name</span>
        <input name="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} required />
      </label>
      <label className="field">
        <span>Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label className="field">
        <span>Organization (optional)</span>
        <input
          name="organization"
          autoComplete="organization"
          value={organization}
          onChange={(event) => setOrganization(event.target.value)}
        />
      </label>
      <label className="field">
        <span>How you want to be involved</span>
        <textarea name="message" rows={5} value={message} onChange={(event) => setMessage(event.target.value)} required />
      </label>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? "Sending" : "Send"}
      </button>
    </form>
  );
}
