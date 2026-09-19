"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery, galleryCategories, type GalleryItem } from "@/lib/gallery";
import { cx } from "./ui";

export function GalleryGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);

  const items: GalleryItem[] =
    filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current = active === null ? null : items[active];

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2.5">
        {["All", ...galleryCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setFilter(cat);
              setActive(null);
            }}
            className={cx(
              "border px-5 py-2.5 text-sm font-medium transition-all duration-300",
              filter === cat
                ? "border-bronze bg-bronze text-white"
                : "border-line bg-white text-clay hover:border-bronze hover:text-bronze",
            )}
          >
            {cat}
            <span className="ml-2 font-mono text-[0.6875rem] opacity-60">
              {cat === "All"
                ? gallery.length
                : gallery.filter((g) => g.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {items.map((item, i) => (
          <li
            key={item.src}
            className={cx(
              item.orientation === "landscape" && "sm:col-span-2",
            )}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden bg-umber"
            >
              <div
                className={cx(
                  "relative w-full",
                  item.orientation === "landscape" ? "aspect-[16/10]" : "aspect-[3/4]",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="photo-tone object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/35 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-5">
                <p className="eyebrow text-bronze-light">{item.category}</p>
                <p className="mt-1.5 text-sm leading-snug text-white">{item.caption}</p>
              </div>
              <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center border border-white/30 bg-espresso/40 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <ExpandIcon className="h-4 w-4 text-white" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/96 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-espresso"
          >
            <CloseIcon className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-espresso sm:left-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-espresso sm:right-8"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <figure
            className="flex max-h-full w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[68vh] w-full">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 900px"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-6 text-center">
              <p className="eyebrow text-bronze-light">{current.category}</p>
              <p className="mt-2 text-[0.9375rem] text-white">{current.caption}</p>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M9.5 2.5H13.5V6.5M6.5 13.5H2.5V9.5M13.5 2.5 9 7M2.5 13.5 7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="m3.5 3.5 9 9m0-9-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
