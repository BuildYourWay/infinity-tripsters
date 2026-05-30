"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPriceUSD, formatDuration } from "../lib/utils/format";

export type TripCardProps = {
  slug: string;
  title: string;
  destination: string;
  tags: string[];
  image: string;
  priceFromUSD: number;
  durationDays: number;
  groupSize: string;
};

export default function TripCard({
  slug,
  title,
  destination,
  tags,
  image,
  priceFromUSD,
  durationDays,
  groupSize,
}: TripCardProps) {
  return (
    <article className="group relative flex h-full w-full min-w-0 flex-col rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-44 shrink-0 overflow-hidden sm:h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 420px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[rgba(5,9,21,0.45)] px-4 py-2 text-xs font-semibold text-white/85">
          {destination}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
          {title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 transition group-hover:border-accent/40"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2.5 sm:px-3 sm:py-3">
            <div className="text-[10px] font-semibold text-white/60 sm:text-[11px]">
              From
            </div>
            <div className="mt-1 text-xs font-bold text-white sm:text-sm">
              {formatPriceUSD(priceFromUSD)}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2.5 sm:px-3 sm:py-3">
            <div className="text-[10px] font-semibold text-white/60 sm:text-[11px]">
              Duration
            </div>
            <div className="mt-1 text-xs font-bold text-white sm:text-sm">
              {formatDuration(durationDays)}
            </div>
          </div>
          <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2.5 sm:col-span-1 sm:px-3 sm:py-3">
            <div className="text-[10px] font-semibold text-white/60 sm:text-[11px]">
              Group
            </div>
            <div className="mt-1 text-xs font-bold leading-snug text-white sm:text-sm">
              {groupSize}
            </div>
          </div>
        </div>

        <div className="mt-5 flex shrink-0 gap-2 sm:gap-3">
          <Link
            href={`/trips/${slug}`}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            View details
            <span className="material-icons text-white">east</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-accent/50 hover:text-white"
            aria-label="Save trip"
            onClick={(e) => e.preventDefault()}
          >
            <span className="material-icons">bookmark_border</span>
          </button>
        </div>
      </div>
    </article>
  );
}
