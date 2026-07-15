import { cn } from "@/lib/utils";

const styles = {
  default: "bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200",
  court: "bg-court-50 text-court-700 dark:bg-court-500/10 dark:text-court-400",
  gold: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  outline: "border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300",
  dark: "bg-ink-900 text-white dark:bg-white dark:text-ink-950",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
