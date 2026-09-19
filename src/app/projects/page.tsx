import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { ProjectTable } from "@/components/project-table";
import { ClientMarquee } from "@/components/client-marquee";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  title: "Projects",
  description:
    "The complete project register of AJ Corrosion Prevention Services, covering work orders executed for ESSAR, GAIL Gas and BPCL pipeline networks with client, work order reference and status.",
};

const highlights = [
  {
    title: "EOGEPL Durgapur pipeline CP system",
    client: "ESSAR",
    body: "A series of linked work orders across 2024 and 2025, covering procurement of CP spares, supply of spare parts and rounds of maintenance services. This is our longest running client engagement.",
    image: "/images/field/mmo-anode-borehole-4.jpg",
    facts: [
      { k: "Period", v: "2024 to 2025" },
      { k: "Client", v: "ESSAR" },
      { k: "Scope", v: "Supply & maintenance" },
    ],
  },
  {
    title: 'CGD network Mg anode installation, Rourkela',
    client: "GAIL Gas Ltd. (via ASAP Corrosion Services)",
    body: 'Supply and installation of magnesium anodes across a 4", 16" and 18" dia steel pipeline network. In a congested distribution environment, correct anode placement and isolation joint verification decide whether the system performs.',
    image: "/images/field/anode-installation.jpg",
    facts: [
      { k: "Year", v: "2025" },
      { k: "Line sizes", v: '4" / 16" / 18"' },
      { k: "Scope", v: "Supply & installation" },
    ],
  },
  {
    title: "Pin brazing installation with epoxy sealing",
    client: "BPCL (via Universal Corrosion Prevention India)",
    body: "Pin brazing supply and installation with epoxy sealing on a Bharat Petroleum network. Pin brazing is used for low heat input pipe to cable connections where thermit welding would put too much energy into the parent metal.",
    image: "/images/field/pin-brazing-connection.jpg",
    facts: [
      { k: "Year", v: "2026" },
      { k: "Status", v: "Completed" },
      { k: "Scope", v: "Supply & installation" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Track record"
        title="Projects Executed"
        lead="Client, end customer, work order reference and status for every job we have taken up since inception. This is our complete register, not a selection."
        image="/images/field/deep-well-anode-ground-bed.jpg"
        crumbs={[{ label: "Projects" }]}
      />

      {/* Summary */}
      <section className="border-b border-line bg-sand py-14">
        <Container size="wide">
          <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Scope of work", v: "Supply, installation, maintenance" },
              { k: "Clients served", v: "ESSAR, GAIL Gas, BPCL" },
              { k: "Regions", v: "West Bengal, Odisha" },
              { k: "Active since", v: "2023" },
            ].map((item) => (
              <div key={item.k} className="border-t border-bronze/30 pt-6">
                <dt className="eyebrow text-clay">{item.k}</dt>
                <dd className="font-display mt-3 text-xl leading-snug text-bark lg:text-2xl">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-24 lg:py-28">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title="Representative Assignments"
              lead="Repeat maintenance on a live pipeline network, an installation scope on a congested city gas grid, and specialist connection work as a subcontractor to a larger corrosion control firm."
            />
          </Reveal>

          <div className="mt-16 space-y-6">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <article
                  className={`grid gap-8 border border-line bg-paper p-6 sm:p-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12 lg:p-10 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="relative aspect-[16/10] overflow-hidden bg-umber lg:aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="photo-tone object-cover"
                    />
                  </figure>
                  <div className="flex flex-col justify-center">
                    <Eyebrow>{item.client}</Eyebrow>
                    <h3 className="font-display mt-5 text-2xl leading-snug text-bark sm:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <p className="mt-5 leading-relaxed pretty text-clay">{item.body}</p>
                    <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-7">
                      {item.facts.map((fact) => (
                        <div key={fact.k}>
                          <dt className="eyebrow text-bronze">{fact.k}</dt>
                          <dd className="mt-2 text-sm text-bark">{fact.v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Full register */}
      <section className="border-y border-line bg-sand py-24 lg:py-28">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Full Register"
              title="Past and Ongoing Projects"
              lead="Filter the register by client or by scope of work."
            />
          </Reveal>
          <div className="mt-14">
            <ProjectTable />
          </div>
        </Container>
      </section>

      {/* Clients */}
      <section className="py-24 lg:py-28">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our Clients"
              title="Networks We Have Worked On"
            />
          </Reveal>
          <div className="mt-14">
            <ClientMarquee />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Next Project"
        title="Let us quote for your next requirement"
        body="Tell us the asset, the scope of work and the timeline. We will revert with a method statement, a schedule and our commercial offer."
        image="/images/field/monolithic-isolating-joint.jpg"
      />
    </>
  );
}
