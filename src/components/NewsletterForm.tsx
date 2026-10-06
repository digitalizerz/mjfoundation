"use client";

import { FormEvent, useState } from "react";
import { submitNewsletter } from "@/lib/actions";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    await submitNewsletter(value);
    setDone(true);
  }

  if (done) {
    return (
      <p className="form-success" role="status">
        Thanks. Newsletter delivery is not connected yet, so this address was not saved.
      </p>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit} noValidate>
      <label htmlFor="newsletter-email">Email address</label>
      <div className="newsletter-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "newsletter-error" : undefined}
          required
        />
        <button type="submit" className="btn btn-primary btn-small">
          Sign up
        </button>
      </div>
      {error ? (
        <p id="newsletter-error" className="form-error" role="alert">
          {error}
        </p>
      ) : (
        <p className="form-hint">Occasional notes on programs and Mike James Day. No list is connected yet.</p>
      )}
    </form>
  );
}
