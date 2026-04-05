"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ContactFormPayload, ContactFormState } from "@/types/contact";

const initialForm: ContactFormPayload = {
  name: "",
  email: "",
  message: "",
};

const initialState: ContactFormState = {
  ok: false,
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormPayload>(initialForm);
  const [status, setStatus] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDisabled = useMemo(
    () =>
      isSubmitting || !form.name.trim() || !form.email.trim() || !form.message.trim(),
    [form.email, form.message, form.name, isSubmitting],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialState);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as ContactFormState;
      if (!response.ok) {
        setStatus({
          ok: false,
          message: data.message || "Unable to submit your message.",
        });
        return;
      }

      setStatus({
        ok: true,
        message: "Thanks. We have received your message and will get back to you soon.",
      });
      setForm(initialForm);
    } catch {
      setStatus({
        ok: false,
        message: "A network error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-xl flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="h-11 rounded-xl border border-black/15 bg-background px-3 text-sm outline-none ring-0 transition focus:border-black dark:border-white/20 dark:focus:border-white"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="h-11 rounded-xl border border-black/15 bg-background px-3 text-sm outline-none ring-0 transition focus:border-black dark:border-white/20 dark:focus:border-white"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          className="rounded-xl border border-black/15 bg-background px-3 py-2 text-sm outline-none ring-0 transition focus:border-black dark:border-white/20 dark:focus:border-white"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status.message ? (
        <p
          className={`text-sm ${
            status.ok
              ? "text-emerald-700 dark:text-emerald-400"
              : "text-red-700 dark:text-red-400"
          }`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}