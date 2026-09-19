import Image from "next/image";
import { company, whatsappLink } from "@/lib/company";
import { Button, Container, Eyebrow } from "./ui";
import { PhoneIcon, WhatsAppIcon } from "./site-header";

export function CtaBand({
  eyebrow = "Contact Us",
  title = "Send us your requirement",
  body = "Share the line size, route length, soil conditions and the standard you work to. We will revert with a suitable design approach, the scope of work and our offer.",
  image = "/images/scenes/refinery.png",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-espresso">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="photo-tone object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/96 via-espresso/82 to-espresso/45" />
      <div aria-hidden className="grid-blueprint absolute inset-0" />

      <Container size="wide" className="relative">
        <div className="grid gap-12 py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:py-24">
          <div>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h2 className="font-display mt-6 text-3xl leading-[1.08] balance text-white sm:text-4xl lg:text-[2.9rem]">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed pretty text-taupe">
              {body}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Send Enquiry
              </Button>
              <Button href={whatsappLink("Hello, I would like to enquire about your cathodic protection services.")} variant="ghost">
                Message on WhatsApp
              </Button>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.03] p-8 backdrop-blur-sm lg:p-10">
            <p className="eyebrow text-bronze-light">Speak to us directly</p>
            <a
              href={company.phoneHref}
              className="font-display mt-5 flex items-center gap-3.5 text-2xl text-white transition-colors hover:text-bronze-light sm:text-[1.75rem]"
            >
              <PhoneIcon className="h-5 w-5 shrink-0 text-bronze-light" />
              {company.phone}
            </a>
            <a
              href={whatsappLink("Hello, I would like to enquire about your cathodic protection services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-3.5 text-[0.9375rem] text-taupe transition-colors hover:text-white"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 text-bronze-light" />
              Chat with us on WhatsApp
            </a>
            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-sm leading-relaxed text-taupe">
                {company.address.line1}, {company.address.line2},<br />
                {company.address.city} - {company.address.postalCode}, {company.address.state}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
