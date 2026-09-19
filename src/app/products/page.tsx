import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Arrow, Container, SectionHeading, cx } from "@/components/ui";
import { products, productCategories } from "@/lib/products";

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
  title: "Products",
  description:
    "Cathodic protection materials supplied to specification. Magnesium and zinc anodes, MMO coated titanium anodes, transformer rectifier units, test lead points, reference electrodes, surge diverters, backfill, cables and survey instruments.",
};

const categoryBlurbs: Record<string, string> = {
  Anodes: "The consumable element of every CP system, galvanic or impressed current, sized to the required design life.",
  "Power & Control": "The DC source and the protective devices around it, rated to the design and to the site fault study.",
  Monitoring: "Test stations, reference cells and field instruments through which the system is read and verified.",
  Accessories: "Backfill, cable, connection consumables and sealing kits required to keep the installed system working.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Cathodic Protection Materials"
        lead="We procure against your technical specification from client approved vendors, with test certificates and inspection records. We also install what we supply, under the same work order where required."
        image="/images/products/cp-tru-panel-bank.jpg"
        crumbs={[{ label: "Products" }]}
      />

      {productCategories.map((category, ci) => {
        const items = products.filter((p) => p.category === category);
        return (
          <section
            key={category}
            className={ci % 2 === 1 ? "border-y border-line bg-sand py-24 lg:py-28" : "py-24 lg:py-28"}
          >
            <Container size="wide">
              <Reveal>
                <SectionHeading
                  eyebrow="Product Category"
                  title={category}
                  lead={categoryBlurbs[category]}
                />
              </Reveal>

              <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((product, i) => (
                  <li key={product.slug}>
                    <Reveal delay={(i % 3) * 90}>
                      <Link
                        href={`/products/${product.slug}`}
                        className="group flex h-full flex-col border border-line bg-paper transition-all duration-500 hover:border-bronze/40 hover:shadow-[0_24px_60px_-38px_rgba(66,55,42,0.45)]"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-white">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className={cx(
                              "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]",
                              product.fit === "contain" ? "object-contain p-8" : "object-cover",
                            )}
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-7">
                          <h3 className="font-display text-xl leading-snug text-bark transition-colors group-hover:text-bronze">
                            {product.name}
                          </h3>
                          <p className="mt-2 text-sm text-bronze">{product.tagline}</p>
                          <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed pretty text-clay">
                            {product.summary}
                          </p>
                          <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-bronze">
                            View specifications
                            <Arrow className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <CtaBand
        eyebrow="Material Enquiry"
        title="Send us your specification"
        body="Anode sizing, rectifier rating, cable schedule or test station schedule. We quote for supply only, and for supply with installation under a single work order."
        image="/images/products/cp-tru-panel.jpg"
      />
    </>
  );
}
