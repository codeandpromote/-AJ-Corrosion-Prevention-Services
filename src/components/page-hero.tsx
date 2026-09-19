import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Eyebrow, cx } from "./ui";

export type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumbs = [],
  align = "left",
  children,
  size = "default",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  image: string;
  crumbs?: Crumb[];
  align?: "left" | "center";
  children?: ReactNode;
  size?: "default" | "compact";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-espresso">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="photo-tone object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-espresso/95 via-espresso/78 to-espresso/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-espresso/45" />
      <div aria-hidden className="grid-blueprint absolute inset-0" />

      <Container size="wide" className="relative">
        <div
          className={cx(
            size === "compact" ? "pt-16 pb-16 lg:pt-20 lg:pb-20" : "pt-20 pb-20 lg:pt-28 lg:pb-28",
            align === "center" && "text-center",
          )}
        >
          {crumbs.length > 0 ? (
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol
                className={cx(
                  "flex flex-wrap items-center gap-2 text-xs text-taupe",
                  align === "center" && "justify-center",
                )}
              >
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label} className="flex items-center gap-2">
                    <span aria-hidden className="text-white/25">/</span>
                    {c.href ? (
                      <Link href={c.href} className="transition-colors hover:text-white">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-bronze-light">{c.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <div className={cx("max-w-4xl", align === "center" && "mx-auto")}>
            {eyebrow ? (
              <Eyebrow tone="light" className={align === "center" ? "justify-center" : undefined}>
                {eyebrow}
              </Eyebrow>
            ) : null}
            <h1 className="font-display mt-6 text-[2.5rem] leading-[1.04] balance text-white sm:text-5xl lg:text-[3.75rem]">
              {title}
            </h1>
            {lead ? (
              <p
                className={cx(
                  "mt-7 max-w-2xl text-lg leading-relaxed pretty text-taupe",
                  align === "center" && "mx-auto",
                )}
              >
                {lead}
              </p>
            ) : null}
            {children ? <div className="mt-10">{children}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
