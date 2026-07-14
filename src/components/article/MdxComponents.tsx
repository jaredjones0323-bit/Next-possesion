import type { MDXComponents } from "mdx/types";
import { slugify } from "@/lib/utils";

function heading(Tag: "h2" | "h3") {
  const HeadingComponent = ({ children }: { children?: React.ReactNode }) => {
    const text = typeof children === "string" ? children : "";
    const id = slugify(text);
    return (
      <Tag id={id} className="scroll-mt-28">
        {children}
      </Tag>
    );
  };
  HeadingComponent.displayName = `Mdx${Tag.toUpperCase()}`;
  return HeadingComponent;
}

export const mdxComponents: MDXComponents = {
  h2: heading("h2"),
  h3: heading("h3"),
  a: ({ href = "", children, ...props }) => (
    <a
      href={href}
      className="font-medium text-court-600 underline decoration-court-300 underline-offset-2 hover:text-court-700 dark:text-court-400"
      {...props}
    >
      {children}
    </a>
  ),
};
