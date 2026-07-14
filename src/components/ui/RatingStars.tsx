import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

export function RatingStars({
  rating,
  size = "md",
  showValue = true,
  className,
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  const iconSize = { sm: "h-3.5 w-3.5", md: "h-4 w-4", lg: "h-5 w-5" }[size];

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5 text-court-500" aria-hidden>
        {Array.from({ length: full }).map((_, i) => (
          <Star key={`f-${i}`} className={cn(iconSize, "fill-current")} />
        ))}
        {hasHalf && <StarHalf className={cn(iconSize, "fill-current")} />}
        {Array.from({ length: empty }).map((_, i) => (
          <Star key={`e-${i}`} className={cn(iconSize, "text-ink-200 dark:text-ink-700")} />
        ))}
      </div>
      {showValue && (
        <span className="text-sm font-semibold text-ink-700 dark:text-ink-200">
          {rating.toFixed(1)}
        </span>
      )}
      <span className="sr-only">{rating} out of 5 stars</span>
    </div>
  );
}
