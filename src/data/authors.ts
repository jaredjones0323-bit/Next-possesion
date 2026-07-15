import type { Author } from "@/types/content";

export const authors: Author[] = [
  {
    slug: "marcus-reid",
    name: "Marcus Reid",
    role: "Founder & Head Coach",
    bio: "Marcus is the founder of Next Possession. He has spent 12 years coaching high school and AAU basketball and has personally evaluated thousands of players through live periods, film sessions, and recruiting conversations with college coaches. Next Possession exists because he got tired of watching good players and well-meaning families make avoidable mistakes.",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=256&auto=format&fit=crop",
    credentials: [
      "12 years coaching high school & AAU basketball",
      "Former college basketball player",
      "Advised 100+ families through the recruiting process",
    ],
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    articlesCount: 42,
  },
  {
    slug: "dana-whitfield",
    name: "Dana Whitfield",
    role: "Player Development Coach",
    bio: "A former Division I player and current strength and conditioning coach, Dana writes about the habits, decision-making, and basketball IQ that actually separate players who keep improving from players who plateau.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    credentials: [
      "Former Division I collegiate player",
      "CSCS Certified strength & conditioning coach",
      "6 years on a Division I coaching staff",
    ],
    twitter: "https://twitter.com",
    articlesCount: 21,
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
