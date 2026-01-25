import styles from "./styles.module.css";

type Size = "sm" | "md";
type Variant = "youtube" | "linkedin" | "github" | "default";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  sizes?: Size;
  variant?: Variant;
  children: React.ReactNode;
};

export default function Button({
  sizes = "md",
  variant = "default",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${styles.defaultStyles} ${styles[sizes]} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
