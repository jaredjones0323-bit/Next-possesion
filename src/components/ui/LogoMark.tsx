import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 64"
      className={cn("h-8 w-auto", className)}
      role="img"
      aria-label="Next Possession"
    >
      <g fill="none" strokeLinecap="square" strokeLinejoin="miter">
        {/* N */}
        <line x1="8" y1="54" x2="8" y2="10" stroke="currentColor" strokeWidth="9" />
        <line x1="32" y1="54" x2="32" y2="10" stroke="currentColor" strokeWidth="9" />
        <line x1="8" y1="10" x2="32" y2="54" stroke="currentColor" strokeWidth="9" />

        {/* P stem */}
        <line x1="55" y1="54" x2="55" y2="10" stroke="currentColor" strokeWidth="9" />
      </g>

      {/* P bowl (hollow) */}
      <path
        d="M55,8 H77 A14,14 0 0 1 77,36 H55 Z M55,17 H68 A5,5 0 0 1 68,27 H55 Z"
        fillRule="evenodd"
        fill="currentColor"
      />

      {/* Diagonal "next" slash accent, cutting through the N/P junction */}
      <polygon points="38,64 47,64 63,0 54,0" fill="var(--logo-accent, #f96411)" />
    </svg>
  );
}
