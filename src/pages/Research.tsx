import { motion } from "framer-motion";
import { ExternalLink, FlaskConical, ScrollText, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CalloutBand } from "@/components/shared/CalloutBand";
import { SPEAKING_EMAIL } from "@/data/profile";

const projects = [
  {
    icon: Users,
    title: "CHAOSS DEI Interview Campaign",
    status: "CHAOSS",
    paragraphs: [
      "We launched an interview campaign to help us evaluate the impact of diversity, equity, and inclusion (DEI) metrics among underrepresented groups in open-source communities.",
      "What came out of it was less a scorecard and more a map of the social barriers people run into long before a metric ever picks them up.",
    ],
    outcomes: [
      "Interviews with contributors from underrepresented groups",
      "Evaluation of DEI metrics already in use",
      "Findings published through CHAOSS",
    ],
    links: [
      {
        label: "Read the report",
        href: "https://www.chaoss.community/unveiling-the-impact-dei-metrics-overcoming-social-barriers-in-open-source/",
      },
    ],
  },
  {
    icon: ScrollText,
    title: "Beyond Adoption: Examining the Evolution and Impact of Codes of Conduct on Open-Source Communities",
    status: "ICSE 2026",
    paragraphs: [
      "To bridge the gaps in what we know about Codes of Conduct, our study compiles a large-scale dataset of CoCs along with their change histories in OSS repositories on GitHub. We use it to quantitatively understand how CoC content evolves and identify change patterns across different communities, and to investigate the potential impact of CoC adoption on community engagement.",
      "Our results show that OSS communities with a CoC attract more new contributors and, over the long term, see fewer existing contributors disengage. The insights offer guidance on best practices for maintaining CoCs in OSS communities, and statistically significant evidence of their impact.",
    ],
    outcomes: [
      "Large-scale dataset of CoCs and their change histories",
      "Change patterns identified across communities",
      "Measured effect on contributor growth and retention",
      "Accepted to the ICSE 2026 research track",
    ],
    links: [
      {
        label: "Paper details",
        href: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/226/Beyond-Adoption-Examining-the-Evolution-and-Impact-of-Codes-of-Conduct-on-Open-Sourc",
      },
      {
        label: "Read the PDF",
        href: "https://jys-sun.github.io/website/resources/ICSE26.pdf",
      },
    ],
  },
];

export default function Research() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Research"
            title="Research I'm part of"
            description="I like questions that don't resolve into a blog post. These are the studies where I've dug into open-source sustainability, DEI, and what actually keeps contributors around."
          />

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h2 className="text-xl font-bold">{project.title}</h2>
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {project.status}
                          </span>
                        </div>
                        <div className="space-y-4">
                          {project.paragraphs.map((paragraph) => (
                            <p key={paragraph.slice(0, 40)} className="body-base">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-4 text-sm">What came of it:</p>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2 mt-4">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                        >
                          {link.label} <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Call to collaborate */}
          <div className="mt-16">
            <CalloutBand
              icon={FlaskConical}
              title="Working on something similar?"
              description="Open-source communities, DEI in tech, developer experience. If you have a question you can't answer yet, I'd like to hear it."
              actionLabel="Get in touch"
              href={`mailto:${SPEAKING_EMAIL}`}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
