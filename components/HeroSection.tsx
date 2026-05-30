"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { trips } from "@/lib/data/trips";

const chips = ["Night Clubs", "Coastal luxury", "City-to-temple", "Boat days", "Hill Attractions"];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
          alt="Infinity Tripsters hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_15%,rgba(45,125,255,0.35),transparent_55%),radial-gradient(600px_300px_at_90%_10%,rgba(0,212,255,0.18),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center gap-8 px-4 pb-20 pt-28 sm:px-6 lg:flex-row lg:items-center lg:pb-24">
        <div className="max-w-2xl">
          <Reveal
            as="div"
            once
            delayMs={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(5,9,21,0.45)] px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur-xl"
          >
            <span className="material-icons text-accent w-5">sparkles</span>
            Luxury group travel, story-first.
          </Reveal>

          <Reveal
            as="h1"
            once
            delayMs={50}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl"
          >
            Infinity Tripsters.
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">
              Cinematic journeys for the modern you.
            </span>
          </Reveal>

          <Reveal
            as="p"
            once
            delayMs={120}
            className="mt-5 text-base leading-7 text-white/75 sm:text-lg"
          >
            We design premium group itineraries with Instagram-worthy moments—so
            your trip feels like luxury and looks like a reel.
          </Reveal>

          <Reveal
            as="div"
            once
            delayMs={200}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/trips"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(45,125,255,0.25)] transition hover:brightness-110"
            >
              Explore trips
              <span className="material-icons text-white">arrow_forward</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[rgba(5,9,21,0.35)] px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:border-accent/40"
            >
              Book a consultation
              <span className="material-icons text-accent">chat</span>
            </Link>
          </Reveal>

          <Reveal
            as="div"
            once
            delayMs={280}
            className="mt-7 flex flex-wrap gap-2"
          >
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.05)] px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.03]"
              >
                {c}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="relative mt-6 lg:mt-0 lg:flex-1">
          <Reveal
            as="div"
            once
            delayMs={250}
            className="relative mx-auto w-full max-w-xl rounded-3xl border border-white/10 bg-[rgba(5,9,21,0.35)] p-5 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white/90">
                  Next up: Upcoming trips
                </div>
                <div className="mt-1 text-sm text-white/65">
                  Crafted for groups who want stories, not checklists.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[rgba(45,125,255,0.12)] px-3 py-2">
                <div className="text-xs font-semibold text-white/70">
                  Season
                </div>
                <div className="text-lg font-bold text-white">2026</div>
              </div>
            </div>

            <div className="mt-4 grid gap-3">
              {trips.map((item) => (
                <div
                  key={item.slug}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-3 py-3 transition hover:-translate-y-[2px] duration-300 sm:px-4"
                >
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-white/90">
                      {item.title}
                    </div>
                    <div className="truncate text-xs text-white/65">
                      {item.days} days / {item.nights} nights • {item.groupSize}
                    </div>
                  </div>
                  <Link href={`/trips/${item.slug}`} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent/20 to-accent-2/10">
                    <span className="material-icons text-accent">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm font-semibold text-white/85">
                Want a tailored group plan?
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent transition hover:text-white"
              >
                Start here <span className="material-icons">east</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

