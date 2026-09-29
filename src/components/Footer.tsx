"use client";

import Image from "next/image";
import { brand, navLinks } from "@/lib/content";
import { images } from "@/lib/images";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-charcoal text-milk">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex items-center gap-4">
              <span className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-gold/35">
                <Image
                  src={images.logo.src}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block font-display text-xl tracking-wide">
                  {brand.name}
                </span>
                <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-[0.24em] text-gold">
                  {brand.tagline}
                </span>
              </span>
            </a>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-milk/55">
              Fresh milk. Thoughtfully produced. Delivered with care from our
              farm to your door.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                Navigate
              </p>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-milk/70 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                Contact
              </p>
              <ul className="mt-5 space-y-3 text-sm text-milk/70">
                <li>
                  <span className="block text-milk/45">{brand.whatsappLabel}</span>
                  <a
                    href={brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    Talk to us on WhatsApp
                  </a>
                </li>
                <li>
                  <span className="block text-milk/45">{brand.emailLabel}</span>
                  <a
                    href={`mailto:${brand.email}`}
                    className="transition-colors hover:text-gold"
                  >
                    {brand.email}
                  </a>
                </li>
                <li>
                  <span className="block text-milk/45">Phone (placeholder)</span>
                  {brand.phoneDisplay}
                </li>
                <li>{brand.location}</li>
              </ul>

              <div className="mt-8 flex gap-4">
                <SocialLink label="Instagram" href="#" />
                <SocialLink label="Facebook" href="#" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-milk/10 pt-8 text-[0.7rem] tracking-wide text-milk/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="font-display text-base tracking-wide text-milk/50">
            {brand.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center border border-milk/20 text-[0.6rem] uppercase tracking-[0.12em] text-milk/60 transition-colors hover:border-gold hover:text-gold"
    >
      {label.slice(0, 2)}
    </a>
  );
}
