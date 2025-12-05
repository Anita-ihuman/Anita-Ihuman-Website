import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Users, Shield, BarChart, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Users,
    title: "CHAOSS DEI Interview Campaign",
    status: "Ongoing",
    description: "A comprehensive research initiative to understand the barriers and enablers for diversity, equity, and inclusion in open-source communities through structured interviews with community members.",
    outcomes: [
      "Interviewed 50+ open-source contributors",
      "Identified key barriers to participation",
      "Developed recommendations for inclusive practices",
      "Published findings in CHAOSS reports",
    ],
    link: "https://chaoss.community",
  },
  {
    icon: Shield,
    title: "Code of Conduct Research",
    status: "Collaboration",
    description: "Research collaboration with the University of Toronto examining the effectiveness and implementation of Codes of Conduct in open-source projects.",
    outcomes: [
      "Analyzed CoC adoption across major projects",
      "Studied enforcement mechanisms",
      "Identified best practices",
      "Academic paper in progress",
    ],
    link: "https://utoronto.ca",
  },
  {
    icon: BarChart,
    title: "Community Health Metrics",
    status: "Contributing",
    description: "Contributing to the development and refinement of CHAOSS metrics for measuring open-source community health, with a focus on diversity and inclusion indicators.",
    outcomes: [
      "DEI metrics framework",
      "Event diversity badge",
      "Contributor lifecycle metrics",
      "Documentation contributions",
    ],
    link: "https://chaoss.community/metrics",
  },
  {
    icon: FileText,
    title: "DevRel Industry Research",
    status: "Ongoing",
    description: "Research into the evolving landscape of Developer Relations, including best practices, career paths, and the impact of DevRel on product adoption.",
    outcomes: [
      "Industry trend analysis",
      "Career guide for aspiring DevRels",
      "Best practices documentation",
      "Conference presentations",
    ],
    link: "#",
  },
];

export default function Research() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Research"
            title="Research Projects"
            description="Academic collaborations and community research initiatives focused on open-source sustainability, DEI, and developer experience."
          />

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 md:p-10 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {project.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-4 text-sm">Key Outcomes:</p>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:gap-2 transition-all"
                      >
                        Learn more <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Collaborate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20"
          >
            <h3 className="heading-3 mb-4">Interested in Collaboration?</h3>
            <p className="body-base max-w-xl mx-auto mb-8">
              I'm always open to research collaborations on open-source communities, DEI in tech, and developer experience. Let's create impact together.
            </p>
            <Link to="/contact">
              <Button variant="orange" size="lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
