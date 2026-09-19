export type Client = {
  name: string;
  full: string;
  logo: string;
  direct: boolean;
};

/** Clients and end customers named in the company profile. */
export const clients: Client[] = [
  { name: "ESSAR", full: "Essar Oil & Gas Exploration and Production Ltd.", logo: "/images/clients/essar.jpg", direct: true },
  { name: "GAIL Gas", full: "GAIL Gas Limited", logo: "/images/clients/gail.png", direct: false },
  { name: "BPCL", full: "Bharat Petroleum Corporation Ltd.", logo: "/images/clients/bpcl.png", direct: false },
  { name: "IOCL", full: "Indian Oil Corporation Ltd.", logo: "/images/clients/iocl.jpg", direct: false },
  { name: "HPCL", full: "Hindustan Petroleum Corporation Ltd.", logo: "/images/clients/hpcl.jpg", direct: false },
  { name: "IOAG", full: "Indian Oil – Adani Gas Pvt. Ltd.", logo: "/images/clients/ioag.jpg", direct: false },
  { name: "RCF", full: "Rashtriya Chemicals and Fertilizers Ltd.", logo: "/images/clients/rcf.jpg", direct: false },
  { name: "Haldia Petrochemicals", full: "Haldia Petrochemicals Ltd.", logo: "/images/clients/haldia.jpg", direct: false },
];
