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
  console.log('imageHero', imageHero);
  return (
    <Reveal
      as="div"
      once
      delayMs={0}
      className="relative h-[220px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1"
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

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-xs font-semibold tracking-widest text-white/70">
            DESTINATION
          </div>
          <div className="mt-1 text-lg font-semibold text-white">{title}</div>
          <div className="mt-2 text-sm leading-6 text-white/75">
            {tags}
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

