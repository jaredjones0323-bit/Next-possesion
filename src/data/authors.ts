import type { Author } from "@/types/content";

export const authors: Author[] = [
  {
    slug: "marcus-reid",
    name: "Marcus Reid",
    role: "Senior Gear Editor",
    bio: "Marcus has spent 12 years coaching high school and AAU basketball and has personally court-tested over 200 pairs of basketball shoes. He leads Next Possession's product testing methodology and oversees every rating published on the site.",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=256&auto=format&fit=crop",
    credentials: [
      "USA Basketball Certified Coach",
      "12 years coaching experience",
      "200+ shoes tested since 2016",
    ],
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    articlesCount: 84,
  },
  {
    slug: "dana-whitfield",
    name: "Dana Whitfield",
    role: "Performance Training Editor",
    bio: "A former Division I strength and conditioning coach, Dana reviews training equipment and wearables through the lens of measurable athletic development, not marketing claims.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    credentials: [
      "CSCS Certified",
      "6 years Division I strength staff",
      "Former collegiate player",
    ],
    twitter: "https://twitter.com",
    articlesCount: 56,
  },
  {
    slug: "elena-cho",
    name: "Elena Cho",
    role: "Equipment & Facilities Editor",
    bio: "Elena covers hoop systems, court equipment, and facility gear. She has installed and stress-tested more than 40 portable and in-ground hoop systems across three climate zones.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    credentials: [
      "Facilities & Equipment Specialist",
      "40+ hoop systems installed and tested",
    ],
    linkedin: "https://linkedin.com",
    articlesCount: 41,
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
