export type Industry = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
};

export const industries: Industry[] = [
  {
    slug: "cross-country-pipelines",
    title: "Bore hole work for installation of MMO anodes",
    blurb:
      "Long distance hydrocarbon transmission lines, where a single ICCP station protects tens of kilometres and interference from parallel corridors has to be managed continuously.",
    image: "/images/field/mmo-anode-borehole-4.jpg",
  },
  {
    slug: "city-gas-distribution",
    title: "Cathodic Protection connection work on Monolithic Isolating Joint",
    blurb:
      'Congested urban steel networks with frequent crossings, tap-offs and isolation joints. We have protected 4", 16" and 18" dia mains on the GAIL Gas network at Rourkela.',
    image: "/images/field/monolithic-isolating-joint.jpg",
  },
  {
    slug: "refineries-petrochemicals",
    title: "Refineries & Petrochemicals",
    blurb:
      "Dense plant piping, buried headers and utility networks, where distributed ground beds and careful interference control are used in place of a single deep well system.",
    image: "/images/scenes/refinery.png",
  },
  {
    slug: "lpg-mounded-storage",
    title: "LPG Mounded Storage Bullets",
    blurb:
      "Mounded bullets and underground vessels, protected with distributed anodes and permanent reference cell grids. This scope is named on our ISO 9001:2015 certificate.",
    image: "/images/scenes/mounded-lpg-bullet.jpg",
  },
  {
    slug: "LPG-storage-bullets",
    title: "LPG Storage Bullets",
    blurb:
      "Above ground storage tank bottoms and terminal tank farms, protected to API RP 651 with grid, deep well or distributed anode arrangements and monitored by buried reference cells.",
    image: "/images/scenes/lpg-storage-bullet.jpg",
  },
  {
    slug: "electrical-earthing-work",
    title: "Electrical Earthing Work",
    blurb:
      "Buried firewater, cooling water and process lines inside operating plants, along with earth pit construction and earthing resistance testing. Mobilisation windows are short and permit to work discipline is essential.",
    image: "/images/field/electrical-earthpit.jpg",
  },
];
