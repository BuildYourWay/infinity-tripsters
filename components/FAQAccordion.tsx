"use client";

import * as React from "react";

export type FAQAccordionProps = {
  faqs: { q: string; a: string }[];
};

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <div className="rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-1.5 backdrop-blur-xl sm:rounded-3xl sm:p-2">
      {faqs.map((item, idx) => {
        const isOpen = idx === openIdx;
        return (
          <div
            key={item.q}
            className="border-t border-white/10 first:border-t-0"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-3 px-3 py-3.5 text-left sm:items-center sm:gap-4 sm:px-4 sm:py-4"
              onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
            >
              <div className="min-w-0 flex-1 pr-1 text-sm font-semibold leading-snug text-white/90 sm:text-[15px]">
                {item.q}
              </div>
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
                isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                <div className="text-sm leading-7 text-white/70">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

