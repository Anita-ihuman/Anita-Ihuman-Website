import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import type { Engagement } from "@/data/engagements";

interface EngagementRowProps {
  engagement: Engagement;
  index: number;
}

export function EngagementRow({ engagement, index }: EngagementRowProps) {
  return (
    <motion.a
      href={engagement.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex items-start gap-4 py-5 border-b border-border hover:border-primary/40 transition-colors"
    >
      <span className="hidden sm:inline-flex w-36 shrink-0 mt-0.5">
        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
          {engagement.type}
        </span>
      </span>
      <div className="flex-1">
        <h3 className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors">
          {engagement.title}
        </h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {engagement.event}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {engagement.date}
          </span>
          <span className="sm:hidden px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {engagement.type}
          </span>
        </div>
      </div>
      <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
    </motion.a>
  );
}
