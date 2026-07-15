import { Award } from "lucide-react";
import type { Product } from "@/types/content";
import { RatingStars } from "@/components/ui/RatingStars";

export function ExpertVerdict({ topProduct, verdict }: { topProduct?: Product; verdict: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-ink-950 p-6 text-white sm:p-8">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-court-400">
        <Award className="h-4 w-4" /> Expert Verdict
      </p>
      <p className="mt-3 text-base leading-relaxed text-white/85">{verdict}</p>
      {topProduct && (
        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
          <div>
            <p className="text-xs text-white/50">Our top pick</p>
            <p className="font-semibold">{topProduct.name}</p>
          </div>
          <RatingStars rating={topProduct.rating.overall} />
        </div>
      )}
    </div>
  );
}
