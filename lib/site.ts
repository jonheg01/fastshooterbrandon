export const site = {
  name: "Fast Shooter Brandon",
  wordmark: { line1: "FAST SHOOTER", line2: "BRANDON" },
  person: "Brandon Hegreness",
  credential: "Competition shooter. Rifle, Pistol, PCC.",
  phone: "(623) 826-0789",
  phoneHref: "tel:+16238260789",
  domain: "fastshooterbrandon.com",
  url: "https://fastshooterbrandon.com",
  description:
    "Brandon Hegreness, competition shooter. The rifle, pistol, and PCC gear he actually runs, plus his sponsors and coaching.",
};

/**
 * Hero video. Set both paths once the compressed MP4 and its poster frame are
 * committed to public/video/. Leave them null and the hero renders the
 * typographic fallback instead of requesting files that do not exist.
 *
 * Target: H.264 MP4, muted, under 8 MB, plus a matching JPG poster frame.
 */
export const heroVideo: { src: string | null; poster: string | null } = {
  src: null,
  poster: null,
};

export type SocialLink = {
  label: string;
  handle: string;
  url: string;
};

export const socials: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@fastshooterbrandon",
    url: "https://www.instagram.com/fastshooterbrandon",
  },
  {
    label: "Facebook",
    handle: "fastshooterbrandon",
    url: "https://www.facebook.com/fastshooterbrandon/",
  },
];

export type Sponsor = {
  name: string;
  url: string;
  /** Sourced verbatim or near verbatim from the sponsor's own site. */
  line: string;
  detail: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Taylor Freelance",
    url: "https://taylorfreelancestore.com",
    line: "More Ammo is Always Better",
    detail:
      "Basepads, magazine extensions, magwells, and grip parts for competition. Built in Bellingham, Washington.",
  },
  {
    name: "Vortex Optics",
    url: "https://vortexoptics.com",
    line: "VIP Warranty: unlimited, unconditional, lifetime",
    detail:
      "Riflescopes, red dots, and mounts. Every optic carries the VIP warranty with no receipt and no registration required.",
  },
  {
    name: "Timney Triggers",
    url: "https://timneytriggers.com",
    line: "Building the world's finest triggers since 1946",
    detail:
      "Drop-in triggers and AR parts, made in the USA. Timney builds in Phoenix, Arizona.",
  },
];

export const coaching = {
  name: "Sauerland Coaching",
  coach: "Joey Sauerland",
  url: "https://sauerlandcoaching.com",
  line: "Expert competition pistol training to improve your skill.",
  detail:
    "In-person classes, online courses, and structured dry fire and live fire work. The site describes the path as novice to national champion in three years.",
};

export type CategoryKey = "rifle" | "pistol" | "pcc";

export type Category = {
  key: CategoryKey;
  name: string;
  slug: string;
  blurb: string;
};

export const categories: Category[] = [
  {
    key: "rifle",
    name: "Rifle",
    slug: "/rifle",
    blurb: "Glass, mounts, trigger, brake, bipod.",
  },
  {
    key: "pistol",
    name: "Pistol",
    slug: "/pistol",
    blurb: "The gun, the dot, the belt, the leather.",
  },
  {
    key: "pcc",
    name: "PCC",
    slug: "/pcc",
    blurb: "Basepads and capacity for the carbine.",
  },
];
