"use client";

import * as React from "react";
import Reveal from "./Reveal";
import { formatPriceUSD } from "@/lib/utils/format";

export default function BookingCard({
  tripTitle,
  priceFromUSD,
}: {
  tripTitle: string;
  priceFromUSD: number;
}) {
  return (
    <aside className="w-full rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-xl sm:rounded-[34px] sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold tracking-widest text-white/60 sm:text-sm">
            READY TO BOOK?
          </div>
          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            Reserve your spot
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/70">
            <span className="break-words">{tripTitle}</span> • starting at{" "}
            <span className="font-semibold text-white">
              {formatPriceUSD(priceFromUSD)}
            </span>{" "}
            per traveler.
          </p>
        </div>
        <div className="shrink-0 self-start rounded-3xl border border-white/10 bg-[rgba(45,125,255,0.16)] px-4 py-3 text-center sm:self-auto">
          <div className="text-xs font-semibold text-white/70">Deposit</div>
          <div className="mt-1 text-lg font-bold text-white">
            {formatPriceUSD(Math.round(priceFromUSD * 0.18))}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-3">
          <span className="material-icons text-accent">schedule</span>
          <div>
            <div className="text-sm font-semibold text-white/90">
              10-min booking call
            </div>
            <div className="text-xs text-white/60">
              We confirm availability + send a tailored itinerary note.
            </div>
          </div>
        </div>
      </div>

      <Reveal as="div" once delayMs={0}>
        <button
          type="button"
          className="mt-6 w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(45,125,255,0.25)] transition hover:brightness-110"
          onClick={() => {
            // Mock UI: no backend action
            alert("Mock UI: booking request captured (no backend).");
          }}
        >
          Request booking
          <span className="material-icons ml-2 align-middle">east</span>
        </button>
        <div className="mt-3 text-center text-xs text-white/55">
          No payment required on this screen.
        </div>
      </Reveal>
    </aside>
  );
}

