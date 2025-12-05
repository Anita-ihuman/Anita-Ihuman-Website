import { motion } from "framer-motion";
import { Play, ExternalLink, Calendar, MapPin } from "lucide-react";

interface TalkCardProps {
  title: string;
  event: string;
  date: string;
  type: "video" | "podcast" | "slides" | "appearance";
  link: string;
  index: number;
}

export function TalkCard({ title, event, date, type, link, index }: TalkCardProps) {
  const getTypeIcon = () => {
    switch (type) {
      case "video":
      case "podcast":
        return <Play className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "video":
        return "Watch";
      case "podcast":
        return "Listen";
      case "slides":
        return "View Slides";
      default:
        return "Learn More";
    }
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {event}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          {getTypeIcon()}
          <span className="text-sm font-medium hidden sm:inline">{getTypeLabel()}</span>
        </div>
      </div>
    </motion.a>
  );
}
