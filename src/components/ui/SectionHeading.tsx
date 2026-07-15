import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-court-600 dark:text-court-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-display-sm font-display font-semibold text-ink-950 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-ink-500 dark:text-ink-400">{description}</p>
      )}
    </div>
  );
}
