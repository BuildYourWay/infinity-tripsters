"use client";

import * as React from "react";
import Reveal from "./Reveal";

export default function TripItinerary({
  itinerary,
}: {
  itinerary: {
    day: number;
    title: string;
    detail: string;
    highlights: string[];
  }[];
}) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 sm:p-6 backdrop-blur-xl">
      <div className="text-sm font-semibold tracking-widest text-white/60">
        ITINERARY
      </div>
      <div className="mt-2 text-2xl font-bold text-white">
        Day-by-day story
      </div>
      <div className="mt-2 text-sm text-white/70">
        A premium pacing plan built for comfort and cinematic moments.
      </div>

      <div className="mt-6 space-y-4">
        {itinerary.map((item, idx) => (
          <Reveal
            as="div"
            key={item.day}
            once
            delayMs={idx * 20}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold tracking-widest text-white/60">
                  DAY {item.day}
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {item.title}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[rgba(45,125,255,0.15)] px-3 py-2 text-xs font-semibold text-white/80">
                {item.highlights.length} highlights
              </div>
            </div>

            <div className="mt-3 text-sm leading-7 text-white/70">
              {item.detail}
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-white/10 bg-[rgba(5,9,21,0.25)] px-3 py-1 text-xs font-semibold text-white/70"
                >
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

