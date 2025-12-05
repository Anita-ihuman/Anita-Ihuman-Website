import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { TalkCard } from "@/components/cards/TalkCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const categories = ["All", "Conference", "YouTube", "Podcast", "Workshop", "Panel"];

const talks = [
  {
    title: "Building Inclusive Open Source Communities",
    event: "KubeCon NA 2024",
    date: "Nov 2024",
    type: "video" as const,
    link: "https://youtube.com",
    category: "Conference",
  },
  {
    title: "Developer Experience in Cloud-Native Ecosystems",
    event: "Open Source Summit Europe",
    date: "Oct 2024",
    type: "video" as const,
    link: "https://youtube.com",
    category: "Conference",
  },
  {
    title: "The Future of DevRel: Trends and Predictions",
    event: "DevRelCon London",
    date: "Sep 2024",
    type: "video" as const,
    link: "https://youtube.com",
    category: "Conference",
  },
  {
    title: "Kubernetes Policy Management Best Practices",
    event: "Cloud Native Rejekts",
    date: "Aug 2024",
    type: "slides" as const,
    link: "https://speakerdeck.com",
    category: "Workshop",
  },
  {
    title: "Breaking Into Developer Relations",
    event: "DevRel Podcast",
    date: "Jul 2024",
    type: "podcast" as const,
    link: "https://spotify.com",
    category: "Podcast",
  },
  {
    title: "Open Source Governance and Sustainability",
    event: "All Things Open",
    date: "Jun 2024",
    type: "video" as const,
    link: "https://youtube.com",
    category: "Conference",
  },
  {
    title: "Women in Open Source: Panel Discussion",
    event: "FOSDEM 2024",
    date: "Feb 2024",
    type: "video" as const,
    link: "https://youtube.com",
    category: "Panel",
  },
  {
    title: "Community Metrics That Matter",
    event: "CHAOSScon",
    date: "Jan 2024",
    type: "video" as const,
    link: "https://youtube.com",
    category: "Conference",
  },
  {
    title: "Technical Writing for Developers",
    event: "Write the Docs",
    date: "Dec 2023",
    type: "slides" as const,
    link: "https://speakerdeck.com",
    category: "Workshop",
  },
  {
    title: "The Role of DevRel in Startup Growth",
    event: "Startup Podcast",
    date: "Nov 2023",
    type: "podcast" as const,
    link: "https://spotify.com",
    category: "Podcast",
  },
];

const youtubeVideos = [
  {
    title: "What is Developer Relations? A Complete Guide",
    channel: "DevRel Academy",
    date: "Oct 2024",
    link: "https://youtube.com",
  },
  {
    title: "Building Communities at Scale - Interview with Anita Ihuman",
    channel: "Cloud Native TV",
    date: "Sep 2024",
    link: "https://youtube.com",
  },
  {
    title: "Kubernetes for Beginners Workshop",
    channel: "CNCF",
    date: "Aug 2024",
    link: "https://youtube.com",
  },
  {
    title: "Open Source Sustainability Panel",
    channel: "Open Source Summit",
    date: "Jul 2024",
    link: "https://youtube.com",
  },
  {
    title: "Technical Writing Tips for Developers",
    channel: "Write the Docs",
    date: "Jun 2024",
    link: "https://youtube.com",
  },
  {
    title: "Women in Tech: Breaking Barriers",
    channel: "She Code Africa",
    date: "May 2024",
    link: "https://youtube.com",
  },
];

export default function Talks() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTalks = activeCategory === "All"
    ? talks
    : activeCategory === "YouTube"
    ? []
    : talks.filter(talk => talk.category === activeCategory);

  const showYouTube = activeCategory === "All" || activeCategory === "YouTube";

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Talks & Engagements"
            title="Speaking & Media"
            description="Conference talks, podcast interviews, YouTube appearances, workshops, and panel discussions on DevRel, cloud-native, and open source."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Talks Grid */}
          {filteredTalks.length > 0 && (
            <div className="mb-16">
              <h3 className="heading-4 mb-6">Conference Talks & Podcasts</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredTalks.map((talk, index) => (
                  <TalkCard key={talk.title} {...talk} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* YouTube Section */}
          {showYouTube && (
            <div>
              <h3 className="heading-4 mb-6">YouTube Appearances</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {youtubeVideos.map((video, index) => (
                  <motion.a
                    key={video.title}
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group block"
                  >
                    <div className="relative aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mb-4 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{video.channel}</span>
                      <span>{video.date}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* YouTube CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="orange-outline" size="lg">
                    <ExternalLink className="w-5 h-5" />
                    View All Videos
                  </Button>
                </a>
              </motion.div>
            </div>
          )}

          {filteredTalks.length === 0 && !showYouTube && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No talks found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
