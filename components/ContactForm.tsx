"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";

type Status = "idle" | "loading" | "success" | "error";

const fieldClassName =
  "w-full rounded-[0.9rem] border border-line bg-surface px-[0.95rem] py-[0.8rem] text-[0.95rem] text-ink outline-none transition focus:border-brand-teal focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--brand-teal)_28%,transparent)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send message.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-3xl border border-line bg-surface-elevated p-6 shadow-[0_20px_60px_-40px_rgba(26,31,36,0.35)] md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClassName}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClassName}
            placeholder="you@business.com"
          />
        </Field>
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input
          type="checkbox"
          name="ontraport_user"
          value="yes"
          className="mt-1 h-4 w-4 rounded border-line text-brand-teal focus:ring-brand-teal"
        />
        <span>I am a current Ontraport user (or getting started soon)</span>
      </label>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClassName} resize-y`}
          placeholder="Tell me where you are stuck — setups, campaigns, segmentation, or something else."
        />
      </Field>

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>

      {status === "success" ? (
        <p className="text-sm font-medium text-brand-teal-dark">
          Thanks — your message is on its way. I will get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-600">{error}</p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block space-y-2">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}
