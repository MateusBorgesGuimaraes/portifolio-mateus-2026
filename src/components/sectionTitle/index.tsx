import styles from "./styles.module.css";

type SectionTitleProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return <h1 className={styles.title}>{children}</h1>;
}
