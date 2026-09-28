import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mic, Play } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { EngagementRow } from "@/components/shared/EngagementRow";
import { CalloutBand } from "@/components/shared/CalloutBand";
import { Button } from "@/components/ui/button";
import {
  engagementTypes,
  engagements,
  getYouTubeId,
  groupEngagementsByYear,
  youtubeVideos,
} from "@/data/engagements";
import { SPEAKING_EMAIL } from "@/data/profile";

/** Thumbnail that swaps itself for an embedded player once you hit play. */
function VideoCard({ video, index }: { video: (typeof youtubeVideos)[number]; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const id = getYouTubeId(video.link);

  if (!id) {
    return (
      <motion.a
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
        </div>
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {video.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{video.channel}</span>
          <span>{video.date}</span>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.div
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
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {video.title}
      </h3>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{video.channel}</span>
        <span>{video.date}</span>
      </div>
    </motion.div>
  );
}

export default function Talks() {
  const [activeType, setActiveType] = useState<string>("All");

  const filtered =
    activeType === "All"
      ? engagements
      : engagements.filter((engagement) => engagement.type === activeType);

  const grouped = groupEngagementsByYear(filtered);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Talks & Engagements"
            title="Talks, podcasts & webinars"
            description="I've spoken at over 30 conferences across Africa, Europe, North America, and Asia. Here's what's on the record, by year."
          />

          {/* Type filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {engagementTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeType === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Engagements by year */}
          <div className="max-w-4xl mx-auto space-y-16">
            {grouped.map(([year, yearEngagements]) => (
              <div key={year}>
                <div className="flex items-baseline gap-4 mb-2">
                  <h2 className="heading-3 text-primary">{year}</h2>
                  <span className="text-sm text-muted-foreground">
                    {yearEngagements.length}{" "}
                    {yearEngagements.length === 1 ? "engagement" : "engagements"}
                  </span>
                </div>
                <div>
                  {yearEngagements.map((engagement, index) => (
                    <EngagementRow
                      key={engagement.link}
                      engagement={engagement}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {grouped.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                Nothing in the “{activeType}” category yet. Try another filter.
              </p>
            </motion.div>
          )}

          {/* Speaking invitation */}
          <div className="max-w-4xl mx-auto mt-16">
            <CalloutBand
              icon={Mic}
              title="Want me to speak at your event?"
              description="Event, podcast, or video series. Tell me what you're putting together."
              actionLabel="Get in touch"
              href={`mailto:${SPEAKING_EMAIL}`}
            />
          </div>
        </div>
      </section>

      {/* My own channel */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            tag="My channel"
            title="Tech With Anita Ihuman"
            description="A series where I sit down with people using open source in places you wouldn't expect."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.map((video, index) => (
              <VideoCard key={video.link} video={video} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://www.youtube.com/@TechwithAnita/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="orange-outline" size="lg">
                <ExternalLink className="w-5 h-5" />
                Watch all episodes
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
