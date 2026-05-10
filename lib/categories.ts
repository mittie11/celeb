export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "celebrity-news",
    name: "Celebrity News",
    description: "Breaking news on Hollywood's biggest stars — before anyone else has it.",
  },
  {
    slug: "hollywood-scandals",
    name: "Hollywood Scandals",
    description: "The controversies, feuds, and meltdowns that rocked the entertainment industry.",
  },
  {
    slug: "reality-tv",
    name: "Reality TV",
    description: "Drama, eliminations, and behind-the-scenes secrets from your favorite reality shows.",
  },
  {
    slug: "music-artists",
    name: "Music & Artists",
    description: "Tours, feuds, chart drama, and everything happening in the music world.",
  },
  {
    slug: "red-carpet",
    name: "Red Carpet",
    description: "Fashion, awards, iconic looks, and the moments that define Hollywood glamour.",
  },
  {
    slug: "viral-trending",
    name: "Viral & Trending",
    description: "The moments, posts, and stories that broke the internet this week.",
  },
  {
    slug: "relationships",
    name: "Relationships",
    description: "Celebrity romances, shocking breakups, secret affairs, and everything in between.",
  },
];

export function getCategoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}
