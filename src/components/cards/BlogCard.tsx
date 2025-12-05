import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  link: string;
  index: number;
}

export function BlogCard({ title, excerpt, date, tags, link, index }: BlogCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="text-sm text-muted-foreground">{date}</span>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <h3 className="heading-4 mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="body-base mb-4 line-clamp-2">{excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
