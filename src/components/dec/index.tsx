import styles from "./styles.module.css";

type DecProps = {
  sizeDec?: "md" | "sm";
};

export default function Dec({ sizeDec = "md" }: DecProps) {
  return <span className={`${styles.dec} ${styles[sizeDec]}`}></span>;
}
