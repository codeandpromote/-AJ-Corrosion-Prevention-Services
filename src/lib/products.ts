export type Product = {
  slug: string;
  name: string;
  category: "Anodes" | "Power & Control" | "Monitoring" | "Accessories";
  tagline: string;
  summary: string;
  image: string;
  /** Optional second photograph shown alongside the specifications. */
  image2?: { src: string; caption: string };
  /** Studio shots on a white ground are letterboxed rather than cropped. */
  fit?: "cover" | "contain";
  specs: { label: string; value: string }[];
  applications: string[];
};

export const productCategories = [
  "Anodes",
  "Power & Control",
  "Monitoring",
  "Accessories",
] as const;

export const products: Product[] = [
  {
    slug: "magnesium-anodes",
    name: "Magnesium Anodes",
    category: "Anodes",
    tagline: "High potential galvanic anodes for buried service",
    summary:
      "Prepackaged high potential magnesium anodes in cotton bags with low resistivity chemical backfill, supplied with PVC insulated tail cable. Suitable for distribution networks, casings and well coated short sections.",
    image: "/images/products/magnesium-anode.jpg",
    fit: "contain",
    specs: [
      { label: "Alloy", value: "High potential Mg / AZ63 as specified" },
      { label: "Open circuit potential", value: "−1.70 to −1.75 V (CSE)" },
      { label: "Nominal sizes", value: "3, 5, 9, 17, 32 kg net" },
      { label: "Backfill", value: "75% gypsum, 20% bentonite, 5% sodium sulphate" },
      { label: "Tail cable", value: "PVC / XLPE insulated, length to order" },
      { label: "Current efficiency", value: "≈ 50%" },
    ],
    applications: [
      "City gas distribution steel networks",
      "Pipeline casings and short sections",
      "Underground vessels and tanks",
      "Temporary CP during construction",
    ],
  },
  {
    slug: "zinc-ribbon-anodes",
    name: "Zinc Ribbon Anodes",
    category: "Anodes",
    tagline: "Continuous ribbon for gradient control and AC mitigation",
    summary:
      "Extruded zinc ribbon with a galvanised steel core, laid continuously alongside the pipeline. Used as a distributed galvanic anode and as the gradient control earth in AC interference mitigation schemes.",
    image: "/images/products/zinc-ribbon-anode.webp",
    fit: "contain",
    specs: [
      { label: "Alloy", value: "ASTM B418 Type I / Type II" },
      { label: "Core", value: "Galvanised steel wire" },
      { label: "Open circuit potential", value: "−1.10 V (CSE)" },
      { label: "Common profiles", value: "8 × 12 mm, 11 × 14 mm, 14 × 16 mm" },
      { label: "Supply form", value: "Continuous coils" },
      { label: "Current efficiency", value: "≈ 90%" },
    ],
    applications: [
      "AC interference and gradient control",
      "Distributed galvanic protection alongside pipelines",
      "Casing-to-carrier short mitigation",
      "Grounding at test stations and valve stations",
    ],
  },
  {
    slug: "mmo-titanium-anodes",
    name: "MMO-Coated Titanium Anodes",
    category: "Anodes",
    tagline: "Dimensionally stable anodes for impressed current systems",
    summary:
      "Mixed metal oxide coated titanium tubular, rod and wire anodes for deep well and distributed ground beds. Low consumption and a long, predictable design life under continuous impressed current.",
    image: "/images/field/mmo-anode-borehole-1.jpg",
    specs: [
      { label: "Substrate", value: "Grade 1 titanium, ASTM B338" },
      { label: "Coating", value: "Mixed metal oxide (IrO₂ / Ta₂O₅)" },
      { label: "Forms", value: "Tubular string, rod, wire, mesh ribbon" },
      { label: "Design life", value: "Up to 20 years at rated output" },
      { label: "Typical output", value: "100 A/m² in carbonaceous backfill" },
      { label: "Cable", value: "HMWPE / Kynar rated for anode service" },
    ],
    applications: [
      "Deep well ground beds for Bore hole work for installation of MMO anodes",
      "Distributed ground beds in congested plant areas",
      "Storage tank bottom protection grids",
      "High current-demand bare or poorly coated assets",
    ],
  },
  {
    slug: "transformer-rectifier-units",
    name: "Transformer Rectifier Units",
    category: "Power & Control",
    tagline: "DC current source for impressed current systems",
    summary:
      "Air cooled and oil cooled transformer rectifier units with coarse and fine tap control or constant current and constant potential regulation, housed for outdoor service and supplied with full metering and surge protection.",
    image: "/images/products/cp-tru-panel.jpg",
    fit: "contain",
    specs: [
      { label: "Input", value: "230 V / 415 V, 50 Hz, single or three phase" },
      { label: "DC output", value: "Rated to design, typically 10-100 V and 5-100 A" },
      { label: "Control", value: "Tap-changing, CC / CP auto, or thyristor" },
      { label: "Cooling", value: "Natural air or oil immersed" },
      { label: "Enclosure", value: "IP54 / IP55 outdoor, weatherproof" },
      { label: "Metering", value: "DC voltmeter, ammeter, hour meter, shunt" },
    ],
    applications: [
      "Cross-country pipeline CP stations",
      "Refinery and terminal plant piping",
      "Tank farm and mounded storage CP",
      "Retrofit and capacity upgrade of existing stations",
    ],
  },
  {
    slug: "test-lead-points",
    name: "Test Lead Points & CP Test Stations",
    category: "Monitoring",
    tagline: "H type, B type and special purpose monitoring stations",
    summary:
      "Fabricated and painted test stations with terminal boards, shunts, links and identification plates. These form the permanent monitoring interface for the cathodic protection system.",
    image: "/images/field/tlp-installation.jpg",
    specs: [
      { label: "Types", value: "H-type, B-type, casing, bond, foreign crossing" },
      { label: "Enclosure", value: "MS / FRP / SS, lockable, weatherproof" },
      { label: "Terminals", value: "2 to 12 way brass terminal board" },
      { label: "Mounting", value: "GI post on cast concrete foundation" },
      { label: "Finish", value: "Epoxy primer with PU top coat" },
      { label: "Marking", value: "Engraved chainage and station identification" },
    ],
    applications: [
      "Potential monitoring along pipeline routes",
      "Casing isolation verification",
      "Foreign pipeline crossing monitoring",
      "Bond and drainage point control",
    ],
  },
  {
    slug: "permanent-reference-electrodes",
    name: "Permanent Reference Electrodes",
    category: "Monitoring",
    tagline: "Buried Cu/CuSO₄ cells for stable long term measurement",
    summary:
      "Permanent copper / copper sulphate reference electrodes buried adjacent to the structure, giving a stable reference for potential measurement over the life of the asset. Portable half cells are also supplied for field survey.",
    image: "/images/products/reference-electrode.webp",
    fit: "contain",
    specs: [
      { label: "Type", value: "Cu/CuSO₄ permanent and portable" },
      { label: "Stability", value: "±5 mV over design life" },
      { label: "Design life", value: "15–25 years buried" },
      { label: "Makes stocked", value: "Caltech, M.C. Miller" },
      { label: "Cable", value: "PVC insulated, length to order" },
      { label: "Options", value: "With integral coupon for instant-off" },
    ],
    applications: [
      "Tank bottom and mounded bullet potential grids",
      "Critical monitoring locations on pipelines",
      "Remote monitoring unit input reference",
      "Field survey using portable half cells",
    ],
  },
  {
    slug: "surge-diverters-polarisation-cells",
    name: "Surge Diverters & Solid State Decouplers",
    category: "Power & Control",
    tagline: "AC protection for isolation joints without losing DC isolation",
    summary:
      "Solid state decouplers, polarisation cell replacements and surge diverters. These provide a low impedance path for AC fault current and lightning surge while blocking the DC current that the CP system depends on.",
    image: "/images/products/surge-diverter.jpg",
    fit: "contain",
    image2: {
      src: "/images/products/solid-state-decoupler.jpg",
      caption: "Solid state decoupler (SSD)",
    },
    specs: [
      { label: "Function", value: "AC grounding with DC blocking" },
      { label: "AC fault rating", value: "Rated to client fault study" },
      { label: "DC blocking", value: "±2 to ±4 V threshold" },
      { label: "Surge capability", value: "Lightning impulse rated" },
      { label: "Enclosure", value: "Weatherproof, hazardous area on request" },
      { label: "Mounting", value: "Across monolithic insulating joints" },
    ],
    applications: [
      "Monolithic insulating joint protection",
      "AC interference mitigation earthing",
      "Lightning protection at CP stations",
      "Isolating flange protection in plant areas",
    ],
  },
  {
    slug: "anode-backfill-canisters",
    name: "Anode Backfill & Canisters",
    category: "Accessories",
    tagline: "Calcined petroleum coke breeze and prepackaged canisters",
    summary:
      "Calcined petroleum coke breeze backfill for impressed current ground beds, chemical backfill for galvanic anodes, and prepackaged steel canister anodes for consistent field installation.",
    image: "/images/field/deep-well-anode-ground-bed.jpg",
    specs: [
      { label: "ICCP backfill", value: "Calcined petroleum coke breeze" },
      { label: "Resistivity", value: "< 0.1 Ω·m compacted" },
      { label: "Galvanic backfill", value: "Gypsum / bentonite / sodium sulphate" },
      { label: "Canisters", value: "Prepackaged steel canister anode assemblies" },
      { label: "Packing", value: "50 kg bags / canisters to order" },
      { label: "Venting", value: "Perforated vent pipe supplied with deep beds" },
    ],
    applications: [
      "Deep well and surface ground bed construction",
      "Galvanic anode burial in high-resistivity soil",
      "Rapid anode replacement during maintenance",
    ],
  },
  {
    slug: "cp-cables-connection-accessories",
    name: "CP Cables & Connection Accessories",
    category: "Accessories",
    tagline: "Cable, thermit charges, pin brazing kits and sealing compounds",
    summary:
      "The complete connection package. HMWPE and XLPE cable rated for buried CP service, thermit weld moulds and charges, pin brazing consumables, epoxy and mastic sealing kits, and cable route markers.",
    image: "/images/field/exothermic-weld-connection.jpg",
    specs: [
      { label: "Cable", value: "HMWPE / XLPE / PVC, 2.5–95 mm²" },
      { label: "Thermit", value: "Moulds and charges for pipe-to-cable joints" },
      { label: "Pin brazing", value: "Pins, ferrules and consumables" },
      { label: "Sealing", value: "Two-part epoxy and mastic cap kits" },
      { label: "Junction boxes", value: "Anode and bond JBs with shunts" },
      { label: "Markers", value: "Cable route and CP station markers" },
    ],
    applications: [
      "Anode header and negative drain cable runs",
      "Pipe-to-cable connections on all CP scopes",
      "Coating reinstatement at every connection",
    ],
  },
  {
    slug: "anode-cathode-junction-boxes",
    name: "Anode & Cathode Junction Boxes",
    category: "Monitoring",
    tagline: "Shunted junction boxes for current control and measurement",
    summary:
      "Anode and cathode junction boxes with brass terminal boards, calibrated shunts, variable resistors and links. These allow the current from each anode or to each drain point to be measured and balanced without breaking the circuit.",
    image: "/images/field/anode-junction-box.jpg",
    image2: {
      src: "/images/field/cathode-junction-box.jpg",
      caption: "Cathode junction box, installed and wired",
    },
    specs: [
      { label: "Types", value: "Anode JB and cathode JB" },
      { label: "Enclosure", value: "MS / FRP / SS, lockable, weatherproof" },
      { label: "Ways", value: "2 to 12 way, to design" },
      { label: "Shunts", value: "Calibrated, typically 0.01 ohm" },
      { label: "Control", value: "Variable resistors and shorting links" },
      { label: "Protection", value: "IP55 outdoor, hazardous area on request" },
    ],
    applications: [
      "Individual anode current measurement and balancing",
      "Drain point current control at CP stations",
      "Deep well ground bed anode monitoring",
      "Tank bottom and mounded bullet anode grids",
    ],
  },
  {
    slug: "cp-monitoring-instruments",
    name: "CP Monitoring & Survey Instruments",
    category: "Monitoring",
    tagline: "The calibrated instrument set held in house",
    summary:
      "Holiday testers, soil resistivity testers, clamp meters, meggers, continuity testers and portable half cells. This is the instrument register we own and deploy on every survey and maintenance mobilisation.",
    image: "/images/field/earthing-resistance-checking.jpg",
    specs: [
      { label: "Multimeter", value: "Rishabh, high input impedance" },
      { label: "Clamp meter", value: "Meco, AC & DC" },
      { label: "Half cell", value: "Caltech / M.C. Miller portable Cu/CuSO₄" },
      { label: "Soil resistivity", value: "Waco four-pin tester" },
      { label: "Holiday tester", value: "Caltech high-voltage" },
      { label: "Also held", value: "Megger, continuity tester, rodometer" },
    ],
    applications: [
      "Soil resistivity and corrosivity survey",
      "Coating holiday detection before lowering-in",
      "Routine TLP and rectifier monitoring",
      "Continuity and insulation fault finding",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
