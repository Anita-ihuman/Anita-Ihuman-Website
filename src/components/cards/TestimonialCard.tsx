import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/profile";

interface TestimonialCardProps extends Testimonial {
  index: number;
}

export function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 md:p-7 bg-card rounded-2xl border border-border relative"
    >
      <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
      <blockquote className="text-foreground leading-relaxed mb-5 relative z-10">
        “{quote}”
      </blockquote>
      <figcaption className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-bold text-lg">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
