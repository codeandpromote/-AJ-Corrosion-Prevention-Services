import { company } from "@/lib/company";

/** Renders a JSON-LD block. Values come from our own data files, never user input. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${company.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceSchema(service: {
  title: string;
  summary: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: `${company.url}/services/${service.slug}`,
    image: `${company.url}${service.image}`,
    serviceType: "Cathodic protection",
    provider: {
      "@type": "ProfessionalService",
      name: company.name,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${company.address.line1}, ${company.address.line2}`,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.postalCode,
        addressCountry: "IN",
      },
    },
    areaServed: { "@type": "Country", name: "India" },
  };
}

export function productSchema(product: {
  name: string;
  summary: string;
  slug: string;
  image: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    url: `${company.url}/products/${product.slug}`,
    image: `${company.url}${product.image}`,
    category: product.category,
    brand: { "@type": "Brand", name: company.name },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
