"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { company, whatsappLink } from "@/lib/company";
import { services, serviceGroups } from "@/lib/services";
import { products, productCategories } from "@/lib/products";
import { Arrow, Container, cx } from "./ui";

type NavItem = {
  label: string;
  href: string;
  mega?: "services" | "products";
};

const NAV: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: "services" },
  { label: "Products", href: "/products", mega: "products" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change. Adjusting state during render rather
  // than in an effect avoids a flash of the old open menu on the new page.
  const [navPath, setNavPath] = useState(pathname);
  if (navPath !== pathname) {
    setNavPath(pathname);
    setOpenMega(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMega(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openWithDelay = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMega(key);
  };
  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMega(null), 140);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-bark text-taupe lg:block">
        <Container size="wide">
          <div className="flex h-10 items-center justify-between text-[0.8125rem]">
            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-2">
                <BadgeIcon className="h-3.5 w-3.5 text-bronze-light" />
                <span>
                  An <strong className="font-medium text-white">ISO 9001:2015</strong> certified
                  company
                </span>
              </span>
              <span className="h-3 w-px bg-white/15" />
              <span>Kolkata, West Bengal | Serving clients across India</span>
            </div>
            <div className="flex items-center gap-5">
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <PhoneIcon className="h-3.5 w-3.5 text-bronze-light" />
                {company.phone}
              </a>
              <span className="h-3 w-px bg-white/15" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 text-bronze-light" />
                WhatsApp us
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <div
        className={cx(
          "border-b transition-all duration-300",
          scrolled
            ? "border-line bg-paper/95 shadow-[0_1px_24px_rgba(66,55,42,0.07)] backdrop-blur-md"
            : "border-transparent bg-paper",
        )}
        onMouseLeave={closeWithDelay}
      >
        <Container size="wide">
          <div
            className={cx(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-[72px]" : "h-[88px]",
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-3.5">
              <Image
                src="/images/brand/aj-logo.jpg"
                alt=""
                width={292}
                height={293}
                priority
                className={cx(
                  "rounded-full transition-all duration-300",
                  scrolled ? "h-11 w-11" : "h-[54px] w-[54px]",
                )}
              />
              <span className="hidden sm:block">
                <span className="font-display block text-[1.0625rem] leading-tight tracking-tight text-bark">
                  AJ Corrosion
                </span>
                <span className="font-display block text-[1.0625rem] leading-tight tracking-tight text-bark">
                  Prevention Services
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              {NAV.map((item) => (
                <div
                  key={item.href}
                  onMouseEnter={() => (item.mega ? openWithDelay(item.mega) : closeWithDelay())}
                >
                  <Link
                    href={item.href}
                    className={cx(
                      "relative inline-flex items-center gap-1.5 px-4 py-2.5 text-[0.9375rem] font-medium transition-colors",
                      isActive(item.href) || openMega === item.mega
                        ? "text-bronze"
                        : "text-bark hover:text-bronze",
                    )}
                    aria-expanded={item.mega ? openMega === item.mega : undefined}
                  >
                    {item.label}
                    {item.mega ? (
                      <ChevronIcon
                        className={cx(
                          "h-3 w-3 transition-transform duration-300",
                          openMega === item.mega && "rotate-180",
                        )}
                      />
                    ) : null}
                    <span
                      aria-hidden
                      className={cx(
                        "absolute inset-x-4 bottom-1 h-px origin-left bg-bronze transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isActive(item.href) ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </div>
              ))}

              <Link
                href="/contact"
                className="group ml-4 inline-flex items-center gap-2 bg-bark px-6 py-3 text-[0.9375rem] font-medium text-white transition-all duration-300 hover:bg-bronze"
              >
                Get in touch
                <Arrow className="h-3.5 w-3.5" />
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-6 flex-col gap-[5px]">
                <span
                  className={cx(
                    "h-[1.5px] w-full bg-bark transition-all duration-300",
                    mobileOpen && "translate-y-[6.5px] rotate-45",
                  )}
                />
                <span
                  className={cx(
                    "h-[1.5px] w-full bg-bark transition-all duration-300",
                    mobileOpen && "opacity-0",
                  )}
                />
                <span
                  className={cx(
                    "h-[1.5px] w-full bg-bark transition-all duration-300",
                    mobileOpen && "-translate-y-[6.5px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </Container>

        {/* Mega menus */}
        <MegaPanel open={openMega === "services"}>
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            <div className="grid items-start gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {serviceGroups.map((group) => (
                <div key={group}>
                  <p className="eyebrow mb-4 text-bronze">{group}</p>
                  <ul className="space-y-2.5">
                    {services
                      .filter((s) => s.group === group)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="group block text-[0.9375rem] text-clay transition-colors hover:text-bark"
                          >
                            <span className="border-b border-transparent transition-colors group-hover:border-bronze">
                              {s.short}
                            </span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            <MegaAside
              image="/images/field/mmo-anode-borehole-4.jpg"
              title="Complete EPC Capability"
              body="Engineering, procurement, installation and commissioning of cathodic protection systems under a single work order."
              href="/services"
              cta="View all services"
            />
          </div>
        </MegaPanel>

        <MegaPanel open={openMega === "products"}>
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            <div className="grid items-start gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {productCategories.map((cat) => (
                <div key={cat}>
                  <p className="eyebrow mb-4 text-bronze">{cat}</p>
                  <ul className="space-y-2.5">
                    {products
                      .filter((p) => p.category === cat)
                      .map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/products/${p.slug}`}
                            className="group block text-[0.9375rem] text-clay transition-colors hover:text-bark"
                          >
                            <span className="border-b border-transparent transition-colors group-hover:border-bronze">
                              {p.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            <MegaAside
              image="/images/products/cp-tru-panel-bank.jpg"
              title="Supplied to Specification"
              body="Anodes, rectifiers, test stations and consumables sourced from client approved vendors with test certificates."
              href="/products"
              cta="View all products"
            />
          </div>
        </MegaPanel>
      </div>

      {/* Mobile drawer */}
      <div
        className={cx(
          "fixed inset-0 top-0 z-40 bg-paper transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="h-[88px]" />
        <div className="h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain pb-16">
          <Container>
            <nav className="divide-y divide-line border-y border-line">
              <MobileLink href="/" label="Home" />
              <MobileLink href="/about" label="About" />
              <MobileGroup
                label="Services"
                open={mobileSection === "services"}
                onToggle={() =>
                  setMobileSection((s) => (s === "services" ? null : "services"))
                }
                items={services.map((s) => ({
                  href: `/services/${s.slug}`,
                  label: s.short,
                }))}
                allHref="/services"
              />
              <MobileGroup
                label="Products"
                open={mobileSection === "products"}
                onToggle={() =>
                  setMobileSection((s) => (s === "products" ? null : "products"))
                }
                items={products.map((p) => ({
                  href: `/products/${p.slug}`,
                  label: p.name,
                }))}
                allHref="/products"
              />
              <MobileLink href="/projects" label="Projects" />
              <MobileLink href="/gallery" label="Gallery" />
              <MobileLink href="/contact" label="Contact" />
            </nav>

            <div className="mt-10 space-y-4">
              <a
                href={company.phoneHref}
                className="flex items-center gap-3 text-[0.9375rem] text-clay"
              >
                <PhoneIcon className="h-4 w-4 text-bronze" />
                {company.phone}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[0.9375rem] text-clay"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-bronze" />
                WhatsApp {company.whatsapp}
              </a>
              <p className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-clay">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-bronze" />
                <span>
                  {company.address.line1}, {company.address.line2},<br />
                  {company.address.city} - {company.address.postalCode}
                </span>
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-8 flex w-full items-center justify-center gap-2 bg-bark px-6 py-4 font-medium text-white"
            >
              Send Enquiry
              <Arrow className="h-4 w-4" />
            </Link>
          </Container>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Sub-components ---------------- */

function MegaPanel({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div
      className={cx(
        "absolute inset-x-0 top-full hidden origin-top border-b border-line bg-paper shadow-[0_28px_60px_-28px_rgba(66,55,42,0.28)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:block",
        open
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-2 opacity-0",
      )}
    >
      <Container size="wide">
        <div className="py-11">{children}</div>
      </Container>
    </div>
  );
}

function MegaAside({
  image,
  title,
  body,
  href,
  cta,
}: {
  image: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <Link href={href} className="group relative overflow-hidden bg-bark">
      <Image
        src={image}
        alt=""
        fill
        sizes="300px"
        className="photo-tone object-cover opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/80 to-bark/30" />
      <div className="relative flex h-full flex-col justify-end p-7">
        <h3 className="font-display text-lg text-white">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-taupe">{body}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-bronze-light">
          {cta}
          <Arrow className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-display flex items-center justify-between py-5 text-xl text-bark"
    >
      {label}
      <Arrow className="h-4 w-4 text-bronze" />
    </Link>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  items,
  allHref,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  items: { href: string; label: string }[];
  allHref: string;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="font-display flex w-full items-center justify-between py-5 text-left text-xl text-bark"
      >
        {label}
        <ChevronIcon
          className={cx(
            "h-4 w-4 text-bronze transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cx(
          "grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-3 border-l border-line pb-6 pl-4">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block text-[0.9375rem] text-clay">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={allHref}
                className="inline-flex items-center gap-2 pt-1 text-[0.9375rem] font-medium text-bronze"
              >
                View all
                <Arrow className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Icons ---------------- */

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden className={className}>
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path
        d="M5.2 2H2.8c-.44 0-.8.36-.8.8C2 9.1 6.9 14 13.2 14c.44 0 .8-.36.8-.8v-2.4l-2.8-1.2-1.4 1.6a9.4 9.4 0 0 1-3.8-3.8L7.6 6 6.4 3.2 5.2 2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
      <path d="M8.02 1.6a6.35 6.35 0 0 0-5.4 9.7L1.6 14.4l3.2-1a6.35 6.35 0 1 0 3.22-11.8Zm0 1.2a5.15 5.15 0 1 1-2.6 9.6l-.19-.11-1.86.58.6-1.8-.13-.2A5.15 5.15 0 0 1 8.02 2.8Zm-2.3 2.55c-.12 0-.31.04-.48.22-.16.18-.63.6-.63 1.47s.64 1.7.73 1.82c.9.12 1.25 1.96 3.03 2.67 1.48.58 1.78.47 2.1.44.32-.03 1.03-.42 1.18-.83.15-.4.15-.75.1-.82-.04-.07-.16-.11-.33-.2-.18-.09-1.04-.5-1.2-.56-.16-.06-.28-.09-.4.09-.11.18-.45.56-.55.68-.1.11-.2.13-.38.04a4.8 4.8 0 0 1-1.4-.86 5.3 5.3 0 0 1-.98-1.21c-.1-.18-.01-.27.08-.36.08-.8.18-.21.27-.32.09-.11.12-.18.18-.3.06-.12.03-.23-.01-.32-.05-.09-.4-.96-.55-1.31-.14-.34-.29-.3-.4-.3l-.34-.01Z" />
    </svg>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path
        d="M8 14.5s5-4.4 5-8a5 5 0 0 0-10 0c0 3.6 5 8 5 8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.4" r="1.9" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <circle cx="8" cy="6.4" r="4.6" stroke="currentColor" strokeWidth="1.3" />
      <path d="m5.6 10.2-.9 4.1L8 12.8l3.3 1.5-.9-4.1" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}
