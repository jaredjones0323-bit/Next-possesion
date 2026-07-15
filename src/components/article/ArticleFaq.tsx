import { Accordion } from "@/components/ui/Accordion";
import type { FaqItem } from "@/types/content";

export function ArticleFaq({ faqs }: { faqs: FaqItem[] }) {
  if (faqs.length === 0) return null;

  return (
    <div id="faq" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-ink-950 dark:text-white">Frequently Asked Questions</h2>
      <div className="mt-5">
        <Accordion items={faqs} />
      </div>
    </div>
  );
}
