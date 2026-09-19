"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow, Button, Container, cx } from "./ui";

/**
 * Video hero. The poster carries the first paint, the 720p file is served to
 * narrow screens and the video only starts once it can play through, so a slow
 * connection sees a sharp still rather than a stalling video.
 *
 * Autoplay requires muted + playsInline; both are set. If the browser or the
 * user's data-saver blocks playback, the poster simply stays.
 */
export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
        ?.saveData === true;
    // Reduced motion or an explicit data-saver: leave the poster in place.
    if (reduced || saveData) return;

    // Assign the source to the element directly: picking it in state would
    // cascade a render, and the element is an external system either way.
    video.src = window.innerWidth <= 900 ? "/video/hero-720.mp4" : "/video/hero-1080.mp4";
    video.load();

    const start = () => {
      video.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    };

    if (video.readyState >= 3) start();
    else video.addEventListener("canplay", start, { once: true });

    // Don't burn cycles or battery while the hero is off screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", start);
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[calc(100dvh-88px)] items-center overflow-hidden bg-espresso lg:min-h-[calc(100dvh-128px)]">
      <video
        ref={videoRef}
        className={cx(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
          playing ? "opacity-100" : "opacity-0",
        )}
        poster="/video/hero-poster.jpg"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Poster underneath so the section is never empty */}
      <div
        aria-hidden
        className={cx(
          "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
          playing ? "opacity-0" : "opacity-100",
        )}
        style={{ backgroundImage: "url('/video/hero-poster.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/70 to-espresso/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-espresso/45" />
      <div aria-hidden className="grid-blueprint absolute inset-0" />

      <Container size="wide" className="relative py-20 lg:py-24">
        <div className="max-w-[54rem]">
          <p className="eyebrow flex items-center gap-3 text-bronze-light">
            <span aria-hidden className="h-px w-10 bg-bronze-light/50" />
            An ISO 9001:2015 Certified Company
          </p>

          <h1 className="font-display mt-7 text-[2.5rem] leading-[1.06] balance text-white sm:text-5xl lg:text-[3.9rem]">
            Specialized in Cathodic Protection Works for City Gas Distribution Network, {" "}
            <span className="text-bronze-light">Cross Country pipelines, Refineries, Petrochemicals</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed pretty text-taupe">
            AJ Corrosion Prevention Services is an EPC contractor based at Kolkata. We carry
            out design, supply, installation, testing, commissioning, monitoring and
            maintenance of cathodic protection systems for underground hydrocarbon pipelines,
            storage tanks, vessels and LPG mounded bullets.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/services" variant="primary">
              Our Services
            </Button>
            <Button href="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-7 border-t border-white/15 pt-9 sm:grid-cols-4">
            {[
              { k: "EPC", v: "Single point responsibility" },
              { k: "NACE", v: "Qualified design team" },
              { k: "Pan-India", v: "Site mobilisation" },
              { k: "In-House", v: "Survey instruments" },
            ].map((f) => (
              <div key={f.k}>
                <dt className="font-display text-xl text-bronze-light lg:text-2xl">{f.k}</dt>
                <dd className="mt-1.5 text-[0.8125rem] leading-snug text-taupe">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* Footer bar */}
      <div className="absolute inset-x-0 bottom-0">
        <Container size="wide">
          <div className="flex items-center justify-between gap-8 border-t border-white/15 py-5">
            <p className="hidden text-sm text-taupe sm:block">
              Refinery and tank farm infrastructure of the kind we protect
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  const v = videoRef.current;
                  if (!v) return;
                  if (v.paused) {
                    v.play().then(() => setPlaying(true), () => {});
                  } else {
                    v.pause();
                    setPlaying(false);
                  }
                }}
                className="inline-flex items-center gap-2 border border-white/25 px-4 py-2 text-xs tracking-wide text-white transition-colors hover:border-white hover:bg-white hover:text-espresso"
                aria-pressed={playing}
              >
                {playing ? <PauseIcon className="h-3 w-3" /> : <PlayIcon className="h-3 w-3" />}
                {playing ? "Pause" : "Play"}
                <span className="sr-only"> background video</span>
              </button>

              <a
                href="#about"
                className="group hidden items-center gap-2.5 text-xs tracking-wide text-taupe transition-colors hover:text-white lg:flex"
              >
                Scroll down
                <Arrow className="h-3.5 w-3.5 rotate-90" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden className={className}>
      <path d="M3 1.5v9l7-4.5-7-4.5Z" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden className={className}>
      <path d="M2.5 1.5h2.5v9H2.5zM7 1.5h2.5v9H7z" />
    </svg>
  );
}
