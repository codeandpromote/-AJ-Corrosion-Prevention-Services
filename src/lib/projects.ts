export type Project = {
  id: number;
  title: string;
  client: string;
  endCustomer: string;
  year: number;
  orderRef: string;
  status: "Completed" | "In progress";
  scope: string;
  image: string;
};

/** Past and ongoing projects, as recorded in the company profile. */
export const projects: Project[] = [
  {
    id: 1,
    title: "Monitoring of ICCP system, MCS to Matix pipeline",
    client: "ESSAR",
    endCustomer: "ESSAR",
    year: 2024,
    orderRef: "E-work order through mail",
    status: "Completed",
    scope: "Monitoring",
    image: "/images/field/tlp-monitoring.jpg",
  },
  {
    id: 2,
    title:
      "Monitoring of ICCP system, GGS-1 to CGS, EDD-28 to MCS and Shibtala tap-off to GGS-4 pipeline",
    client: "ESSAR",
    endCustomer: "ESSAR",
    year: 2024,
    orderRef: "E-work order through mail",
    status: "Completed",
    scope: "Monitoring",
    image: "/images/field/cathode-junction-box.jpg",
  },
  {
    id: 3,
    title: "Cathodic protection system maintenance work",
    client: "ESSAR",
    endCustomer: "ESSAR",
    year: 2024,
    orderRef: "E-work order through mail",
    status: "Completed",
    scope: "Maintenance",
    image: "/images/field/anode-junction-box.jpg",
  },
  {
    id: 4,
    title: "Procurement of spares for pipeline CP system maintenance, EOGEPL Durgapur",
    client: "ESSAR",
    endCustomer: "ESSAR",
    year: 2024,
    orderRef: "WO 4300002150 dt. 01.10.2024",
    status: "Completed",
    scope: "Supply",
    image: "/images/products/cp-tru-panel.jpg",
  },
  {
    id: 5,
    title: "Services for pipeline CP system maintenance, EOGEPL Durgapur",
    client: "ESSAR",
    endCustomer: "ESSAR",
    year: 2024,
    orderRef: "WO 4600003253 dt. 03.10.2024",
    status: "Completed",
    scope: "Maintenance",
    image: "/images/field/earthing-resistance-checking.jpg",
  },
  {
    id: 6,
    title: "Supply of spare parts for pipeline cathodic protection system",
    client: "ESSAR",
    endCustomer: "ESSAR",
    year: 2025,
    orderRef: "WO 4300002262 dt. 22.05.2025",
    status: "Completed",
    scope: "Supply",
    image: "/images/products/magnesium-anode.jpg",
  },
  {
    id: 7,
    title: "Permanent cathodic protection work",
    client: "AG&P Pratham",
    endCustomer: "AG&P Pratham",
    year: 2025,
    orderRef: "WO 4600003371 dt. 22.05.2025",
    status: "Completed",
    scope: "Maintenance",
    image: "/images/field/mmo-anode-borehole-2.jpg",
  },
  {
    id: 8,
    title:
      'Supply and installation of Mg anodes in 4", 16" and 18" dia steel pipeline network, Rourkela',
    client: "ASAP Corrosion Services Pvt. Ltd.",
    endCustomer: "GAIL Gas Ltd.",
    year: 2025,
    orderRef: "ASAP/GAILGAS/RKL/TCP/2025/01 dt. 07.10.2025",
    status: "Completed",
    scope: "Installation",
    image: "/images/field/anode-installation.jpg",
  },
  {
    id: 9,
    title: "Pin brazing supply and installation with epoxy sealing",
    client: "M/s Universal Corrosion Prevention India",
    endCustomer: "Bharat Petroleum Corporation Ltd.",
    year: 2026,
    orderRef: "WO 35-1602202600 dt. 16.02.2026",
    status: "In progress",
    scope: "Installation",
    image: "/images/field/pin-brazing-connection.jpg",
  },
];

export const projectScopes = ["Monitoring", "Maintenance", "Supply", "Installation"] as const;
