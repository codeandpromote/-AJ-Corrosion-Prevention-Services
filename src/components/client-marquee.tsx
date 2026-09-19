import Image from "next/image";
import { clients } from "@/lib/clients";

/**
 * Logos arrive as JPG/PNG with assorted backgrounds, so each sits in its own
 * white tile rather than being blended into the section colour.
 */
export function ClientMarquee() {
  const row = [...clients, ...clients];

  return (
    <div className="marquee-mask overflow-hidden">
      <ul className="marquee-track flex w-max items-stretch gap-4 sm:gap-5">
        {row.map((client, i) => (
          <li key={`${client.name}-${i}`} className="shrink-0">
            <div className="flex h-24 w-44 items-center justify-center border border-line bg-white px-6 transition-colors duration-500 hover:border-bronze/40 sm:h-28 sm:w-52">
              <Image
                src={client.logo}
                alt={i < clients.length ? client.full : ""}
                aria-hidden={i >= clients.length}
                width={220}
                height={100}
                className="max-h-14 w-auto object-contain opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 sm:max-h-16"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
