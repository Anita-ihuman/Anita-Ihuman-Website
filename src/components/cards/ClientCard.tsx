import { motion } from "framer-motion";

interface ClientCardProps {
  name: string;
  logo: string;
  role: string;
  description: string;
  index: number;
}

export function ClientCard({ name, logo, role, description, index }: ClientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="h-12 mb-6 flex items-center">
        <span className="text-2xl font-bold text-foreground">{name}</span>
      </div>
      <p className="text-primary font-medium text-sm mb-2">{role}</p>
      <p className="body-base">{description}</p>
    </motion.div>
  );
}
