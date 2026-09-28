import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MessageSquare, Mic, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ArticleRow } from "@/components/shared/ArticleRow";
import { CalloutBand } from "@/components/shared/CalloutBand";
import { PortraitFrame } from "@/components/shared/PortraitFrame";
import { LogoMarquee } from "@/components/shared/LogoMarquee";
import { ClientCard } from "@/components/cards/ClientCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { EngagementRow } from "@/components/shared/EngagementRow";
import { featuredArticles } from "@/data/articles";
import { featuredEngagements } from "@/data/engagements";
import {
  SPEAKING_EMAIL,
  clients,
  committees,
  credentials,
  leadership,
  marqueeOrgs,
  projects,
  testimonials,
} from "@/data/profile";

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[78vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-light/30 via-transparent to-transparent" />
        <div className="container-custom relative py-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-full">
                <Sparkles className="w-4 h-4" />
                DevRel & Software Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-1 mb-5"
            >
              Hi, I'm <span className="text-primary">Anita Ihuman</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl space-y-4 mb-7"
            >
              <p className="text-lg md:text-xl font-medium text-foreground/85 leading-snug">
                I'm software evangelist. My work drives product growth and adoption, turns hard
                concepts into content people can actually learn from.
              </p>
              <p className="body-large">
                I build, write, and talk about open source, cloud tools, AI agents, and the
                infrastructure underneath it all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-8"
            >
              {credentials.map((credential) => (
                <span
                  key={credential}
                  className="px-3 py-1 text-xs md:text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
                >
                  {credential}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/work-with-me">
                <Button variant="hero" size="lg">
                  <ArrowRight className="w-5 h-5" />
                  Work with me
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg">
                  <MessageSquare className="w-5 h-5" />
                  Say hello
                </Button>
              </Link>
            </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-first lg:order-none mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
            >
              <PortraitFrame src="/anita-home" alt="Anita Ihuman" eager />
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      </section>

      {/* Trusted by */}
      <section className="pb-8 md:pb-12">
        <div className="container-custom">
          <LogoMarquee label="Trusted by teams at" orgs={marqueeOrgs} />
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            tag="Projects"
            title="What I'm building right now"
            description="Two things I'm putting my own time into, both aimed at making a confusing space easier to navigate."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 md:p-7 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  {project.tagline}
                </span>
                <h3 className="heading-4 mb-3">{project.name}</h3>
                <p className="body-base">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:gap-2 transition-all"
                  >
                    Take a look <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Writing"
            title="Things I've written lately"
            description="I write to figure things out, then publish so you don't have to figure them out from scratch."
            align="left"
          />
          <div className="max-w-4xl">
            {featuredArticles.map((article, index) => (
              <ArticleRow key={article.link} article={article} index={index} />
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Link to="/blog">
                <Button variant="orange-outline" size="lg">
                  Show more
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            tag="Speaking"
            title="Where I've been on stage"
            description="So far I've spoken at over 30 conferences across Africa, Europe, North America, and Asia. Here are five I'd point you to first."
            align="left"
          />
          <div className="max-w-4xl">
            {featuredEngagements.map((engagement, index) => (
              <EngagementRow key={engagement.link} engagement={engagement} index={index} />
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Link to="/talks">
                <Button variant="orange-outline" size="lg">
                  See all talks, podcasts & webinars
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking invitation */}
      <section className="pb-16 md:pb-20">
        <div className="container-custom">
          <CalloutBand
            icon={Mic}
            title="Want me to speak at your event?"
            description="Event, podcast, or video series. Tell me what you're putting together."
            actionLabel="Get in touch"
            href={`mailto:${SPEAKING_EMAIL}`}
          />
        </div>
      </section>


      {/* Leadership & Committees */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            tag="Leadership"
            title="Rooms where I help decide"
            description="Boards, advisory seats, and program committees I serve on."
          />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="heading-4 mb-6">Leadership</h3>
              <ul className="space-y-1">
                {leadership.map((role, index) => (
                  <motion.li
                    key={`${role.title}-${role.organization ?? index}`}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex flex-wrap items-baseline gap-x-2 py-3 border-b border-border"
                  >
                    <span className="font-medium text-foreground">{role.title}</span>
                    {role.organization && (
                      <span className="text-muted-foreground">· {role.organization}</span>
                    )}
                    {role.period && (
                      <span className="ml-auto text-sm text-primary font-medium">
                        {role.period}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="heading-4 mb-6">Committees</h3>
              <ul className="space-y-1">
                {committees.map((role, index) => (
                  <motion.li
                    key={`${role.title}-${role.organization ?? index}`}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex flex-wrap items-baseline gap-x-2 py-3 border-b border-border"
                  >
                    <span className="font-medium text-foreground">{role.title}</span>
                    {role.organization && (
                      <span className="text-muted-foreground">· {role.organization}</span>
                    )}
                    {role.period && (
                      <span className="ml-auto text-sm text-primary font-medium">
                        {role.period}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

         {/* Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            tag="Testimonials"
            title="What it's like working with me"
            description="In their words, not mine."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
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
            <h2 className="heading-3 mb-3">
              Let's build something <span className="accent-serif">together</span>
            </h2>
            <p className="body-base mb-8">
              A developer community that actually grows, content developers trust, or someone on
              stage who knows the subject. Tell me what you're working on.
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
