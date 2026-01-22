import { useTranslation } from "react-i18next";
import Dec from "../../components/dec";
import styles from "./styles.module.css";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className={styles.about}>
      <div className={styles.titleSection}>
        <h1>{t("aboutTitle")}</h1>
      </div>
      <ul className={styles.list}>
        <li>
          <Dec />
          <p>{t("aboutP1")}</p>
        </li>
        <li>
          <Dec />
          <p>{t("aboutP2")}</p>
        </li>
        <li>
          <Dec />
          <p>{t("aboutP3")}</p>
        </li>
        <li>
          <Dec />
          <p>{t("aboutP4")}</p>
        </li>
      </ul>
    </section>
  );
}
