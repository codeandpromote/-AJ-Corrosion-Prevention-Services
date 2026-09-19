export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  image: string;
  /** Optional second photograph shown alongside the scope of work. */
  image2?: { src: string; caption: string };
  group: "Engineering" | "Construction" | "Survey & Testing" | "Operations";
  scope: string[];
  deliverables: string[];
  standards: string[];
};

export const serviceGroups = [
  "Engineering",
  "Construction",
  "Survey & Testing",
  "Operations",
] as const;

export const services: Service[] = [
  {
    slug: "cathodic-protection-design",
    title: "Cathodic Protection Design & Engineering",
    short: "CP design",
    summary:
      "Design of impressed current and galvanic cathodic protection systems, carried out in house by our NACE qualified engineering team. Covers current demand calculation, anode sizing, ground bed layout and the monitoring philosophy for the system.",
    image: "/images/products/cp-tru-panel.jpg",
    group: "Engineering",
    scope: [
      "Current demand and coating breakdown calculation over the design life",
      "Anode type selection, sizing and consumption rate assessment",
      "Ground bed layout for deep well, distributed or surface bed systems",
      "Transformer rectifier unit rating and DC circuit design",
      "Cable sizing, voltage drop and attenuation checks",
      "Test lead point spacing and monitoring philosophy",
      "Interference assessment and mitigation scheme",
    ],
    deliverables: [
      "Design basis and CP design calculation report",
      "Single line diagram and ground bed layout drawings",
      "Bill of materials with technical specifications",
      "Installation and commissioning procedure",
    ],
    standards: ["NACE SP0169", "NACE SP0286", "ISO 15589-1", "OISD-STD-129"],
  },
  {
    slug: "iccp-systems",
    title: "Impressed Current CP (ICCP) Systems",
    short: "ICCP systems",
    summary:
      "Turnkey impressed current systems for cross country pipelines, plant piping and structures with a high current demand. We execute the complete scope from deep well ground bed drilling through to rectifier energisation and final polarisation.",
    image: "/images/products/cp-tru-panel-bank.jpg",
    group: "Construction",
    scope: [
      "Deep well and conventional ground bed drilling and development",
      "MMO coated titanium and high silicon iron anode string installation",
      "Carbonaceous backfill placement and venting arrangement",
      "Transformer rectifier unit erection, earthing and energisation",
      "Negative and positive cable laying, jointing and termination",
      "Polarisation, current distribution and potential profiling",
    ],
    deliverables: [
      "Installed and energised ICCP system",
      "Ground bed resistance and anode current records",
      "Commissioning report with on/off potential survey",
      "As built drawings and O&M documentation",
    ],
    standards: ["NACE SP0169", "ISO 15589-1", "OISD-STD-129"],
  },
  {
    slug: "sacrificial-anode-systems",
    title: "Sacrificial (Galvanic) Anode CP Systems",
    short: "Galvanic anode CP",
    summary:
      "Magnesium and zinc anode systems for distribution networks, casings, short sections and well coated assets where an impressed current source is not practical or not required. Supply, burial and connection are carried out as a single scope.",
    image: "/images/field/anode-installation.jpg",
    group: "Construction",
    scope: [
      "Magnesium anode supply, backfill preparation and burial",
      "Zinc ribbon anode installation alongside the pipeline",
      "Anode to pipe cable connection by thermit weld or pin brazing",
      "Anode junction boxes with shunt and resistor arrangement",
      "Post installation current output and potential verification",
    ],
    deliverables: [
      "Installed galvanic anode system with tested connections",
      "Anode current output records at each location",
      "Structure to electrolyte potential readings",
      "Installation report and as built marking",
    ],
    standards: ["NACE SP0169", "ISO 15589-1"],
  },
  {
    slug: "installation-testing-commissioning",
    title: "Installation, Testing & Commissioning",
    short: "Installation & commissioning",
    summary:
      "Execution of the approved design at site, covering mechanical and electrical installation, pre-commissioning checks, energisation and the polarisation survey that demonstrates the system meets its protection criteria.",
    image: "/images/field/cable-laying-b-type-tlp.jpg",
    group: "Construction",
    scope: [
      "Site mobilisation, survey and setting out against the design",
      "Complete mechanical and electrical installation",
      "Continuity, insulation and megger testing before energisation",
      "Isolation joint verification and surge protection checks",
      "System energisation, current setting and polarisation",
      "Native and polarised potential recording across the asset",
    ],
    deliverables: [
      "Pre-commissioning and commissioning test records",
      "Protection criteria compliance report at −850 mV CSE",
      "Punch list closure and handover dossier",
      "Training for the client operating team",
    ],
    standards: ["NACE SP0169", "ISO 15589-1", "OISD-STD-129"],
  },
  {
    slug: "cp-monitoring-maintenance",
    title: "CP Monitoring & Annual Maintenance",
    short: "Monitoring & AMC",
    summary:
      "Scheduled monitoring and annual maintenance contracts for cathodic protection systems in service. This is our largest area of repeat work, including the ESSAR EOGEPL Durgapur and Matix pipeline networks.",
    image: "/images/field/cathode-junction-box.jpg",
    group: "Operations",
    scope: [
      "Monthly and quarterly TLP potential monitoring across the route",
      "Transformer rectifier unit health checks and output logging",
      "CPPSM and remote monitoring unit data verification",
      "Anode junction box and shunt current measurement",
      "Fault diagnosis, rectification and replacement of spares",
      "Trend analysis against previous monitoring cycles",
    ],
    deliverables: [
      "Periodic monitoring report with potential trend graphs",
      "Rectifier log sheets and deviation register",
      "Non-conformance list with recommended corrective action",
      "Annual system health summary",
    ],
    standards: ["NACE SP0169", "OISD-STD-129"],
  },
  {
    slug: "soil-resistivity-survey",
    title: "Soil Resistivity & Earthing Resistance Survey",
    short: "Resistivity & earthing survey",
    summary:
      "Wenner four pin resistivity profiling to establish soil corrosivity along the route, and earthing resistance testing of earth pits and CP station earthing. Between them these establish the ground bed location that will give the lowest and most stable resistance over the design life of the system.",
    image: "/images/field/earthing-resistance-checking.jpg",
    group: "Survey & Testing",
    scope: [
      "Wenner four pin resistivity measurement at multiple depths",
      "Earthing resistance checking of earth pits and station earthing",
      "Electrical earth pit construction and testing",
      "Soil corrosivity classification along the route",
      "Ground bed site selection and resistance to earth prediction",
      "Coordination of chemical analysis where required",
      "GPS tagged survey point records",
    ],
    deliverables: [
      "Resistivity profile tables and depth plots",
      "Earthing resistance test records",
      "Soil corrosivity classification map",
      "Recommended ground bed locations with justification",
    ],
    standards: ["ASTM G57", "IS 3043", "NACE SP0169"],
  },
  {
    slug: "close-interval-potential-survey",
    title: "Close Interval Potential Survey (CIPS)",
    short: "CIPS",
    summary:
      "Continuous on and instant off potential measurement at close spacing along the pipeline. CIPS locates under protected sections, shorted casings and interference that routine annual TLP readings cannot detect.",
    image: "/images/scenes/cips-survey.jpg",
    group: "Survey & Testing",
    scope: [
      "Synchronised current interrupter installation at all sources",
      "On and instant off potential logging at 1 to 2 m intervals",
      "GPS chainage correlation with pipeline alignment sheets",
      "Identification of under protected and over protected sections",
      "Shorted casing and foreign structure contact detection",
    ],
    deliverables: [
      "Continuous on and off potential profile plots",
      "Anomaly register with chainage and severity",
      "Repair and remediation recommendations",
    ],
    standards: ["NACE SP0207", "NACE SP0169"],
  },
  {
    slug: "dcvg-acvg-coating-survey",
    title: "DCVG / ACVG Coating Defect Survey",
    short: "DCVG / ACVG survey",
    summary:
      "Above ground location and sizing of coating holidays on buried pipelines, so that excavation and repair budget is spent only at the points where the coating has actually failed.",
    image: "/images/products/dcvg-survey.webp",
    group: "Survey & Testing",
    scope: [
      "DC voltage gradient survey with synchronised interruption",
      "AC voltage gradient survey where DCVG is not practical",
      "Defect location, %IR sizing and severity classification",
      "Prioritised dig list with GPS coordinates",
      "Post repair verification survey",
    ],
    deliverables: [
      "Coating defect register with %IR and severity grade",
      "Prioritised excavation schedule",
      "Coating condition assessment for the surveyed section",
    ],
    standards: ["NACE SP0502", "NACE TM0109"],
  },
  {
    slug: "thermit-welding-pin-brazing",
    title: "Thermit Welding & Pin Brazing",
    short: "Thermit weld & pin brazing",
    summary:
      "Pipe to cable connections made by exothermic thermit weld, or by pin brazing where heat input to the parent metal has to be limited. Every joint is tested, epoxy sealed and the coating reinstated.",
    image: "/images/field/exothermic-weld-connection.jpg",
    group: "Construction",
    scope: [
      "Surface preparation and parent metal cleaning",
      "Exothermic thermit welding of cable to pipe",
      "Pin brazing for thin wall and low heat input applications",
      "Joint pull testing and continuity verification",
      "Epoxy and mastic sealing with coating reinstatement",
    ],
    deliverables: [
      "Tested and sealed pipe to cable connections",
      "Joint register with test results",
      "Coating reinstatement records and holiday test results",
    ],
    standards: ["NACE SP0169", "Client welding procedure specifications"],
  },
  {
    slug: "test-lead-point-installation",
    title: "Test Lead Point (TLP) Installation",
    short: "TLP installation",
    summary:
      "Supply and installation of test stations. These form the permanent monitoring interface through which the cathodic protection system is read for the rest of its service life.",
    image: "/images/field/tlp-installation.jpg",
    group: "Construction",
    scope: [
      "H type, B type, casing, bond and foreign crossing test stations",
      "Concrete foundation casting and post erection",
      "Cable laying, ducting and route marker installation",
      "Terminal board wiring, ferruling and shunt fitting",
      "Permanent reference electrode installation where specified",
    ],
    deliverables: [
      "Installed and wired test stations with terminal schedules",
      "Cable route as built records",
      "Initial potential readings at every station",
    ],
    standards: ["NACE SP0169", "OISD-STD-129"],
  },
  {
    slug: "ac-dc-interference-mitigation",
    title: "AC / DC Interference Mitigation",
    short: "Interference mitigation",
    summary:
      "Assessment and mitigation of induced AC from parallel transmission corridors and stray DC from foreign CP systems and traction networks. This is a common risk along Indian pipeline corridors and needs to be addressed at design stage.",
    image: "/images/products/zinc-ribbon-anode.webp",
    image2: {
      src: "/images/products/solid-state-decoupler.jpg",
      caption: "Solid state decoupler (SSD) used across an insulating joint",
    },
    group: "Engineering",
    scope: [
      "Induced AC voltage and current density measurement",
      "Stray current and foreign structure interference testing",
      "Mitigation design covering earthing, gradient control and bonding",
      "Zinc ribbon and gradient control mat installation",
      "Surge diverter, polarisation cell and decoupler installation",
      "Post mitigation verification measurement",
    ],
    deliverables: [
      "Interference assessment report with measured data",
      "Mitigation design and bill of materials",
      "Post mitigation compliance verification",
    ],
    standards: ["NACE SP0177", "ISO 18086", "CEA safety regulations"],
  },
  {
    slug: "current-attenuation-test",
    title: "Current Attenuation Test (CAT Survey)",
    short: "CAT survey",
    summary:
      "Measurement of how the protective current decays along the pipeline. An AC signal is injected at a test point and the current is measured at intervals along the route, so that sections with deteriorated coating or an unintended current drain can be identified without excavation.",
    image: "/images/field/tlp-monitoring.jpg",
    group: "Survey & Testing",
    scope: [
      "AC signal injection at drain points and test lead points",
      "Current magnitude and phase measurement at intervals along the route",
      "Attenuation gradient calculation section by section",
      "Coating conductance and average coating resistance assessment",
      "Detection of shorted casings, foreign contacts and unintended bonds",
      "Correlation with test lead point potential records",
    ],
    deliverables: [
      "Current attenuation profile plots for each section",
      "Coating conductance and coating resistance figures per section",
      "Ranked list of sections requiring detailed survey or repair",
      "Survey report with recommendations for further assessment",
    ],
    standards: ["NACE SP0169", "NACE SP0502", "BS EN 13509"],
  },
  {
    slug: "tank-vessel-mounded-bullet-cp",
    title: "Tank, Vessel & Mounded Bullet CP",
    short: "Tank & vessel CP",
    summary:
      "Cathodic protection of above ground storage tank bottoms, underground vessels and LPG mounded storage bullets, using distributed anode arrangements and permanent reference cell grids.",
    image: "/images/scenes/mounded-lpg-bullet.jpg",
    group: "Construction",
    scope: [
      "Tank bottom external CP with grid or deep well anodes",
      "LPG mounded bullet CP with distributed anode arrangement",
      "Underground vessel and sump protection",
      "Permanent reference electrode grid installation",
      "Monitoring junction boxes with individual anode shunts",
    ],
    deliverables: [
      "Installed CP system with commissioning records",
      "Reference cell grid potential map",
      "Protection criteria compliance report",
    ],
    standards: ["API RP 651", "NACE SP0193", "ISO 15589-1", "OISD-STD-129"],
  },
  {
    slug: "city-gas-distribution-cp",
    title: "City Gas Distribution Network CP",
    short: "CGD network CP",
    summary:
      'Cathodic protection for the steel sections of city gas distribution networks, including cathodic protection at insulating joints. An insulating joint separates the protected section from unprotected piping, and unless it is tested and correctly bonded the protective current either leaks away or the joint is left unprotected on one side. We have installed magnesium anodes across 4", 16" and 18" dia mains on the GAIL Gas network at Rourkela.',
    image: "/images/field/monolithic-isolating-joint.jpg",
    group: "Construction",
    scope: [
      "Galvanic and impressed current CP for steel and MDPE transition sections",
      'Anode installation across 4", 16" and 18" dia networks',
      "Cathodic protection at insulating joints and monolithic insulating joints",
      "Insulating joint resistance and isolation testing at every tap-off",
      "Bonding, surge protection and solid state decoupler installation across joints",
      "Test station installation across the distribution grid",
      "Interference management with adjacent utilities",
    ],
    deliverables: [
      "Installed network CP system with sectional records",
      "Insulating joint isolation test register with measured values",
      "Network wide potential survey at handover",
    ],
    standards: ["NACE SP0169", "PNGRB T4S", "ISO 15589-1"],
  },
  {
    slug: "procurement-supply",
    title: "Procurement & Supply of CP Materials",
    short: "Procurement & supply",
    summary:
      "Supply of cathodic protection spares and complete material packages as per technical specification, from client approved vendors. We undertake supply only orders as well as supply with installation.",
    image: "/images/products/magnesium-anode.jpg",
    group: "Operations",
    scope: [
      "Material take off against the client specification",
      "Approved vendor sourcing and technical bid evaluation",
      "Inspection, test certificate review and documentation",
      "Packing, dispatch and site delivery",
      "Spares holding recommendations for CP maintenance",
    ],
    deliverables: [
      "Supplied material with mill and test certificates",
      "Material inspection reports",
      "Warranty and O&M documentation",
    ],
    standards: ["Client technical specifications", "ISO 9001:2015 QMS"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
