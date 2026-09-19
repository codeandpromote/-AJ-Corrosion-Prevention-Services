import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Accordion } from "@/components/accordion";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { BadgeIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/site-header";
import { company, whatsappLink } from "@/lib/company";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Contact AJ Corrosion Prevention Services. Head office at Parikshit Roy Lane, Tangra, Kolkata 700015. Call or WhatsApp +91 89611 74927 for cathodic protection design, supply, installation and maintenance enquiries.",
};

const mapQuery = encodeURIComponent(
  "Parikshit Roy Lane, Tangra, Kolkata, West Bengal 700015, India",
);

const faqs = [
  {
    q: "What information should I include in my first enquiry?",
    a: "As much of the following as you have: asset type and size such as line diameter, length or tank capacity, whether the asset is existing or new, coating type and condition, soil resistivity data if available, details of any existing CP system, the standard or client specification applicable, and your expected timeline. With these details we can usually give a meaningful design approach in our first reply.",
  },
  {
    q: "How quickly do you respond?",
    a: "Technical enquiries are answered within one working day. Where a detailed design calculation is required before we can quote, we inform you and confirm a date for our offer.",
  },
  {
    q: "Do you work outside West Bengal?",
    a: "Yes. Our head office is at Kolkata but we mobilise across India. Our project register already includes work at Durgapur in West Bengal and at Rourkela in Odisha. Mobilisation cost is shown as a separate line item in every quotation.",
  },
  {
    q: "Can you work as a subcontractor to our EPC?",
    a: "Yes, regularly. Two of the projects in our register are subcontracted scopes: magnesium anode installation for GAIL Gas through ASAP Corrosion Services, and pin brazing for BPCL through Universal Corrosion Prevention India. We are comfortable working to a main contractor QA/QC and HSE system.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        lead="Technical enquiries reach the proprietor directly. Send us the asset details and the applicable standard, and you will receive a proper engineering response."
        image="/images/field/cathode-junction-box.jpg"
        crumbs={[{ label: "Contact" }]}
        size="compact"
      />

      {/* Contact cards */}
      <section className="border-b border-line bg-sand py-14">
        <Container size="wide">
          <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              icon={<PhoneIcon className="h-5 w-5 text-bronze" />}
              label="Call Us"
              value={company.phone}
              href={company.phoneHref}
            />
            <ContactCard
              icon={<WhatsAppIcon className="h-5 w-5 text-[#1da851]" />}
              label="WhatsApp"
              value={company.whatsapp}
              href={whatsappLink("Hello, I would like to enquire about your cathodic protection services.")}
              external
            />
            <ContactCard
              icon={<PinIcon className="h-5 w-5 text-bronze" />}
              label="Head Office"
              value={`${company.address.line1}, ${company.address.line2}, ${company.address.city} - ${company.address.postalCode}`}
            />
            <ContactCard
              icon={<BadgeIcon className="h-5 w-5 text-bronze" />}
              label="Certified"
              value={`ISO 9001:2015 · ${company.registrations.iso.certificateNo}`}
            />
          </ul>
        </Container>
      </section>

      {/* Form */}
      <section className="py-24 lg:py-28">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Send an Enquiry"
                title="Tell Us Your Requirement"
                lead="Line size and route length, soil conditions, whether an existing CP system is in place, the applicable standard and your expected timeline. With these details we can revert with a suitable design approach and our offer."
              />

              <div className="mt-10 space-y-8">
                <div className="border-l-2 border-bronze pl-6">
                  <p className="eyebrow text-bronze">Office Hours</p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-clay">
                    Monday to Saturday, 9:30 AM to 6:30 PM IST.
                    <br />
                    Site teams remain reachable outside these hours during active mobilisations.
                  </p>
                </div>
                <div className="border-l-2 border-line pl-6">
                  <p className="eyebrow text-clay">Registration Details</p>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-clay">
                    Udyam {company.registrations.udyam.number}
                    <br />
                    {company.registrations.udyam.type}
                  </p>
                </div>
                <Button href="/projects" variant="outline">
                  View Our Projects
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="border-y border-line bg-sand py-24 lg:py-28">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
            <Reveal>
              <Eyebrow>Find Us</Eyebrow>
              <h2 className="font-display mt-6 text-3xl leading-[1.1] text-bark sm:text-4xl">
                Head Office, Tangra, Kolkata
              </h2>
              <address className="mt-7 text-[1.0625rem] leading-relaxed text-clay not-italic">
                {company.address.line1},
                <br />
                {company.address.line2},
                <br />
                {company.address.city} - {company.address.postalCode},
                <br />
                {company.address.state}, {company.address.country}
              </address>
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                variant="outline"
                className="mt-9"
              >
Open in Google Maps
              </Button>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative aspect-[16/11] overflow-hidden border border-line bg-white">
                <iframe
                  title={`Map showing the head office of ${company.name} in Tangra, Kolkata`}
                  src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[0.35]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-28">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Before You Write"
                title="Questions That Help Us Respond Faster"
              />
            </Reveal>
            <Reveal delay={120}>
              <Accordion items={faqs} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="flex h-11 w-11 items-center justify-center border border-bronze/25">
        {icon}
      </span>
      <span className="mt-6 block">
        <span className="eyebrow block text-clay">{label}</span>
        <span className="mt-2.5 block text-[0.9375rem] leading-relaxed break-words text-bark">
          {value}
        </span>
      </span>
    </>
  );

  return (
    <li className="bg-paper p-8">
      {href ? (
        <a
          href={href}
          className="block transition-colors hover:text-bronze"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </a>
      ) : (
        <div>{inner}</div>
      )}
    </li>
  );
}
