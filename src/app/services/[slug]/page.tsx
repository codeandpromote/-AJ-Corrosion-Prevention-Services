import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Arrow, Button, Container, Eyebrow } from "@/components/ui";
import { getService, services } from "@/lib/services";
import { company } from "@/lib/company";
import { JsonLd, breadcrumbs, serviceSchema } from "@/components/json-ld";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} · ${company.name}`,
      description: service.summary,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const related = services
    .filter((s) => s.group === service.group && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbs([
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <PageHero
        eyebrow={service.group}
        title={service.title}
        lead={service.summary}
        image={service.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.short }]}
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Enquire About This Service
          </Button>
          <Button href="/services" variant="ghost">
            All Services
          </Button>
        </div>
      </PageHero>

      {/* Scope & deliverables */}
      <section className="py-24 lg:py-28">
        <Container size="wide">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Scope of Work</Eyebrow>
              <h2 className="font-display mt-6 text-3xl leading-[1.14] balance text-bark sm:text-[2.2rem]">
                What This Service Covers
              </h2>
              <ul className="mt-10 divide-y divide-line border-y border-line">
                {service.scope.map((item) => (
                  <li key={item} className="flex items-baseline gap-5 py-5 sm:gap-7">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-bronze" />
                    <span className="text-[1.0625rem] leading-relaxed pretty text-bark">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="sticky top-32 space-y-8">
                <div className="border border-line bg-sand p-8">
                  <p className="eyebrow text-bronze">Deliverables</p>
                  <ul className="mt-6 space-y-4">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-clay">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-bronze" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-line bg-paper p-8">
                  <p className="eyebrow text-bronze">Applicable Standards</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.standards.map((std) => (
                      <li
                        key={std}
                        className="border border-line px-3 py-1.5 font-mono text-[0.6875rem] tracking-wide text-clay"
                      >
                        {std}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-bronze/30 bg-bronze/5 p-8">
                  <p className="font-display text-lg leading-snug text-bark">
                    Need this service quoted?
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-clay">
                    Send us the asset details and we will revert with a method statement and our
                    offer.
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-bronze"
                  >
                    Send Enquiry
                    <Arrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section className="border-y border-line bg-sand py-20 lg:py-24">
          <Container size="wide">
            <Reveal>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <Eyebrow>Related Services</Eyebrow>
                  <h2 className="font-display mt-5 text-2xl text-bark sm:text-3xl">
                    Usually Carried Out Together
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-bark transition-colors hover:text-bronze"
                >
                  All services
                  <Arrow className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <li key={item.slug}>
                  <Reveal delay={i * 90}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex h-full flex-col border border-line bg-paper p-7 transition-all duration-500 hover:border-bronze/40 hover:bg-white"
                    >
                      <div className="relative mb-6 aspect-[16/9] overflow-hidden bg-umber">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="photo-tone object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                        />
                      </div>
                      <h3 className="font-display text-lg leading-snug text-bark transition-colors group-hover:text-bronze">
                        {item.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-clay">
                        {item.summary}
                      </p>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* Prev / next */}
      <section className="py-16">
        <Container size="wide">
          <nav className="grid gap-px border border-line bg-line sm:grid-cols-2">
            <Link
              href={`/services/${prev.slug}`}
              className="group bg-paper p-8 transition-colors hover:bg-sand"
            >
              <span className="eyebrow flex items-center gap-2 text-bronze">
                <Arrow className="h-3 w-3 rotate-180 group-hover:-translate-x-1" />
                Previous
              </span>
              <p className="font-display mt-4 text-lg text-bark">{prev.title}</p>
            </Link>
            <Link
              href={`/services/${next.slug}`}
              className="group bg-paper p-8 text-right transition-colors hover:bg-sand"
            >
              <span className="eyebrow flex items-center justify-end gap-2 text-bronze">
                Next
                <Arrow className="h-3 w-3" />
              </span>
              <p className="font-display mt-4 text-lg text-bark">{next.title}</p>
            </Link>
          </nav>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="m3 8.5 3.2 3.2L13 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
