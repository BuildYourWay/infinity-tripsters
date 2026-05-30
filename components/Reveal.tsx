"use client";

import * as React from "react";

type RevealProps<T extends React.ElementType> = {
  as?: T;
  once?: boolean;
  delayMs?: number;
  className?: string;
  children: React.ReactNode;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isBelowFold(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.top >= vh * 0.9;
}

export default function Reveal<T extends React.ElementType = "div">({
  as,
  once = true,
  delayMs = 0,
  className = "",
  children,
}: RevealProps<T>) {
  const Component = (as ?? "div") as React.ElementType;
  const [visible, setVisible] = React.useState(true);
  const ref = React.useRef<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    if (!isBelowFold(el)) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <Component
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        "transform transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className,
      ].join(" ")}
    >
      {children}
    </Component>
  );
}
