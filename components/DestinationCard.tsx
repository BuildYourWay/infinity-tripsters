"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

// export type DestinationCardProps = {
//   title: string;
//   subtitle: string;
//   image: string;
//   href: string;
// };
export type DestinationCardProps = {
  slug: string;
  title: string;
  destination: string;
  tags: string[];
  imageHero: string;
  priceFromUSD: number;
  durationDays: number;
  groupSize: string;
};

export default function DestinationCard({
  slug,
  title,
  destination,
  tags,
  imageHero,
  priceFromUSD,
  durationDays,
  groupSize,
}: DestinationCardProps) {
  return (
    <Reveal
      as="div"
      once
      delayMs={0}
      className="relative h-[200px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1 sm:h-[220px] sm:rounded-3xl"
    >
      <Link href={`/trips`} className="relative block h-full">
        <Image
          src={`${imageHero}`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw, 360px"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(500px_260px_at_20%_10%,rgba(45,125,255,0.35),transparent_60%)] opacity-80" />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <div className="text-[10px] font-semibold tracking-widest text-white/70 sm:text-xs">
            DESTINATION
          </div>
          <div className="mt-1 line-clamp-2 text-base font-semibold text-white sm:text-lg">
            {title}
          </div>
          <div className="mt-2 line-clamp-2 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
            {Array.isArray(tags) ? tags.slice(0, 2).join(" • ") : tags}
          </div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(5,9,21,0.35)] px-4 py-2 text-sm font-semibold text-white/85">
            Explore
            <span className="material-icons text-accent">arrow_forward</span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

