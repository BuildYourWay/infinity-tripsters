import Image from "next/image";

import CTASection from "../../components/CTASection";

const founders = [
  {
    name: "Naveen K.",
    role: "Founder • Group Travel Planner",
    image:
      "/assets/images/naveen-k.jpg",
    bio: "I design group travel itineraries with story arcs, premium pacing, and moments that look like a reel. I have been making my solo and group travel vlogs with my peers for 8 years and have a passion for creating unique and memorable experiences for groups, families and friends like yours.",
  },
  // {
  //   name: "Neha P.",
  //   role: "Co-founder • Community Lead",
  //   image:
  //     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  //   bio: "We build the community rhythm—so travelers feel confident, included, and genuinely connected.",
  // },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
            alt="Infinity Tripsters brand visual"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/92" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_440px_at_20%_20%,rgba(45,125,255,0.35),transparent_60%),radial-gradient(700px_420px_at_90%_0%,rgba(0,212,255,0.18),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(5,9,21,0.45)] px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-xl">
              <span className="material-icons text-accent">self_improvement</span>
              Brand story
            </div>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Luxury group travel meets Instagram storytelling.
            </h1>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              Infinity Tripsters is built for youthful travellers, groups, families and friends like yours who love premium
              details and cinematic moments—without clutter, confusion, or rushed
              pacing.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              k: "MISSION",
              title: "Make premium feel effortless.",
              body: "We curate experiences that feel smooth and personal—from itinerary flow to photo-ready stops.",
            },
            {
              k: "PHILOSOPHY",
              title: "Story first. Logistics second.",
              body: "Every day is designed like a scene. We plan for light, energy, and recovery so the trip feels cinematic.",
            },
            {
              k: "COMMUNITY",
              title: "Travel like friends.",
              body: "Our group rhythm is people-first: warm introductions, shared moments, and comfort-built pacing.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl"
            >
              <div className="text-sm font-semibold tracking-widest text-white/60">
                {b.k}
              </div>
              <div className="mt-3 text-2xl font-bold text-white">{b.title}</div>
              <div className="mt-3 text-sm leading-7 text-white/70">{b.body}</div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                <span className="material-icons text-accent">waves</span>
                Premium • Youthful • Story-led
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm font-semibold tracking-widest text-white/60">
                COMMUNITY-FIRST LAYOUT
              </div>
              <h2 className="mt-3 text-3xl font-bold text-white">
                We design the group vibe, not just the route.
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/70">
                From your first welcome moment to your final group recap, we keep
                the rhythm smooth so everyone feels comfortable, included, and
                ready to create.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: "groups", label: "Warm introductions" },
                { icon: "camera_alt", label: "Photo-ready stops" },
                { icon: "spa", label: "Recovery windows" },
                { icon: "auto_stories", label: "Story pacing" },
              ].map((x) => (
                <div
                  key={x.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(45,125,255,0.14)]">
                    <span className="material-icons text-accent">{x.icon}</span>
                  </div>
                  <div className="mt-3 text-sm font-semibold text-white">
                    {x.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div>
          <div className="text-sm font-semibold tracking-widest text-white/60">
            FOUNDER / TEAM
          </div>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            People behind the premium vibe
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {founders.map((f) => (
            <div
              key={f.name}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl"
            >
              <div className="relative h-96 sm:h-[28rem] md:h-[32rem]">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 90vw, 640px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[rgba(5,9,21,0.45)] px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-xl">
                  Infinity Tripsters
                </div>
              </div>
              <div className="p-6">
                <div className="text-xl font-bold text-white">{f.name}</div>
                <div className="mt-1 text-sm font-semibold text-white/65">
                  {f.role}
                </div>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {f.bio}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent">
                  <span className="material-icons">assistant_direction</span>
                  Curated with care
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <CTASection
          eyebrow="READY WHEN YOU ARE"
          title="Talk to us about your group’s vibe"
          description="Tell us your destination dreams and preferred pace. We’ll shape a premium itinerary that feels like a story."
          primaryHref="/contact"
          primaryLabel="Book a travel consult"
          secondaryHref="/trips"
          secondaryLabel="Browse trips"
        />
      </section>
    </main>
  );
}

