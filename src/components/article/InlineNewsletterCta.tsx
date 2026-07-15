import { Mail } from "lucide-react";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function InlineNewsletterCta() {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-court-50 text-court-600 dark:bg-court-500/10 dark:text-court-400">
          <Mail className="h-4 w-4" />
        </span>
        <div>
          <p className="font-semibold text-ink-950 dark:text-white">Get the playbook in your inbox</p>
          <p className="text-sm text-ink-500 dark:text-ink-400">Weekly recruiting insight and coach advice. No spam.</p>
        </div>
      </div>
      <NewsletterForm />
    </div>
  );
}
