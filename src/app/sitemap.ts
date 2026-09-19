import type { MetadataRoute } from "next";
import { company } from "@/lib/company";
import { services } from "@/lib/services";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = company.url;

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/products", priority: 0.8 },
    { path: "/projects", priority: 0.8 },
    { path: "/gallery", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...products.map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
