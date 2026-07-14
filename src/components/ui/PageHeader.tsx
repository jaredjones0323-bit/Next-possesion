import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-ink-100 bg-ink-50/50 py-16 dark:border-ink-800 dark:bg-ink-900/30">
      <Container size="narrow" className="text-center">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-court-600 dark:text-court-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-display-md font-display font-semibold text-ink-950 dark:text-white">
          {title}
        </h1>
        {description && <p className="mt-4 text-ink-500 dark:text-ink-400">{description}</p>}
      </Container>
    </div>
  );
}
