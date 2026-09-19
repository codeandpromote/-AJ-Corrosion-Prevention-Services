import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Arrow, Container, SectionHeading } from "@/components/ui";
import { services, serviceGroups } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services",
  description:
    "Cathodic protection services including CP design, ICCP and galvanic anode systems, installation and commissioning, monitoring and AMC, CIPS, DCVG and ACVG survey, thermit welding, pin brazing, TLP installation and interference mitigation.",
};

const groupBlurbs: Record<string, string> = {
  Engineering:
    "Design work carried out before any material is procured, covering current demand, anode sizing, ground bed layout and interference mitigation.",
  Construction:
    "Work carried out at site, from ground bed drilling through to a system energised and polarised to the specified criteria.",
  "Survey & Testing":
    "Measurement that establishes the actual condition of the buried asset, rather than the condition assumed at design stage.",
  Operations:
    "Keeping a commissioned system in effective service over its design life, and supplying the material required to do so.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Cathodic Protection Services"
        lead="Design, procurement, installation, commissioning, survey and maintenance, grouped by where each service sits in the life of the asset. Scope of work and deliverables are listed for every service."
        image="/images/field/mmo-anode-borehole-4.jpg"
        crumbs={[{ label: "Services" }]}
      />

      {/* Index strip */}
      <section className="border-b border-line bg-sand py-14">
        <Container size="wide">
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((group) => (
              <div key={group}>
                <p className="eyebrow mb-4 text-bronze">{group}</p>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.group === group)
                    .map((s) => (
                      <li key={s.slug}>
                        <a
                          href={`#${s.slug}`}
                          className="group block text-sm text-clay transition-colors hover:text-bark"
                        >
                          <span className="border-b border-transparent transition-colors group-hover:border-bronze">
                            {s.short}
                          </span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Groups */}
      {serviceGroups.map((group, gi) => {
        const groupServices = services.filter((s) => s.group === group);
        return (
          <section
            key={group}
            className={gi % 2 === 1 ? "border-y border-line bg-sand py-24 lg:py-28" : "py-24 lg:py-28"}
          >
            <Container size="wide">
              <Reveal>
                <SectionHeading
                  eyebrow="Service Group"
                  title={group}
                  lead={groupBlurbs[group]}
                />
              </Reveal>

              <ul className="mt-14 space-y-6">
                {groupServices.map((service, i) => (
                  <li key={service.slug} id={service.slug} className="scroll-mt-32">
                    <Reveal delay={i * 80}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group grid gap-8 border border-line bg-paper p-6 transition-all duration-500 hover:border-bronze/40 hover:shadow-[0_24px_60px_-38px_rgba(66,55,42,0.45)] sm:grid-cols-[220px_1fr] sm:p-7 lg:grid-cols-[280px_1fr] lg:gap-10 lg:p-8"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-umber sm:aspect-[4/3]">
                          <Image
                            src={service.image}
                            alt=""
                            fill
                            sizes="(max-width: 640px) 100vw, 280px"
                            className="photo-tone object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 to-transparent" />
                        </div>

                        <div className="flex flex-col">
                          <h3 className="font-display text-2xl leading-snug text-bark transition-colors group-hover:text-bronze">
                            {service.title}
                          </h3>
                          <p className="mt-4 max-w-2xl leading-relaxed pretty text-clay">
                            {service.summary}
                          </p>
                          <ul className="mt-6 flex flex-wrap gap-2">
                            {service.standards.slice(0, 3).map((std) => (
                              <li
                                key={std}
                                className="border border-line px-3 py-1.5 font-mono text-[0.6875rem] tracking-wide text-taupe"
                              >
                                {std}
                              </li>
                            ))}
                          </ul>
                          <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-bronze">
                            Scope of work &amp; deliverables
                            <Arrow className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <CtaBand
        eyebrow="Need Guidance?"
        title="Not sure which services you require?"
        body="Most enquiries begin either with a line that is not holding potential, or with a new network that needs protection. Describe your situation and we will advise which services apply and which are not required."
        image="/images/field/earthing-resistance-checking.jpg"
      />
    </>
  );
}
