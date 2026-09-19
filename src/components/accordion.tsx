"use client";

import { useState } from "react";
import { cx } from "./ui";

export type AccordionItem = { q: string; a: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span
                className={cx(
                  "font-display text-lg leading-snug transition-colors sm:text-xl",
                  isOpen ? "text-bronze" : "text-bark",
                )}
              >
                {item.q}
              </span>
              <span
                aria-hidden
                className={cx(
                  "relative mt-1.5 h-4 w-4 shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isOpen && "rotate-45",
                )}
              >
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-bronze" />
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-bronze" />
              </span>
            </button>
            <div
              className={cx(
                "grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-7 leading-relaxed pretty text-clay">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
