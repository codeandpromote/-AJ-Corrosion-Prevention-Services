"use client";

import { useState, type FormEvent } from "react";
import { company, whatsappLink } from "@/lib/company";
import { services } from "@/lib/services";
import { Arrow, cx } from "./ui";
import { WhatsAppIcon } from "./site-header";

/**
 * Enquiries go to WhatsApp. The form validates, composes the message and
 * opens the visitor's WhatsApp with everything already typed out.
 */

type Fields = {
  name: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  company: "",
  phone: "",
  interest: "",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please enter your name";
    if (!fields.phone.trim()) next.phone = "Please enter a contact number";
    else if (fields.phone.replace(/\D/g, "").length < 10)
      next.phone = "Please enter a valid contact number";
    if (!fields.message.trim()) next.message = "Please describe your requirement";
    else if (fields.message.trim().length < 15)
      next.message = "A little more detail will help us respond properly";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const composed = () =>
    [
      "Enquiry from your website",
      "",
      `Name: ${fields.name}`,
      `Company: ${fields.company || "-"}`,
      `Contact No: ${fields.phone}`,
      `Service required: ${fields.interest || "-"}`,
      "",
      "Requirement:",
      fields.message,
    ].join("\n");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const link = document.createElement("a");
    link.href = whatsappLink(composed());
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-line bg-white p-10 text-center lg:p-14">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/12">
          <WhatsAppIcon className="h-7 w-7 text-[#1da851]" />
        </span>
        <h3 className="font-display mt-6 text-2xl text-espresso">WhatsApp is opening</h3>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-clay">
          Your enquiry has been typed out for you. Press send in WhatsApp and we will reply
          within one working day. If WhatsApp did not open, message us directly on{" "}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-bronze underline underline-offset-4"
          >
            {company.whatsapp}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setSent(false);
          }}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-espresso transition-colors hover:text-bronze"
        >
          Send another enquiry
          <Arrow className="h-3.5 w-3.5" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border border-line bg-white p-7 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Your name"
          required
          value={fields.name}
          onChange={set("name")}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Company"
          value={fields.company}
          onChange={set("company")}
          autoComplete="organization"
        />
        <Field
          label="Contact number"
          type="tel"
          required
          value={fields.phone}
          onChange={set("phone")}
          error={errors.phone}
          autoComplete="tel"
        />

        <div>
          <label htmlFor="interest" className="eyebrow mb-3 block text-clay">
            Service required
          </label>
          <select
            id="interest"
            name="interest"
            value={fields.interest}
            onChange={(e) => set("interest")(e.target.value)}
            className="w-full appearance-none border border-line bg-paper px-4 py-3.5 text-[0.9375rem] text-espresso transition-colors focus:border-bronze focus:outline-none"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Material supply">Material supply</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="eyebrow mb-3 block text-clay">
            Your requirement <span className="text-bronze">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={fields.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Line size and length, soil conditions, existing CP system if any, applicable standard and expected timeline"
            className={cx(
              "w-full resize-y border bg-paper px-4 py-3.5 text-[0.9375rem] text-espresso transition-colors placeholder:text-taupe focus:outline-none",
              errors.message
                ? "border-red-400 focus:border-red-500"
                : "border-line focus:border-bronze",
            )}
          />
          {errors.message ? <p className="mt-2 text-xs text-red-700">{errors.message}</p> : null}
        </div>
      </div>

      <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[16rem] text-xs leading-relaxed text-taupe">
          Your enquiry will open in WhatsApp, ready to send.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2.5 bg-[#1da851] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#177f3e]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send on WhatsApp
          <Arrow />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-3 block text-clay">
        {label} {required ? <span className="text-bronze">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className={cx(
          "w-full border bg-paper px-4 py-3.5 text-[0.9375rem] text-espresso transition-colors placeholder:text-taupe focus:outline-none",
          error ? "border-red-400 focus:border-red-500" : "border-line focus:border-bronze",
        )}
      />
      {error ? <p className="mt-2 text-xs text-red-700">{error}</p> : null}
    </div>
  );
}
