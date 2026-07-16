import type { Author } from "@/types/content";

// Avatar is a neutral placeholder until a real headshot is added.
export const authors: Author[] = [
  {
    slug: "jared-jones",
    name: "Jared Jones",
    role: "Founder & Head Coach",
    bio: "Jared is the founder of Next Possession. He has spent 12 years coaching high school and AAU basketball and has personally evaluated thousands of players through live periods, film sessions, and recruiting conversations with college coaches. Next Possession exists because he got tired of watching good players and well-meaning families make avoidable mistakes.",
    avatar: "/avatar-placeholder.png",
    credentials: [
      "12 years coaching high school & AAU basketball",
      "Former college basketball player",
      "Advised 100+ families through the recruiting process",
    ],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
