"use client";

import * as React from "react";
import CTASection from "../../components/CTASection";
import { trips } from "@/lib/data/trips";

export default function ContactPage() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    destination: "Odissa",
    vibe: "Luxury & cinematic",
  });

  const destinationOptions = [{
    id: "others",
    name: "Others",
  }, ...trips.map((t) => ({
    id: t.slug,
    name: t.destination,
  }))];

  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-8">
            <div className="text-sm font-semibold tracking-widest text-white/60">
              CONTACT / INQUIRY
            </div>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Get a travel consultation
            </h1>
            <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
              Tell us your vibe and destination dreams. This mock UI simulates
              a lead submission—no backend required.
            </p>

            <form
              className="mt-8 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  `Mock submission received. Thanks, ${form.name || "traveler"}!`
                );
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <div className="text-sm font-semibold text-white/65">
                    Full name
                  </div>
                  <input
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:border-accent/60"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  <div className="text-sm font-semibold text-white/65">
                    Email
                  </div>
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    type="email"
                    className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:border-accent/60"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <div className="text-sm font-semibold text-white/65">
                    Phone / WhatsApp
                  </div>
                  <input
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:border-accent/60"
                    placeholder="+1 555 000 0000"
                  />
                </label>
                <label className="grid gap-2">
                  <div className="text-sm font-semibold text-white/65">
                    Destination interest
                  </div>
                  <select
                    value={form.destination}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, destination: e.target.value }))
                    }
                    className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:border-accent/60"
                  >
                    {destinationOptions.map((d) => (
                      <option key={d.id} value={d.id} className="bg-[#050915]">
                        {d.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-2">
                <div className="text-sm font-semibold text-white/65">
                  Your vibe
                </div>
                <select
                  value={form.vibe}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, vibe: e.target.value }))
                  }
                  className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:border-accent/60"
                >
                  {[
                    "Luxury & cinematic",
                    "Cozy & recovery-focused",
                    "Food + local flavor",
                    "Neon nights & culture",
                  ].map((v) => (
                    <option key={v} value={v} className="bg-[#050915]">
                      {v}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(45,125,255,0.25)] transition hover:brightness-110"
              >
                Send inquiry
                <span className="material-icons">east</span>
              </button>
            </form>
          </div>

          {/* WhatsApp / consultation cards */}
          <div className="grid gap-6">
            <div className="rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-8">
              <div className="text-sm font-semibold tracking-widest text-white/60">
                WHATSAPP CTA
              </div>
              <h2 className="mt-3 text-2xl font-bold text-white">
                Fast replies. Premium planning.
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Message us and we’ll suggest the best match for your travel vibe.
                Mock UI only—no network requests.
              </p>

              <button
                type="button"
                onClick={() =>
                  alert("Mock UI: WhatsApp chat opened (no backend).")
                }
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[rgba(5,9,21,0.35)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-accent/50 hover:bg-[rgba(7,16,39,0.85)]"
              >
                <span className="material-icons text-accent">chat</span>
                Chat on WhatsApp
              </button>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <span className="material-icons text-accent mt-0.5">
                    schedule
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white/90">
                      10-min discovery call
                    </div>
                    <div className="mt-1 text-xs text-white/60">
                      We confirm availability and share a tailored itinerary note.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-8">
              <div className="text-sm font-semibold tracking-widest text-white/60">
                TRAVEL CONSULTATION
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white">
                Luxury planning that feels effortless
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {[
                  "We match your vibe to an itinerary arc.",
                  "We design photo-ready stops without forcing it.",
                  "We keep the pacing premium and comfortable.",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="material-icons text-accent mt-0.5">
                      check_circle
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => alert("Mock UI: consultation requested.")}
                className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Request consultation
                <span className="material-icons ml-2 align-middle">east</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <CTASection
          eyebrow="NEXT STEP"
          title="Browse trips and pick your vibe"
          description="View curated chapters and filter by destination, style, or budget. Then message us to tailor the details."
          primaryHref="/trips"
          primaryLabel="Explore trips"
          secondaryHref="/gallery"
          secondaryLabel="See experiences"
        />
      </section>
    </main>
  );
}

