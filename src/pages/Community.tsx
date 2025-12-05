import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Heart, Globe, Award, GitBranch, Shield } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const involvements = [
  {
    icon: Shield,
    title: "CHAOSS Governing Board",
    role: "Board Member",
    description: "Helping define metrics and standards for measuring open-source community health. Contributing to research on diversity, equity, and inclusion in open source.",
  },
  {
    icon: Globe,
    title: "NumFOCUS",
    role: "Board Member",
    description: "Supporting the fiscal sponsorship and sustainability of open-source scientific computing projects like NumPy, Pandas, and Jupyter.",
  },
  {
    icon: Award,
    title: "OpenUK",
    role: "Ambassador",
    description: "Advocating for open-source technology policy and education in the UK, promoting the adoption of open-source in government and enterprise.",
  },
  {
    icon: GitBranch,
    title: "Meshery",
    role: "Mentor",
    description: "Mentoring contributors and helping grow the community around this cloud-native management platform for service meshes.",
  },
  {
    icon: Users,
    title: "Layer5 Community",
    role: "Community Member",
    description: "Active contributor to the Layer5 open-source community, supporting cloud-native management and service mesh projects.",
  },
  {
    icon: Heart,
    title: "She Code Africa",
    role: "Mentor",
    description: "Mentoring women in tech across Africa, helping them break into software development and open-source contribution.",
  },
];

const impactStats = [
  { number: "10+", label: "Open Source Projects" },
  { number: "50+", label: "Mentees Supported" },
  { number: "1000+", label: "Community Members Reached" },
  { number: "5", label: "Governance Roles" },
];

export default function Community() {
  return (
    <Layout>

      {/* Involvements */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            title="My Open Source Involvement"
            description="Organizations and projects I'm proud to be part of."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {involvements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{item.role}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-3 mb-4">Interested in My Research?</h2>
            <p className="text-background/70 mb-8">
              Explore my research projects on community health, DEI metrics, and open-source sustainability.
            </p>
            <Link to="/research">
              <Button variant="orange" size="lg">
                View Research Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
