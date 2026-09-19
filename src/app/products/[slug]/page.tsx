import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Arrow, Button, Container, Eyebrow } from "@/components/ui";
import { getProduct, products } from "@/lib/products";
import { company } from "@/lib/company";
import { JsonLd, breadcrumbs, productSchema } from "@/components/json-ld";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} · ${company.name}`,
      description: product.summary,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd
        data={breadcrumbs([
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
      {/* Split hero */}
      <section className="border-b border-line bg-sand">
        <Container size="wide">
          <nav aria-label="Breadcrumb" className="pt-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-clay">
              <li>
                <Link href="/" className="transition-colors hover:text-bronze">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden className="text-bark/25">/</span>
                <Link href="/products" className="transition-colors hover:text-bronze">
                  Products
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden className="text-bark/25">/</span>
                <span className="text-bronze">{product.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-white lg:aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 620px"
                className={product.fit === "contain" ? "object-contain p-10" : "object-cover"}
              />
            </div>

            <div className="flex flex-col justify-center">
              <Eyebrow>{product.category}</Eyebrow>
              <h1 className="font-display mt-6 text-[2.25rem] leading-[1.05] balance text-bark sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-bronze">{product.tagline}</p>
              <p className="mt-7 text-[1.0625rem] leading-relaxed pretty text-clay">
                {product.summary}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Request a Quotation
                </Button>
                <Button href="/products" variant="outline" arrow={false}>
                  All Products
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Specs & applications */}
      <section className="py-24 lg:py-28">
        <Container size="wide">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Technical Data</Eyebrow>
              <h2 className="font-display mt-6 text-3xl leading-[1.1] text-bark sm:text-[2.35rem]">
                Specifications
              </h2>
              <dl className="mt-10 divide-y divide-line border-y border-line">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-2 py-5 sm:grid-cols-[220px_1fr] sm:gap-8"
                  >
                    <dt className="eyebrow text-bronze">{spec.label}</dt>
                    <dd className="text-[1.0625rem] leading-relaxed text-bark">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
              {product.image2 ? (
                <figure className="mt-10">
                  <div className="relative aspect-[16/10] overflow-hidden border border-line bg-white">
                    <Image
                      src={product.image2.src}
                      alt={product.image2.caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-contain p-8"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-taupe">
                    {product.image2.caption}
                  </figcaption>
                </figure>
              ) : null}

              <p className="mt-7 text-sm leading-relaxed text-taupe">
                Specifications shown are indicative. Final ratings, sizes and materials are
                confirmed against your technical specification and the CP design calculation at
                enquiry stage.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="sticky top-32 space-y-8">
                <div className="border border-line bg-sand p-8">
                  <p className="eyebrow text-bronze">Typical Applications</p>
                  <ul className="mt-6 space-y-4">
                    {product.applications.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-clay"
                      >
                        <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 bg-bronze" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-bronze/30 bg-bronze/5 p-8">
                  <p className="font-display text-lg leading-snug text-bark">
                    Supply only, or supply with installation?
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-clay">
                    We quote for both. Installation by the same team that supplied the material
                    keeps responsibility with a single agency.
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-bronze"
                  >
                    Contact Us
                    <Arrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section className="border-y border-line bg-sand py-20 lg:py-24">
          <Container size="wide">
            <Reveal>
              <Eyebrow>More in {product.category}</Eyebrow>
              <h2 className="font-display mt-5 text-2xl text-bark sm:text-3xl">
                Often Specified Together
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <li key={item.slug}>
                  <Reveal delay={i * 90}>
                    <Link
                      href={`/products/${item.slug}`}
                      className="group flex h-full flex-col border border-line bg-paper transition-all duration-500 hover:border-bronze/40 hover:bg-white"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-white">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className={
                            item.fit === "contain"
                              ? "object-contain p-6 transition-transform duration-700 group-hover:scale-[1.06]"
                              : "object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                          }
                        />
                      </div>
                      <div className="p-7">
                        <h3 className="font-display text-lg leading-snug text-bark transition-colors group-hover:text-bronze">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-sm text-clay">{item.tagline}</p>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CtaBand
        eyebrow="Material Enquiry"
        title="Get this quoted against your specification"
        body="Send us the drawing, the design calculation, or simply the quantity and size required. We will revert with a firm quotation and a delivery schedule."
        image="/images/field/anode-installation.jpg"
      />
    </>
  );
}
