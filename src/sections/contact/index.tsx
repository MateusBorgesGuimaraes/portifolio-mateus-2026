import { useTranslation } from "react-i18next";
import Dec from "../../components/dec";
import { SectionTitle } from "../../components/sectionTitle";
import styles from "./styles.module.css";

export default function Contact() {
  const { t } = useTranslation();

  const contacts = [
    {
      label: "mateusguimaraes717@gmail.com",
      value: "email",
      href: "mailto:mateusguimaraes717@gmail.com",
      aria: t("contactEmailAria"),
    },
    {
      label: t("contactLinkedinLabel"),
      value: "linkedin",
      href: "https://www.linkedin.com/in/mateus-borges-11ab522b8",
      aria: t("contactLinkedinAria"),
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <SectionTitle>{t("contactTitle")}</SectionTitle>

      <ul>
        {contacts.map((c) => (
          <li key={c.value}>
            <Dec sizeDec="sm" />
            <a href={c.href} aria-label={c.aria}>
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
