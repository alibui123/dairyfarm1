"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { animalCare } from "@/lib/content";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AnimalCare() {
  const root = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 20 });
  const springY = useSpring(my, { stiffness: 40, damping: 20 });
  const imgX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const imgY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".animal-copy > *", {
          y: 40,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 65%" },
        });

        gsap.fromTo(
          ".animal-image",
          { yPercent: -6, scale: 1.06 },
          {
            yPercent: 6,
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
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={root}
      id={animalCare.id}
      className="relative overflow-hidden bg-charcoal text-milk"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0">
        <motion.div
          className="animal-image absolute inset-[-4%] will-change-transform"
          style={{ x: imgX, y: imgY }}
        >
          <Image
            src={images.animals.src}
            alt={images.animals.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        <div className="grain opacity-[0.06] mix-blend-soft-light" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85svh] max-w-[1440px] items-end px-5 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="animal-copy max-w-xl">
          <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.05] tracking-[-0.02em]">
            {animalCare.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="gold-line mt-8 max-w-[10rem]" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-milk/75 md:text-lg">
            {animalCare.body}
          </p>
        </div>
      </div>
    </section>
  );
}
