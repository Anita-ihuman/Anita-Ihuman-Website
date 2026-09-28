import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/data/articles";

interface ArticleRowProps {
  article: Article;
  index: number;
}

export function ArticleRow({ article, index }: ArticleRowProps) {
  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex items-start gap-4 md:gap-8 py-5 border-b border-border hover:border-primary/40 transition-colors"
    >
      <span className="hidden sm:block w-32 shrink-0 text-sm text-muted-foreground pt-1">
        {article.date}
      </span>
      <div className="flex-1">
        <h3 className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="body-base mt-2">{article.excerpt}</p>
        <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-muted-foreground">
          <span className="sm:hidden">{article.date}</span>
          <span className="sm:hidden">·</span>
          <span className="font-medium text-foreground/70">{article.source}</span>
          {article.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-secondary rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
    </motion.a>
  );
}
