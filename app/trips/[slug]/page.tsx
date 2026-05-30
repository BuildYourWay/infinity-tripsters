import Image from "next/image";
import { notFound } from "next/navigation";

import { getTripBySlug } from "../../../lib/data/trips";
import TripItinerary from "../../../components/TripItinerary";
import IncludedExcluded from "../../../components/IncludedExcluded";
import PricingCard from "../../../components/PricingCard";
import FAQAccordion from "../../../components/FAQAccordion";
import BookingCard from "../../../components/BookingCard";
import TestimonialCard from "../../../components/TestimonialCard";
import GalleryGrid from "../../../components/GalleryGrid";
import { formatPriceUSD } from "@/lib/utils/format";

export function generateStaticParams() {
  // Mock UI: pre-render all trips.
  return [
    { slug: "iceland-northern-lights-luxury" },
    { slug: "amalfi-escape-luxury-sunsets" },
    { slug: "japan-tokyo-kyoto-inked-journeys" },
    { slug: "greek-islands-blue-ceremony" },
    { slug: "switzerland-alpine-luxury-rail" },
  ];
}

export default async function TripDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  return (
    <main className="pt-24">
      {/* Hero banner */}
      <section className="relative grid overflow-hidden">
        <div className="relative col-start-1 row-start-1 min-h-[480px] sm:min-h-[560px] lg:min-h-[680px]">
          <Image
            src={trip.imageHero}
            alt={trip.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_25%_10%,rgba(45,125,255,0.35),transparent_55%),radial-gradient(700px_420px_at_85%_20%,rgba(0,212,255,0.18),transparent_60%)]" />
        </div>

        <div className="relative z-10 col-start-1 row-start-1 mx-auto flex w-full max-w-7xl flex-col justify-end px-4 pb-8 pt-28 sm:px-6 sm:pb-10 sm:pt-32 lg:pt-36">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-end lg:gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(5,9,21,0.45)] px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-xl">
                <span className="material-icons text-accent">location_on</span>
                {trip.destination}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {trip.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                {trip.overview}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {trip.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.05)] px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur-xl"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                {[
                  { k: "Duration", v: `${trip.durationDays} days` },
                  { k: "Group size", v: trip.groupSize },
                  {
                    k: "Starts at",
                    v: `${formatPriceUSD(trip.priceFromUSD)}`,
                  },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-white/10 bg-[rgba(5,9,21,0.4)] px-4 py-3 backdrop-blur-xl sm:rounded-3xl sm:px-5 last:col-span-2 sm:last:col-span-1"
                  >
                    <div className="text-[11px] font-semibold tracking-widest text-white/60">
                      {s.k}
                    </div>
                    <div className="mt-1 text-sm font-bold text-white">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA booking card */}
            <div className="w-full lg:justify-self-end lg:max-w-md">
              <BookingCard tripTitle={trip.title} priceFromUSD={trip.priceFromUSD} />
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <TripItinerary itinerary={trip.itinerary} />
      </section>

      {/* Included / excluded */}
      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
        <IncludedExcluded included={trip.included} excluded={trip.excluded} />
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-white/60 sm:text-sm">
              GALLERY
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl lg:text-4xl">
              Reel-ready moments
            </h2>
          </div>
          <div className="text-xs text-white/60 sm:text-sm md:block md:max-w-xs md:text-right">
            <span className="sm:hidden">Tap tiles for trip context.</span>
            <span className="hidden sm:inline">
              Hover to reveal cinematic overlays.
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-3 backdrop-blur-xl sm:mt-10 sm:rounded-[34px] sm:p-4">
          <GalleryGrid
            items={trip.galleryImages.map((img, i) => ({
              id: `${trip.slug}-img-${i}`,
              title: trip.title.split("•")[0].trim(),
              location: trip.destination,
              image: img,
              tag: trip.tags[i % trip.tags.length],
            }))}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-6">
          <div className="rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-xl sm:rounded-[34px] sm:p-6">
            <div className="text-xs font-semibold tracking-widest text-white/60 sm:text-sm">
              PRICING BREAKDOWN
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl lg:text-4xl">
              Premium value, clearly shown
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              This is mock UI pricing. In production, we’d compute exact costs
              based on travel dates, group size, and flight options.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "wallet",
                  title: "Transparent deposit",
                  desc: "Reserve with confidence. Deposit locks your spot while we tailor details.",
                },
                {
                  icon: "calendar_month",
                  title: "Story-first itinerary",
                  desc: "Daily experiences curated around sunrise/sunset energy and recovery time.",
                },
                {
                  icon: "camera_alt",
                  title: "Photo moments",
                  desc: "Guided framing and reel-ready stops—so your best shots feel natural.",
                },
                {
                  icon: "verified",
                  title: "Premium group support",
                  desc: "We handle coordination so you can focus on enjoying the journey.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(45,125,255,0.14)]">
                    <span className="material-icons text-accent">{x.icon}</span>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-white">
                    {x.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/70">
                    {x.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <PricingCard
            priceFromUSD={trip.priceFromUSD}
            durationDays={trip.durationDays}
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-white/60 sm:text-sm">
              FAQS
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl lg:text-4xl">
              Questions, answered with clarity
            </h2>
          </div>
          <div className="hidden text-sm text-white/60 sm:block sm:max-w-xs sm:text-right">
            Everything you need to feel confident.
          </div>
        </div>

        <div className="mt-6 sm:mt-10">
          <FAQAccordion faqs={trip.faqs} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-white/60 sm:text-sm">
              TESTIMONIALS
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl lg:text-4xl">
              Real travelers. Real story energy.
            </h2>
          </div>
          <div className="hidden text-sm text-white/60 sm:block sm:max-w-xs sm:text-right">
            Premium experiences people actually remember.
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {trip.testimonials.map((t, idx) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              title={t.title}
              rating={5 - (idx % 2)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

