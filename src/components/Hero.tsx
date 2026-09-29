"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { hero } from "@/lib/content";
import { images } from "@/lib/images";
import { MagneticButton } from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            gsap.set(
              [
                ".hero-line",
                ".hero-copy",
                ".hero-ctas",
                ".hero-gold",
                ".hero-scroll",
                ".hero-statement",
              ],
              { autoAlpha: 1, y: 0, clearProps: "all" }
            );
            return;
          }

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          gsap.set(".hero-image", { scale: 1.12 });
          gsap.set(".hero-line", { yPercent: 110 });
          gsap.set(
            [".hero-copy", ".hero-ctas", ".hero-statement", ".hero-scroll"],
            { autoAlpha: 0, y: 24 }
          );
          gsap.set(".hero-gold", { scaleX: 0 });

          tl.to(".hero-image", { scale: 1, duration: 2.4, ease: "power2.out" }, 0)
            .to(
              ".hero-line",
              { yPercent: 0, duration: 1.15, stagger: 0.14 },
              0.75
            )
            .to(".hero-statement", { autoAlpha: 1, y: 0, duration: 0.8 }, 1.5)
            .to(".hero-copy", { autoAlpha: 1, y: 0, duration: 0.85 }, 1.65)
            .to(".hero-gold", { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, 1.75)
            .to(".hero-ctas", { autoAlpha: 1, y: 0, duration: 0.85 }, 1.95)
            .to(".hero-scroll", { autoAlpha: 1, y: 0, duration: 0.7 }, 2.2);

          gsap.to(".hero-scroll-dot", {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut",
            delay: 2.4,
          });

          gsap.to(".hero-image", {
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });

          gsap.to(".hero-content", {
            yPercent: 18,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-milk"
    >
      <div className="absolute inset-0">
        <div className="hero-image absolute inset-0 will-change-transform">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_40%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]" />
        <div className="grain opacity-[0.055] mix-blend-soft-light" />
      </div>

      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-16 pt-32 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
        <p className="hero-statement mb-6 font-display text-lg text-gold-soft md:text-xl">
          {hero.statement}
        </p>

        <h1 className="max-w-4xl font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
          {hero.lines.map((line) => (
            <span key={line} className="block overflow-hidden">
              <span className="hero-line block">{line}</span>
            </span>
          ))}
        </h1>

        <div className="hero-gold gold-line mt-8 max-w-xs md:mt-10" />

        <p className="hero-copy mt-8 max-w-md text-[0.95rem] leading-relaxed text-milk/75 md:text-base">
          {hero.supporting}
        </p>

        <div className="hero-ctas mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <MagneticButton href="#order" variant="gold">
            {hero.primaryCta}
          </MagneticButton>
          <MagneticButton href="#farm" variant="ghost" className="text-milk">
            {hero.secondaryCta}
          </MagneticButton>
        </div>

        <a
          href="#farm"
          className="hero-scroll mt-16 inline-flex w-fit flex-col items-start gap-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-milk/60"
          aria-label="Scroll to explore the farm"
        >
          <span>Scroll</span>
          <span className="relative h-10 w-px bg-milk/25">
            <span className="hero-scroll-dot absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold" />
          </span>
        </a>
      </div>
    </section>
  );
}
