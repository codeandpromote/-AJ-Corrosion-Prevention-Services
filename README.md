# AJ Corrosion Prevention Services — website

Marketing site for **AJ Corrosion Prevention Services**, an ISO 9001:2015 certified EPC
contractor for cathodic protection systems, based in Kolkata, West Bengal.

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. All 33 routes are
statically generated.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start   # serve the production build
npm run lint
```

> If `npm install` fails with an `EEXIST`/`EACCES` cache error, use a local cache:
> `npm_config_cache=./.npm-cache npm install`

`next start` serves the build that existed when it booted. If you rebuild while it is
running, restart it, otherwise the old asset hashes 404 and pages render unstyled.

## Deploying

The whole site is static, so it runs on anything that can host a Next.js build:

- **Vercel / Netlify / Render** — connect the repo, no configuration needed.
- **Any Node host** — `npm run build && npm run start` behind a reverse proxy.
- **Plain static hosting** (cPanel, S3, Cloudflare Pages) — add
  `output: "export"` and `images: { unoptimized: true }` to `next.config.ts`, run
  `npm run build`, and upload the generated `out/` folder. Note that this turns off
  Next.js image optimisation, so the photographs are served at full size.

Security headers, long-lived caching for `/images` and `/video`, and HSTS are set in
`next.config.ts`. If you deploy behind Cloudflare or nginx, check you are not setting
those headers twice.

### Before going live

1. Set the real domain in `company.url` (`src/lib/company.ts`). It feeds the metadata,
   canonical URLs, `sitemap.xml`, `robots.txt` and all JSON-LD.
2. Confirm the WhatsApp number in `company.ts` is the one that should receive enquiries.
3. Add the GSTIN to `company.registrations` if it should be published.
4. Submit `https://<domain>/sitemap.xml` in Google Search Console.
5. Re-export the logo as a transparent PNG or SVG if one exists. The current file is a JPG
   on a white ground, which is why it is masked to a circle.

## Structure

```
src/
  app/                     App Router routes (all static)
    page.tsx               Home (video hero)
    about/                 Company, principles, quality policy, leadership,
                           journey, certifications, equipment register
    services/              Index + 15 detail pages
    products/              Index + 11 detail pages
    projects/              Project register with client/scope filtering
    gallery/               Filterable site photography with lightbox
    contact/
    error.tsx global-error.tsx not-found.tsx sitemap.ts robots.ts
  components/              Header (mega menu), footer, video hero, CTA band,
                           gallery grid, project table, contact form, JSON-LD, UI
  lib/                     All copy and data
public/
  video/                   Hero video (1080p, 720p) and poster
  images/{brand,clients,products,scenes,field,team}/
  site.webmanifest icon-*.png apple-icon.png favicon-32.png
```

## Editing content

All site content lives in `src/lib/`. No copy is hardcoded in page components.

| File | Holds |
| --- | --- |
| `company.ts` | Name, address, phone, WhatsApp, registrations, vision/strength/goal, quality policy, equipment register, EPC pillars, headline stats |
| `services.ts` | 15 services: scope, deliverables, standards, group |
| `products.ts` | 11 products: specifications, applications, category, optional second photo |
| `projects.ts` | Project register from the company profile |
| `clients.ts` | Client and end-customer logos |
| `industries.ts` | Six asset classes |
| `gallery.ts` | Site photography with captions, categories and orientation |

Adding a service or product creates its detail page, sitemap entry and JSON-LD
automatically.

`stats` in `company.ts` is the only figure stated independently of the register. Keep it in
step with `projects.ts` when work orders are added.

### Deliberate content rules

Three rules are baked into the current content:

1. **No monetary figures anywhere.** Order values were removed from `projects.ts`, along
   with the cumulative-value stat and the project table's value column. Individual values
   were removed too, because nine visible figures can simply be added up.
2. **No email addresses.** Every enquiry route is WhatsApp or phone. There are no `mailto:`
   links on the site.
3. **No downloadable documents, but certificates are viewable.** No PDF is served and
   nothing can be downloaded. The two certificates are published instead as images under
   `public/images/certificates/`, opened full screen by `CertificateViewer` from the About
   page. The company profile is not published at all. The source PDFs remain in the
   `website assets/` folder outside the app.

   The Udyam image is **page 1 only, with the email address redacted**. Pages 2 and 3 are
   deliberately not published: page 2 carries the proprietor's PAN, bank name, IFSC code
   and full account number. If the certificate is ever regenerated, redact again before
   publishing. Regenerate with:

   ```bash
   pdftoppm -jpeg -r 150 -f 1 -l 1 "<certificate>.pdf" public/images/certificates/<name>
   ```
4. **Photography is AJ's own.** Every photograph in `images/field/` was taken on an AJ
   site, and the filenames match the descriptions supplied by the company. The four images
   in `images/scenes/` and the studio shots in `images/products/` show equipment and
   installations. Two survey photographs (`scenes/cips-survey.jpg` and
   `products/dcvg-survey.webp`) show overseas crews in third-party branded PPE and are used
   on the CIPS and DCVG pages at the company's instruction.

## The hero video

`src/components/home-hero.tsx` plays an aerial refinery clip behind the homepage headline.

The source file is 4K and 106 MB, far too heavy for the web, so it is transcoded to an
18-second loop at two sizes. To regenerate from a new master:

```bash
ffmpeg -ss 5 -t 18 -i MASTER.mp4 -an -vf "scale=1920:1080,fps=25" \
  -c:v libx264 -preset veryslow -crf 33 -pix_fmt yuv420p -movflags +faststart \
  public/video/hero-1080.mp4
ffmpeg -ss 5 -t 18 -i MASTER.mp4 -an -vf "scale=1280:720,fps=25" \
  -c:v libx264 -preset veryslow -crf 34 -pix_fmt yuv420p -movflags +faststart \
  public/video/hero-720.mp4
ffmpeg -ss 5 -i MASTER.mp4 -frames:v 1 -vf "scale=1600:-1" -q:v 5 public/video/hero-poster.jpg
```

Current sizes are 3.5 MB (1080p), 1.5 MB (720p) and 0.26 MB (poster). Keep the 1080p file
under roughly 4 MB.

Behaviour worth knowing before changing it:

- The poster is preloaded and painted first, so the hero never renders empty.
- The source is chosen in JavaScript by viewport width (720p at 900px and below) rather
  than with `<source media>`, which Safari handles inconsistently.
- Playback is skipped entirely under `prefers-reduced-motion` or when the browser reports
  a data-saver connection. The poster stays in place.
- The video pauses when scrolled out of view, and there is a visible pause control, which
  is what WCAG 2.2.2 requires for auto-playing content longer than five seconds.
- The video is muted and `playsInline`. Both are required for autoplay and must stay.

## Design system

Tailwind v4 `@theme` tokens in `src/app/globals.css`.

- **Bronze `#847152`**, sampled from the company seal, is the single accent colour.
- **Warm brown darks**: `espresso #42372a`, `bark #4e4232`, `umber #5c4f3c`. There is no
  black in the palette; the darkest value served is `#42372a`.
- **Paper `#fbf9f5` / sand `#f1ece3`** are warm off-whites matching the logo's paper tone.
- **WhatsApp green `#1da851`** appears only on the enquiry button and WhatsApp marks.
- Type: Archivo (display), Inter (body), IBM Plex Mono (technical labels), all self-hosted
  through `next/font`.
- Utilities: `.eyebrow`, `.font-display`, `.grid-blueprint`, `.reveal`, `.photo-tone`.

Scroll reveals, the hero video and the client marquee all respect
`prefers-reduced-motion`.

## Contact

Enquiries go to WhatsApp. `src/components/contact-form.tsx` validates the form, composes
the message and opens `wa.me` with everything pre-filled. The number is set once in
`company.ts` (`whatsappNumber`) and used through `whatsappLink()`, so changing it there
updates the header, footer, CTA band, contact cards and form.
