import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalloutBandProps {
  title: string;
  description: string;
  actionLabel: string;
  /** External links (mailto:, https:) render an anchor; anything else routes internally. */
  href: string;
  icon?: LucideIcon;
  className?: string;
}

/** A slim one-line invitation with a single button. Deliberately quiet. */
export function CalloutBand({
  title,
  description,
  actionLabel,
  href,
  icon: Icon,
  className = "",
}: CalloutBandProps) {
  const isExternal = /^(mailto:|https?:)/.test(href);
  const action = (
    <Button variant="orange" size="default">
      {actionLabel}
    </Button>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 px-6 py-5 rounded-xl border border-border bg-card ${className}`}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div className="flex-1">
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <div className="shrink-0">
        {isExternal ? <a href={href}>{action}</a> : <Link to={href}>{action}</Link>}
      </div>
    </motion.div>
  );
}
