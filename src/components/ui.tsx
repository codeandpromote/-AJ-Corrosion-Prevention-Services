import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* ---------------- Container ---------------- */

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  const widths = {
    narrow: "max-w-4xl",
    default: "max-w-[1280px]",
    wide: "max-w-[1480px]",
  };
  return (
    <div className={cx("mx-auto w-full px-5 sm:px-8 lg:px-12", widths[size], className)}>
      {children}
    </div>
  );
}

/* ---------------- Eyebrow ---------------- */

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cx(
        "eyebrow flex items-center gap-3",
        tone === "dark" ? "text-bronze" : "text-bronze-light",
        className,
      )}
    >
      <span
        aria-hidden
        className={cx(
          "h-px w-8",
          tone === "dark" ? "bg-bronze/50" : "bg-bronze-light/50",
        )}
      />
      {children}
    </p>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className={align === "center" ? "justify-center" : undefined}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cx(
          "font-display mt-5 text-3xl leading-[1.08] balance sm:text-4xl lg:text-[2.9rem]",
          tone === "dark" ? "text-bark" : "text-white",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cx(
            "mt-5 text-[1.0625rem] leading-relaxed pretty",
            tone === "dark" ? "text-clay" : "text-taupe",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ---------------- Buttons ---------------- */

type ButtonVariant = "primary" | "outline" | "ghost" | "light";

const buttonBase =
  "group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[0.9375rem] font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-bronze text-white hover:bg-bronze-dark hover:shadow-[0_14px_36px_-12px_rgba(132,113,82,0.65)]",
  outline:
    "border border-bark/20 text-bark hover:border-bronze hover:bg-bronze hover:text-white",
  ghost:
    "border border-white/25 text-white hover:border-white hover:bg-white hover:text-bark",
  light: "bg-white text-bark hover:bg-bronze hover:text-white",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  arrow = true,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const external =
    href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const content = (
    <>
      {children}
      {arrow ? <Arrow /> : null}
    </>
  );
  const cls = cx(buttonBase, buttonVariants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={cx(
        "h-4 w-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1",
        className,
      )}
    >
      <path
        d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- Text link ---------------- */

export function TextLink({
  href,
  children,
  tone = "dark",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex items-center gap-2 text-sm font-medium transition-colors",
        tone === "dark"
          ? "text-bark hover:text-bronze"
          : "text-white hover:text-bronze-light",
        className,
      )}
    >
      {children}
      <Arrow className="h-3.5 w-3.5" />
    </Link>
  );
}
