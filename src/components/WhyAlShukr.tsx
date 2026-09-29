"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { whyAlShukr } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function PrincipleMark({ index }: { index: number }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className="text-gold"
    >
      {index === 0 && (
        <>
          <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1" />
          <circle cx="20" cy="20" r="4" fill="currentColor" />
        </>
      )}
      {index === 1 && (
        <>
          <path d="M20 6 L34 28 H6 Z" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="20" cy="22" r="2.5" fill="currentColor" />
        </>
      )}
      {index === 2 && (
        <>
          <rect x="7" y="7" width="26" height="26" stroke="currentColor" strokeWidth="1" />
          <path d="M7 20 H33 M20 7 V33" stroke="currentColor" strokeWidth="1" />
        </>
      )}
      {index === 3 && (
        <>
          <path
            d="M8 20 C8 12 14 8 20 8 C26 8 32 12 32 20 C32 28 26 32 20 32 C14 32 8 28 8 20 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path d="M14 20 L18 24 L26 15" stroke="currentColor" strokeWidth="1.25" />
        </>
      )}
    </svg>
  );
}

export function WhyAlShukr() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".why-head > *", {
          y: 40,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        });

        gsap.from(".why-item", {
          y: 48,
          autoAlpha: 0,
          duration: 0.95,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-grid", start: "top 75%" },
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id={whyAlShukr.id}
      className="relative bg-ivory py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="why-head max-w-3xl">
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-ink">
            {whyAlShukr.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="why-grid mt-16 grid gap-0 border-t border-ink/10 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {whyAlShukr.principles.map((item, i) => (
            <article
              key={item.word}
              className="why-item group border-b border-ink/10 px-0 py-10 md:border-b-0 md:border-r md:px-8 md:py-12 md:last:border-r-0 lg:px-10"
            >
              <PrincipleMark index={i} />
              <h3 className="mt-8 font-display text-3xl tracking-wide text-ink md:text-4xl">
                {item.word}
              </h3>
              <div className="mt-4 h-px w-8 origin-left bg-gold transition-all duration-500 group-hover:w-16" />
              <p className="mt-5 max-w-[18rem] text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
