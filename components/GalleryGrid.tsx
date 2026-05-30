"use client";

import Image from "next/image";

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
    <div className="columns-1 gap-4 md:columns-2 md:gap-5 lg:columns-3">
      {items.map((item) => (
        <div key={item.id} className="mb-4 break-inside-avoid">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-transform duration-300 hover:scale-[1.01] sm:rounded-3xl">
            <div className="relative h-[220px] w-full sm:h-[260px] lg:h-[280px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.08]"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-[rgba(5,9,21,0.45)] px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur-xl sm:left-4 sm:top-4">
                {item.tag ?? item.location}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="truncate text-xs text-white/65">
                    {item.location}
                  </div>
                </div>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-[rgba(5,9,21,0.45)]">
                  <span className="material-icons text-accent">play_arrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
