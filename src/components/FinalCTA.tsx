"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { brand, finalCta } from "@/lib/content";
import { images } from "@/lib/images";
import { MagneticButton } from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function FinalCTA() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".final-image",
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.from(".final-copy > *", {
          y: 48,
          autoAlpha: 0,
          duration: 1.05,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 60%" },
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id={finalCta.id}
      className="relative flex min-h-[90svh] items-center overflow-hidden bg-charcoal text-milk"
    >
      <div className="absolute inset-0">
        <div className="final-image absolute inset-0 will-change-transform">
          <Image
            src={images.final.src}
            alt={images.final.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="grain opacity-[0.06] mix-blend-soft-light" />
      </div>

      <div className="final-copy relative z-10 mx-auto w-full max-w-[1440px] px-5 py-28 text-center md:px-10 lg:px-14">
        <p className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-none tracking-[-0.03em] text-milk">
          {finalCta.statement}
        </p>
        <div className="gold-line mx-auto mt-8 max-w-[14rem]" />
        <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-milk/75 md:text-lg">
          {finalCta.body}
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <MagneticButton href={brand.whatsappUrl} variant="gold">
            {finalCta.primaryCta}
          </MagneticButton>
          <MagneticButton
            href={`mailto:${brand.email}`}
            variant="ghost"
            className="text-milk"
          >
            {finalCta.secondaryCta}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
