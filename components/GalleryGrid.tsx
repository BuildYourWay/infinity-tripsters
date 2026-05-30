"use client";

import * as React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export type GalleryGridItem = {
  id: string;
  title: string;
  location: string;
  image: string;
  tag?: string;
};

export default function GalleryGrid({
  items,
}: {
  items: GalleryGridItem[];
}) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
      {items.map((item) => (
        <Reveal
          as="div"
          key={item.id}
          once
          className="mb-4 break-inside-avoid"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-transform duration-300 hover:scale-[1.01]">
            <div className="relative h-[280px] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.08]"
                sizes="(max-width: 640px) 90vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[rgba(5,9,21,0.45)] px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur-xl">
                  {item.tag ?? item.location}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="text-xs text-white/65">{item.location}</div>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-[rgba(5,9,21,0.45)]">
                  <span className="material-icons text-accent">play_arrow</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

