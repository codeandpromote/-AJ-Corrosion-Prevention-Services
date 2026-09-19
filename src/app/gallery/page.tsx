import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { GalleryGrid } from "@/components/gallery-grid";
import { Reveal } from "@/components/reveal";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/gallery" },
  title: "Gallery",
  description:
    "Photographs from AJ Corrosion Prevention Services installations. TLP installation and connections, thermit welding and pin brazing, zinc and magnesium anode installation, deep well ground beds, TLP monitoring and TRU/CPPSM monitoring.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title="Photographs From Our Sites"
        lead="Test lead points and connections, anode systems, ground bed drilling, monitoring rounds and survey work. Every photograph on this page is from our own jobs."
        image="/images/field/exothermic-weld-connection.jpg"
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="py-20 lg:py-24">
        <Container size="wide">
          <Reveal>
            <SectionHeading
              eyebrow="Browse"
              title="Site Photographs"
              lead="Click any photograph to view it full size. Use the arrow keys to move through the set."
            />
          </Reveal>
          <div className="mt-14">
            <GalleryGrid />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Site Visit"
        title="Would you like to see a system we have commissioned?"
        body="We can arrange a reference visit to a live installation, or share the commissioning records for a comparable scope of work."
        image="/images/field/tlp-installation.jpg"
      />
    </>
  );
}
