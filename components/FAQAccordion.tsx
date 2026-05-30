"use client";

import * as React from "react";

export type FAQAccordionProps = {
  faqs: { q: string; a: string }[];
};

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <div className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-2 backdrop-blur-xl">
      {faqs.map((item, idx) => {
        const isOpen = idx === openIdx;
        return (
          <div
            key={item.q}
            className="border-t border-white/10 first:border-t-0"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-3 py-3 text-left"
              onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
            >
              <div className="text-sm font-semibold text-white/90">{item.q}</div>
              <span
                className={[
                  "material-icons text-accent transition-transform duration-300",
                  isOpen ? "rotate-180" : "rotate-0",
                ].join(" ")}
                aria-hidden
              >
                expand_more
              </span>
            </button>

            <div
              className={[
                "overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              <div className="px-3 pb-3">
                <div className="text-sm leading-7 text-white/70">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

