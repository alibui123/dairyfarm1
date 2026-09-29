"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { customerJourney } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CustomerJourney() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".journey-title", {
          y: 30,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        });

        gsap.from(".journey-step", {
          y: 36,
          autoAlpha: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".journey-steps", start: "top 78%" },
        });

        gsap.fromTo(
          ".journey-connector",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "power2.inOut",
            duration: 1.2,
            scrollTrigger: { trigger: ".journey-steps", start: "top 70%" },
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
      id={customerJourney.id}
      className="relative bg-ivory-deep py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <h2 className="journey-title font-display text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.02em] text-ink">
          {customerJourney.headline}
        </h2>

        <ol className="journey-steps relative mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden
            className="journey-connector pointer-events-none absolute left-[16%] right-[16%] top-5 hidden h-px origin-left bg-gold/50 md:block"
          />

          {customerJourney.steps.map((step, i) => (
            <li key={step.word} className="journey-step relative">
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-ivory text-[0.65rem] font-semibold tracking-[0.15em] text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-3xl text-ink md:text-4xl">
                    {step.word}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
