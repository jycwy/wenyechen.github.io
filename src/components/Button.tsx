import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  children,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-accent text-background hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5",
    secondary:
      "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-background",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

