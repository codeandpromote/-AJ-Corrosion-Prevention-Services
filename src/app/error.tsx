"use client";

import { useEffect } from "react";
import { Button, Container, Eyebrow } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the digest so a production failure can be traced in host logs.
    console.error(error);
  }, [error]);

  return (
    <section className="relative isolate overflow-hidden bg-espresso">
      <div aria-hidden className="grid-blueprint absolute inset-0" />
      <Container size="wide" className="relative">
        <div className="flex min-h-[70vh] flex-col justify-center py-24">
          <Eyebrow tone="light">Something went wrong</Eyebrow>
          <h1 className="font-display mt-6 max-w-3xl text-[2.25rem] leading-[1.1] balance text-white sm:text-5xl">
            This page could not be loaded
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-taupe">
            Please try again. If the problem continues, contact us on WhatsApp or by phone and
            we will help you directly.
          </p>
          {error.digest ? (
            <p className="mt-4 font-mono text-xs text-taupe/70">Reference: {error.digest}</p>
          ) : null}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center gap-2.5 bg-bronze px-7 py-3.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-bronze-dark"
            >
              Try again
            </button>
            <Button href="/" variant="ghost">
              Back to Homepage
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
