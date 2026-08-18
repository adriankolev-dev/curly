import Image from "next/image";
import Link from "next/link";
import { curly } from "../../../data/curly";

type LogoProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "white" | "ink";
};

const sizes = {
  sm: "h-12 w-[7.25rem] md:h-14 md:w-[8.5rem]",
  md: "h-16 w-40",
  lg: "h-28 w-52 md:h-36 md:w-64",
};

export function Logo({ href, size = "md", variant = "ink" }: LogoProps) {
  const src = variant === "white" ? curly.images.logoWhite : curly.images.logo;

  const mark = (
    <span className={`relative block ${sizes[size]}`}>
      <Image
        src={src}
        alt={curly.fullName}
        fill
        className="object-contain object-left"
        priority={size === "lg" || size === "sm"}
        sizes="(max-width: 768px) 160px, 256px"
      />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block shrink-0" aria-label={curly.fullName}>
        {mark}
      </Link>
    );
  }

  return mark;
}
