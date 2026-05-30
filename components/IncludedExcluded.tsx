"use client";

import * as React from "react";
import Reveal from "./Reveal";

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-5 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold tracking-widest text-white/60">
          {title}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70">
          {items.length}
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="material-icons mt-0.5 text-accent">check</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IncludedExcluded({
  included,
  excluded,
}: {
  included: string[];
  excluded: string[];
}) {
  return (
    <section className="mt-10 grid gap-4 lg:grid-cols-2">
      <Reveal as="div" once className="">
        <ListBlock title="Included" items={included} />
      </Reveal>
      <Reveal as="div" once delayMs={40}>
        <ListBlock title="Excluded" items={excluded} />
      </Reveal>
    </section>
  );
}

