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
    image: "/images/products/mmo-titanium-anode.jpg",
    fit: "contain",
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
    name: "Test Lead Points (TLP)",
    category: "Monitoring",
    tagline: "Permanent monitoring stations for the cathodic protection system",
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
      "Permanent copper / copper sulphate reference electrodes buried adjacent to the structure, giving a stable reference for potential measurement over the life of the asset without having to open the ground each time.",
    image: "/images/products/permanent-reference-electrode.jpg",
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
    ],
  },
  {
    slug: "surge-diverters",
    name: "Surge Diverters",
    category: "Power & Control",
    tagline: "Lightning and surge protection across insulating joints",
    summary:
      "Surge diverters fitted across monolithic insulating joints and isolating flanges. They clamp lightning impulse and switching surges that would otherwise puncture the joint, while leaving the DC isolation the cathodic protection system depends on intact.",
    image: "/images/products/surge-diverter.jpg",
    fit: "contain",
    specs: [
      { label: "Function", value: "Surge clamping with DC isolation retained" },
      { label: "Surge capability", value: "Lightning impulse rated, 8/20 microsecond" },
      { label: "Discharge current", value: "Rated to the site lightning risk assessment" },
      { label: "Response time", value: "Nanosecond order" },
      { label: "Enclosure", value: "Weatherproof, hazardous area on request" },
      { label: "Mounting", value: "Across monolithic insulating joints and flanges" },
    ],
    applications: [
      "Monolithic insulating joint protection",
      "Isolating flange protection in plant areas",
      "Lightning protection at CP stations and valve stations",
      "Above ground pipeline sections exposed to strike risk",
    ],
  },
  {
    slug: "solid-state-decouplers",
    name: "Solid State Decouplers",
    category: "Power & Control",
    tagline: "AC grounding and DC blocking in a single solid state unit",
    summary:
      "Solid state decouplers provide a continuous low impedance path for AC fault current and lightning surge while blocking the DC that the cathodic protection system depends on. With no moving parts and no electrolyte, they need no maintenance and their performance does not drift in service.",
    image: "/images/products/solid-state-decoupler.jpg",
    fit: "contain",
    specs: [
      { label: "Function", value: "AC grounding with continuous DC blocking" },
      { label: "DC blocking", value: "Plus or minus 2 V to plus or minus 4 V threshold" },
      { label: "AC fault rating", value: "Rated to the client fault current study" },
      { label: "Surge capability", value: "Lightning impulse rated" },
      { label: "Enclosure", value: "Weatherproof, hazardous area rated versions available" },
      { label: "Maintenance", value: "None required in service" },
    ],
    applications: [
      "AC interference mitigation on pipelines parallel to power lines",
      "Monolithic insulating joint protection where fault duty is high",
      "Bonding between protected and unprotected structures",
      "Replacement of electrolyte filled polarisation cells",
    ],
  },
  {
    slug: "polarization-cells",
    name: "Polarization Cells",
    category: "Power & Control",
    tagline: "Instant shorting for cathodic protection under AC fault",
    summary:
      "Electrolytic polarization cells that stay open to the DC cathodic protection current but short instantly under AC fault or lightning surge, carrying the fault to earth. The traditional solution where a very high short duration current rating is required.",
    image: "/images/products/polarization-cell.jpg",
    fit: "contain",
    specs: [
      { label: "Function", value: "Instant shorting for cathodic protection" },
      { label: "Rated current capacity", value: "Up to 5000 A for 1 second" },
      { label: "DC blocking", value: "Blocks CP current within the cell threshold" },
      { label: "Electrolyte", value: "Alkaline, with high and low level indication" },
      { label: "Terminals", value: "Two stud terminals for bonding cables" },
      { label: "Maintenance", value: "Electrolyte level checked periodically" },
    ],
    applications: [
      "High AC fault duty locations on transmission pipelines",
      "Insulating joint protection at power line crossings",
      "Earthing of above ground pipeline sections",
      "Substation and plant boundary bonding",
    ],
  },
  {
    slug: "zinc-anodes",
    name: "Zinc Anodes",
    category: "Anodes",
    tagline: "Galvanic anodes for low resistivity soil and water",
    summary:
      "Prepackaged zinc anodes in cotton bags with chemical backfill, supplied with PVC insulated tail cable. Preferred over magnesium in low resistivity soil, in brackish and saline conditions, and wherever the driving voltage of a magnesium anode would be excessive.",
    image: "/images/field/anode-installation.jpg",
    specs: [
      { label: "Alloy", value: "ASTM B418 Type I and Type II" },
      { label: "Open circuit potential", value: "-1.10 V (CSE)" },
      { label: "Nominal sizes", value: "5, 12, 24, 30 kg net" },
      { label: "Backfill", value: "75% gypsum, 20% bentonite, 5% sodium sulphate" },
      { label: "Current efficiency", value: "Approximately 90%" },
      { label: "Tail cable", value: "PVC or XLPE insulated, length to order" },
    ],
    applications: [
      "Low resistivity and saline soil conditions",
      "Jetty, marine and water crossing structures",
      "Underground vessels and buried tanks",
      "Locations where excessive driving voltage must be avoided",
    ],
  },
  {
    slug: "zinc-grounding-cells",
    name: "Zinc Grounding Cells",
    category: "Power & Control",
    tagline: "Passive AC grounding across insulating joints",
    summary:
      "Sealed zinc grounding cells fitted across insulating joints and between structures. They provide a low impedance path for AC fault current and lightning surge while maintaining DC isolation, with no electronics to fail and no maintenance requirement.",
    image: "/images/products/zinc-grounding-cell.jpg",
    fit: "contain",
    specs: [
      { label: "Construction", value: "Two zinc electrodes in a gypsum and bentonite backfill" },
      { label: "Function", value: "AC grounding with DC isolation maintained" },
      { label: "Mounting", value: "Buried, across insulating joints or between structures" },
      { label: "Design life", value: "15 to 20 years depending on fault duty" },
      { label: "Cable", value: "PVC or XLPE insulated, length to order" },
      { label: "Maintenance", value: "None required in service" },
    ],
    applications: [
      "Insulating joint protection on city gas and transmission networks",
      "AC interference mitigation on pipelines parallel to power lines",
      "Lightning protection at valve stations and CP stations",
      "Passive alternative where a solid state decoupler is not preferred",
    ],
  },
  {
    slug: "corrosion-coupons",
    name: "Corrosion Coupons",
    category: "Monitoring",
    tagline: "Direct measurement of protection at a known surface area",
    summary:
      "Steel coupons of known surface area buried adjacent to the pipeline and connected through a test station. Because the coupon can be disconnected instantly, it gives an IR drop free potential reading and a direct measurement of current density that the pipeline itself cannot provide.",
    image: "/images/products/corrosion-coupon.jpg",
    fit: "contain",
    specs: [
      { label: "Material", value: "Same grade as the protected structure" },
      { label: "Surface area", value: "1, 10 or 100 cm2 to order" },
      { label: "Types", value: "Coupon only, or with integral reference electrode" },
      { label: "Connection", value: "Through test station with shorting link and shunt" },
      { label: "Measurement", value: "Instant off potential and coupon current density" },
      { label: "Burial", value: "At pipe depth, in native soil adjacent to the line" },
    ],
    applications: [
      "IR drop free potential measurement at critical locations",
      "Current density verification against design assumptions",
      "AC corrosion risk assessment on interference affected sections",
      "Coating performance monitoring over time",
    ],
  },
  {
    slug: "portable-half-cells",
    name: "Portable Half Cells",
    category: "Monitoring",
    tagline: "Field reference electrodes for survey and routine monitoring",
    summary:
      "Portable copper / copper sulphate half cells for structure to electrolyte potential measurement during survey and routine monitoring. Supplied with spare porous plugs, crystals and carrying case, in the makes we already hold and deploy in house.",
    image: "/images/products/reference-electrode.webp",
    fit: "contain",
    specs: [
      { label: "Type", value: "Portable Cu/CuSO4 half cell" },
      { label: "Makes stocked", value: "Caltech, M.C. Miller" },
      { label: "Accuracy", value: "Plus or minus 5 mV against a reference standard" },
      { label: "Tip options", value: "Standard porous plug and extension rod tip" },
      { label: "Supplied with", value: "Spare plugs, crystals and carrying case" },
      { label: "Calibration", value: "Checked against a laboratory standard cell" },
    ],
    applications: [
      "Test lead point potential monitoring",
      "Close interval potential survey",
      "DCVG and ACVG coating defect survey",
      "Commissioning and polarisation measurement",
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
