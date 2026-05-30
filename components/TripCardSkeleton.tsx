"use client";

import * as React from "react";

export default function TripCardSkeleton() {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)]">
      <div className="h-52 bg-white/5 animate-pulse" />
      <div className="p-5">
        <div className="h-5 w-4/5 rounded bg-white/10 animate-pulse" />
        <div className="mt-3 flex gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-7 w-20 rounded-full bg-white/10 animate-pulse"
            />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-[86px] rounded-2xl bg-white/10 animate-pulse"
            />
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <div className="h-10 flex-1 rounded-full bg-white/10 animate-pulse" />
          <div className="h-10 w-12 rounded-full bg-white/10 animate-pulse" />
        </div>
      </div>
    </article>
  );
}

