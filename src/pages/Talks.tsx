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
    title: "Leveling up the Kubernetes Development Experience with Remocal development",
    event: "Dev Fest Lagos",
    date: "Nov 2024",
    type: "video" as const,
    link: "https://www.youtube.com/watch?v=-MTVnTKz6Gg",
    category: "Conference",
  },
  {
    title: "Open Source DEI: Transitioning from Intentions to Impact", 
    event: "Open Source Summit North America",
    date: "June 2023",
    type: "video" as const,
    link: "https://youtu.be/QAfIxTjVNl8?si=WOr1_HVOOTlq8dqT",
    category: "Conference",
  },
  {
    title: "How Implicit Bias Affects Diversity and Inclusion in Open Source",
    event: "KubeCon + CloudNativeCon Europe",
    date: "May 2023",
    type: "video" as const,
    link: "https://www.youtube.com/watch?v=htjoBHaDLIk",
    category: "Conference",
  },
  {
    title: "Mirror Mirror on My local machine ",
    event: "Conf42",
    date: "September 2024",
    type: "video" as const,
    link: "https://www.youtube.com/watch?v=7JyQsPXh-uU",
    category: "Workshop",
  },
  {
    title: "Community Health Through CHAOSS with Anita Ihuman",
    event: "DevRel Podcast",
    date: "March 2024",
    type: "video" as const,
    link: "https://www.youtube.com/watch?v=R-kAzb-Wvis",
    category: "Podcast",
  },
  {
    title: "Quality onboarding: A ticket to a healthy open source experience",
    event: "Upstream 2022",
    date: "Jun 2022",
    type: "video" as const,
    link: "https://www.youtube.com/watch?v=VAv8OVXijw4",
    category: "Conference",
  },
  {
    title: "Quality Documentation: The Key to Open Source Grow",
    event: " DevConf.CZ",
    date: "January 2022",
    type: "video" as const,
    link: "https://www.youtube.com/watch?v=WKfUfUvY7Tk",
    category: "Conference",
  },
  {
    title: "DEI Metrics Overcoming Social Barriers in OSS",
    event: "CHAOSScast",
    date: "Jan 2024",
    type: "video" as const,
    link: "https://www.youtube.com/watch?v=zUGG2Y3sH2w&t=158s",
    category: "Podcast",
  },
  {
    title: "OSCA, Docs, and Burnout with Anita Ihuman and Atinuke Oluwabamikemi Kayode s",
    event: "Sustain OSS",
    date: "June 2024",
    type: "video" as const,
    link: "https://www.youtube.com/watch?v=azODMRP-mCw",
    category: "Panel",
  },
  {
    title: "AMA: Building Inclusive and Thriving Open Source Communities",
    event: "Chimoney",
    date: "October 2025",
    type: "video" as const,
    link: "https://www.youtube.com/watch?v=TLk_i81q3e8",
    category: "Panel",
  },
];

const youtubeVideos = [
  {
    title: "How Open Source Powers UNICEF’s Innovation | Ep. 6",
    channel: "Tech With Anita Ihuman",
    date: "September 2025",
    link: "https://youtu.be/9nVeKX5duxs?si=pq0XMVYpcaAjxync",
  },
  {
    title: "How Open Source is Empowering Next-Gen Researchers 🔍 | Ep. 5",
    channel: "Tech With Anita Ihuman",
    date: "July 2025",
    link: "https://www.youtube.com/watch?v=8wpJMhQ_qVU&t=36s",
  },
  {
    title: "Open Source in Data Science: A Data Scientist’s Guide to Open Source | Ep. 4",
    channel: "Tech With Anita Ihuman",
    date: "July 2025",
    link: "https://youtu.be/dQLAJlq5dsM?si=4RIzn96mx7cuhhql",
  },
  {
    title: "Open Source and Design: How to contribute to open source as a Product Designers | Ep. 3",
    channel:  "Tech With Anita Ihuman",
    date: "June 2025",
    link: "https://www.youtube.com/watch?v=bujFSNysipw&t=6s",
  },
  {
    title: "How microbiologists use open source to decode microbial life | Ep. 2",
    channel: "Tech With Anita Ihuman",
    date: "April 2025",
    link: "https://www.youtube.com/watch?v=7yii3zpOCbg&t=22s",
  },
  {
    title: "Open Source in Security: Is Open Source Less Secure? | Ep. 1",
    channel:  "Tech With Anita Ihuman",
    date: "March 2025",
    link: "https://www.youtube.com/watch?v=UvLGKg4W-UI&t=44s",
  },
];

// Helper: extract YouTube video ID from various YouTube URL formats
function getYouTubeId(url: string): string | null {
  try {
    // covers: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
    const reg = /(?:youtube(?:-nocookie)?\.com\/(?:.*v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i;
    const m = url.match(reg);
    return m ? m[1] : null;
  } catch (e) {
    return null;
  }
}

// VideoCard: shows thumbnail and replaces it with an embedded player when clicked
function VideoCard({ video, index }: { video: typeof youtubeVideos[number]; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const id = getYouTubeId(video.link);

  // If we couldn't parse an ID, fall back to a simple external link card
  if (!id) {
    return (
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
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{video.title}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{video.channel}</span>
          <span>{video.date}</span>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.div
      key={video.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-black">
        {!isPlaying ? (
          <>
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Play ${video.title}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-primary-foreground ml-1" />
              </div>
            </button>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{video.title}</h3>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{video.channel}</span>
        <span>{video.date}</span>
      </div>
    </motion.div>
  );
}

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
                {filteredTalks.map((talk, index) => {
                  // If this talk is a video and we can parse a YouTube ID, render an inline video card
                  if (talk.type === "video") {
                    const id = getYouTubeId(talk.link);
                    if (id) {
                      return (
                        <motion.div
                          key={talk.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.06 }}
                          className="group block"
                        >
                          <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-black">
                            <a href={talk.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                              <img
                                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                                alt={talk.title}
                                className="w-full h-full object-cover"
                              />
                            </a>
                          </div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{talk.title}</h3>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{talk.event}</span>
                            <span>{talk.date}</span>
                          </div>
                        </motion.div>
                      );
                    }
                  }

                  // Fallback: render the existing TalkCard for non-video or unparseable links
                  return <TalkCard key={talk.title} {...talk} index={index} />;
                })}
              </div>
            </div>
          )}

          {/* YouTube Section */}
          {showYouTube && (
            <div>
              <h3 className="heading-4 mb-6">Tech With Anita Ihuman</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {youtubeVideos.map((video, index) => (
                  <VideoCard key={video.title} video={video} index={index} />
                ))}
              </div>

              {/* YouTube CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <a href="https://www.youtube.com/@TechwithAnita/" target="_blank" rel="noopener noreferrer">
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
