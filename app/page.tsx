import HeroSection from "../components/HeroSection";
import DestinationCard from "../components/DestinationCard";
import TripCard from "../components/TripCard";
import TestimonialCard from "../components/TestimonialCard";
import GalleryGrid from "../components/GalleryGrid";
import CTASection from "../components/CTASection";
import { trips } from "../lib/data/trips";
import { testimonials } from "../lib/data/testimonials";

const destinationCards = [
  {
    title: "Iceland",
    subtitle: "Aurora nights + spa recovery",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    href: "/trips",
  },
  {
    title: "Amalfi Coast",
    subtitle: "Boat days + sunset dining",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1400&q=80",
    href: "/trips",
  },
  {
    title: "Tokyo → Kyoto",
    subtitle: "Neon nights + temple calm",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80",
    href: "/trips",
  },
  {
    title: "Greek Islands",
    subtitle: "Blue ceremony + romantic pace",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=1400&q=80",
    href: "/trips",
  },
  {
    title: "Swiss Alps",
    subtitle: "Cinematic rail routes",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    href: "/trips",
  },
];

export default function Home() {
  return (
    <main className="flex w-full min-w-0 flex-col overflow-x-hidden">
      <HeroSection />

      {/* Animated destination cards */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-white/60 sm:text-sm">
              DESTINATIONS
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl lg:text-4xl">
              Luxury group travel, styled like a story
            </h2>
          </div>
          <div className="hidden max-w-md text-sm leading-6 text-white/65 sm:block sm:text-right">
            Each destination is curated for cinematic pacing—so your trip
            feels premium from the first arrival moment.
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((d) => (
            <DestinationCard key={d.slug} {...d} />
          ))}
          {/* {destinationCards.map((d) => (
            <DestinationCard key={d.title} {...d} />
          ))} */}
        </div>
      </section>

      {/* Upcoming trips carousel */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-white/60 sm:text-sm">
              UPCOMING TRIPS
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl lg:text-4xl">
              Next chapters are waiting
            </h2>
          </div>
          <div className="hidden text-sm text-white/60 lg:block">
            Scroll → for the full lineup
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 items-stretch gap-5 sm:mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trips.slice(0, 4).map((t) => (
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
      </section>

      {/* Community / travel moments */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-white/60 sm:text-sm">
              COMMUNITY MOMENTS
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl lg:text-4xl">
              Travel like friends. Remember like creators.
            </h2>
          </div>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/65 md:text-right">
            We design the group rhythm: introductions, photo-ready stops, and
            recovery time—so your memories feel effortless.
          </p>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-3 backdrop-blur-xl sm:mt-10 sm:rounded-[34px] sm:p-4">
          <GalleryGrid
            items={trips.slice(0, 6).map((t, i) => ({
              id: `m-${t.slug}`,
              title: t.title.split("•")[0].trim(),
              location: t.destination,
              image: t.imageThumb,
              tag: ["Aurora", "Coast", "Neon", "Islands", "Alpine", "Culture"][i] ?? "Moment",
            }))}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-white/60 sm:text-sm">
              TESTIMONIALS
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl lg:text-4xl">
              Premium feels better when it’s people-first
            </h2>
          </div>
          <div className="hidden text-sm text-white/60 sm:block">
            Verified traveler stories
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </section>

      {/* Why travel with us */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {[
            {
              icon: "movie",
              title: "Cinematic pacing",
              desc: "We build the story arc into the itinerary—sunrise, sunset, and recovery windows included.",
            },
            {
              icon: "auto_stories",
              title: "Instagram-worthy moments",
              desc: "Photo-ready stops with guidance—so your best shots feel natural, not forced.",
            },
            {
              icon: "groups",
              title: "Luxury, but youthful",
              desc: "Group-led travel designed for ease. Premium vibes, zero chaos.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5 backdrop-blur-xl sm:rounded-[34px] sm:p-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(45,125,255,0.18)]">
                <span className="material-icons text-accent">{f.icon}</span>
              </div>
              <div className="mt-4 text-lg font-bold text-white sm:text-xl">
                {f.title}
              </div>
              <div className="mt-2 text-sm leading-7 text-white/70">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Blocks */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <CTASection
          eyebrow="NEXT TRIP"
          title="Find your Infinity Tripsters chapter"
          description="Pick a destination, tell us your vibe, and we’ll shape an itinerary that feels like you."
          primaryHref="/trips"
          primaryLabel="Browse upcoming trips"
          secondaryHref="/contact"
          secondaryLabel="Ask a travel specialist"
        />
      </section>

      {/* Instagram/Reels-style media section */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-white/60 sm:text-sm">
              REELS-STYLE MEDIA
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-3xl lg:text-4xl">
              Your next memory reel starts here
            </h2>
          </div>
          <div className="text-xs text-white/60 sm:text-sm">
            <span className="sm:hidden">Tap tiles for details</span>
            <span className="hidden sm:inline">Hover for cinematic overlays</span>
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-3 backdrop-blur-xl sm:mt-10 sm:rounded-[34px] sm:p-4">
          <GalleryGrid
            items={trips.slice(0, 9).map((t, idx) => ({
              id: `r-${t.slug}`,
              title: t.title.split("•")[0].trim(),
              location: t.destination,
              image: t.galleryImages[1] ?? t.imageThumb,
              tag: t.tags[0] ?? `Moment ${idx + 1}`,
            }))}
          />
        </div>
      </section>
    </main>
  );
}
