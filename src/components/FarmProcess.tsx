"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { farmProcess } from "@/lib/content";
import { processImages } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function FarmProcess() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          if (!isDesktop || reduceMotion || !track.current) return;

          const panels = gsap.utils.toArray<HTMLElement>(".process-panel");
          const totalTravel = track.current.scrollWidth - window.innerWidth;

          gsap.to(track.current, {
            x: () => -totalTravel,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: () => `+=${totalTravel}`,
              pin: true,
              scrub: 0.85,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          gsap.fromTo(
            ".process-progress",
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: root.current,
                start: "top top",
                end: () => `+=${totalTravel}`,
                scrub: true,
              },
            }
          );

          gsap.set(".process-line", { scaleX: 0, transformOrigin: "left center" });
          ScrollTrigger.create({
            trigger: root.current,
            start: "top top",
            end: () => `+=${totalTravel}`,
            scrub: true,
            onUpdate: (self) => {
              const lines = gsap.utils.toArray<HTMLElement>(".process-line");
              lines.forEach((line, i) => {
                const segment = 1 / panels.length;
                const local = Math.min(
                  1,
                  Math.max(0, (self.progress - i * segment) / segment)
                );
                gsap.set(line, { scaleX: local });
              });
            },
          });
        }
      );

      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.utils.toArray<HTMLElement>(".process-panel").forEach((panel) => {
            gsap.from(panel.querySelectorAll(".process-reveal"), {
              y: 28,
              autoAlpha: 0,
              duration: 0.9,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 80%",
              },
            });
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
      id={farmProcess.id}
      className="relative overflow-hidden bg-charcoal text-milk"
    >
      <div className="process-progress absolute left-0 top-0 z-20 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-soft to-gold" />

      <div className="mx-auto max-w-[1440px] px-5 pt-20 md:px-10 lg:px-14 lg:pt-24">
        <h2 className="max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] tracking-[-0.02em]">
          {farmProcess.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>

      <div
        ref={track}
        className="mt-12 flex flex-col gap-16 px-5 pb-24 md:px-10 lg:mt-16 lg:flex-row lg:gap-0 lg:px-0 lg:pb-0 lg:will-change-transform"
      >
        {farmProcess.stages.map((stage, i) => (
          <article
            key={stage.number}
            className="process-panel relative flex w-full shrink-0 flex-col justify-between gap-8 lg:h-[calc(100svh-11rem)] lg:w-[70vw] lg:max-w-[900px] lg:px-14 lg:pb-20"
          >
            <div className="process-reveal grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-12">
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl text-gold md:text-5xl">
                    {stage.number}
                  </span>
                  <span className="h-px flex-1 origin-left process-line bg-gold/50" />
                </div>
                <h3 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl">
                  {stage.title}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-milk/65 md:text-base">
                  {stage.description}
                </p>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]">
                <Image
                  src={processImages[i].src}
                  alt={processImages[i].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-milk/10" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
