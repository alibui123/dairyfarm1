"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "gold" | "ghost" | "light" | "dark";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  magnetic?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-gold-soft border border-transparent",
  ghost:
    "bg-transparent text-current border border-current/25 hover:border-gold hover:text-gold",
  light: "bg-milk text-ink hover:bg-ivory border border-transparent",
  dark: "bg-charcoal text-milk hover:bg-ink border border-transparent",
};

export function MagneticButton({
  children,
  variant = "gold",
  className = "",
  magnetic = true,
  href,
  type = "button",
  target,
  rel,
  onClick,
  "aria-label": ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.22);
    y.set(dy * 0.22);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base = `group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={base}
        style={{ x: springX, y: springY }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      className={base}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {inner}
    </motion.button>
  );
}
