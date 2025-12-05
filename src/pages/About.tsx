import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, ExternalLink, Award, Briefcase, GraduationCap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";

const milestones = [
  {
    year: "2024",
    title: "Senior Developer Advocate",
    description: "Leading DevRel initiatives at mirrord, focusing on cloud-native developer tools and community engagement.",
    type: "work",
  },
  {
    year: "2023",
    title: "NumFOCUS Board Member",
    description: "Elected to the board of NumFOCUS, supporting open-source scientific computing projects.",
    type: "achievement",
  },
  {
    year: "2023",
    title: "OpenUK Ambassador",
    description: "Recognized for contributions to open-source advocacy and policy in the UK tech ecosystem.",
    type: "achievement",
  },
  {
    year: "2022",
    title: "CHAOSS Governing Board",
    description: "Joined the governing board to help shape open-source community health metrics and standards.",
    type: "work",
  },
  {
    year: "2022",
    title: "Developer Advocate at Kyverno",
    description: "Built community programs and drove adoption for Kubernetes-native policy management.",
    type: "work",
  },
  {
    year: "2021",
    title: "Technical Writer & Community Builder",
    description: "Established expertise in technical content creation and community strategy across multiple organizations.",
    type: "work",
  },
];

const organizations = [
  { name: "mirrord", role: "Senior Developer Advocate" },
  { name: "Kyverno", role: "Developer Advocate" },
  { name: "CHAOSS", role: "Governing Board Member" },
  { name: "NumFOCUS", role: "Board Member" },
  { name: "OpenUK", role: "Ambassador" },
  { name: "Meshery", role: "Mentor" },
];

export default function About() {
  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5" />;
      case "achievement":
        return <Award className="w-5 h-5" />;
      default:
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                About Me
              </span>
              <h1 className="heading-1 mb-6">
                Building Communities,<br />
                <span className="text-primary">Empowering Developers</span>
              </h1>
              <p className="body-large mb-8">
                I'm Anita Ihuman, a Senior Developer Advocate passionate about the intersection of open-source technology, developer experience, and inclusive community building.
              </p>
              <Button variant="orange" size="lg">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-9xl font-bold text-primary/20">AI</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="My Journey"
              description="From curious developer to open-source leader"
              align="left"
            />
            <div className="space-y-6 body-base">
              <p>
                With over five years of experience in Developer Relations, I've dedicated my career to bridging the gap between complex technical solutions and the developers who use them. My journey began in software development, but I quickly discovered my passion for education, community building, and advocacy.
              </p>
              <p>
                Today, I focus on cloud-native technologies, Kubernetes, and the broader open-source ecosystem. I believe that technology is most powerful when it's accessible, inclusive, and community-driven. This philosophy guides everything I do, from writing documentation to speaking at conferences to shaping governance policies.
              </p>
              <p>
                My work at organizations like mirrord, Kyverno, CHAOSS, NumFOCUS, and OpenUK has given me unique insights into what makes developer communities thrive. I've learned that the best technical solutions come from diverse perspectives and that sustainable open-source projects are built on foundations of transparency and inclusion.
              </p>
              <p>
                Beyond my professional work, I'm deeply committed to advancing diversity, equity, and inclusion in tech. I actively mentor underrepresented developers, contribute to DEI research initiatives, and advocate for more inclusive practices in open-source governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Affiliations"
            title="Organizations I Work With"
            description="Proud to contribute to these amazing projects and communities."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {organizations.map((org, index) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
              >
                <p className="font-semibold text-foreground mb-1">{org.name}</p>
                <p className="text-xs text-muted-foreground">{org.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            tag="Timeline"
            title="Career Milestones"
            description="Key moments that shaped my professional journey."
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {getIcon(milestone.type)}
                    </div>
                    <div className="p-6 bg-card rounded-xl border border-border">
                      <span className="text-sm text-primary font-medium">{milestone.year}</span>
                      <h3 className="font-semibold text-lg mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-3 mb-4">Want to Learn More?</h2>
            <p className="body-base mb-8">
              Check out my blog for technical articles, or explore my talks and community contributions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/blog">
                <Button variant="orange" size="lg">
                  Read My Blog
                </Button>
              </Link>
              <Link to="/talks">
                <Button variant="outline" size="lg">
                  <ExternalLink className="w-5 h-5" />
                  View Talks
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
