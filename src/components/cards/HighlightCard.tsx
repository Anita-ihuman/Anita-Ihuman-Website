import { motion } from "framer-motion";
import { LucideIcon, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  linkText: string;
  index: number;
}

export function HighlightCard({ icon: Icon, title, description, link, linkText, index }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
      >
        {linkText}
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
