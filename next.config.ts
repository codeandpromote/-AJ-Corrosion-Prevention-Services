import path from "node:path";
import type { NextConfig } from "next";

/**
 * Long cache for fingerprinted and never-changing assets. The HTML itself is
 * left alone so content edits go live on the next deploy.
 */
const IMMUTABLE = "public, max-age=31536000, immutable";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Pin the workspace root: there is a stray package-lock.json above this folder.
  turbopack: { root: path.resolve(__dirname) },

  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [400, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 128, 200, 256, 320, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async redirects() {
    return [
      {
        // Retired: replaced by the current attenuation test survey.
        source: "/services/coating-integrity-holiday-inspection",
        destination: "/services/current-attenuation-test",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/video/:path*", headers: [{ key: "Cache-Control", value: IMMUTABLE }] },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: IMMUTABLE }] },
      {
        source: "/:file(icon-192.png|icon-512.png|apple-icon.png|favicon-32.png)",
        headers: [{ key: "Cache-Control", value: IMMUTABLE }],
      },
    ];
  },
};

export default nextConfig;
