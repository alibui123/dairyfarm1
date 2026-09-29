"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { brand, freshMilkCta } from "@/lib/content";
import { MagneticButton } from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function FreshMilkCTA() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".cta-block > *", {
          y: 40,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id={freshMilkCta.id}
      className="relative overflow-hidden bg-olive py-24 text-milk md:py-32 lg:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full border border-gold/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-1/2 h-[18rem] w-[18rem] -translate-y-1/2 rounded-full border border-gold/15"
      />

      <div className="cta-block relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <h2 className="max-w-3xl font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.02em]">
          {freshMilkCta.headline}
        </h2>
        <div className="gold-line mt-8 max-w-[12rem]" />
        <p className="mt-8 max-w-lg text-base leading-relaxed text-milk/75 md:text-lg">
          {freshMilkCta.body}
        </p>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <MagneticButton href={brand.whatsappUrl} variant="gold">
            {freshMilkCta.primaryCta}
          </MagneticButton>
          <MagneticButton
            href={brand.whatsappUrl}
            variant="ghost"
            className="text-milk"
            target="_blank"
            rel="noopener noreferrer"
          >
            {freshMilkCta.secondaryCta}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
