import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { ClientMarquee } from "@/components/client-marquee";
import { CtaBand } from "@/components/cta-band";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { Accordion } from "@/components/accordion";
import {
  Arrow,
  Button,
  Container,
  Eyebrow,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { company, epcPillars, stats } from "@/lib/company";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { projects } from "@/lib/projects";
import { gallery } from "@/lib/gallery";
import { JsonLd, faqSchema } from "@/components/json-ld";

const featured = [
  "cathodic-protection-design",
  "iccp-systems",
  "sacrificial-anode-systems",
  "cp-monitoring-maintenance",
  "close-interval-potential-survey",
  "thermit-welding-pin-brazing",
];

const faqs = [
  {
    q: "What is cathodic protection and why is it required?",
    a: "Buried steel corrodes because parts of it become anodic with respect to the surrounding soil. Cathodic protection stops this by making the whole structure a cathode, either by connecting a more active metal that corrodes in its place, or by driving protective current onto it from an external DC source. Coating alone is not sufficient, because every coating has defects, and it is at those defects that the steel corrodes.",
  },
  {
    q: "Should we use an ICCP system or a sacrificial anode system?",
    a: "It depends on the current demand and the soil resistivity. Well coated, short or isolated sections in low resistivity soil are usually protected economically by magnesium or zinc anodes, with no external power supply. Long cross-country lines, poorly coated structures and high resistivity soil normally require an impressed current system with a transformer rectifier and a ground bed. We carry out the current demand calculation and the soil resistivity survey first, and then recommend.",
  },
  {
    q: "Which protection criteria do you design and commission to?",
    a: "The standard criterion is a structure to electrolyte potential of −850 mV or more negative with respect to a saturated copper / copper sulphate reference electrode, with IR drop accounted for, as per NACE SP0169 and ISO 15589-1. Where IR drop cannot be eliminated we use the instant off potential, and for certain conditions the 100 mV polarisation decay criterion. The applicable criterion is agreed at design stage and demonstrated at commissioning.",
  },
  {
    q: "Do you maintain existing CP systems installed by others?",
    a: "Yes. Our ESSAR work on the EOGEPL Durgapur and Matix pipeline networks is monitoring and maintenance of systems already in service. We begin with a baseline survey of the existing installation and report its present condition against the original design, and then carry out scheduled monitoring, rectifier health checks, fault rectification and supply of spares under an annual contract.",
  },
  {
    q: "How soon can you mobilise to site?",
    a: "For monitoring and survey work in eastern India we normally mobilise within a week of receiving the work order. Installation work depends on material lead time for anodes, rectifiers and test stations. We provide a realistic procurement schedule along with our offer. All survey and monitoring instruments are owned by us, so instrument availability never delays a mobilisation.",
  },
  {
    q: "Are you certified to work on PSU and operator sites?",
    a: "We hold ISO 9001:2015 certification covering supply, installation, testing, commissioning, monitoring and maintenance of cathodic protection systems for underground hydrocarbon steel pipelines, underground vessels, tanks and LPG storage bullets. We are also registered under Udyam. We have executed work on ESSAR, GAIL Gas and BPCL networks, both directly and as a specialist subcontractor to larger corrosion control firms.",
  },
];

export default function HomePage() {
  const featuredServices = featured
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const recentProjects = [...projects].reverse().slice(0, 4);
  const galleryPreview = gallery.slice(0, 5);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <HomeHero />

      {/* ---------------- Clients strip ---------------- */}
      <section className="border-b border-line bg-sand py-12">
        <Container size="wide">
          <p className="eyebrow mb-8 text-center text-clay">
            Our Clients & End Customers
          </p>
          <ClientMarquee />
        </Container>
      </section>

      {/* ---------------- Intro / capability ---------------- */}
      <section id="about" className="relative overflow-hidden py-20 lg:py-24">
        <div aria-hidden className="grid-blueprint-light absolute inset-0 opacity-70" />
        <Container size="wide" className="relative">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <Reveal>
              <Eyebrow>About Us</Eyebrow>
              <h2 className="font-display mt-5 text-3xl leading-[1.12] balance text-bark sm:text-4xl">
                An ISO 9001:2015 Certified Cathodic Protection Contractor
              </h2>
              <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed pretty text-clay">
                <p>
                  AJ Corrosion Prevention Services was established in {company.foundedYear} and is
                  an ISO 9001:2015 certified company. We are one of the leading EPC contractors
                  for cathodic protection of city gas distribution networks, cross-country
                  pipelines, plant piping, mounded storage vessels and tanks.
                </p>
                <p>
                  We are a cohesive team of dedicated professionals with vast experience in
                  related fields, providing reliable service as per the client&rsquo;s requirement.
                  The day to day operation of the establishment is looked after by the proprietor,
                  Mr. {company.proprietor}.
                </p>
                <p className="border-l-2 border-bronze pl-6 text-bark">
                  We believe that when you run for quality of work, clients will run for you. Our
                  strength lies in our assets of machinery, equipment, technocrats and the
                  expertise available with us since inception.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/about" variant="outline">
                  More About Us
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Us
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[4/3] lg:aspect-[4/4.4]">
                <Image
                  src="/images/field/tlp-installation.jpg"
                  alt="H type test lead point installed on a cast concrete foundation at a pipeline right of way"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="photo-tone object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 w-[72%] border border-line bg-paper p-7 shadow-[0_24px_60px_-28px_rgba(66,55,42,0.35)] sm:-left-8 sm:p-8">
                <p className="eyebrow text-bronze">ISO 9001:2015 Certified Scope</p>
                <p className="mt-4 text-sm leading-relaxed text-clay">
                  Supply, installation, testing, commissioning, monitoring &amp; maintenance of
                  cathodic protection systems of underground hydrocarbon steel pipelines,
                  underground vessels, tanks &amp; LPG storage bullets.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="relative isolate overflow-hidden bg-bark py-16 lg:py-20">
        <div aria-hidden className="grid-blueprint absolute inset-0" />
        <div
          aria-hidden
          className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-bronze/12 blur-[120px]"
        />
        <Container size="wide" className="relative">
          <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <div className="border-t border-white/15 pt-7">
                  <dd className="font-display text-5xl leading-none text-white lg:text-6xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-5 text-[0.9375rem] font-medium text-bronze-light">
                    {stat.label}
                  </dt>
                  <p className="mt-2 text-sm leading-relaxed text-taupe">{stat.sub}</p>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="py-20 lg:py-24">
        <Container size="wide">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Our Services"
                title="Complete Cathodic Protection Services"
                lead="From the initial soil resistivity survey through to annual monitoring of a system in service. Design, procurement, installation and maintenance are handled by the same team."
              />
              <TextLink href="/services" className="shrink-0 lg:pb-3">
                View all services
              </TextLink>
            </div>
          </Reveal>

          <ul className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <li key={service.slug} className="flex">
                <Reveal delay={(i % 3) * 90} className="flex w-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col bg-paper p-8 transition-colors duration-500 hover:bg-white lg:p-10"
                  >
                    <div className="relative mb-8 aspect-[16/10] overflow-hidden bg-umber">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="photo-tone object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                    </div>
                    <h3 className="font-display text-xl leading-snug text-bark transition-colors group-hover:text-bronze">
                      {service.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed pretty text-clay">
                      {service.summary}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-bronze">
                      View details
                      <Arrow className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------- EPC pillars ---------------- */}
      <section className="relative isolate overflow-hidden bg-umber py-20 lg:py-24">
        <div aria-hidden className="grid-blueprint absolute inset-0" />
        <Container size="wide" className="relative">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="EPC Capability"
              title="Engineering, Procurement and Construction"
              lead="All three capabilities are held in house, so a single work order covers the complete scope and the design intent is carried right through to the commissioning report."
            />
          </Reveal>

          <div className="mt-16 grid gap-px bg-white/10 lg:grid-cols-3">
            {epcPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 110}>
                <article className="group relative h-full overflow-hidden bg-umber p-9 lg:p-11">
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="photo-tone object-cover opacity-[0.12] transition-all duration-700 group-hover:scale-105 group-hover:opacity-20"
                  />
                  <div className="relative">
                    <span className="font-display flex h-14 w-14 items-center justify-center border border-bronze-light/40 text-2xl text-bronze-light">
                      {pillar.no}
                    </span>
                    <h3 className="font-display mt-8 text-2xl text-white">{pillar.title}</h3>
                    <p className="mt-5 leading-relaxed pretty text-taupe">{pillar.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Industries ---------------- */}
      <section className="py-20 lg:py-24">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Applications"
              lead="A mounded LPG bullet does not corrode in the same way as a cross-country line, and a congested city gas network is a different problem again. Our design approach changes with the asset."
            />
          </Reveal>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <li key={industry.slug} className="flex">
                <Reveal delay={(i % 3) * 90} className="flex w-full">
                  <article className="group relative flex h-full flex-col overflow-hidden bg-espresso">
                    <div className="relative aspect-[16/11]">
                      <Image
                        src={industry.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="photo-tone object-cover opacity-55 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col p-7 lg:p-8">
                      <h3 className="font-display text-xl text-white">{industry.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-taupe">
                        {industry.blurb}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------- Projects ---------------- */}
      <section className="border-y border-line bg-sand py-20 lg:py-24">
        <Container size="wide">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Our Projects"
                title="Recent Work Orders"
                lead="Our complete project register is published, with client, end customer, work order reference and present status."
              />
              <TextLink href="/projects" className="shrink-0 lg:pb-3">
                View all projects
              </TextLink>
            </div>
          </Reveal>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2">
            {recentProjects.map((project, i) => (
              <li key={project.id}>
                <Reveal delay={(i % 2) * 100}>
                  <article className="group flex h-full gap-6 border border-line bg-paper p-6 transition-all duration-500 hover:border-bronze/40 hover:bg-white sm:p-7">
                    <div className="relative hidden h-28 w-28 shrink-0 overflow-hidden bg-umber sm:block">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="112px"
                        className="photo-tone object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="eyebrow text-bronze">{project.client}</span>
                        <span
                          className={`inline-flex items-center gap-1.5 text-[0.6875rem] tracking-wide ${
                            project.status === "Completed" ? "text-clay" : "text-signal"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              project.status === "Completed" ? "bg-clay/50" : "bg-signal"
                            }`}
                          />
                          {project.status}
                        </span>
                      </div>
                      <h3 className="font-display mt-3 text-lg leading-snug text-bark">
                        {project.title}
                      </h3>
                      <p className="mt-3 font-mono text-xs text-taupe">
                        {project.year} · {project.orderRef}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------- Gallery preview ---------------- */}
      <section className="py-20 lg:py-24">
        <Container size="wide">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Project Gallery"
                title="Photographs From Our Sites"
                lead="Ground bed drilling, anode installation, thermit welding, test lead points and monitoring rounds, photographed on our own jobs."
              />
              <TextLink href="/gallery" className="shrink-0 lg:pb-3">
                View gallery
              </TextLink>
            </div>
          </Reveal>

          {/* The lead tile is col-span-2 and square, which is exactly the height of
              two square tiles plus the gap — so row-span-2 lines the grid up with
              no explicit heights anywhere. */}
          <ul className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {galleryPreview.map((item, i) => (
              <li
                key={item.src}
                className={i === 0 ? "col-span-2 lg:row-span-2" : undefined}
              >
                <Reveal delay={i * 70}>
                  <Link
                    href="/gallery"
                    className="group relative block aspect-square overflow-hidden bg-umber"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="photo-tone object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent" />
                    <p className="absolute inset-x-0 bottom-0 p-4 text-xs leading-snug text-white">
                      {item.caption}
                    </p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="border-t border-line bg-sand py-20 lg:py-24">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently Asked Questions"
                lead="If your question is not covered here, send it to us on WhatsApp. Technical enquiries reach the proprietor directly."
              />
              <Button href="/contact" variant="outline" className="mt-9">
                Ask a Question
              </Button>
            </Reveal>
            <Reveal delay={120}>
              <Accordion items={faqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
