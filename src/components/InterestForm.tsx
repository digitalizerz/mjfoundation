"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { interestOptions, type InterestId } from "@/content/involvement";
import { submitInquiry } from "@/lib/actions";

export function InterestForm({ initialInterest }: { initialInterest?: string }) {
  const starting = useMemo<InterestId>(() => {
    const match = interestOptions.find((option) => option.id === initialInterest);
    return match?.id ?? "general";
  }, [initialInterest]);

  const [interest, setInterest] = useState<InterestId>(starting);

  useEffect(() => {
    setInterest(starting);
  }, [starting]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    await submitInquiry({
      interest,
      name: name.trim(),
      email: email.trim(),
      organization: organization.trim(),
      message: message.trim(),
    });
    setDone(true);
  }

  if (done) {
    return (
      <div className="form-success" role="status">
        <p className="eyebrow">Message ready</p>
        <p>
          This form is not connected to an inbox yet, so the message was not sent. The fields are in place for the
          foundation&apos;s contact endpoint.
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => setDone(false)}>
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form id="interest-form" className="interest-form" onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>I want to</span>
        <select
          name="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value as InterestId)}
        >
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
        <input type="email" name="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <label className="field">
        <span>Organization (optional)</span>
        <input name="organization" autoComplete="organization" value={organization} onChange={(event) => setOrganization(event.target.value)} />
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
      <button type="submit" className="btn btn-primary">
        Send interest
      </button>
      <p className="form-hint">Messages stay in the browser until a contact service is connected.</p>
    </form>
  );
}
