"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className, dark = false }: { className?: string; dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium",
          dark ? "bg-white/10 text-white" : "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
          className
        )}
      >
        <CheckCircle2 className="h-4 w-4" /> You&apos;re in. Check your inbox to confirm.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex w-full max-w-md flex-col gap-3 sm:flex-row", className)}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className={cn(
          "w-full flex-1 rounded-full px-5 py-3 text-sm outline-none transition focus:ring-2 focus:ring-court-500",
          dark
            ? "bg-white/10 text-white placeholder:text-white/50 border border-white/20"
            : "border border-ink-200 bg-white text-ink-900 placeholder:text-ink-400 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
        )}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-court-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-court-600"
      >
        Subscribe <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
