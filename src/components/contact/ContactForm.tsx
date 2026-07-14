"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-ink-100 bg-white p-12 text-center dark:border-ink-800 dark:bg-ink-900">
        <CheckCircle2 className="h-10 w-10 text-emerald-500" />
        <p className="font-semibold text-ink-950 dark:text-white">Message sent</p>
        <p className="text-sm text-ink-500 dark:text-ink-400">
          Thanks for reaching out — we typically respond within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
            Name
          </label>
          <input
            id="name"
            required
            type="text"
            className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-court-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-court-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
          Subject
        </label>
        <input
          id="subject"
          required
          type="text"
          className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-court-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-court-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-court-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-court-600"
      >
        Send Message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
