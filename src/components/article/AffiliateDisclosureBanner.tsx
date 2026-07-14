import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export function AffiliateDisclosureBanner() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/60 p-4 text-xs leading-relaxed text-ink-500 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-400">
      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-court-500" />
      <p>
        Next Possession is reader-supported. When you buy through links on this page, we may earn an
        affiliate commission at no extra cost to you. This never affects our ratings.{" "}
        <Link href="/affiliate-disclosure" className="font-medium underline hover:text-court-600">
          Read our full disclosure
        </Link>
        .
      </p>
    </div>
  );
}
