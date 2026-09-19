"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Arrow } from "./ui";

/**
 * Opens a certificate image full screen. Images rather than PDFs, so the
 * certificate can be read on the page without offering a file download.
 */
export function CertificateViewer({
  src,
  title,
  caption,
  width = 1240,
  height = 1754,
}: {
  src: string;
  title: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group mt-8 inline-flex items-center justify-center gap-2.5 self-start border border-espresso/20 px-7 py-3.5 text-[0.9375rem] font-medium text-espresso transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white"
      >
        View Certificate
        <Arrow className="h-4 w-4" />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/96 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close certificate"
            className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-espresso"
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-4 w-4">
              <path d="m3.5 3.5 9 9m0-9-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>

          <figure
            className="flex max-h-full w-full max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[80vh] w-full overflow-auto bg-white">
              <Image
                src={src}
                alt={title}
                width={width}
                height={height}
                sizes="(max-width: 1024px) 92vw, 760px"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-5 text-center">
              <p className="text-[0.9375rem] text-white">{title}</p>
              {caption ? <p className="mt-1.5 text-sm text-taupe">{caption}</p> : null}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
