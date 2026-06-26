type PhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function Photo({ src, alt, className = '' }: PhotoProps) {
  return (
    <figure className={`photo-frame ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}
