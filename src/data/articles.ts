export interface Article {
  title: string;
  excerpt: string;
  /** Human-readable publication date, e.g. "Nov 28, 2025" */
  date: string;
  /** Year used to group articles on the writing page */
  year: number;
  tags: string[];
  link: string;
  /** Where it was published, shown on the card */
  source: string;
  /** Shown in the "Writing" preview on the home page */
  featured?: boolean;
}

/** Everything I've written that's reachable on the web today. */
const liveArticles: Article[] = [
  {
    title: "How Developers Can Sync Notes and Tasks Between VS Code and Notion",
    excerpt:
      "Wiring Notion into my editor so notes, tasks, and code stop living in three different places.",
    date: "Feb 4, 2026",
    year: 2026,
    tags: ["Developer Experience", "AI/ML"],
    link: "https://dev.to/anita_ihuman/how-developers-can-sync-notes-and-tasks-between-vs-code-and-notion-1cdp",
    source: "dev.to",
    featured: true,
  },
  {
    title: "Automating the Boring Parts of Development Using Continuous AI",
    excerpt:
      "The repetitive work I handed to Continuous AI, and how I set it up to stay out of my way.",
    date: "Jan 29, 2026",
    year: 2026,
    tags: ["AI/ML", "Developer Experience"],
    link: "https://dev.to/anita_ihuman/automating-the-boring-parts-of-development-using-continuous-ai-3aep",
    source: "dev.to",
    featured: true,
  },
  {
    title: "Top 6 DevRel Mistakes Every Beginner Developer Advocate Should Avoid",
    excerpt:
      "The mistakes I made and watched others make in their first DevRel role, and what I'd do differently.",
    date: "Jan 27, 2026",
    year: 2026,
    tags: ["DevRel", "Community"],
    link: "https://medium.com/@Anita-ihuman/top-6-devrel-mistakes-every-beginner-developer-advocate-should-avoid-81faf33c3a6d",
    source: "Medium",
    featured: true,
  },
  {
    title: "Better Docs, Less Effort: Using The Continue MCP Cookbook",
    excerpt:
      "How I use the Continue MCP cookbook to keep documentation current without writing it all by hand.",
    date: "Jan 12, 2026",
    year: 2026,
    tags: ["AI/ML", "Developer Experience"],
    link: "https://dev.to/anita_ihuman/better-docs-less-effort-using-the-continue-mcp-cookbook-2e60",
    source: "dev.to",
  },
  {
    title: "Using GitHub MCP With Continue to Review PRs and Issues 5x Faster",
    excerpt:
      "Connecting Continuous AI to GitHub over the Model Context Protocol to triage issues and suggest PR fixes.",
    date: "Nov 28, 2025",
    year: 2025,
    tags: ["Developer Experience", "AI/ML"],
    link: "https://dev.to/anita_ihuman/using-github-mcp-with-continue-to-review-prs-and-issues-5x-faster-1p8a",
    source: "dev.to",
    featured: true,
  },
  {
    title: "Best Offline AI Coding Assistant: How to Run LLMs Locally Without Internet",
    excerpt:
      "Running models on my own machine: what the setup costs, and what I give up when the network goes away.",
    date: "Nov 25, 2025",
    year: 2025,
    tags: ["AI/ML", "Developer Experience"],
    link: "https://dev.to/anita_ihuman/best-offline-ai-coding-assistant-how-to-run-llms-locally-without-internet-2bah",
    source: "dev.to",
  },
  {
    title: "How to Prompt AI Coding Assistants for 90% Accurate Code",
    excerpt:
      "The prompting habits that moved my AI coding assistant from plausible-looking output to code I can ship.",
    date: "Nov 14, 2025",
    year: 2025,
    tags: ["AI/ML", "Developer Experience"],
    link: "https://dev.to/anita_ihuman/the-ideal-way-to-prompt-your-ai-coding-assistant-for-90-accuracy-1f09",
    source: "dev.to",
    featured: true,
  },
  {
    title: "Building a Custom MCP Server in Continue: A Step-by-Step Guide",
    excerpt:
      "What MCP actually is, and how I built a custom MCP server in TypeScript with Continuous AI.",
    date: "Oct 10, 2025",
    year: 2025,
    tags: ["AI/ML", "Developer Experience"],
    link: "https://dev.to/anita_ihuman/building-a-custom-mcp-server-in-continue-a-step-by-step-guide-1p71",
    source: "dev.to",
  },
  {
    title: "How are Different Developers Using AI Coding Assistants?",
    excerpt:
      "A look at how developers in different roles actually reach for AI assistants day to day.",
    date: "Sep 30, 2025",
    year: 2025,
    tags: ["AI/ML", "Developer Experience"],
    link: "https://dev.to/anita_ihuman/how-are-different-developers-using-ai-coding-assistants-4mfa",
    source: "dev.to",
  },
  {
    title: "How to Get More Done with AI in My Local Dev Workflow: ChatGPT vs. Continue",
    excerpt:
      "Comparing two AI workflows inside my own local setup, and where each one earns its place.",
    date: "Sep 22, 2025",
    year: 2025,
    tags: ["AI/ML", "Developer Experience"],
    link: "https://dev.to/anita_ihuman/how-to-get-more-done-with-ai-in-my-local-dev-workflow-chatgpt-vs-continue-149f",
    source: "dev.to",
  },
  {
    title: "Docker vs. Kubernetes: Understanding the Core Differences in Modern Containerization",
    excerpt:
      "Two tools people constantly put in the same sentence, and where the line between them actually sits.",
    date: "Sep 17, 2025",
    year: 2025,
    tags: ["Kubernetes", "Cloud-Native"],
    link: "https://medium.com/@Anita-ihuman/docker-vs-kubernetes-understanding-the-core-differences-in-modern-containerization-dc9489df4e50",
    source: "Medium",
  },
  {
    title: "How to Deploy and Configure Hugo for Fast and SEO-Friendly Static Websites",
    excerpt:
      "Building a Hugo static site, tuning it for performance and SEO, then deploying it to UpCloud.",
    date: "Aug 27, 2025",
    year: 2025,
    tags: ["Cloud-Native", "Developer Experience"],
    link: "https://medium.com/@Anita-ihuman/how-to-deploy-and-configure-hugo-for-fast-and-seo-friendly-static-websites-8744eecace14",
    source: "Medium",
  },
  {
    title: "How to Install and Configure Shopware for Your E-commerce Store on UpCloud",
    excerpt: "Standing up a Shopware store on cloud infrastructure, from install to configuration.",
    date: "Jul 28, 2025",
    year: 2025,
    tags: ["Cloud-Native"],
    link: "https://medium.com/@Anita-ihuman/how-to-install-and-configure-shopware-for-your-e-commerce-store-on-upcloud-de472aaecea1",
    source: "Medium",
  },
  {
    title: "Ruby on Rails Security Best Practices for Cloud Deployments on UpCloud",
    excerpt: "The security practices I'd insist on before putting a Rails app in front of real users.",
    date: "Jul 14, 2025",
    year: 2025,
    tags: ["Cloud-Native", "Security"],
    link: "https://medium.com/@Anita-ihuman/ruby-on-rails-security-best-practices-for-cloud-deployments-on-upcloud-897a3347ddce",
    source: "Medium",
  },
  {
    title: "Setting Up a Secure Ruby on Rails Environment on UpCloud: Best Practices",
    excerpt:
      "Standing up a secure Rails environment, and the security practices I'd keep for any modern web app.",
    date: "Jul 10, 2025",
    year: 2025,
    tags: ["Cloud-Native", "Security"],
    link: "https://upcloud.com/resources/tutorials/setting-up-a-secure-ruby-on-rails-environment-on-upcloud-best-practices/",
    source: "UpCloud",
  },
  {
    title: "Comparison Guide: Object Storage vs Block Storage",
    excerpt: "Which storage model fits which workload, without the vendor framing.",
    date: "Jul 8, 2025",
    year: 2025,
    tags: ["Cloud-Native", "Platform Engineering"],
    link: "https://medium.com/@Anita-ihuman/comparison-guide-object-storage-vs-block-storage-322c5df66c30",
    source: "Medium",
  },
  {
    title: "Installing ownCloud on UpCloud Server and DBaaS: A Full Setup Guide",
    excerpt: "A complete ownCloud setup backed by managed databases rather than a hand-rolled one.",
    date: "Jun 30, 2025",
    year: 2025,
    tags: ["Cloud-Native"],
    link: "https://medium.com/upcloud/installing-owncloud-on-upcloud-server-and-dbaas-a-full-setup-guide-bcdba8e2a5a8",
    source: "Medium",
  },
  {
    title: "How to Install and Configure OwnCloud: A Step-by-Step Guide",
    excerpt: "Self-hosting your own file sync and share, one step at a time.",
    date: "Jun 23, 2025",
    year: 2025,
    tags: ["Cloud-Native"],
    link: "https://medium.com/upcloud/how-to-install-and-configure-owncloud-a-step-by-step-guide-b486e48145f6",
    source: "Medium",
  },
  {
    title: "How to Deploy Next.js to Cloud Servers: A Step-by-Step Guide",
    excerpt: "Getting a Next.js app onto a cloud server you actually control, end to end.",
    date: "Jun 16, 2025",
    year: 2025,
    tags: ["Cloud-Native", "Developer Experience"],
    link: "https://medium.com/upcloud/how-to-deploy-next-js-to-cloud-servers-a-step-by-step-guide-bb078bfff6f4",
    source: "Medium",
  },
  {
    title: "Local or Cloud: Choosing the Right Dev Environment",
    excerpt:
      "The trade-offs I weigh between local, personal remote, and shared cloud development environments.",
    date: "Apr 9, 2025",
    year: 2025,
    tags: ["Cloud-Native", "Platform Engineering"],
    link: "https://thenewstack.io/local-or-cloud-choosing-the-right-dev-environment/",
    source: "The New Stack",
  },
  {
    title: "Navigating Your First Year as a Developer Advocate for a Startup",
    excerpt:
      "What nobody tells you about your first year in DevRel at a startup, written from the inside of it.",
    date: "Feb 20, 2025",
    year: 2025,
    tags: ["DevRel", "Community"],
    link: "https://medium.com/@Anita-ihuman/navigating-your-first-year-as-a-developer-advocate-for-a-startup-9445516df46c",
    source: "Medium",
  },
  {
    title: "Comparison of Internal Developer Platforms",
    excerpt:
      "A side-by-side comparison of IDP vendors and tools, and the features that actually differentiate them.",
    date: "Nov 27, 2024",
    year: 2024,
    tags: ["Platform Engineering", "Cloud-Native"],
    link: "https://medium.com/@Anita-ihuman/comparison-of-internal-developer-platforms-90de61db00e1",
    source: "Medium",
  },
  {
    title: "Unveiling the Impact: DEI Metrics Overcoming Social Barriers in Open Source",
    excerpt:
      "Our report on how DEI metrics help dismantle social barriers and make open source more welcoming.",
    date: "Nov 14, 2023",
    year: 2023,
    tags: ["OSS", "Community", "DEI"],
    link: "https://chaoss.community/unveiling-the-impact-dei-metrics-overcoming-social-barriers-in-open-source/",
    source: "CHAOSS",
  },
  {
    title: "Deploying a React App using AWS S3 and CloudFront",
    excerpt:
      "End-to-end: from a local dev environment to an S3-hosted React app with HTTPS and a custom domain.",
    date: "Sep 4, 2023",
    year: 2023,
    tags: ["Cloud-Native", "Developer Experience"],
    link: "https://medium.com/@Anita-ihuman/deploying-a-react-app-using-aws-s3-and-cloud-front-c0950808bf03",
    source: "Medium",
  },
  {
    title: "Beginners Guide: Contributing To Apache APISIX",
    excerpt:
      "A first-contribution path through the Apache APISIX codebase and community.",
    date: "Apr 25, 2022",
    year: 2022,
    tags: ["OSS", "Cloud-Native"],
    link: "https://dev.to/apisix/beginners-guide-contributing-to-apache-apisix-boa",
    source: "dev.to",
  },
  {
    title: "Apache APISIX Ingress Controller Over the K8s Native Ingress",
    excerpt:
      "Why teams reach for the APISIX ingress controller instead of the Kubernetes-native ingress.",
    date: "Apr 12, 2022",
    year: 2022,
    tags: ["Kubernetes", "Cloud-Native"],
    link: "https://dev.to/apisix/apache-apisix-ingress-controller-over-the-k8s-native-ingress-oi5",
    source: "dev.to",
  },
  {
    title: "HelloTalk: Leveraging Apache APISIX and OpenResty",
    excerpt:
      "How HelloTalk put Apache APISIX and OpenResty to work in production.",
    date: "Apr 5, 2022",
    year: 2022,
    tags: ["Cloud-Native", "OSS"],
    link: "https://dev.to/anita_ihuman/hellotalk-leveraging-apache-apisix-and-openresty-1alo",
    source: "dev.to",
  },
  {
    title: "Microservice Service Discovery: API Gateway or Service Mesh?",
    excerpt:
      "The real difference between a service mesh and an API gateway, and how to pick for your project.",
    date: "Apr 4, 2022",
    year: 2022,
    tags: ["Cloud-Native", "Kubernetes"],
    link: "https://blog.getambassador.io/microservice-service-discovery-api-gateway-or-service-mesh-77c468167025",
    source: "Ambassador Labs",
  },
  {
    title: "What is Apache APISIX?",
    excerpt:
      "Demystifying Apache APISIX and what makes it a fit as a microservices gateway.",
    date: "Mar 27, 2022",
    year: 2022,
    tags: ["Cloud-Native", "OSS"],
    link: "https://dev.to/anita_ihuman/demystifying-apache-apisix-the-ideal-microservices-gateway-5fo0",
    source: "dev.to",
  },
  {
    title: "The Role Of API Gateways In A Microservice Architecture",
    excerpt:
      "What an API gateway is responsible for once your architecture splits into services.",
    date: "Mar 1, 2022",
    year: 2022,
    tags: ["Cloud-Native", "Kubernetes"],
    link: "https://dev.to/anita_ihuman/the-role-of-api-gateways-in-a-microservice-architecture-m21",
    source: "dev.to",
  },
];

/**
 * My Hashnode blog (2021–2022), fetched from movi.hashnode.dev.
 *
 * These are switched OFF because the blog's custom domain, anitaihuman.blog, no longer
 * resolves (NXDOMAIN on both 8.8.8.8 and 1.1.1.1), and every movi.hashnode.dev post
 * 307-redirects to it, so each link below is currently a dead end for readers.
 *
 * To publish them: either renew/re-point anitaihuman.blog, or remove the custom domain in
 * Hashnode settings so movi.hashnode.dev serves posts directly. Then flip
 * INCLUDE_HASHNODE_ARCHIVE to true below and they'll slot into the right years on their own.
 *
 * Cross-posts already covered by the dev.to entries above (the APISIX series) are left out
 * so nothing appears twice.
 */
export const hashnodeArchive: Article[] = [
  {
    title: "A Recap of 2022: Overcoming Imposter Syndrome",
    excerpt: "The year I stopped waiting to feel qualified before doing the work.",
    date: "Dec 21, 2022",
    year: 2022,
    tags: ["Community"],
    link: "https://movi.hashnode.dev/a-recap-of-2022-overcoming-imposter-syndrome-8dea0028807f",
    source: "Hashnode",
  },
  {
    title: "Getting the Kyverno Fundamentals Certificate",
    excerpt: "What the Kyverno fundamentals certification covered, and whether it was worth the time.",
    date: "Nov 30, 2021",
    year: 2021,
    tags: ["Kubernetes", "Cloud-Native"],
    link: "https://movi.hashnode.dev/getting-the-kyverno-fundamentals-certificate-d0b35347330a",
    source: "Hashnode",
  },
  {
    title: "Introducing Container Orchestration Using Kubernetes",
    excerpt: "Container orchestration from first principles, for anyone meeting Kubernetes for the first time.",
    date: "Sep 10, 2021",
    year: 2021,
    tags: ["Kubernetes", "Cloud-Native"],
    link: "https://movi.hashnode.dev/introducing-container-orchestration-using-kubernetes",
    source: "Hashnode",
  },
  {
    title: "The Beginners Intro to Containerized Platforms: Docker",
    excerpt: "What containers actually solve, explained without assuming you already know.",
    date: "Sep 7, 2021",
    year: 2021,
    tags: ["Cloud-Native"],
    link: "https://movi.hashnode.dev/the-beginners-intro-to-containerized-platforms-docker",
    source: "Hashnode",
  },
  {
    title: "Simplify Kubernetes Cluster Management with Kyverno",
    excerpt: "Using Kyverno policies to keep a cluster in the shape you meant it to be in.",
    date: "Sep 5, 2021",
    year: 2021,
    tags: ["Kubernetes", "Cloud-Native"],
    link: "https://movi.hashnode.dev/simplify-kubernetes-cluster-management-with-kyverno",
    source: "Hashnode",
  },
  {
    title: "Am I Really a Terrible Writer?",
    excerpt: "An honest piece about self-doubt and writing in public anyway.",
    date: "Jul 22, 2021",
    year: 2021,
    tags: ["Community"],
    link: "https://movi.hashnode.dev/am-i-really-a-terrible-writer",
    source: "Hashnode",
  },
  {
    title: "Recounts of my Session at GitHub Africa Virtual Meetup",
    excerpt: "What I spoke about at the GitHub Africa virtual meetup, and what I took away from it.",
    date: "May 21, 2021",
    year: 2021,
    tags: ["Community", "OSS"],
    link: "https://movi.hashnode.dev/recounts-of-my-session-at-github-africa-virtual-meetup",
    source: "Hashnode",
  },
  {
    title: "Open Source Repositories on GitHub You Should Explore as a Beginner",
    excerpt: "Where to actually start contributing when every repo looks intimidating.",
    date: "May 15, 2021",
    year: 2021,
    tags: ["OSS", "Community"],
    link: "https://movi.hashnode.dev/open-source-repositories-on-github-you-should-explore-as-a-beginner",
    source: "Hashnode",
  },
  {
    title: "Top Open Source Myths Revealed",
    excerpt: "The assumptions about open source that keep good people from contributing.",
    date: "May 7, 2021",
    year: 2021,
    tags: ["OSS", "Community"],
    link: "https://movi.hashnode.dev/top-open-source-myths-revealed",
    source: "Hashnode",
  },
  {
    title: "8 Styling Methods in React",
    excerpt: "Eight ways to style a React app, and how to choose between them.",
    date: "Apr 29, 2021",
    year: 2021,
    tags: ["Developer Experience"],
    link: "https://movi.hashnode.dev/8-styling-methods-in-react",
    source: "Hashnode",
  },
  {
    title: "What is a Cookie?",
    excerpt: "Cookies, explained properly: what they store, who reads them, and why it matters.",
    date: "Apr 23, 2021",
    year: 2021,
    tags: ["Developer Experience"],
    link: "https://movi.hashnode.dev/what-is-a-cookie",
    source: "Hashnode",
  },
  {
    title: "Optimizing Images Using the Next.js Image Component",
    excerpt: "Getting real performance wins out of next/image instead of just swapping the tag.",
    date: "Apr 16, 2021",
    year: 2021,
    tags: ["Developer Experience"],
    link: "https://movi.hashnode.dev/optimizing-images-using-the-nextjs-image-component",
    source: "Hashnode",
  },
  {
    title: "Identity Branding for Programmers",
    excerpt: "Why how you present your work matters as much as the work, especially early on.",
    date: "Apr 9, 2021",
    year: 2021,
    tags: ["Community", "DevRel"],
    link: "https://movi.hashnode.dev/identity-branding-for-programmers",
    source: "Hashnode",
  },
  {
    title: "Routing in Next.js",
    excerpt: "How routing works in Next.js, and the conventions worth internalising early.",
    date: "Mar 15, 2021",
    year: 2021,
    tags: ["Developer Experience"],
    link: "https://movi.hashnode.dev/routing-in-next-js",
    source: "Hashnode",
  },
];

/** See the note on hashnodeArchive above before flipping this on. */
const INCLUDE_HASHNODE_ARCHIVE = false;

/** Every article, newest first. */
export const articles: Article[] = [
  ...liveArticles,
  ...(INCLUDE_HASHNODE_ARCHIVE ? hashnodeArchive : []),
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

/** The five I'd hand someone first. */
export const featuredArticles = articles.filter((article) => article.featured).slice(0, 5);

/** Every tag in use, for the filter row on the writing page. */
export const articleTags = [
  "All",
  ...Array.from(new Set(articles.flatMap((article) => article.tags))).sort(),
];

/** Articles bucketed by year, newest year first. */
export function groupArticlesByYear(list: Article[]): [number, Article[]][] {
  const byYear = new Map<number, Article[]>();
  for (const article of list) {
    const bucket = byYear.get(article.year);
    if (bucket) {
      bucket.push(article);
    } else {
      byYear.set(article.year, [article]);
    }
  }
  return Array.from(byYear.entries()).sort((a, b) => b[0] - a[0]);
}
