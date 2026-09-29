"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { trust } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function TrustSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".trust-head > *", {
          y: 32,
          autoAlpha: 0,
          duration: 0.95,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        });

        gsap.from(".trust-node", {
          y: 24,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: ".trust-path", start: "top 75%" },
        });

        gsap.fromTo(
          ".trust-flow",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".trust-path",
              start: "top 70%",
              end: "bottom 40%",
              scrub: true,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id={trust.id}
      className="relative bg-ivory py-24 md:py-32 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-12 lg:gap-10 lg:px-14">
        <div className="trust-head lg:col-span-5">
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.08] tracking-[-0.02em] text-ink text-balance">
            {trust.headline}
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
            {trust.body}
          </p>
        </div>

        <div className="trust-path relative lg:col-span-6 lg:col-start-7">
          <div
            aria-hidden
            className="trust-flow absolute bottom-4 left-[1.15rem] top-4 w-px origin-top bg-gradient-to-b from-gold via-gold-soft to-olive md:left-[1.35rem]"
          />

          <ol className="relative flex flex-col gap-10 md:gap-12">
            {trust.path.map((item, i) => (
              <li key={item} className="trust-node flex items-center gap-6">
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold bg-ivory font-display text-sm text-gold-deep md:h-11 md:w-11 md:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl text-ink md:text-4xl lg:text-5xl">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
