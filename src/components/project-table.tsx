"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, projectScopes } from "@/lib/projects";
import { cx } from "./ui";

const CLIENTS = ["All", ...Array.from(new Set(projects.map((p) => p.client)))];
const SCOPES = ["All", ...projectScopes] as const;

export function ProjectTable() {
  const [client, setClient] = useState("All");
  const [scope, setScope] = useState<string>("All");

  const rows = useMemo(
    () =>
      projects
        .filter((p) => client === "All" || p.client === client)
        .filter((p) => scope === "All" || p.scope === scope)
        .sort((a, b) => b.year - a.year || b.id - a.id),
    [client, scope],
  );

  return (
    <>
      <div className="flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-5">
          <Filter label="Client" options={CLIENTS} value={client} onChange={setClient} />
          <Filter label="Scope" options={[...SCOPES]} value={scope} onChange={setScope} />
        </div>
      </div>

      {/* Desktop table */}
      <div className="mt-10 hidden lg:block">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-line">
              {["Work description", "Client", "End customer", "Year", "Work order reference", "Status"].map(
                (h, i) => (
                  <th
                    key={h || `col-${i}`}
                    scope="col"
                    className="eyebrow pb-4 text-clay last:text-right"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((p) => (
              <tr key={p.id} className="group align-top transition-colors hover:bg-sand/70">
                <td className="max-w-md py-6 pr-8">
                  <span className="text-[0.9375rem] leading-snug text-bark">{p.title}</span>
                  <span className="mt-1.5 block text-xs text-taupe">{p.scope}</span>
                </td>
                <td className="py-6 pr-6 text-sm text-clay">{p.client}</td>
                <td className="py-6 pr-6 text-sm text-clay">{p.endCustomer}</td>
                <td className="py-6 pr-6 font-mono text-sm text-clay">{p.year}</td>
                <td className="py-6 pr-6 font-mono text-xs leading-relaxed text-taupe">
                  {p.orderRef}
                </td>
                <td className="py-6 text-right">
                  <StatusPill status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 ? (
          <p className="py-16 text-center text-clay">No projects match that combination.</p>
        ) : null}
      </div>

      {/* Mobile cards */}
      <ul className="mt-10 space-y-5 lg:hidden">
        {rows.map((p) => (
          <li key={p.id} className="border border-line bg-paper">
            <div className="relative aspect-[16/9] overflow-hidden bg-umber">
              <Image
                src={p.image}
                alt=""
                fill
                sizes="100vw"
                className="photo-tone object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-mono text-xs text-bronze-light">
                {p.year}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow text-bronze">{p.client}</span>
                <StatusPill status={p.status} />
              </div>
              <h3 className="font-display mt-3 text-lg leading-snug text-bark">{p.title}</h3>
              <dl className="mt-5 space-y-2.5 border-t border-line pt-5 text-sm">
                <Row k="End customer" v={p.endCustomer} />
                <Row k="Work order" v={p.orderRef} mono />
                <Row k="Scope" v={p.scope} />
              </dl>
            </div>
          </li>
        ))}
        {rows.length === 0 ? (
          <li className="py-16 text-center text-clay">No projects match that combination.</li>
        ) : null}
      </ul>
    </>
  );
}

function Filter({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="eyebrow w-14 shrink-0 text-clay">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cx(
              "border px-4 py-2 text-[0.8125rem] font-medium transition-all duration-300",
              value === opt
                ? "border-bronze bg-bronze text-white"
                : "border-line bg-paper text-clay hover:border-bronze hover:text-bronze",
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: "Completed" | "In progress" }) {
  const done = status === "Completed";
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 border px-3 py-1.5 text-[0.6875rem] tracking-wide whitespace-nowrap",
        done ? "border-line text-clay" : "border-signal/40 bg-signal/10 text-signal",
      )}
    >
      <span className={cx("h-1.5 w-1.5 rounded-full", done ? "bg-clay/50" : "bg-signal")} />
      {status}
    </span>
  );
}

function Row({ k, v, mono }: { k: string; v: string; mono?: boolean }) {
  return (
    <div className="flex justify-between gap-6">
      <dt className="shrink-0 text-taupe">{k}</dt>
      <dd className={cx("text-right text-bark", mono && "font-mono text-xs")}>{v}</dd>
    </div>
  );
}
