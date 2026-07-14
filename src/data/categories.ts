import type { Category } from "@/types/content";

export const categories: Category[] = [
  {
    slug: "basketball-shoes",
    name: "Basketball Shoes",
    shortName: "Shoes",
    description:
      "In-depth performance reviews and buying guides for basketball shoes — traction tests, cushion breakdowns, and fit notes from real runs.",
    seoIntro:
      "Choosing the right basketball shoe affects everything from ankle stability to first-step explosiveness. Our team runs every pair through court testing — traction on dust, cushion response on hard courts, and multi-week durability checks — before it earns a spot in a guide.",
    icon: "footprints",
    color: "court",
  },
  {
    slug: "training-equipment",
    name: "Training Equipment",
    shortName: "Training",
    description:
      "Ball machines, resistance gear, agility ladders, and shooting aids reviewed for real skill development, not gimmicks.",
    seoIntro:
      "Good training gear should shave weeks off your development curve. We test shooting machines, resistance bands, and skill-development tools against a simple bar: does it produce measurable improvement, or is it just a novelty?",
    icon: "dumbbell",
    color: "ink",
  },
  {
    slug: "hoops-systems",
    name: "Hoops & Systems",
    shortName: "Hoops",
    description:
      "In-ground, portable, and wall-mounted basketball hoop reviews for driveways, garages, and backyard courts.",
    seoIntro:
      "A hoop system is a multi-year investment — rim stability, backboard rigidity, and base weight matter more than marketing renders. We compare portable, in-ground, and mounted systems side by side on install time, wind resistance, and rim durability.",
    icon: "circle-dot",
    color: "court",
  },
  {
    slug: "apparel",
    name: "Jerseys & Apparel",
    shortName: "Apparel",
    description:
      "Performance apparel, compression gear, and jerseys tested for breathability, fit, and durability through real training blocks.",
    seoIntro:
      "The right apparel regulates temperature and range of motion so gear stops being a variable. We evaluate fabric weight, stitching quality, and fit consistency across sizing runs before recommending anything.",
    icon: "shirt",
    color: "ink",
  },
  {
    slug: "wearables",
    name: "Wearables & Trackers",
    shortName: "Wearables",
    description:
      "Smartwatches, vertical jump trackers, and performance sensors reviewed for accuracy and real training value.",
    seoIntro:
      "Player-tracking wearables promise data — we verify it. Each device is benchmarked against manual timing and video breakdown to confirm the numbers you're training around are actually trustworthy.",
    icon: "activity",
    color: "court",
  },
  {
    slug: "accessories",
    name: "Bags & Accessories",
    shortName: "Accessories",
    description:
      "Gym bags, ankle braces, grip aids, and the small gear that quietly makes a big difference in a training routine.",
    seoIntro:
      "Accessories rarely headline a gear guide, but the right ankle brace or ball bag solves a real problem. We test the supporting cast of basketball gear with the same rigor as the marquee items.",
    icon: "backpack",
    color: "ink",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
