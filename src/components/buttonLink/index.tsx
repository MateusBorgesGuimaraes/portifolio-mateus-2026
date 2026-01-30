import React from "react";
import styles from "./styles.module.css";

type Size = "sm" | "md";
type Variant = "youtube" | "linkedin" | "github" | "default";

type ButtonLinkProps = {
  href: string;
  sizes?: Size;
  variant?: Variant;
  children: React.ReactNode;
  target?: "_blank" | "_self";
  rel?: string;
  download?: boolean;
};

export default function ButtonLink({
  href,
  sizes = "md",
  variant = "default",
  target = "_self",
  rel,
  children,
  download = false,
}: ButtonLinkProps) {
  return (
    <a
      download={download}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      className={`${styles.defaultStyles} ${styles[sizes]} ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
