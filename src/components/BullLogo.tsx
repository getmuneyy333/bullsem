import Image from "next/image";

const LOGO_SRC = "/images/bullsemlogo.jpg";

type BullLogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
  fill?: boolean;
  sizes?: string;
};

export default function BullLogo({
  className = "",
  priority = false,
  alt = "Bullsem — Ansem's Bull on Solana",
  fill = false,
  sizes,
}: BullLogoProps) {
  if (fill) {
    return (
      <Image
        src={LOGO_SRC}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 480px"}
        className={`object-contain ${className}`}
      />
    );
  }

  return (
    <Image
      src={LOGO_SRC}
      alt={alt}
      width={600}
      height={600}
      priority={priority}
      className={className}
    />
  );
}

export { LOGO_SRC };
