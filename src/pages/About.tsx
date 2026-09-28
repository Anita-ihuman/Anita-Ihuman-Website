import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CalloutBand } from "@/components/shared/CalloutBand";

const RESUME_URL =
  "https://anitaihuman.notion.site/Anita-Ihuman-ae956025133140a9a6ce9615907733d3?source=copy_link";

const experience = [
  {
    role: "Community Lead & Board Member",
    org: "CHAOSS",
    location: "Remote",
    period: "July 2020 – Present",
    current: true,
    highlights: [
      "Leading the CHAOSS Africa chapter, planning and facilitating webinars, Twitter Spaces, and CHAOSS-focused events across Africa.",
      "Leading the research effort to measure the impact of CHAOSS DEI metrics among underrepresented groups.",
      "Chairing the Code of Conduct committee, and reviewing 100+ open-source events for the DEI Badging Program.",
    ],
  },
  {
    role: "Developer Advocate",
    org: "MetalBear",
    location: "Tel Aviv-Yafo, Israel",
    period: "Feb 2024 – May 2025",
    highlights: [
      "Built and executed a DevRel content and community strategy that drove 3× visibility growth and 300,000+ developer image downloads within six months.",
      "Designed, launched, and led a Writers Program whose cohort of external technical contributors drove a 100× increase in website traffic.",
      "Led the developer-facing launch strategy for mirrord for Teams, reaching #4 Product of the Day on Product Hunt.",
    ],
  },
  {
    role: "Community Manager",
    org: "Layer5",
    location: "Austin, Texas, US",
    period: "June 2020 – Oct 2024",
    highlights: [
      "Scaled the contributor ecosystem by designing an onboarding pipeline and personally mentoring 200+ new contributors through weekly technical meetups.",
      "Analysed contributor retention data to identify drop-off points, informing a revised onboarding flow that improved 90-day retention by 120%.",
      "Created and improved end-user documentation, release management guides, and community handbooks to improve the developer experience.",
    ],
  },
  {
    role: "Developer Advocate",
    org: "Nirmata (Kyverno)",
    location: "California, US",
    period: "Aug 2021 – Feb 2022",
    highlights: [
      "Facilitated the technical and community requirements for Kyverno's graduation to incubation level within the Cloud Native Computing Foundation.",
      "Piloted the Kyverno Certification Program, badging 200+ developers within 90 days of launch.",
      "Authored and maintained the release management guide and project governance docs, streamlining contribution for a community of 2,000+ members.",
    ],
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                About me
              </span>
              <h1 className="heading-1 mb-6">
                I build communities,
                <br />
                <span className="text-primary">and support the developers in them</span>
              </h1>
              <p className="body-large mb-8">
                I'm Anita, a DevRel, and software engineer. I spend my time
                where open-source technology, developer experience, and inclusive community
                building overlap, and I've never found that intersection boring.
              </p>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open my resume in a new tab"
                className="inline-block"
              >
            
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <img
                  src="/anita.jpeg"
                  alt="Anita Ihuman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="How I got here"
              description="From a curious developer to the rooms where open-source decisions get made"
              align="left"
            />
            <div className="space-y-6 body-base">
              <p>
                I started in software development, and I still write code, but somewhere along the
                way I realised the harder problem wasn't building the thing, it was closing the gap
                between a complex technical solution and the developer trying to use it at 11pm.
                That's the gap I've spent the last five-plus years working in.
              </p>
              <p>
                These days my attention sits on open source, cloud tools, AI agents, and the
                infrastructure underneath them. I think technology is at its most powerful when
                it's accessible, inclusive, and community-driven, and that belief shows up in
                everything from the docs I write to the talks I give to the governance policies I
                help shape.
              </p>
              <p>
                Working with MetalBear on mirrord, Kyverno at Nirmata, Layer5, CHAOSS, and NumFOCUS
                has shown me what actually makes a developer community thrive, and it's rarely the
                thing people expect. The best technical solutions come from a mix of perspectives,
                and the projects that last are the ones built on transparency and inclusion rather
                than heroics.
              </p>
              <p>
                Outside the job description, I care a lot about diversity, equity, and inclusion in
                tech. I chair a Code of Conduct committee, lead research into DEI metrics, mentor
                underrepresented developers, and keep pushing for more inclusive practices in
                open-source governance, including in the rooms where I have a seat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Experience"
            title="Career Milestones"
            description="Where I've done this, and what came out of it."
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((job, index) => (
              <motion.article
                key={`${job.org}-${job.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 md:p-7 bg-card rounded-2xl border border-border"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-2">
                  <h3 className="heading-4">{job.role}</h3>
                  <span className="text-primary font-semibold">{job.org}</span>
                  {job.current && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span>{job.period}</span>
                </div>
                <ul className="space-y-2.5">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="body-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <CalloutBand
              title="Want to dig deeper?"
              description="My writing is the fastest way to see how I think. My talks are the fastest way to hear it."
              actionLabel="Read my writing"
              href="/blog"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
