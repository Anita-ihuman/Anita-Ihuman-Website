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
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Community"
            title="Open Source & Community Leadership"
            description="My journey in open source goes beyond code. It's about building sustainable communities, advocating for inclusivity, and shaping the future of collaborative development."
          />

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-2xl border border-border"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* DEI Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              tag="DEI Work"
              title="Diversity, Equity & Inclusion"
              description="Creating more inclusive spaces in tech and open source."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20"
            >
              <p className="body-base mb-6">
                My DEI work in open source focuses on creating equitable pathways for underrepresented contributors. Through research, mentorship, and policy advocacy, I work to ensure that open source is truly open to everyone.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Leading the CHAOSS DEI Interview Campaign to understand barriers in open source</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Collaborating with University of Toronto on Code of Conduct research</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Mentoring women in tech through She Code Africa and other programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Advocating for inclusive governance practices in open-source foundations</span>
                </li>
              </ul>
            </motion.div>
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
