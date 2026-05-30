import Image from "next/image";

import GalleryGrid from "../../components/GalleryGrid";
import { galleryItems } from "../../lib/data/gallery";

export default function GalleryPage() {
  return (
    <main className="pt-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2200&q=80"
            alt="Infinity Tripsters gallery hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_10%,rgba(45,125,255,0.35),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(5,9,21,0.45)] px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-xl">
              <span className="material-icons text-accent">collections</span>
              Experiences
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl">
              Travel storytelling in motion
            </h1>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              Hover to reveal cinematic overlays. Every frame is curated for the
              Infinity Tripsters rhythm.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold tracking-widest text-white/60">
              GALLERY GRID
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Reel-ready moments
            </h2>
          </div>
          <div className="hidden text-sm text-white/60 sm:block">
            Premium • Youthful • High contrast
          </div>
        </div>

        <div className="mt-10">
          <GalleryGrid
            items={galleryItems.map((it) => ({
              id: it.id,
              title: it.title,
              location: it.location,
              tag: it.tag,
              image: it.image,
            }))}
          />
        </div>
      </section>
    </main>
  );
}

