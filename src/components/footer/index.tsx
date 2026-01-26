import styles from "./styles.module.css";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={`${styles.footer} `}>
      <h3>© {year} MATEUS BORGES GUIMARÃES</h3>
    </footer>
  );
}
