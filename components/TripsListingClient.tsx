"use client";

import * as React from "react";
import TripCard from "./TripCard";
import type { Trip } from "../lib/data/trips";
import Reveal from "./Reveal";
import { formatPriceUSD } from "@/lib/utils/format";

function unique<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export default function TripsListingClient({ trips }: { trips: Trip[] }) {
  const allDestinations = React.useMemo(
    () => ["All destinations", ...unique(trips.map((t) => t.destination))],
    [trips]
  );
  const allTags = React.useMemo(
    () => ["All vibes", ...unique(trips.flatMap((t) => t.tags))],
    [trips]
  );

  const [destination, setDestination] = React.useState(allDestinations[0]);
  const [tag, setTag] = React.useState(allTags[0]);
  const [maxPrice, setMaxPrice] = React.useState(
    Math.max(...trips.map((t) => t.priceFromUSD))
  );

  React.useEffect(() => {
    // Keep slider default consistent when trip data changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMaxPrice(Math.max(...trips.map((t) => t.priceFromUSD)));
  }, [trips]);

  const filteredTrips = React.useMemo(() => {
    return trips.filter((t) => {
      const byDest =
        destination === "All destinations" ? true : t.destination === destination;
      const byTag = tag === "All vibes" ? true : t.tags.includes(tag);
      const byPrice = t.priceFromUSD <= maxPrice;
      return byDest && byTag && byPrice;
    });
  }, [destination, tag, maxPrice, trips]);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm font-semibold tracking-widest text-white/60">
            TRIPS
          </div>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Find your next chapter
          </h1>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Premium group journeys curated for story-led travelers. Filter by destination, vibe, or budget.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-5 py-4 backdrop-blur-xl">
          <div className="text-sm font-semibold text-white/70">Results</div>
          <div className="mt-1 text-3xl font-bold text-white">
            {filteredTrips.length}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[minmax(0,340px)_1fr]">
        <aside className="lg:sticky lg:top-[92px] lg:self-start">
          <Reveal
            as="div"
            once
            className="rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-xl sm:rounded-[34px] sm:p-5"
          >
            <div className="text-sm font-semibold tracking-widest text-white/60">
              FILTERS
            </div>

            <div className="mt-6 grid gap-5">
              <label className="grid gap-2">
                <div className="text-sm font-semibold text-white/75">Destination</div>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none"
                >
                  {allDestinations.map((d) => (
                    <option key={d} value={d} className="bg-[#050915]">
                      {d}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <div className="text-sm font-semibold text-white/75">Vibe / Tag</div>
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none"
                >
                  {allTags.map((t) => (
                    <option key={t} value={t} className="bg-[#050915]">
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid gap-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-white/75">Max price</div>
                  <div className="text-sm font-semibold text-accent">
                    {formatPriceUSD(maxPrice)}
                  </div>
                </div>
                <input
                  type="range"
                  min={Math.min(...trips.map((t) => t.priceFromUSD))}
                  max={Math.max(...trips.map((t) => t.priceFromUSD))}
                  step={50}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  style={{ accentColor: "#2d7dff" }}
                  className="w-full"
                />
              </div>

              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:border-accent/50 hover:text-white"
                onClick={() => {
                  setDestination(allDestinations[0]);
                  setTag(allTags[0]);
                  setMaxPrice(Math.max(...trips.map((t) => t.priceFromUSD)));
                }}
              >
                <span className="material-icons text-accent">restart_alt</span>
                Reset filters
              </button>
            </div>
          </Reveal>
        </aside>

        <section className="min-w-0">
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
            {filteredTrips.map((t) => (
              <TripCard
                key={t.slug}
                slug={t.slug}
                title={t.title}
                destination={t.destination}
                tags={t.tags}
                image={t.imageThumb}
                priceFromUSD={t.priceFromUSD}
                durationDays={t.durationDays}
                groupSize={t.groupSize}
              />
            ))}
          </div>

          {filteredTrips.length === 0 && (
            <div className="mt-8 rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-8 text-center backdrop-blur-xl">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(45,125,255,0.18)]">
                <span className="material-icons text-accent">search_off</span>
              </div>
              <div className="mt-4 text-lg font-semibold text-white">
                No trips match those filters
              </div>
              <div className="mt-2 text-sm text-white/65">
                Try widening the vibe or increasing the max price.
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

