"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { brand, navLinks } from "@/lib/content";
import { images } from "@/lib/images";
import { MagneticButton } from "./MagneticButton";

gsap.registerPlugin(useGSAP);

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set([".nav-logo", ".nav-links", ".nav-cta"], { autoAlpha: 1, y: 0 });
        return;
      }
      gsap.set([".nav-logo", ".nav-links", ".nav-cta"], { autoAlpha: 0, y: 20 });
      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 0.9 } })
        .to(".nav-logo", { autoAlpha: 1, y: 0 }, 0.35)
        .to(".nav-links", { autoAlpha: 1, y: 0 }, 0.5)
        .to(".nav-cta", { autoAlpha: 1, y: 0 }, 0.6);
    },
    { scope: navRef }
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        scrolled || open
          ? "border-b border-ink/10 bg-ivory/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="nav-logo relative z-10 flex items-center gap-3 opacity-0"
          aria-label={brand.name}
        >
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image
              src={images.logo.src}
              alt=""
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span
            className={`hidden flex-col leading-none sm:flex ${
              scrolled || open ? "text-ink" : "text-milk"
            }`}
          >
            <span className="font-display text-[0.95rem] tracking-wide">
              {brand.shortName}
            </span>
            <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.22em] opacity-70">
              Dairy Farm
            </span>
          </span>
        </a>

        <ul
          className={`nav-links absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 opacity-0 lg:flex ${
            scrolled ? "text-ink" : "text-milk"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta relative z-10 flex items-center gap-3 opacity-0">
          <div className="hidden sm:block">
            <MagneticButton
              href="#order"
              variant={scrolled || open ? "dark" : "light"}
              className="!px-5 !py-2.5 !text-[0.62rem]"
              magnetic={false}
            >
              Order Fresh Milk
            </MagneticButton>
          </div>

          <button
            type="button"
            className={`relative flex h-10 w-10 items-center justify-center lg:hidden ${
              scrolled || open ? "text-ink" : "text-milk"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-ink/10 bg-ivory px-5 pb-8 pt-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 font-display text-2xl text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <MagneticButton
              href="#order"
              variant="gold"
              className="mt-4 w-full"
              magnetic={false}
              onClick={() => setOpen(false)}
            >
              Order Fresh Milk
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
