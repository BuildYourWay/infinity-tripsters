"use client";

import * as React from "react";
import Reveal from "./Reveal";

export type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  rating?: number;
};

export default function TestimonialCard({
  quote,
  name,
  title,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Reveal
      as="article"
      once
      className="h-full rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="material-icons text-[14px] text-accent"
              aria-hidden
            >
              {i < rating ? "star" : "star_border"}
            </span>
          ))}
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
          Verified traveler
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
        “{quote}”
      </p>

      <div className="mt-6">
        <div className="text-sm font-semibold text-white">{name}</div>
        <div className="text-xs text-white/60">{title}</div>
      </div>
    </Reveal>
  );
}

