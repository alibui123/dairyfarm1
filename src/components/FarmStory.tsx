"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { farmStory } from "@/lib/content";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function FarmStory() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".farm-reveal",
          { clipPath: "inset(12% 18% 12% 18%)", scale: 1.08 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 75%",
              end: "top 20%",
              scrub: true,
            },
          }
        );

        gsap.from(".farm-copy > *", {
          y: 36,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 65%",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id={farmStory.id}
      className="relative overflow-hidden bg-ivory py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-14">
        <div className="farm-copy lg:col-span-5">
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            {farmStory.headline}
          </h2>

          <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            {farmStory.body}
          </p>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-8">
            {farmStory.pillars.map((pillar) => (
              <li
                key={pillar}
                className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-olive"
              >
                {pillar}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-7">
          <div className="farm-reveal relative aspect-[4/5] overflow-hidden md:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={images.farm.src}
              alt={images.farm.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 hidden h-24 w-24 border border-gold/40 lg:block"
          />
        </div>
      </div>
    </section>
  );
}
