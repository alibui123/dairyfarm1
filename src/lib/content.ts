export const brand = {
  name: "Al Shukr Dairy Farm",
  shortName: "Al Shukr",
  tagline: "Purity Promised",
  /** Placeholder — replace with the real WhatsApp business number before launch */
  whatsappUrl: "https://wa.me/920000000000",
  whatsappLabel: "WhatsApp (number pending)",
  phoneDisplay: "+92 XXX XXXXXXX (placeholder)",
  location: "Pakistan",
  /** Placeholder — replace with the real contact email before launch */
  email: "hello@alshukrdairy.com",
  emailLabel: "Email (address pending)",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Farm", href: "#farm" },
  { label: "Our Milk", href: "#process" },
  { label: "Quality", href: "#why" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Fresh from the farm",
  lines: ["Pure Milk.", "From Our Farm", "To Your Door."],
  statement: "Purity Promised.",
  supporting:
    "Fresh, carefully produced milk from a farm committed to quality, animal care and purity.",
  primaryCta: "Order Fresh Milk",
  secondaryCta: "Discover Our Farm",
} as const;

export const farmStory = {
  id: "farm",
  headline: "Where Purity Begins.",
  body: "Our milk starts at the farm — with healthy animals, responsible care and a commitment to doing things properly.",
  pillars: ["Care", "Quality", "Consistency"],
} as const;

export const farmProcess = {
  id: "process",
  headline: ["From Farm.", "With Care.", "To You."],
  stages: [
    {
      number: "01",
      title: "Healthy Animals",
      description:
        "Cows and buffaloes raised with attentive care — the foundation of every litre we produce.",
    },
    {
      number: "02",
      title: "Carefully Collected",
      description:
        "Milk is collected with discipline and cleanliness, preserving freshness from the first moment.",
    },
    {
      number: "03",
      title: "Quality Controlled",
      description:
        "Every batch is checked so purity remains a practice, not a promise on a label.",
    },
    {
      number: "04",
      title: "Delivered Fresh",
      description:
        "From farm to household — consistent, reliable delivery you can depend on.",
    },
  ],
} as const;

export const whyAlShukr = {
  id: "why",
  headline: ["Purity Isn't a Claim.", "It's a Process."],
  principles: [
    {
      word: "Pure",
      description: "Fresh milk with quality at the center of every decision.",
    },
    {
      word: "Careful",
      description: "Responsible animal care and disciplined farm practices.",
    },
    {
      word: "Fresh",
      description: "Built around getting fresh milk to customers, reliably.",
    },
    {
      word: "Trusted",
      description: "Transparent, consistent service rooted in farm integrity.",
    },
  ],
} as const;

export const animalCare = {
  id: "animals",
  headline: ["Good Milk Starts", "With Good Care."],
  body: "We believe quality begins long before milk reaches the bottle. It begins with the care given to the animals that produce it.",
} as const;

export const customerJourney = {
  id: "journey",
  headline: "A Simple Path to Freshness",
  steps: [
    {
      word: "Order",
      description: "Choose your milk.",
    },
    {
      word: "Prepare",
      description: "Fresh milk is prepared from the farm.",
    },
    {
      word: "Deliver",
      description: "Your order reaches your doorstep.",
    },
  ],
} as const;

export const trust = {
  id: "trust",
  headline: "Know Where Your Milk Comes From.",
  path: ["Farm", "Milk", "Quality", "Delivery"],
  body: "Every step is intentional — so when milk arrives at your door, you know it began with care.",
} as const;

export const freshMilkCta = {
  id: "order",
  headline: "Bring Freshness Home.",
  body: "Experience fresh milk delivered with the care and consistency you expect.",
  primaryCta: "Order Fresh Milk",
  secondaryCta: "Talk to Us on WhatsApp",
} as const;

export const finalCta = {
  id: "contact",
  statement: "Purity Promised.",
  body: "Fresh milk. Thoughtfully produced. Delivered with care.",
  primaryCta: "Order Fresh Milk",
  secondaryCta: "Contact Us",
} as const;
