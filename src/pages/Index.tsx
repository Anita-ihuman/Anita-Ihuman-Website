import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FileText, 
  MessageSquare, 
  Sparkles,
  Mic,
  Youtube,
  Users,
  BookOpen
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ClientCard } from "@/components/cards/ClientCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { HighlightCard } from "@/components/cards/HighlightCard";

const services = [
  {
    icon: Users,
    title: "Developer Relations Consulting",
    description: "Strategic guidance to build and scale developer communities, improve adoption, and create meaningful engagement programs.",
  },
  {
    icon: FileText,
    title: "Technical Writing",
    description: "Clear, engaging documentation, tutorials, and technical content that resonates with developers and drives product understanding.",
  },
  {
    icon: Sparkles,
    title: "Community Strategy",
    description: "Data-driven approaches to build inclusive, sustainable communities around open-source projects and developer tools.",
  },
  {
    icon: BookOpen,
    title: "Technical Content Support",
    description: "Comprehensive content strategy including blog posts, case studies, and developer guides that showcase your technology.",
  },
  {
    icon: Mic,
    title: "Speaking & Workshops",
    description: "Engaging talks and hands-on workshops at conferences, meetups, and corporate events on cloud-native and open-source topics.",
  },
];

const clients = [
  {
    name: "UpCloud",
    logo: "upcloud",
    role: "Developer Advocacy",
    description: "Led developer relations initiatives, created technical content, and built community engagement programs for cloud infrastructure.",
  },
  {
    name: "Hit Subscribe",
    logo: "hitsubscribe",
    role: "Technical Writing",
    description: "Produced high-quality technical articles and documentation for various technology companies and developer tools.",
  },
  {
    name: "API7",
    logo: "api7",
    role: "Content Strategy",
    description: "Developed content strategies and technical documentation for API gateway and cloud-native infrastructure solutions.",
  },
  {
    name: "HackMamba",
    logo: "hackmamba",
    role: "Community Building",
    description: "Contributed to community growth initiatives and developer education programs across Africa's tech ecosystem.",
  },
];

const testimonials = [
  {
    quote: "Anita's ability to translate complex technical concepts into accessible content is remarkable. Her work significantly boosted our developer engagement and community growth.",
    author: "Sarah Chen",
    role: "VP of Developer Relations",
    company: "UpCloud",
  },
  {
    quote: "Working with Anita transformed how we approach developer education. Her strategic insights and authentic communication style brought real results to our community initiatives.",
    author: "Michael Okonkwo",
    role: "CTO",
    company: "HackMamba",
  },
  {
    quote: "Anita's technical writing elevated our documentation to a new level. She understands what developers need and delivers content that truly helps them succeed.",
    author: "James Liu",
    role: "Head of Content",
    company: "API7",
  },
];

const highlights = [
  {
    icon: Mic,
    title: "50+ Speaking Engagements",
    description: "Keynotes and talks at KubeCon, Open Source Summit, All Things Open, and more.",
    link: "/talks",
    linkText: "View Talks",
  },
  {
    icon: FileText,
    title: "100+ Technical Articles",
    description: "Published on cloud-native, DevOps, Kubernetes, and community building topics.",
    link: "/blog",
    linkText: "Read Blog",
  },
  {
    icon: Youtube,
    title: "Featured on 20+ Shows",
    description: "YouTube appearances, podcast interviews, and panel discussions on DevRel.",
    link: "/youtube",
    linkText: "Watch Videos",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-light/30 via-transparent to-transparent" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                <Sparkles className="w-4 h-4" />
                Currently open for Developer Relations roles
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-1 mb-6"
            >
              Hi, I'm <span className="text-primary">Anita Ihuman</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6"
            >
              Senior Developer Advocate
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="body-large max-w-2xl mb-10"
            >
              I am an open-source leader, developer advocate, and community strategist with over five years of experience working at the intersection of cloud-native technologies, community building, and inclusivity in tech. From leading DevRel efforts at projects like mirrord and Kyverno to shaping governance at CHAOSS, OpenUK, and NumFOCUS, my work focuses on driving adoption, educating developers, and building sustainable open-source communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/about">
                <Button variant="hero" size="lg">
                  <FileText className="w-5 h-5" />
                  View Resume
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg">
                  <MessageSquare className="w-5 h-5" />
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            tag="Highlights"
            title="What I've Been Up To"
            description="A glimpse into my speaking engagements, writing, and media appearances."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <HighlightCard key={highlight.title} {...highlight} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Services"
            title="How I Can Help"
            description="Specialized services to help organizations build thriving developer communities and create impactful technical content."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/contact">
              <Button variant="orange" size="lg">
                Book a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            tag="Clients"
            title="Trusted By"
            description="Organizations I've had the privilege to work with and support their developer relations goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clients.map((client, index) => (
              <ClientCard key={client.name} {...client} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Testimonials"
            title="What People Say"
            description="Feedback from clients and collaborators I've had the pleasure of working with."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-2 mb-6">Let's Work Together</h2>
            <p className="text-background/70 text-lg mb-8">
              Ready to elevate your developer relations strategy or need help building a thriving community? I'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="orange" size="xl">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
