import Image from "next/image";
import { Quote } from "lucide-react";
import type { Author } from "@/types/content";

export function CoachesTake({ author, take }: { author: Author; take: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-ink-950 p-6 text-white sm:p-8">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-court-400">
        <Quote className="h-4 w-4" /> Coach&apos;s Take
      </p>
      <p className="mt-3 text-lg font-medium leading-relaxed text-white/90">&ldquo;{take}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
          <Image src={author.avatar} alt={author.name} fill sizes="36px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold">{author.name}</p>
          <p className="text-xs text-white/50">{author.role}</p>
        </div>
      </div>
    </div>
  );
}
