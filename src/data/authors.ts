import type { Author } from "@/types/content";

// Placeholder pending real author information (name, bio, credentials, photo).
export const authors: Author[] = [
  {
    slug: "editorial-team",
    name: "Next Possession Editorial Team",
    role: "Author bio pending",
    bio: "Full author bio and credentials are coming soon.",
    avatar: "/avatar-placeholder.png",
    credentials: [],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
