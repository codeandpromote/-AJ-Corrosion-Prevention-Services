import Image from "next/image";
import Link from "next/link";
import { company, whatsappLink } from "@/lib/company";
import { services } from "@/lib/services";
import { products } from "@/lib/products";
import { Arrow, Container } from "./ui";
import { BadgeIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./site-header";

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/about#quality", label: "Quality policy" },
  { href: "/about#certifications", label: "Certifications" },
  { href: "/about#equipment", label: "Equipment register" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-espresso text-taupe">
      <div aria-hidden className="grid-blueprint absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-bronze/10 blur-[130px]"
      />

      <Container size="wide" className="relative">
        {/* Top */}
        <div className="grid gap-14 border-b border-white/10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.15fr] lg:gap-10 lg:py-20">
          <div>
            <Link href="/" className="flex items-center gap-3.5">
              <Image
                src="/images/brand/aj-logo.jpg"
                alt=""
                width={292}
                height={293}
                className="h-14 w-14 rounded-full"
              />
              <span>
                <span className="font-display block text-lg leading-tight text-white">
                  AJ Corrosion
                </span>
                <span className="eyebrow block text-[0.625rem] text-bronze-light">
                  Prevention Services
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed pretty">
              An ISO 9001:2015 certified EPC contractor for cathodic protection of underground
              hydrocarbon pipelines, vessels, tanks and LPG storage bullets. Established in{" "}
              {company.foundedYear} at Kolkata, West Bengal.
            </p>

            <div className="mt-7 inline-flex items-center gap-2.5 border border-white/15 px-4 py-2.5">
              <BadgeIcon className="h-4 w-4 text-bronze-light" />
              <span className="text-xs tracking-wide text-white">
                ISO 9001:2015 · {company.registrations.iso.certificateNo}
              </span>
            </div>
          </div>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="eyebrow mb-5 text-bronze-light">
              Our Services
            </h2>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {s.short}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 font-medium text-bronze-light transition-colors hover:text-white"
                >
                  All services
                  <Arrow className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-products">
            <h2 id="footer-products" className="eyebrow mb-5 text-bronze-light">
              Product Supply
            </h2>
            <ul className="space-y-2.5 text-sm">
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 font-medium text-bronze-light transition-colors hover:text-white"
                >
                  All products
                  <Arrow className="h-3 w-3" />
                </Link>
              </li>
            </ul>
            <h2 className="eyebrow mt-9 mb-5 text-bronze-light">Company</h2>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-5 text-bronze-light">Head office</h2>
            <address className="space-y-4 text-sm not-italic">
              <p className="flex items-start gap-3 leading-relaxed">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-bronze-light" />
                <span>
                  {company.address.line1},<br />
                  {company.address.line2},<br />
                  {company.address.city} - {company.address.postalCode},<br />
                  {company.address.state}, {company.address.country}
                </span>
              </p>
              <p>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-bronze-light" />
                  {company.phone}
                </a>
              </p>
              <p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-bronze-light" />
                  WhatsApp {company.whatsapp}
                </a>
              </p>
            </address>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 border border-white/25 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-bronze hover:bg-bronze"
            >
              Send Enquiry
              <Arrow className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-mono tracking-wide">
              Udyam {company.registrations.udyam.number}
            </span>
            <span aria-hidden className="hidden h-3 w-px bg-white/15 sm:block" />
            <span>Proprietor: {company.proprietor}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
