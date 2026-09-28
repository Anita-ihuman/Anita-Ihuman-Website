/** Content that speaks in my own voice, kept here so pages stay easy to update. */

export const SPEAKING_EMAIL = "anitaihuman@gmail.com";

/**
 * stackindex.io currently serves a Sedo domain-parking page ("server: Parking/1.0", resolving
 * to 91.195.240.94), not Stack Index, so the project card intentionally links nowhere.
 * Set this to the real URL and the card's "Take a look" link appears on its own.
 */
export const STACK_INDEX_URL = "";

export const DEVREL_COMPASS_URL = "https://devrelcompass.com/";
export const DEVREL_ROADMAP_URL = "https://devrelcompass.com/roadmap";

export const credentials = [
  "CNCF Ambassador",
  "Platform Engineering Ambassador",
  "AAIF Community Organizer",
];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    name: "Stack Index",
    tagline: "Discovery platform",
    description:
      "A discovery platform for AI agents and the infrastructure they run on, so you can find the right tool without reading twenty landing pages first.",
    link: STACK_INDEX_URL || undefined,
  },
  {
    name: "DevRel Compass",
    tagline: "Community platform",
    description:
      "A community platform I'm building to help DevRel practitioners see where they stand and how to grow: a Claude-API-powered resume analyzer, a career roadmap, a resource library, and a webinar series where I pull insights out of people already doing the work.",
    link: DEVREL_COMPASS_URL,
  },
];

export interface Role {
  title: string;
  organization?: string;
  period?: string;
}

/** Ongoing seats first, then past ones newest to oldest. */
export const leadership: Role[] = [
  { title: "Board of Directors", organization: "CHAOSS", period: "2026" },
  { title: "Advisory Board", organization: "Developer Network", period: "2026" },
  { title: "Advisory Board", organization: "State of Open Con", period: "2025/2026" },
  { title: "Conference Organiser", organization: "KCD Nigeria", period: "2021–Present" },
  { title: "Technical Advisory Board", organization: "SampleApp", period: "2025" },
  { title: "Conference Organiser", organization: "FOSSY", period: "2023" },
  { title: "OSS Fund Reviewer", organization: "Appwrite", period: "2022" },
];

export const committees: Role[] = [
  { title: "Program Committee", organization: "Open Source Summit EU", period: "2026" },
  {
    title: "Program Committee",
    organization: "KubeCon + CloudNativeCon China, CNCF",
    period: "2025",
  },
  {
    title: "Program Committee",
    organization: "KubeCon + CloudNativeCon Japan, CNCF",
    period: "2025",
  },
  { title: "DISC Committee", organization: "NumFOCUS", period: "2025" },
  { title: "Program Committee", organization: "State of Open Con", period: "2024" },
];

export interface MarqueeOrg {
  name: string;
  /** Path under public/, e.g. "/logos/upcloud.svg". Falls back to a text wordmark. */
  logo?: string;
}

/**
 * Organizations for the scrolling strip: clients and the teams I've worked on staff.
 * Drop logo files in public/logos and add `logo` paths to swap the wordmarks for images.
 */
export const marqueeOrgs: MarqueeOrg[] = [
  { name: "CNCF" },
  { name: "UpCloud" },
  { name: "MetalBear" },
  { name: "CHAOSS" },
  { name: "API7" },
  { name: "Layer5" },
  { name: "HackMamba" },
  { name: "Nirmata" },
  { name: "Hit Subscribe" },
];

export interface Client {
  name: string;
  role: string;
  description: string;
}

export const clients: Client[] = [
  {
    name: "UpCloud",
    role: "Technical Content Support",
    description:
      "Creating and marketing technical guides, articles, and tutorials to support developer onboarding and product visibility.",
  },
  {
    name: "Hit Subscribe",
    role: "Technical Content Writer",
    description:
      "Crafted developer-focused tutorials and copy to drive product understanding and adoption.",
  },
  {
    name: "API7",
    role: "Contract Writer",
    description:
      "Produced technical guides and articles explaining the API Gateway tool APISIX, its plugins, and its open-source integrations.",
  },
  {
    name: "HackMamba",
    role: "Content Author",
    description:
      "Collaborated with engineering teams and SEO leads to deliver technical articles, blog series, and whitepapers.",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I would describe Anita as a goal-driven person…. She is the kind of person that sees the bigger picture and that is a great person to work with if you want to build something that lasts.",
    author: "Divine Odazie",
    role: "CEO, Everything DevOps",
  },
  {
    quote:
      "Anita is very easy to work with, super proactive, a great feedback listener, and executes very fast.",
    author: "Lorena Martinez",
    role: "Marketing Lead, MetalBear",
  },
];
