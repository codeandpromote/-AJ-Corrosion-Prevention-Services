export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category:
    | "TLP & Connections"
    | "Junction Boxes"
    | "Anode Ground Bed"
    | "Monitoring & Testing";
  orientation: "portrait" | "landscape";
};

export const galleryCategories = [
  "TLP & Connections",
  "Junction Boxes",
  "Anode Ground Bed",
  "Monitoring & Testing",
] as const;

/** Every photograph here is from an AJ Corrosion Prevention Services site. */
export const gallery: GalleryItem[] = [
  {
    src: "/images/field/tlp-installation.jpg",
    alt: "Test lead point installed on a cast concrete foundation beside a pipeline right of way",
    caption: "TLP installation",
    category: "TLP & Connections",
    orientation: "portrait",
  },
  {
    src: "/images/field/cable-laying-b-type-tlp.jpg",
    alt: "Cable being laid in an open trench for a B-type test lead point installation",
    caption: "Cable laying work for B-type TLP installation",
    category: "TLP & Connections",
    orientation: "portrait",
  },
  {
    src: "/images/field/exothermic-weld-connection.jpg",
    alt: "Pipe to cable connection being made by exothermic weld on a buried steel pipeline",
    caption: "Pipe to cable connection by exothermic weld",
    category: "TLP & Connections",
    orientation: "portrait",
  },
  {
    src: "/images/field/pin-brazing-connection.jpg",
    alt: "Three pin brazed cable connections on a coated steel pipeline in an open trench",
    caption: "Pipe to cable connection by pin brazing technique",
    category: "TLP & Connections",
    orientation: "portrait",
  },
  {
    src: "/images/field/monolithic-isolating-joint.jpg",
    alt: "Cathodic protection cable connection work carried out on a monolithic isolating joint",
    caption: "CP connection work on monolithic isolating joint",
    category: "TLP & Connections",
    orientation: "landscape",
  },
  {
    src: "/images/field/anode-junction-box.jpg",
    alt: "Interior of an anode junction box showing ferruled terminations and shunts",
    caption: "Anode junction box installation and connections",
    category: "Junction Boxes",
    orientation: "portrait",
  },
  {
    src: "/images/field/cathode-junction-box.jpg",
    alt: "Interior of a cathode junction box showing terminal links and wiring",
    caption: "Cathode junction box installation and connections",
    category: "Junction Boxes",
    orientation: "portrait",
  },
  {
    src: "/images/field/anode-installation.jpg",
    alt: "Magnesium anode being installed in a prepared trench alongside a pipeline",
    caption: "Anode installation",
    category: "Anode Ground Bed",
    orientation: "portrait",
  },
  {
    src: "/images/field/deep-well-anode-ground-bed.jpg",
    alt: "Deep well anode ground bed under construction with anode string and vent pipe",
    caption: "Deep well anode ground bed",
    category: "Anode Ground Bed",
    orientation: "portrait",
  },
  {
    src: "/images/field/mmo-anode-borehole-1.jpg",
    alt: "Borehole being drilled for installation of MMO coated titanium anodes",
    caption: "Bore hole work for installation of MMO anodes",
    category: "Anode Ground Bed",
    orientation: "portrait",
  },
  {
    src: "/images/field/mmo-anode-borehole-2.jpg",
    alt: "Drilling crew at work on a borehole for MMO anode installation",
    caption: "Bore hole work for installation of MMO anodes",
    category: "Anode Ground Bed",
    orientation: "landscape",
  },
  {
    src: "/images/field/mmo-anode-borehole-3.jpg",
    alt: "Drilling rig set up for borehole work for MMO anode installation",
    caption: "Bore hole work for installation of MMO anodes",
    category: "Anode Ground Bed",
    orientation: "portrait",
  },
  {
    src: "/images/field/mmo-anode-borehole-4.jpg",
    alt: "Borehole drilling for MMO anode installation alongside plant piping",
    caption: "Bore hole work for installation of MMO anodes",
    category: "Anode Ground Bed",
    orientation: "landscape",
  },
  {
    src: "/images/field/mmo-anode-borehole-5.jpg",
    alt: "Drilling rig mast during borehole work for MMO anode installation",
    caption: "Bore hole work for installation of MMO anodes",
    category: "Anode Ground Bed",
    orientation: "portrait",
  },
  {
    src: "/images/field/tlp-monitoring.jpg",
    alt: "Structure to soil potential reading being recorded at a test lead point",
    caption: "TLP monitoring",
    category: "Monitoring & Testing",
    orientation: "portrait",
  },
  {
    src: "/images/field/earthing-resistance-checking.jpg",
    alt: "Earthing resistance being checked with a four pin earth tester at a GPS tagged location",
    caption: "Earthing resistance checking",
    category: "Monitoring & Testing",
    orientation: "portrait",
  },
  {
    src: "/images/field/electrical-earthpit.jpg",
    alt: "Cast electrical earth pit constructed beside a plant boundary wall",
    caption: "Electrical earth pit",
    category: "Monitoring & Testing",
    orientation: "portrait",
  },
];
