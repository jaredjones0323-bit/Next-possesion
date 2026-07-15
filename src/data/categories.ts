import type { Category } from "@/types/content";

export const categories: Category[] = [
  {
    slug: "recruiting",
    name: "Recruiting",
    shortName: "Recruiting",
    description:
      "How college recruiting actually works — emailing coaches, building a profile, official vs. unofficial visits, NCAA rules, and realistic timelines.",
    seoIntro:
      "Most families learn how recruiting works too late, after avoidable mistakes are already made. This is a straight, no-hype breakdown of how college coaches actually evaluate and recruit players — from building a profile and reaching out, to understanding D1, D2, D3, NAIA, and juco pathways.",
    icon: "graduation-cap",
    color: "court",
  },
  {
    slug: "aau",
    name: "AAU Basketball",
    shortName: "AAU",
    description:
      "Choosing the right AAU team, understanding exposure myths, navigating shoe circuits and live periods, and getting the most out of summer basketball.",
    seoIntro:
      "AAU basketball is where most exposure decisions get made — and most misinformation lives. This covers what actually drives exposure, how to evaluate a team beyond its name, and how to approach live periods and showcases without wasting a summer.",
    icon: "users",
    color: "ink",
  },
  {
    slug: "player-development",
    name: "Player Development",
    shortName: "Development",
    description:
      "Not drills — coachability, basketball IQ, decision-making, communication, and the habits that actually separate players who get better.",
    seoIntro:
      "Skill work matters, but it's not what separates players who keep improving from players who plateau. This covers the habits, decision-making, and basketball IQ that coaches actually notice and develop over a career.",
    icon: "trending-up",
    color: "court",
  },
  {
    slug: "coach-perspective",
    name: "Coach Perspective",
    shortName: "Coach's View",
    description:
      "What coaches actually notice, what stats don't tell you, and honest observations from the sideline and film room.",
    seoIntro:
      "This is the perspective most players never get to hear directly — what a coach is actually thinking while watching film or standing on the sideline at a live period. No filter, no fluff, just what coaches notice and why.",
    icon: "eye",
    color: "ink",
  },
  {
    slug: "parent-education",
    name: "Parent Education",
    shortName: "Parents",
    description:
      "How parents can help instead of accidentally hurting recruiting — communication, realistic expectations, and navigating playing-time conversations.",
    seoIntro:
      "Parents want to help. Sometimes that instinct works against a player's recruiting without anyone realizing it. This is direct, practical guidance for parents on communication, expectations, and how to actually support a player's journey.",
    icon: "heart-handshake",
    color: "court",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
