/**
 * GARUDA Verified Content Pack
 * Single source of truth for all public and internal facts.
 * Every product statement carries a status badge.
 */

const CONTENT_PACK = {
  company: {
    name: "Angiras Industries",
    location: "Bilaspur, Chhattisgarh",
    incubation: "Pre-incubated at NIT Raipur Incubation Centre",
    legalStatus: "Unincorporated initiative (pre-incorporation development stage)",
  },
  taglines: {
    primary: "Smart rider safety · Made in Chhattisgarh",
    support: "Built to bring you home.",
    heroLead: "The ride is yours. The worry doesn't have to be. GARUDA pairs protective helmet hardware with motion-aware accident detection and a configured SOS workflow designed to help get the right people informed.",
  },
  team: [
    { name: "Atharv Angiras Dubey", role: "Founder and CEO" },
    { name: "Raj Malviya", role: "CTO" },
    { name: "Ankush Dwivedi", role: "COO" },
    { name: "Himanshu Kumar Singh", role: "Enclosure Design" },
    { name: "Madhusudan Sarkar", role: "Full-Stack Developer" },
  ],
  product: {
    name: "GARUDA",
    status: "Prototype",
    fieldTesting: "In field testing with 5 beta riders",
    configuration: "To be confirmed",
    configurationNote: "Full helmet vs clip-on module to be confirmed",
    patent: "Patent application filed (No. 202521123556). Not yet granted.",
  },
  specifications: [
    {
      label: "Accident Detection Sequence",
      value: "Tilt threshold >50° plus vibration triggers sequence",
      status: "Design target",
      note: "Provisional, pending validation",
    },
    {
      label: "Rider Response Window",
      value: "30-second cancellation window before SOS preparation",
      status: "Design target",
      note: "Provisional, pending validation",
    },
    {
      label: "Charging Interface",
      value: "USB Type-C port for device charging",
      status: "Design target",
      note: "Universal connector design target",
    },
    {
      label: "Field Testing",
      value: "Active road trials with 5 beta riders",
      status: "Prototype",
      note: "Ongoing evaluation on local roads",
    },
    {
      label: "Patent Status",
      value: "Application No. 202521123556 filed",
      status: "Verified",
      note: "Patent pending; not yet granted",
    },
    {
      label: "SOS Communication Path",
      value: "To be confirmed",
      status: "To be confirmed",
      note: "Bluetooth tethering via phone vs built-in cellular SIM module",
    },
    {
      label: "Battery Runtime & Capacity",
      value: "To be confirmed",
      status: "To be confirmed",
      note: "Bench testing underway; final battery capacity and runtime to be published",
    },
    {
      label: "Ingress Protection (Water/Dust)",
      value: "To be confirmed",
      status: "To be confirmed",
      note: "Enclosure sealing targets under evaluation; no rating assigned yet",
    },
    {
      label: "Weight & Sizes",
      value: "To be confirmed",
      status: "To be confirmed",
      note: "Final weight and size options will be specified with production tooling",
    },
    {
      label: "Regulatory Certification",
      value: "To be confirmed",
      status: "To be confirmed",
      note: "Production headgear will undergo standard mandatory testing before retail availability",
    },
  ],
  milestones: [
    {
      id: "m1",
      year: "2025",
      title: "Chhattisgarh Ideathon 2025",
      description: "Secured 3rd position for rider-safety technology concept and demonstration.",
      status: "Verified",
      approvedForPublic: true,
    },
    {
      id: "m2",
      year: "2025",
      title: "CG TechStart Prize, Atal Nagar",
      description: "Recognised with award at CG TechStart startup showcase (November 2025).",
      status: "Verified",
      approvedForPublic: true,
    },
    {
      id: "m3",
      year: "2023",
      title: "District Collector Demonstration, Bilaspur",
      description: "Demonstrated early working prototype of the safety system to the District Collector.",
      status: "Verified",
      approvedForPublic: true,
    },
    // Milestones hidden by default pending owner documentation/permission
    {
      id: "m4",
      year: "2025",
      title: "Young India Shark Tank",
      description: "Runner-up recognition.",
      status: "To be confirmed",
      approvedForPublic: false,
    },
    {
      id: "m5",
      year: "2026",
      title: "Anantya'26 B-Model",
      description: "2nd runner-up recognition.",
      status: "To be confirmed",
      approvedForPublic: false,
    },
    {
      id: "m6",
      year: "2025",
      title: "Navonmesh 2025",
      description: "2nd runner-up recognition.",
      status: "To be confirmed",
      approvedForPublic: false,
    },
    {
      id: "m7",
      year: "2024",
      title: "Ministerial Demonstration",
      description: "Prototype shown to state leadership.",
      status: "To be confirmed",
      approvedForPublic: false,
    },
    {
      id: "m8",
      year: "2025",
      title: "Automotive Pilot LOI",
      description: "Pilot LOI for 50 units from an automotive company.",
      status: "To be confirmed",
      approvedForPublic: false,
    },
  ],
  footerDisclaimer:
    "Ride responsibly. Always wear a correctly fitted helmet. Accident detection and SOS features depend on sensor behaviour, power, GPS reception and communication availability; they cannot guarantee injury prevention or rescue.",
};

if (typeof window !== "undefined") {
  window.GARUDA_CONTENT = CONTENT_PACK;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CONTENT_PACK };
}
