import { Sparkles } from "lucide-react";

export function KeyTakeaways({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="rounded-2xl border border-court-100 bg-court-50/60 p-6 dark:border-court-500/20 dark:bg-court-500/5">
      <p className="mb-3 flex items-center gap-2 text-sm font-bold text-court-700 dark:text-court-400">
        <Sparkles className="h-4 w-4" /> Key Takeaways
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-court-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
