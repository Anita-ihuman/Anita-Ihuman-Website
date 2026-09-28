export type EngagementType = "Conference" | "Podcast" | "Panel" | "Workshop" | "Webinar";

export interface Engagement {
  title: string;
  event: string;
  /** Human-readable date, e.g. "May 2023" */
  date: string;
  year: number;
  type: EngagementType;
  link: string;
  /** Shown in the "Speaking" preview on the home page */
  featured?: boolean;
}

/** Talks, podcasts, panels, and workshops, newest first. */
export const engagements: Engagement[] = [
  {
    title: "AMA: Building Inclusive and Thriving Open Source Communities",
    event: "Chimoney",
    date: "October 2025",
    year: 2025,
    type: "Webinar",
    link: "https://www.youtube.com/watch?v=TLk_i81q3e8",
  },
  {
    title: "Leveling up the Kubernetes Development Experience with Remocal Development",
    event: "DevFest Lagos",
    date: "November 2024",
    year: 2024,
    type: "Conference",
    link: "https://www.youtube.com/watch?v=-MTVnTKz6Gg",
    featured: true,
  },
  {
    title: "Mirror Mirror on My Local Machine",
    event: "Conf42",
    date: "September 2024",
    year: 2024,
    type: "Workshop",
    link: "https://www.youtube.com/watch?v=7JyQsPXh-uU",
    featured: true,
  },
  {
    title: "OSCA, Docs, and Burnout",
    event: "Sustain OSS",
    date: "June 2024",
    year: 2024,
    type: "Panel",
    link: "https://www.youtube.com/watch?v=azODMRP-mCw",
  },
  {
    title: "Community Health Through CHAOSS",
    event: "DevRel Podcast",
    date: "March 2024",
    year: 2024,
    type: "Podcast",
    link: "https://www.youtube.com/watch?v=R-kAzb-Wvis",
  },
  {
    title: "DEI Metrics Overcoming Social Barriers in OSS",
    event: "CHAOSScast",
    date: "January 2024",
    year: 2024,
    type: "Podcast",
    link: "https://www.youtube.com/watch?v=zUGG2Y3sH2w",
  },
  {
    title: "Open Source DEI: Transitioning from Intentions to Impact",
    event: "Open Source Summit North America",
    date: "June 2023",
    year: 2023,
    type: "Conference",
    link: "https://youtu.be/QAfIxTjVNl8",
    featured: true,
  },
  {
    title: "How Implicit Bias Affects Diversity and Inclusion in Open Source",
    event: "KubeCon + CloudNativeCon Europe",
    date: "May 2023",
    year: 2023,
    type: "Conference",
    link: "https://www.youtube.com/watch?v=htjoBHaDLIk",
    featured: true,
  },
  {
    title: "Quality Onboarding: A Ticket to a Healthy Open Source Experience",
    event: "Upstream",
    date: "June 2022",
    year: 2022,
    type: "Conference",
    link: "https://www.youtube.com/watch?v=VAv8OVXijw4",
    featured: true,
  },
  {
    title: "Quality Documentation: The Key to Open Source Growth",
    event: "DevConf.CZ",
    date: "January 2022",
    year: 2022,
    type: "Conference",
    link: "https://www.youtube.com/watch?v=WKfUfUvY7Tk",
  },
];

export const engagementTypes: ("All" | EngagementType)[] = [
  "All",
  "Conference",
  "Podcast",
  "Panel",
  "Workshop",
  "Webinar",
];

/** The five talks I point people to first. */
export const featuredEngagements = engagements
  .filter((engagement) => engagement.featured)
  .slice(0, 5);

/** Episodes from my own channel, Tech With Anita Ihuman. */
export const youtubeVideos = [
  {
    title: "How Open Source Powers UNICEF's Innovation | Ep. 6",
    channel: "Tech With Anita Ihuman",
    date: "September 2025",
    link: "https://youtu.be/9nVeKX5duxs",
  },
  {
    title: "How Open Source is Empowering Next-Gen Researchers | Ep. 5",
    channel: "Tech With Anita Ihuman",
    date: "July 2025",
    link: "https://www.youtube.com/watch?v=8wpJMhQ_qVU",
  },
  {
    title: "Open Source in Data Science: A Data Scientist's Guide to Open Source | Ep. 4",
    channel: "Tech With Anita Ihuman",
    date: "July 2025",
    link: "https://youtu.be/dQLAJlq5dsM",
  },
  {
    title: "Open Source and Design: How to Contribute to Open Source as a Product Designer | Ep. 3",
    channel: "Tech With Anita Ihuman",
    date: "June 2025",
    link: "https://www.youtube.com/watch?v=bujFSNysipw",
  },
  {
    title: "How Microbiologists Use Open Source to Decode Microbial Life | Ep. 2",
    channel: "Tech With Anita Ihuman",
    date: "April 2025",
    link: "https://www.youtube.com/watch?v=7yii3zpOCbg",
  },
  {
    title: "Open Source in Security: Is Open Source Less Secure? | Ep. 1",
    channel: "Tech With Anita Ihuman",
    date: "March 2025",
    link: "https://www.youtube.com/watch?v=UvLGKg4W-UI",
  },
];

/** Engagements bucketed by year, newest year first. */
export function groupEngagementsByYear(list: Engagement[]): [number, Engagement[]][] {
  const byYear = new Map<number, Engagement[]>();
  for (const engagement of list) {
    const bucket = byYear.get(engagement.year);
    if (bucket) {
      bucket.push(engagement);
    } else {
      byYear.set(engagement.year, [engagement]);
    }
  }
  return Array.from(byYear.entries()).sort((a, b) => b[0] - a[0]);
}

/** Extract a YouTube video ID from watch, youtu.be, or embed URLs. */
export function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube(?:-nocookie)?\.com\/(?:.*v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i
  );
  return match ? match[1] : null;
}
