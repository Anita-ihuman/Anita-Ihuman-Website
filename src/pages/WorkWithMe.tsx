import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ClipboardList, FileText, Megaphone, Mic, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ClientCard } from "@/components/cards/ClientCard";
import { SPEAKING_EMAIL, clients, testimonials } from "@/data/profile";

const services = [
  {
    icon: Megaphone,
    title: "Developer Advocacy",
    description:
      "I sit between your product and the developers using it: finding where they get stuck, telling the story that makes the product click, and bringing what I hear back to your team.",
  },
  {
    icon: Users,
    title: "Community Management",
    description:
      "I grow communities that people actually want to stay in: onboarding paths, contributor journeys, governance that holds up, and the day-to-day work of showing up for members.",
  },
  {
    icon: FileText,
    title: "Technical Content Writing",
    description:
      "Tutorials, guides, deep dives, and whitepapers I write by using your product first. If the docs are wrong or the flow is confusing, you'll hear it from me before your users do.",
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description:
      "Conference talks, workshops, podcasts, and webinars. I've spoken at over 30 conferences across four continents, and I tailor the talk to your audience rather than reusing a deck.",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description:
      "Getting-started guides, reference docs, and information architecture that lets someone go from landing page to working code without opening a support ticket.",
  },
  {
    icon: ClipboardList,
    title: "Program Management",
    description:
      "Ambassador programs, contributor programs, and event tracks: scoped, staffed, measured, and run end to end so they survive past the launch announcement.",
  },
];

const howIWork = [
  {
    step: "01",
    title: "We talk first",
    description:
      "Tell me what you're trying to move: adoption, retention, contributor growth, or a docs backlog that's grown legs. I'll be honest about whether I'm the right fit.",
  },
  {
    step: "02",
    title: "I scope it small",
    description:
      "We agree on a first piece of work with a clear outcome, so you see what working with me is like before committing to something big.",
  },
  {
    step: "03",
    title: "I ship and iterate",
    description:
      "You get work on a predictable cadence, plus what I learned along the way about how developers are experiencing your product.",
  },
];

export default function WorkWithMe() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6"
            >
              Work with me
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-1 mb-6"
            >
              Here's what I can take<br />
              <span className="text-primary">off your plate</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-large mb-10"
            >
              I work with developer-first teams on the unglamorous work that adoption actually
              depends on: content people trust, docs that answer the real question, and
              communities that keep going when nobody is watching. Pick the piece you need, or
              tell me the problem and I'll tell you where I'd start.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href={`mailto:${SPEAKING_EMAIL}`}>
                <Button variant="orange" size="lg">
                  Get in touch
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            tag="Services"
            title="What I offer"
            description="Six things I do well. Most engagements are some combination of two or three."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Process"
            title="How working together usually goes"
            description="No long discovery phase before anything useful happens."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howIWork.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-7 bg-card rounded-2xl border border-border"
              >
                <span className="text-3xl font-semibold text-primary/30">{phase.step}</span>
                <h3 className="heading-4 mt-4 mb-3">{phase.title}</h3>
                <p className="body-base">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            tag="Clients"
            title="Teams I've done this for"
            description="A few of the companies that have brought me in."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clients.map((client, index) => (
              <ClientCard key={client.name} {...client} index={index} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-7 rounded-2xl border border-primary/20 bg-primary/5"
              >
                <blockquote className="text-foreground leading-relaxed mb-4">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{testimonial.author}</span>,{" "}
                  {testimonial.role}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-3 mb-3">Tell me what you're working on</h2>
            <p className="body-base mb-8">
              Send me the messy version. I'd rather hear the actual problem than a polished brief.
            </p>
            <a href={`mailto:${SPEAKING_EMAIL}`}>
              <Button variant="orange" size="lg">
                Get in touch
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
