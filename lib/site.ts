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

/**
 * Cut-out of Brandon that stands on the right of the hero, feet landing on the
 * diagonal red cut. Background removed, edges matted against the site's own
 * near-black so there is no halo.
 */
export const heroCutout: { src: string | null; alt: string } = {
  src: "/brandon-hero.webp",
  alt: "Brandon Hegreness shooting a stage",
};

/**
 * Affiliate network site verification.
 *
 * AvantLink verifies site ownership by having the applicant place a JavaScript
 * snippet on the homepage, then calling it. Vortex, RISE Armament, and
 * Double-Alpha Academy all run their programs on AvantLink, so one verification
 * covers all three.
 *
 * To verify:
 *   1. Paste the src URL AvantLink emails into `verificationScript.src`.
 *   2. Add that host to the script-src line in middleware.ts (the commented
 *      AVANTLINK_HOST entry is there for exactly this).
 *   3. Deploy, confirm in the AvantLink dashboard.
 *   4. Set src back to null and revert the middleware line. The allowance is
 *      temporary on purpose.
 *
 * The tag is rendered with the page nonce, so it satisfies the strict CSP
 * without opening the policy to inline script generally.
 */
export const verificationScript: { src: string | null } = {
  src: null,
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

/**
 * Category keys.
 *
 * `open2011` is the former `pistol` category, renamed 2026-08-12 at Jon's
 * instruction. The old /pistol URL permanently redirects to /open-2011 in
 * next.config.ts so no existing link breaks.
 *
 * `co` is Carry Optics, added the same day. It is the Canik side of the safe.
 */
export type CategoryKey = "rifle" | "open2011" | "co" | "pcc";

export type Category = {
  key: CategoryKey;
  name: string;
  /** Short label for the sticky nav. Kept tight so four items fit at 390px. */
  navLabel: string;
  slug: string;
  blurb: string;
};

export const categories: Category[] = [
  {
    key: "rifle",
    name: "Rifle",
    navLabel: "Rifle",
    slug: "/rifle",
    blurb: "Glass, mounts, trigger, brake, bipod.",
  },
  {
    key: "open2011",
    name: "Open 2011",
    navLabel: "Open 2011",
    slug: "/open-2011",
    blurb: "The gun, the dot, the belt, the leather.",
  },
  {
    key: "co",
    name: "CO",
    navLabel: "CO",
    slug: "/co",
    blurb: "Canik, brass, basepads, magwell.",
  },
  {
    key: "pcc",
    name: "PCC",
    navLabel: "PCC",
    slug: "/pcc",
    blurb: "Basepads and capacity for the carbine.",
  },
];
