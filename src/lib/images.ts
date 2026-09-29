/**
 * Image map for Al Shukr Dairy Farm homepage.
 *
 * Swap any file under /public/images/ with real farm photography.
 * Keep the same filenames (or update `src` here) — components
 * import from this map only.
 *
 * Do not use competitor packaging or non-dairy livestock imagery.
 */

export type SiteImage = {
  src: string;
  alt: string;
};

export const images = {
  logo: {
    src: "/images/brand/logo.jpg",
    alt: "Al Shukr Dairy Farm — Purity Promised",
  },
  hero: {
    src: "/images/farm/hero-pasture.jpg",
    alt: "Close portrait of a dairy cow in warm farm light",
  },
  farm: {
    src: "/images/farm/farm-editorial.jpg",
    alt: "Holstein dairy cow in a green pasture",
  },
  processAnimals: {
    src: "/images/process/healthy-animals.jpg",
    alt: "Healthy dairy cow standing in pasture",
  },
  processCollect: {
    src: "/images/process/collected.jpg",
    alt: "Fresh milk poured from a glass pitcher",
  },
  processQuality: {
    src: "/images/process/quality.jpg",
    alt: "Fresh milk poured into a clean glass",
  },
  processDeliver: {
    src: "/images/process/delivered.jpg",
    alt: "Fresh milk ready to serve",
  },
  animals: {
    src: "/images/animals/care.jpg",
    alt: "Dairy cow grazing with attentive farm care",
  },
  final: {
    src: "/images/farm/final-cta.jpg",
    alt: "Golden hour fields on a working farm",
  },
} as const satisfies Record<string, SiteImage>;

export const processImages = [
  images.processAnimals,
  images.processCollect,
  images.processQuality,
  images.processDeliver,
] as const;
