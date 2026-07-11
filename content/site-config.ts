// ============================================================
// site-config.ts — single source of truth for all copy + brand
//
// ── VARIATION MANIFEST (rolled per build) ───────────────────
//   Brand:            sdsd  (IMMUTABLE — never rename)
//   Industry:         custom · online storefront (landing)
//   Archetype:        G  (mixed-media cinematic landing)
//   Style:            S2 — Dark Monolithic (deep navy + gold)
//   Voice:            V1 — premium / editorial
//   Hero technique:   T4 — still image + parallax (prompt-only assets)
//   Hero overlay:     HO1 — centered
//   Card variant:     CV4 — Liquid Glass
//   Header variant:   split-edges
//   Footer variant:   FT3 — giant wordmark
//   Scene / loading:  SC5 / L2
//   Palette:  bg #13162e · navy #202553 · surface #2a2d4b
//            accent(gold) #dbc03d · secondary #e3d383
//   Build mode:       landing — single page, #anchor sections only
// ============================================================

export const siteConfig = {
  // -- Brand identity ---------------------------------------------
  company: {
    name: "sdsd",
    tagline: "Everything we make, one storefront.",
    description:
      "sdsd is a considered online storefront — a single, quiet place to discover, browse, and buy the things we make.",
    email: "hello@sdsd.store",
    phone: "",
    location: "Online · Worldwide shipping",
  },

  brand: {
    primary: "#202553",
    accent: "#dbc03d",
    bg: "#13162e",
  },

  typography: {
    display: "Fraunces",
    body: "Inter",
    mono: "Space Mono",
  },

  // -- SEO + meta + sitemap ---------------------------------------
  seo: {
    siteUrl: "https://sdsd.store",
    locale: "en_US",
    htmlLang: "en",
    defaultTitle: "sdsd — Everything we make, one storefront",
    defaultDescription:
      "sdsd is a considered online storefront — a single, quiet place to discover, browse, and buy the things we make.",
    defaultOgImage: "https://sdsd.store/og-default.png",
    twitterHandle: "",
    noindexPaths: ["/account", "/admin", "/auth", "/api"],
    googleSiteVerification: "",
    structuredData: {
      businessType: null,
      address: {
        streetAddress: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        addressCountry: "",
      },
      hours: [],
      priceRange: "$$",
      geo: null,
      rating: null,
      starRating: null,
      amenities: [],
      cuisine: [],
    },
  },

  // -- Social profiles (used in Organization JSON-LD sameAs) ------
  socials: {
    instagram: "https://instagram.com/sdsd",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    tiktok: "https://tiktok.com/@sdsd",
    whatsapp: "",
  },

  // -- Hero ------------------------------------------------------
  hero: {
    h1: [
      { text: "Everything we make,", accent: false },
      { text: "one storefront.", accent: true },
    ],
  },

  tagline: "Everything we make, one storefront.",

  // -- Services --------------------------------------------------
  servicesHeading: "What you'll find inside",

  services: [
    {
      name: "The Online Storefront",
      slug: "online-storefront",
      description:
        "One calm, curated catalogue. Browse the full collection, read the details that matter, and check out in a few unhurried taps — no clutter, no noise.",
      highlights: [
        "A single, curated collection",
        "Honest product detail",
        "Fast, frictionless checkout",
        "Worldwide shipping",
      ],
    },
  ] as Array<{
    name: string;
    slug: string;
    description: string;
    highlights?: string[];
  }>,

  rooms: [] as Array<{
    slug: string;
    name: string;
    description: string;
    pricePerNight: number;
    currency: string;
    maxGuests: number;
    squareMeters?: number;
    image?: string;
    images?: string[];
    amenities?: string[];
  }>,

  locations: [] as Array<{
    slug: string;
    name: string;
    address: {
      streetAddress: string;
      city: string;
      region?: string;
      postalCode?: string;
      country: string;
    };
    phone?: string;
    email?: string;
    geo?: { latitude: number; longitude: number };
    hours?: Array<{ days: string[]; opens: string; closes: string }>;
    images?: string[];
    description?: string;
  }>,

  gallery: [] as Array<{
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
  }>,

  // -- Why us ----------------------------------------------------
  whyUs: {
    heading: "Made for the way you actually shop",
    items: [
      {
        title: "One collection, no noise",
        description:
          "We keep a single, edited catalogue so you never have to wade through a thousand near-identical listings to find the good thing.",
      },
      {
        title: "Detail you can trust",
        description:
          "Every item is photographed honestly and described plainly — materials, sizing, and what to actually expect when it arrives.",
      },
      {
        title: "Checkout in a breath",
        description:
          "A short, secure path from cart to confirmation. No account walls, no dark patterns, no surprise fees at the end.",
      },
    ] as Array<{ title: string; description: string }>,
  },

  process: [] as Array<{ step: number; title: string; description: string }>,

  // -- About -----------------------------------------------------
  aboutHeading: "A storefront, distilled",
  aboutStory:
    "sdsd began with a simple frustration: buying the things we love online had become a chore. Endless tabs, cluttered grids, checkout flows that fight you at every step. So we built the opposite — one quiet storefront, carefully arranged, where the product is the point and everything else gets out of the way.",
  manifesto: "Fewer, better things — sold the way they deserve.",
  values: [
    {
      title: "Considered",
      description: "We'd rather carry one great thing than a hundred forgettable ones.",
    },
    {
      title: "Honest",
      description: "Clear prices, clear detail, clear shipping. No games.",
    },
    {
      title: "Quiet",
      description: "A calm space to shop, designed to respect your attention.",
    },
  ] as Array<{ title: string; description: string }>,

  work: [] as Array<{ title: string; client: string; service: string; result: string }>,

  // -- Stats -----------------------------------------------------
  stats: [
    { value: "1", label: "Curated collection" },
    { value: "40+", label: "Countries shipped to" },
    { value: "72h", label: "Typical dispatch" },
    { value: "100%", label: "Secure checkout" },
  ] as Array<{ value: string; label: string }>,

  features: [] as Array<{ title: string; description: string }>,

  sectionThemeWord: "storefront",

  narrative: [] as Array<{ speaker: string; text: string }>,

  mixedMedia: {
    skipSecondaryVideo: true,
    accentEyebrow: "Now open",
    accentLine: "A quieter way to buy the things you love.",
  },

  // -- CTA -------------------------------------------------------
  cta: {
    primary: "Browse the collection",
    secondary: "Get in touch",
  },

  ctaBlock: {
    heading: "Step inside the storefront",
    description:
      "One curated collection, ready when you are. Take a look, or reach out if you'd like a hand finding something.",
  },

  trustBar: [
    "Secure checkout",
    "Worldwide shipping",
    "72-hour dispatch",
    "Real human support",
  ] as string[],

  // -- Cinematic config ------------------------------------------
  scrollHero: {
    archetype: "G" as "A" | "B" | "C" | "D" | "E" | "F" | "G",
    styleId: "S2",
    assetMode: "prompt-only" as "live-generate" | "prompt-only",
    imageUrl: "",
    scrollDistance: 3,
  },

  // -- Header variant --------------------------------------------
  headerVariant: "split-edges" as const,

  // -- Footer variant --------------------------------------------
  footerVariant: "FT3" as const,

  // -- Motion globals --------------------------------------------
  motion: {
    scrollProgress: true,
    cursorFollower: false,
    intensity: "medium" as "low" | "medium" | "high",
  },
} as const;

export type SiteConfig = typeof siteConfig;
