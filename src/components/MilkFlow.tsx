"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const nodes = [
  { id: "farm", label: "Farm" },
  { id: "animals", label: "Care" },
  { id: "process", label: "Milk" },
  { id: "why", label: "Quality" },
  { id: "order", label: "Home" },
] as const;

/**
 * Signature motif: a thin cream/gold milk-flow line that travels
 * farm → care → milk → quality → home as the visitor scrolls.
 */
export function MilkFlow() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 1024px)",
        () => {
          const path = root.current?.querySelector(
            ".milk-path"
          ) as SVGPathElement | null;
          if (!path) return;

          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: document.documentElement,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
            },
          });

          nodes.forEach((node) => {
            const el = document.getElementById(node.id);
            const marker = root.current?.querySelector(
              `[data-node="${node.id}"]`
            );
            if (!el || !marker) return;

            ScrollTrigger.create({
              trigger: el,
              start: "top 55%",
              end: "bottom 45%",
              onEnter: () => marker.classList.add("is-active"),
              onEnterBack: () => marker.classList.add("is-active"),
              onLeave: () => marker.classList.remove("is-active"),
              onLeaveBack: () => marker.classList.remove("is-active"),
            });
          });
        }
      );

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <aside
      ref={root}
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden h-[62vh] w-24 -translate-y-1/2 xl:right-8 xl:block"
      aria-hidden
    >
      <div className="relative h-full">
        <svg
          viewBox="0 0 24 400"
          className="absolute left-0 top-0 h-full w-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8 C12 8 18 48 12 88 C6 128 18 168 12 208 C6 248 18 288 12 328 C10 352 12 392 12 392"
            className="stroke-ink/10"
            strokeWidth="1"
          />
          <path
            d="M12 8 C12 8 18 48 12 88 C6 128 18 168 12 208 C6 248 18 288 12 328 C10 352 12 392 12 392"
            className="milk-path stroke-gold"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>

        <ul className="absolute inset-y-2 left-0 flex flex-col justify-between pl-0">
          {nodes.map((node) => (
            <li
              key={node.id}
              data-node={node.id}
              className="milk-node flex items-center gap-2.5 opacity-35 transition-opacity duration-500 [&.is-active]:opacity-100"
            >
              <span className="ml-[7px] h-2 w-2 rounded-full border border-gold bg-ivory" />
              <span className="text-[0.58rem] font-medium uppercase tracking-[0.18em] text-muted">
                {node.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
