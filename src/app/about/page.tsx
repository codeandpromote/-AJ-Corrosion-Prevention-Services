import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { ClientMarquee } from "@/components/client-marquee";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { BadgeIcon } from "@/components/site-header";
import { CertificateViewer } from "@/components/certificate-viewer";
import {
  company,
  epcPillars,
  equipment,
  qualityPolicy,
  values,
} from "@/lib/company";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About us",
  description:
    "AJ Corrosion Prevention Services is an ISO 9001:2015 certified EPC contractor for cathodic protection, established in 2023 at Kolkata and led by proprietor Amit Kumar Giri.",
};

const timeline = [
  {
    year: "2023",
    title: "Inception",
    body: `${company.name} is incorporated on ${company.incorporationDate} and registered under Udyam as a proprietary micro enterprise, with its head office at Tangra, Kolkata.`,
  },
  {
    year: "2024",
    title: "First Full Year",
    body: "Five work orders executed for ESSAR, covering ICCP monitoring on the MCS to Matix and GGS to CGS networks, CP system maintenance, and procurement and services for the EOGEPL Durgapur pipeline CP system.",
  },
  {
    year: "2025",
    title: "Scope Widens",
    body: 'Repeat supply and maintenance orders from ESSAR, plus supply and installation of magnesium anodes across a 4", 16" and 18" dia city gas distribution network at Rourkela for GAIL Gas.',
  },
  {
    year: "2026",
    title: "Certification",
    body: `ISO 9001:2015 certification awarded under certificate ${company.registrations.iso.certificateNo}, and pin brazing installation work commenced on a Bharat Petroleum network.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About the Company"
        lead="AJ Corrosion Prevention Services is an ISO 9001:2015 certified EPC contractor for cathodic protection. We are a cohesive team of dedicated professionals with vast experience in related fields, providing reliable service as per the client's requirement."
        image="/images/field/mmo-anode-borehole-2.jpg"
        crumbs={[{ label: "About" }]}
      />

      {/* Introduction */}
      <section className="py-24 lg:py-32">
        <Container size="wide">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Introduction</Eyebrow>
              <h2 className="font-display mt-6 text-3xl leading-[1.12] balance text-bark sm:text-4xl">
                One of the Leading EPC Contractors for Cathodic Protection
              </h2>
              <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed pretty text-clay">
                <p>
                  AJ Corrosion Prevention Services introduces itself as an ISO
                  9001:2015 certified company and one of the leading EPC
                  contractors for cathodic protection of Cathodic Protection
                  connection work on Monolithic Isolating Joint networks, Bore
                  hole work for installation of MMO anodes, plant piping,
                  mounded storage vessels and tanks.
                </p>
                <p>
                  The day-to-day operation of the establishment is looked after
                  by the proprietor of the company, Mr. {company.proprietor},
                  with a view to widening the business and catering to the needs
                  of new projects.
                </p>
                <p>
                  The company is well balanced and managed by a team of
                  qualified and experienced technocrats. Key persons carry more
                  than a decade of experience from a well known EPC industry
                  background and are positioned to guide, organise and execute
                  the works with established procedures and practices.
                </p>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-9">
                {[
                  { k: "Founded", v: company.incorporationDate },
                  { k: "Proprietor", v: company.proprietor },
                  {
                    k: "Head office",
                    v: `${company.address.city}, ${company.address.state}`,
                  },
                  { k: "Enterprise type", v: company.registrations.udyam.type },
                ].map((row) => (
                  <div key={row.k}>
                    <dt className="eyebrow text-bronze">{row.k}</dt>
                    <dd className="mt-2.5 text-[0.9375rem] text-bark">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/field/mmo-anode-borehole-2.jpg"
                  alt="AJ Corrosion Prevention Services crew working at a ground bed drilling location"
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="photo-tone object-cover"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/field/pin-brazing-connection.jpg"
                    alt="Thermit weld connection completed at an H-type test lead point"
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="photo-tone object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/field/tlp-monitoring.jpg"
                    alt="Technician recording a structure-to-soil potential at a test lead point"
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="photo-tone object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision / strength / goal / objectives */}
      <section className="relative isolate overflow-hidden bg-bark py-24 lg:py-32">
        <div aria-hidden className="grid-blueprint absolute inset-0" />
        <Container size="wide" className="relative">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Our Principles"
              title="Vision, Strength, Goal and Objectives"
              lead="As stated in our company profile."
            />
          </Reveal>

          <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2">
            {values.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 110}>
                <article className="h-full bg-bark p-9 lg:p-11">
                  <span
                    aria-hidden
                    className="block h-px w-10 bg-bronze-light/60"
                  />
                  <h3 className="font-display mt-6 text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-relaxed pretty text-taupe">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality policy */}
      <section id="quality" className="scroll-mt-32 py-24 lg:py-32">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Quality Policy"
                title="Right the First Time, On Time, Every Time"
              />
              <div className="mt-9 border border-line bg-sand p-7">
                <p className="eyebrow text-bronze">Certified Scope</p>
                <p className="mt-4 text-sm leading-relaxed text-clay">
                  {company.registrations.iso.scope}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-6 border-l-2 border-bronze pl-8 text-[1.0625rem] leading-relaxed pretty text-clay">
                {qualityPolicy.split("\n\n").map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* EPC */}
      <section className="border-y border-line bg-sand py-24 lg:py-32">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="EPC Overview"
              title="Engineering, Procurement and Construction"
              lead="All three capabilities are held in house, so a single work order covers the complete scope."
            />
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {epcPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 110}>
                <article className="h-full border border-line bg-paper p-9">
                  <span className="font-display flex h-14 w-14 items-center justify-center border border-bronze/40 text-2xl text-bronze">
                    {pillar.no}
                  </span>
                  <h3 className="font-display mt-8 text-2xl text-bark">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 leading-relaxed pretty text-clay">
                    {pillar.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src="/images/team/amit-kumar-giri.jpg"
                  alt={`${company.proprietor}, proprietor of ${company.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>Leadership</Eyebrow>
              <h2 className="font-display mt-6 text-3xl leading-[1.08] text-bark sm:text-4xl">
                {company.proprietor}
              </h2>
              <p className="mt-3 text-[0.9375rem] font-medium text-bronze">
                Proprietor, {company.name}
              </p>
              <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed pretty text-clay">
                <p>
                  Mr. Giri established the company in {company.foundedYear} and
                  looks after the day to day operation of the establishment
                  personally, from the technical enquiry through to the
                  monitoring report that closes each maintenance cycle.
                </p>
                <p>
                  Technical enquiries reach him directly rather than passing
                  through a sales layer. A scoping discussion with us will
                  normally settle the design question in a single conversation.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" variant="outline">
                  Contact the Proprietor
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="relative isolate overflow-hidden bg-umber py-24 lg:py-32">
        <div aria-hidden className="grid-blueprint absolute inset-0" />
        <Container size="wide" className="relative">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Our Journey"
              title="Progress Since Inception"
            />
          </Reveal>
          <ol className="mt-16 grid gap-px bg-white/10 lg:grid-cols-4">
            {timeline.map((item, i) => (
              <Reveal
                key={item.year}
                delay={i * 100}
                as="li"
                className="h-full"
              >
                <div className="h-full bg-umber p-8 lg:p-9">
                  <span className="font-display text-4xl text-bronze-light">
                    {item.year}
                  </span>
                  <h3 className="font-display mt-6 text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed pretty text-taupe">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Certifications */}
      <section id="certifications" className="scroll-mt-32 py-24 lg:py-32">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Certifications & Registrations"
              title="Our Certificates"
              lead="The certifications and registrations we hold. Each certificate can be opened and read in full, and the reference numbers can be verified with the issuing body."
            />
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <article className="flex h-full flex-col border border-line bg-paper p-9 lg:p-11">
                <div className="flex items-start justify-between gap-6">
                  <BadgeIcon className="h-9 w-9 text-bronze" />
                  <span className="eyebrow text-clay">Quality Management</span>
                </div>
                <h3 className="font-display mt-8 text-2xl text-bark">
                  {company.registrations.iso.standard}
                </h3>
                <p className="mt-5 flex-1 leading-relaxed pretty text-clay">
                  {company.registrations.iso.scope}
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-7 text-sm">
                  <div>
                    <dt className="eyebrow text-bronze">Certificate No.</dt>
                    <dd className="mt-2 font-mono text-bark">
                      {company.registrations.iso.certificateNo}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-bronze">Valid Until</dt>
                    <dd className="mt-2 text-bark">
                      {company.registrations.iso.expires}
                    </dd>
                  </div>
                </dl>
                <CertificateViewer
                  src="/images/certificates/iso-9001-2015.jpg"
                  title="ISO 9001:2015 Certificate"
                  caption={`Certificate ${company.registrations.iso.certificateNo}, valid until ${company.registrations.iso.expires}`}
                />
              </article>
            </Reveal>

            <Reveal delay={110}>
              <article className="flex h-full flex-col border border-line bg-paper p-9 lg:p-11">
                <div className="flex items-start justify-between gap-6">
                  <BadgeIcon className="h-9 w-9 text-bronze" />
                  <span className="eyebrow text-clay">MSME Registration</span>
                </div>
                <h3 className="font-display mt-8 text-2xl text-bark">
                  Udyam Registration
                </h3>
                <p className="mt-5 flex-1 leading-relaxed pretty text-clay">
                  Registered with the Ministry of Micro, Small and Medium
                  Enterprises, Government of India, under NIC classification{" "}
                  {company.registrations.nic}.
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-7 text-sm">
                  <div>
                    <dt className="eyebrow text-bronze">Udyam Number</dt>
                    <dd className="mt-2 font-mono text-bark">
                      {company.registrations.udyam.number}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-bronze">Registered</dt>
                    <dd className="mt-2 text-bark">
                      {company.registrations.udyam.registered}
                    </dd>
                  </div>
                </dl>
                <CertificateViewer
                  src="/images/certificates/udyam-registration.jpg"
                  title="Udyam Registration Certificate"
                  caption={`${company.registrations.udyam.number}, registered ${company.registrations.udyam.registered}`}
                />
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Equipment */}
      <section
        id="equipment"
        className="scroll-mt-32 border-y border-line bg-sand py-24 lg:py-32"
      >
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Our Equipment"
                title="List of Own Equipment"
                lead="Instrument availability never delays a mobilisation. This is the register of equipment held in house and deployed on every survey and maintenance round."
              />
            </Reveal>
            <Reveal delay={120}>
              <ul className="divide-y divide-line border-y border-line">
                {equipment.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline gap-5 py-4 sm:gap-8"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-bronze"
                    />
                    <span className="flex-1 text-[0.9375rem] leading-snug text-bark">
                      {item.name}
                    </span>
                    <span className="shrink-0 text-right text-sm text-taupe">
                      {item.make}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Clients */}
      <section className="py-24 lg:py-32">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our Clients"
              title="Clients & End Customers"
              lead="Served directly under work order, and as a specialist subcontractor to larger corrosion control firms."
            />
          </Reveal>
          <div className="mt-16">
            <ClientMarquee />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Work With Us"
        title="Involve us at design stage"
        body="A cathodic protection problem identified on the drawing is far less expensive to solve than one found after commissioning. Send us the route, the soil data and the applicable standard, and we will advise what the system requires."
        image="/images/field/mmo-anode-borehole-2.jpg"
      />
    </>
  );
}
