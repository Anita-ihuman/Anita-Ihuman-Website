interface PortraitFrameProps {
  /** Path without extension, e.g. "/anita-home". A .webp and .jpg sibling must exist. */
  src: string;
  alt: string;
  className?: string;
  /** Set for above-the-fold images so they aren't lazy-loaded. */
  eager?: boolean;
}

/**
 * Portrait in a rounded frame with the offset accent block used across the site.
 * Serves WebP with a JPEG fallback, and carries explicit dimensions so the
 * reserved space matches the rendered 4:5 crop and nothing shifts on load.
 */
export function PortraitFrame({ src, alt, className = "", eager = false }: PortraitFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <picture>
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img
          src={`${src}.jpg`}
          alt={alt}
          width={1200}
          height={1500}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="w-full aspect-[4/5] object-cover object-center rounded-2xl"
        />
      </picture>
      <div className="absolute -bottom-5 -right-5 w-24 h-24 md:w-28 md:h-28 bg-primary rounded-2xl -z-10" />
    </div>
  );
}
