import heroImg from "@/assets/hero-crane-vessel.jpg";
import platformImg from "@/assets/offshore-platform.jpg";
import floatingSolarImg from "@/assets/floating-solar.jpg";
import removalImg from "@/assets/platform-removal.jpg";
import jacketImg from "@/assets/jacket-transport.jpg";
import pipelineImg from "@/assets/pipeline-lay.jpg";
import fpsoImg from "@/assets/fpso.jpg";
import pvDamImg from "@/assets/floating-pv-dam.jpg";
import cableImg from "@/assets/subsea-cable.jpg";
import offshorePvImg from "@/assets/offshore-floating-pv.jpg";

export const images = {
  hero: heroImg,
  platform: platformImg,
  floatingSolar: floatingSolarImg,
  removal: removalImg,
  jacket: jacketImg,
  pipeline: pipelineImg,
  fpso: fpsoImg,
  pvDam: pvDamImg,
  cable: cableImg,
  offshorePv: offshorePvImg,
};

export const company = {
  legalName: "PT Abirama Prinsipa Engineering",
  shortName: "Prinsipa Engineering",
  tagline: "Your reliable partner for sustainable solution",
  phone: "+62 21 7205 774",
  phoneHref: "tel:+62217205774",
  email: "info@prinsipa.co.id",
  website: "www.prinsipa.co.id",
  address: [
    "Wisma Amex Floor 1, Lot 101",
    "Jl. Melawai No. 7, Kebayoran Baru",
    "South Jakarta 12190, Indonesia",
  ],
};

export const whatWeDo = [
  "Transportation and installation engineering",
  "Mooring, subsea and floating systems",
  "Floating power systems",
];

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  unit: string;
  caption: string;
};

export const glanceTop: Stat[] = [
  { value: 11, unit: "countries", caption: "with Prinsipa energy projects" },
  { value: 36, unit: "platforms", caption: "removed for Fourcask, end user Chevron Thailand" },
  { value: 35000, prefix: ">", suffix: " t", unit: "in total", caption: "with 250+ T&I deliverables" },
  { value: 950, suffix: "+ MW", unit: "floating PV", caption: "combined capacity of our floating PV studies, designs and reviews" },
];

export const glanceBottom: Stat[] = [
  { value: 4850, suffix: " t", unit: "T&I weight", caption: "two platforms, Angola" },
  { value: 130, prefix: "~", suffix: " km", unit: "pipeline", caption: "total pipeline length in executed projects" },
  { value: 12, unit: "facilities", caption: "moorings designed or engineered, FPSO and FSRU to floating PV" },
  { value: 2000, prefix: ">", suffix: " m", unit: "subsea cable depth", caption: "deepest subsea cable design: 500 kV HVAC, 90 km" },
];

export const principles = [
  { title: "Harmony", text: "Execution in harmony with the client's vision, for both profitability and sustainability." },
  { title: "Scalability", text: "Tailored solutions, from large-scale projects to remote and marginal developments." },
  { title: "Technology", text: "Technology integrated with customised design to meet each client's requirements." },
];

export const phases = [
  { name: "Appraise", items: ["Concept screening", "Site and metocean data review", "Pre-feasibility study", "Class 5 cost estimate"] },
  { name: "Select", items: ["Feasibility and concept select", "Field layout options", "Constructability review"] },
  { name: "Develop", items: ["Basic design / FEED", "Design basis and specifications", "Tender support and bid evaluation"] },
  { name: "Execute", items: ["Detailed design", "T&I engineering", "Owner's engineer / PMC", "Offshore site support"] },
  { name: "Operate", items: ["Integrity assessment", "Life extension studies", "Mooring inspection review"] },
  { name: "Decom", items: ["Decommissioning options", "Removal engineering", "Reuse and repurpose study"] },
];

export const scope = [
  "Offshore platform",
  "LNG value chain",
  "LNG terminal",
  "FSRU system",
  "Floating system (FPSO, FSO, FPU)",
  "Mooring system",
  "Offshore and onshore pipeline",
  "Subsea system",
  "Marine port",
  "Breakwater",
  "Floating solar PV",
  "Offshore wind power",
  "Subsea cable",
  "Logistic study",
];

export const deliverables = [
  {
    title: "Pipeline design engineering",
    items: ["Route selection and survey review", "Wall thickness and on-bottom stability", "Free span and expansion analysis", "Pipelay and crossing design"],
  },
  {
    title: "Offshore and subsea structure design engineering",
    items: ["In-place, fatigue and seismic analysis", "Jacket, topside and subsea structures", "Pile and foundation design", "Lift and padeye design"],
  },
  {
    title: "Offshore transportation and installation",
    items: ["Load-out and sea-fastening", "Transport and motion analysis", "Lifting, upending and float-over", "Platform removal engineering"],
  },
  {
    title: "Floating electricity system",
    items: ["Floating PV layout and mooring", "Power barge mooring", "Static and dynamic subsea cable", "Technical due diligence"],
  },
];

export const software = [
  { name: "OrcaFlex", use: "Mooring, riser, dynamic cable and installation dynamics" },
  { name: "MOSES", use: "Transportation, load-out, lifting and float-over analysis" },
  { name: "MAXSURF", use: "Hull modelling, hydrostatics and stability" },
  { name: "SACS", use: "Offshore structure in-place, fatigue and seismic analysis" },
  { name: "STAAD Pro", use: "Topside, onshore and jetty structural design" },
  { name: "Abaqus / ANSYS", use: "Finite element analysis of local details and connections" },
  { name: "AutoCAD / Plant 3D / E3D", use: "Drafting, 3D layout and plant modelling" },
  { name: "MS Project / Primavera P6", use: "Planning, scheduling and project controls" },
  { name: "OFFPIPE / AutoPIPE / CAESAR / Mathcad", use: "Pipelay, pipe stress and engineering calculations" },
];

export const personnel = [
  { years: "29 yrs", name: "Personnel Name A", role: "Principal and Managing Director", highlight: "Led T&I engineering for platforms across Asia and West Africa" },
  { years: "20+ yrs", name: "Personnel Name B", role: "Technical Director, Offshore Structures", highlight: "Jacket, topside and decommissioning design authority" },
  { years: "18 yrs", name: "Personnel Name C", role: "Lead T&I Engineer", highlight: "Heavy-lift, load-out and float-over analysis" },
  { years: "22 yrs", name: "Personnel Name D", role: "Lead Mooring and Floating Systems", highlight: "FPSO, FSRU and SPM mooring design" },
  { years: "17 yrs", name: "Personnel Name E", role: "Lead Pipeline Engineer", highlight: "Offshore and onshore pipeline, SPM and PLEM" },
  { years: "12 yrs", name: "Personnel Name F", role: "Floating PV Specialist", highlight: "Layout, mooring and bankability reviews over 900 MW" },
  { years: "15 yrs", name: "Personnel Name G", role: "Subsea Cable Specialist", highlight: "HVAC cable routing and installation to 2,000 m depth" },
  { years: "14 yrs", name: "Personnel Name H", role: "Project Controls Manager", highlight: "Planning, cost and document control for multi-region teams" },
];

export type Sector = "Oil, gas and marine" | "Power and renewables";
export type Service =
  | "Transportation and installation"
  | "Pipeline and SPM"
  | "Mooring and floating systems"
  | "Floating PV"
  | "Subsea cable";
export type Status = "Executed" | "Ongoing 2026";

export type MapPoint = { lon: number; lat: number; region: "sea" | "africa" };

export type Project = {
  slug: string;
  sector: Sector;
  service: Service;
  country: string;
  year: number;
  yearLabel: string;
  status: Status;
  giant: string;
  subtitle: string;
  title: string;
  client: string;
  stats: { value: string; label: string }[];
  description: string;
  scope: string[];
  image: string;
  gallery: [string, string];
  location?: MapPoint;
};

export const projects: Project[] = [
  {
    slug: "gulf-of-thailand-platform-removal",
    sector: "Oil, gas and marine",
    service: "Transportation and installation",
    country: "Thailand",
    year: 2025,
    yearLabel: "2024-2025",
    status: "Executed",
    giant: "Chevron Thailand",
    subtitle: "platform removal",
    title: "36 wellhead platform removals and 13 spool installations, Gulf of Thailand",
    client: "Fourcask, Mermaid / Chevron E&P Thailand",
    stats: [
      { value: "36", label: "platforms" },
      { value: "250+", label: "deliverables" },
      { value: ">35,000 t", label: "removed" },
    ],
    description:
      "Removal engineering for a multi-year wellhead platform decommissioning campaign, from topside and jacket lift analysis to spool tie-in installation.",
    scope: ["Topside and jacket removal analysis", "Rigging and lift point design", "Barge sea-fastening and transport", "Spool installation engineering"],
    image: removalImg,
    gallery: [platformImg, jacketImg],
    location: { lon: 101.6, lat: 9.2, region: "sea" },
  },
  {
    slug: "quiluma-maboqueiro-angola",
    sector: "Oil, gas and marine",
    service: "Transportation and installation",
    country: "Angola",
    year: 2025,
    yearLabel: "2025",
    status: "Executed",
    giant: "Azule Energy",
    subtitle: "offshore T&I",
    title: "Quiluma and Maboqueiro platforms transportation and installation, Angola",
    client: "Vantris Energy / Azule Energy",
    stats: [
      { value: "4,850 t", label: "T&I weight" },
      { value: "2", label: "platforms" },
    ],
    description:
      "Transportation and installation engineering for two new platforms supporting Angola's first non-associated gas development.",
    scope: ["Load-out and sea-fastening design", "Transport motion analysis", "Jacket launch, upending and lift", "Topside installation"],
    image: jacketImg,
    gallery: [heroImg, removalImg],
    location: { lon: 12.2, lat: -6.4, region: "africa" },
  },
  {
    slug: "soekarno-hatta-pipeline-spm",
    sector: "Oil, gas and marine",
    service: "Pipeline and SPM",
    country: "Indonesia",
    year: 2023,
    yearLabel: "2021-2023",
    status: "Executed",
    giant: "Pertamina",
    subtitle: "pipeline and SPM",
    title: "Soekarno-Hatta offshore pipeline and single point mooring",
    client: "PT Rekayasa Industri / Pertamina",
    stats: [
      { value: "24 inch", label: "pipeline" },
      { value: "50,000 DWT", label: "SPM tanker" },
    ],
    description:
      "Offshore pipeline and SPM engineering for an aviation fuel receiving facility, covering design through installation support.",
    scope: ["Pipeline route and stability design", "SPM buoy and mooring analysis", "PLEM and hose design", "Pipelay installation analysis"],
    image: pipelineImg,
    gallery: [cableImg, fpsoImg],
    location: { lon: 106.65, lat: -5.95, region: "sea" },
  },
  {
    slug: "fpso-anoa-mooring",
    sector: "Oil, gas and marine",
    service: "Mooring and floating systems",
    country: "Indonesia",
    year: 2026,
    yearLabel: "2026",
    status: "Executed",
    giant: "Harbour Energy",
    subtitle: "FPSO Anoa",
    title: "FPSO Anoa mooring chain replacement, Natuna Sea",
    client: "PT Buwana Kreasi Internasional / Harbour Energy",
    stats: [{ value: "6", label: "mooring legs" }],
    description:
      "Mooring integrity and chain replacement engineering for a turret-moored FPSO, executed while keeping production online.",
    scope: ["Mooring integrity assessment", "Chain replacement sequence", "Intact and damaged case analysis", "Offshore procedure support"],
    image: fpsoImg,
    gallery: [pipelineImg, platformImg],
    location: { lon: 106.25, lat: 5.3, region: "sea" },
  },
  {
    slug: "karangkates-floating-pv",
    sector: "Power and renewables",
    service: "Floating PV",
    country: "Indonesia",
    year: 2023,
    yearLabel: "2023",
    status: "Executed",
    giant: "Karangkates",
    subtitle: "floating PV",
    title: "Karangkates floating PV, East Java",
    client: "Rekadaya Elektrika Consult",
    stats: [{ value: "100 MWac", label: "capacity" }],
    description: "Floating PV layout, float and anchoring engineering for a large reservoir installation in East Java.",
    scope: ["Array layout and bathymetry review", "Mooring and anchoring design", "Water level variation analysis", "Cable routing"],
    image: floatingSolarImg,
    gallery: [pvDamImg, offshorePvImg],
    location: { lon: 112.45, lat: -8.15, region: "sea" },
  },
  {
    slug: "pertamina-nre-offshore-floating-pv",
    sector: "Power and renewables",
    service: "Floating PV",
    country: "Indonesia",
    year: 2024,
    yearLabel: "2024",
    status: "Executed",
    giant: "Pertamina NRE",
    subtitle: "offshore floating PV",
    title: "Offshore floating PV feasibility study",
    client: "Pertamina NRE",
    stats: [{ value: "60.59 MWp", label: "capacity" }],
    description: "Feasibility study for an offshore floating PV plant, assessing metocean exposure, mooring concepts and export cable.",
    scope: ["Metocean and site screening", "Float and mooring concepts", "Export cable concept", "Cost and schedule estimate"],
    image: offshorePvImg,
    gallery: [floatingSolarImg, cableImg],
    location: { lon: 104.1, lat: 1.0, region: "sea" },
  },
  {
    slug: "kamburu-dam-floating-pv",
    sector: "Power and renewables",
    service: "Floating PV",
    country: "Kenya",
    year: 2025,
    yearLabel: "2025",
    status: "Executed",
    giant: "Kamburu Dam",
    subtitle: "floating PV",
    title: "Kamburu Dam floating PV, Kenya",
    client: "ILF",
    stats: [{ value: "40 MWp", label: "capacity" }],
    description: "Floating PV engineering on a hydropower reservoir, integrating with existing dam operations.",
    scope: ["Layout and yield support", "Anchoring and mooring design", "Reservoir drawdown analysis", "Design review"],
    image: pvDamImg,
    gallery: [floatingSolarImg, offshorePvImg],
    location: { lon: 37.7, lat: -0.8, region: "africa" },
  },
  {
    slug: "saguling-floating-pv",
    sector: "Power and renewables",
    service: "Floating PV",
    country: "Indonesia",
    year: 2025,
    yearLabel: "2025",
    status: "Executed",
    giant: "Saguling",
    subtitle: "bankability study",
    title: "Saguling floating PV bankability study, West Java",
    client: "SGS Consulting and ACWA Power",
    stats: [{ value: "70 MWp", label: "capacity" }],
    description: "Independent technical review of the floating PV design to support project financing.",
    scope: ["Design basis review", "Mooring and float review", "Risk register", "Bankability report"],
    image: floatingSolarImg,
    gallery: [pvDamImg, platformImg],
    location: { lon: 107.4, lat: -6.95, region: "sea" },
  },
  {
    slug: "kuala-selangor-pv-review",
    sector: "Power and renewables",
    service: "Floating PV",
    country: "Malaysia",
    year: 2026,
    yearLabel: "2026",
    status: "Executed",
    giant: "Bestari Solar",
    subtitle: "combined PV review",
    title: "Kuala Selangor combined PV plant review",
    client: "Bestari Solar",
    stats: [
      { value: "459.3 MWp", label: "total" },
      { value: "200.2 MWp", label: "floating" },
    ],
    description: "Engineering review of a combined ground-mounted and floating PV plant, one of the largest in the region.",
    scope: ["Floating system review", "Mooring and anchoring check", "Interface review with ground PV", "Review report"],
    image: offshorePvImg,
    gallery: [floatingSolarImg, pvDamImg],
    location: { lon: 101.25, lat: 3.35, region: "sea" },
  },
  {
    slug: "subsea-cable-500kv-hvac",
    sector: "Power and renewables",
    service: "Subsea cable",
    country: "Confidential",
    year: 2021,
    yearLabel: "2021",
    status: "Executed",
    giant: "500 kV HVAC",
    subtitle: "subsea cable",
    title: "Subsea cable 500 kV HVAC, three crossings",
    client: "Confidential client",
    stats: [
      { value: "90 km", label: ">2,000 m depth" },
      { value: "15 km", label: "crossing" },
      { value: "78 km", label: "crossing" },
    ],
    description: "Routing and installation engineering for deepwater 500 kV HVAC interconnector cables.",
    scope: ["Route engineering", "Cable lay analysis", "Protection and crossing design", "Installation support"],
    image: cableImg,
    gallery: [pipelineImg, heroImg],
  },
];

export type OngoingProject = {
  title: string;
  client: string;
  detail: string;
  sector: Sector;
  service: Service;
  country: string;
  location?: MapPoint;
};

export const ongoing: OngoingProject[] = [
  { title: "Blanket engineering services", client: "Vantris Energy", detail: "Call-off engineering for offshore T&I", sector: "Oil, gas and marine", service: "Transportation and installation", country: "Angola", location: { lon: 13.2, lat: -9.6, region: "africa" } },
  { title: "Blanket engineering services", client: "PT Buwana Kreasi Internasional", detail: "Marine and mooring engineering call-offs", sector: "Oil, gas and marine", service: "Mooring and floating systems", country: "Indonesia" },
  { title: "FSRU Bali dynamic mooring analysis", client: "PLN Energi Primer Indonesia", detail: "Dynamic mooring of FSRU and LNG carrier", sector: "Oil, gas and marine", service: "Mooring and floating systems", country: "Indonesia", location: { lon: 115.2, lat: -8.8, region: "sea" } },
  { title: "FPSO Kutei North Hub module lifting", client: "Confidential", detail: "26 modules up to ~3,400 t", sector: "Oil, gas and marine", service: "Transportation and installation", country: "Indonesia", location: { lon: 117.9, lat: -0.9, region: "sea" } },
  { title: "Berau floating PV PMC", client: "Confidential", detail: "Project management consultancy, 31.2 MWp", sector: "Power and renewables", service: "Floating PV", country: "Indonesia", location: { lon: 117.4, lat: 2.1, region: "sea" } },
  { title: "Tawau floating power plant", client: "Confidential", detail: "Mooring and subsea cable for a 160 MW LNG-fuelled power barge", sector: "Power and renewables", service: "Subsea cable", country: "Malaysia", location: { lon: 118.0, lat: 4.25, region: "sea" } },
];

export const clientGroups = [
  {
    label: "Oil, gas and marine",
    names: ["Vantris Energy", "Bumi Armada", "Fourcask", "McConnell Dowell", "Rekind E&C", "PLN Energi Primer Indonesia", "SMEC", "Newgas", "PT Buwana Kreasi Internasional", "Dejing", "Samudera Tangguh Abadi", "Mahesa Group"],
  },
  {
    label: "Power and renewables",
    names: ["PLN", "ACWA Power", "Masdar", "ibvogt", "Sungrow", "Bureau Veritas", "SUMEC", "Energy China", "ILF", "SGS", "Tractebel", "Datang", "Itochu", "AlamTri", "reconsult"],
  },
];

export const navItems = [
  { id: "company", en: "Company", id_: "Perusahaan" },
  { id: "capability", en: "Capability", id_: "Kapabilitas" },
  { id: "people", en: "People", id_: "Tim" },
  { id: "projects", en: "Projects", id_: "Proyek" },
  { id: "clients", en: "Clients", id_: "Klien" },
] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
