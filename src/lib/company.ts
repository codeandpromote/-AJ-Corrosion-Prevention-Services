/**
 * Single source of truth for company facts.
 * Taken from the official company profile, the ISO 9001:2015 certificate
 * and the Udyam registration certificate.
 */

export const company = {
  name: "AJ Corrosion Prevention Services",
  shortName: "AJ Corrosion",
  initials: "AJ",
  tagline: "Expert in Cathodic Protection Systems",
  foundedYear: 2023,
  incorporationDate: "21 September 2023",
  proprietor: "Amit Kumar Giri",
  domain: "www.ajcpservices.com",
  url: "https://www.ajcpservices.com",

  address: {
    line1: "B/2/H/10, Parikshit Roy Lane",
    line2: "P.O. Tangra, P.S. Entally",
    city: "Kolkata",
    state: "West Bengal",
    postalCode: "700015",
    country: "India",
  },

  phone: "+91 89611 74927",
  phoneHref: "tel:+918961174927",

  /** WhatsApp is the enquiry channel across the site. */
  whatsapp: "+91 89611 74927",
  whatsappNumber: "918961174927",

  registrations: {
    iso: {
      standard: "ISO 9001:2015",
      certificateNo: "QMS/230620/12803",
      issued: "03 June 2026",
      expires: "02 June 2029",
      scope:
        "Supply, installation, testing, commissioning, monitoring & maintenance of cathodic protection systems of underground hydrocarbon steel pipelines, underground vessels, tanks & LPG storage bullets.",
    },
    udyam: {
      number: "UDYAM-WB-18-0057669",
      type: "Micro Enterprise · Proprietary",
      registered: "23 September 2023",
    },
    nic: "43219, Specialised construction / electrical installation",
  },
} as const;

/** Builds a wa.me link with an optional pre-filled message. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${company.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const addressOneLine = [
  company.address.line1,
  company.address.line2,
  `${company.address.city} - ${company.address.postalCode}`,
  company.address.state,
  company.address.country,
].join(", ");

export const stats = [
  {
    value: 9,
    suffix: "",
    label: "Work Orders Executed",
    sub: "For ESSAR, GAIL Gas and BPCL pipeline networks",
  },
  {
    value: 6,
    suffix: "+",
    label: "Client Organisations",
    sub: "Operators, EPC contractors and end customers",
  },
  {
    value: 12,
    suffix: "",
    label: "Instruments Owned",
    sub: "Held in house for survey and maintenance work",
  },
  {
    value: 10,
    suffix: "+ Yrs",
    label: "Core Team Experience",
    sub: "Technocrats from established EPC organisations",
  },
] as const;

/** Full equipment register from the company profile. */
export const equipment = [
  { name: "Multimeter", make: "Rishabh" },
  { name: "Clamp meter, AC & DC", make: "Meco" },
  { name: "Portable Cu/CuSO₄ half cell", make: "Caltech / M.C. Miller" },
  { name: "Soil resistivity tester", make: "Waco" },
  { name: "Holiday tester", make: "Caltech" },
  { name: "Coating integrity tester", make: "—" },
  { name: "Continuity tester", make: "—" },
  { name: "Megger", make: "—" },
  { name: "Rodometer", make: "—" },
  { name: "Drill machine", make: "—" },
  { name: "Cutter machine", make: "—" },
  {
    name: "Tool box with screwdriver sets, spanners, pliers, hex saw, chisel and Allen keys",
    make: "Taparia",
  },
] as const;

export const values = [
  {
    title: "Vision",
    body: "The company believes in continuous association with its customers, with consistent improvement in its operations. Our corporate goal is to maintain a solid base of preferred clients by offering the highest level of customer service, project management, quality construction, fabrication and supply of equipment.",
  },
  {
    title: "Strength",
    body: "We believe that when you run for quality of work, clients will run for you. Our strength lies in our assets of machinery, equipment, technocrats and the expertise available with us since the inception of the organisation.",
  },
  {
    title: "Goal",
    body: "Our goal is to achieve zero fatalities and zero lost time accidents, to minimise all damage to property and to the environment at all locations, and to promote an Accident and Injury Free (AIF) culture on every site we work on.",
  },
  {
    title: "Objectives",
    body: "Our objective is to identify and follow the most suitable and applicable international standards in the construction industry within a step change approach, and to preserve a safe work environment at all times.",
  },
] as const;

export const qualityPolicy = `We, AJ Corrosion Prevention Services, offer work that consistently meets the customer's requirements, and take the responsibility to deliver quality work right at the first time, on time, every time, to achieve customer satisfaction.

We shall strive to achieve this through a process of continual improvement of organisational capabilities, strong leadership, engagement of people within the organisation, and an adequate process approach to meet our customer's needs and requirements by identifying risks with appropriate action, while considering social, environmental, charitable, regulatory and legislative responsibilities.

This shall be achieved by implementing, maintaining and continually improving the organisation. This quality policy is communicated within the organisation and reviewed periodically.`;

export const epcPillars = [
  {
    no: "E",
    title: "Engineering",
    body: "We have our own NACE qualified engineering team to carry out the design of cathodic protection work, covering current demand, anode sizing, ground bed layout, drainage points and the monitoring scheme. Where the client holds an approved design, we tie up with that design and execute the work accordingly.",
    image: "/images/products/cp-tru-panel.jpg",
  },
  {
    no: "P",
    title: "Procurement",
    body: "Our procurement team has rich professional experience in the procurement of cathodic protection material. All project material is purchased as per the technical specification and from client approved vendors, with inspection and test certificates.",
    image: "/images/products/magnesium-anode.jpg",
  },
  {
    no: "C",
    title: "Construction & Commissioning",
    body: "We have qualified crews with rich professional experience in the installation and commissioning of cathodic protection work. Installation is executed strictly as per the approved design, covering ground bed drilling, anode installation, thermit welding, pin brazing, cable laying and test lead points.",
    image: "/images/field/mmo-anode-borehole-4.jpg",
  },
] as const;
