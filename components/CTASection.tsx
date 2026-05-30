"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function CTASection({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_0%,rgba(45,125,255,0.35),transparent_55%),radial-gradient(700px_260px_at_100%_20%,rgba(0,212,255,0.22),transparent_55%)]" />
      <Reveal as="div" once className="relative">
        <div className="text-sm font-semibold tracking-widest text-white/70">
          {eyebrow}
        </div>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
          {description}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(45,125,255,0.25)] transition hover:brightness-110"
          >
            {primaryLabel}
            <span className="material-icons">east</span>
          </Link>

          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[rgba(5,9,21,0.35)] px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-accent/40 hover:text-white"
            >
              {secondaryLabel}
              <span className="material-icons text-accent">arrow_forward</span>
            </Link>
          )}
        </div>
      </Reveal>
    </section>
  );
}

