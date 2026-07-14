import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type CommonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-court-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-ink-950 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-court-500 text-white hover:bg-court-600 shadow-glow hover:shadow-none active:bg-court-700",
  secondary:
    "bg-ink-900 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100",
  outline:
    "border border-ink-200 dark:border-ink-700 text-ink-900 dark:text-white hover:border-court-500 hover:text-court-600 dark:hover:text-court-400",
  ghost: "text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800",
};

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" aria-hidden />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" aria-hidden />}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  external,
  ...props
}: CommonProps & { href: string; external?: boolean } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
  >) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" aria-hidden />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" aria-hidden />}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer sponsored" {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
