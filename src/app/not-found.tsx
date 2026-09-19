import Link from "next/link";
import { Button, Container, Eyebrow } from "@/components/ui";
import { services } from "@/lib/services";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-espresso">
      <div aria-hidden className="grid-blueprint absolute inset-0" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/4 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-bronze/10 blur-[130px]"
      />
      <Container size="wide" className="relative">
        <div className="flex min-h-[70vh] flex-col justify-center py-24">
          <Eyebrow tone="light">Error 404</Eyebrow>
          <h1 className="font-display mt-6 max-w-3xl text-[2.5rem] leading-[1.08] balance text-white sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-taupe">
            The page you are looking for does not exist or has been moved. Please return to the
            homepage, or go directly to one of our services.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/" variant="primary">
              Back to Homepage
            </Button>
            <Button href="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>

          <div className="mt-16 border-t border-white/12 pt-9">
            <p className="eyebrow mb-5 text-bronze-light">Our Services</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[0.9375rem] text-taupe transition-colors hover:text-white"
                  >
                    {s.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
