import type { MarqueeOrg } from "@/data/profile";

interface LogoMarqueeProps {
  label: string;
  orgs: MarqueeOrg[];
}

/**
 * Continuously scrolling strip of organization marks, in the spirit of a "trusted by" row.
 * The track holds two identical copies and translates -50%, so the loop is seamless.
 * Scrolling pauses on hover, and stops entirely under prefers-reduced-motion.
 */
export function LogoMarquee({ label, orgs }: LogoMarqueeProps) {
  // Two copies: the animation shifts exactly one copy's width.
  const track = [...orgs, ...orgs];

  return (
    <div className="group">
      <p className="text-center text-sm text-muted-foreground mb-8">{label}</p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ul className="flex w-max items-center gap-12 md:gap-16 animate-marquee group-hover:[animation-play-state:paused]">
          {track.map((org, index) => (
            <li
              key={`${org.name}-${index}`}
              /* The second copy is decorative, so screen readers only hear the list once. */
              aria-hidden={index >= orgs.length}
              className="shrink-0"
            >
              {org.logo ? (
                <img
                  src={org.logo}
                  alt={org.name}
                  loading="lazy"
                  className="h-8 md:h-9 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="text-xl md:text-2xl font-semibold tracking-tight text-muted-foreground/70 hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                  {org.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
