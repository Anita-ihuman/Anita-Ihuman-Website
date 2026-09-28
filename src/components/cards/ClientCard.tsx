import { motion } from "framer-motion";
import type { Client } from "@/data/profile";

interface ClientCardProps extends Client {
  index: number;
}

export function ClientCard({ name, role, description, index }: ClientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 md:p-7 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-primary font-medium text-sm mb-3">{role}</p>
      <p className="body-base">{description}</p>
    </motion.div>
  );
}
