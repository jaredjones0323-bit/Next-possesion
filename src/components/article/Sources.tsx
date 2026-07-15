import { BookText } from "lucide-react";

export function Sources({ sources }: { sources: { label: string; url: string }[] }) {
  if (sources.length === 0) return null;

  return (
    <div className="rounded-2xl border border-ink-100 p-5 dark:border-ink-800">
      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-400">
        <BookText className="h-3.5 w-3.5" /> Sources
      </p>
      <ol className="space-y-1.5 text-sm text-ink-500 dark:text-ink-400">
        {sources.map((source, index) => (
          <li key={source.url}>
            [{index + 1}]{" "}
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-court-600">
              {source.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
