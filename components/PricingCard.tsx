"use client";

import * as React from "react";
import Reveal from "./Reveal";
import { formatPriceUSD } from "../lib/utils/format";

export type PricingCardProps = {
  priceFromUSD: number;
  durationDays: number;
};

export default function PricingCard({
  priceFromUSD,
  durationDays,
}: PricingCardProps) {
  return (
    <Reveal
      as="aside"
      once
      className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-widest text-white/60">
            PRICING STARTS AT
          </div>
          <div className="mt-2 text-4xl font-bold text-white">
            {formatPriceUSD(priceFromUSD)}
          </div>
          <div className="mt-2 text-sm text-white/65">
            {durationDays} days • per traveler (typical group rates)
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[rgba(45,125,255,0.18)] px-4 py-3">
          <div className="text-xs font-semibold text-white/70">Deposit</div>
          <div className="mt-1 text-sm font-bold text-white">
            {formatPriceUSD(Math.round(priceFromUSD * 0.18))}
          </div>
          <div className="mt-1 text-xs text-white/60">Reserve your spot</div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-semibold text-white/90">Included highlights</div>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          <li className="flex items-start gap-2">
            <span className="material-icons text-accent mt-0.5">check_circle</span>
            Group-led curated experiences
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-accent mt-0.5">check_circle</span>
            Premium accommodations
          </li>
          <li className="flex items-start gap-2">
            <span className="material-icons text-accent mt-0.5">check_circle</span>
            Photo moments + story pacing
          </li>
        </ul>
      </div>
    </Reveal>
  );
}

