import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/sectionTitle";
import styles from "./styles.module.css";

export function Skills() {
  const { t } = useTranslation();
  const techs = [
    "REACT",
    "NEXT",
    "FIGMA",
    "NEST",
    "HTML",
    "CSS",
    "TANSTACK QUERY",
    "ZOD",
    "PROTOTYPING",
    "RESPONSIVE DESIGN",
    "TANSTACK ROUTER",
    "ACCESSIBILITY",
    "TAILWIND",
    "JAVASCRIPT",
    "ZUSTAND",
    "...",
  ];
  return (
    <section id="skills" className={styles.knowledge}>
      <SectionTitle>{t("skills")}</SectionTitle>
      <ul className={styles.tags}>
        {techs.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
