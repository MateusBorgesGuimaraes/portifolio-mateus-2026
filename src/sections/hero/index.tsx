import { FileDownIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import ButtonLink from "../../components/buttonLink";
import Dec from "../../components/dec";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.imageContainer}`}>
        <div className={`${styles.box1}`}>
          <img
            src="/mateus.png"
            alt="Foto de Mateus Borges e Guimarães"
            loading="lazy"
          />
        </div>
      </div>
      <div className={`${styles.infosContainer}`}>
        <div className={`${styles.name}`}>
          <Dec />
          <h2>Mateus Borges e Guimarães</h2>
        </div>
        <h3>{t("subtitleHero")}</h3>
        <p>{t("description")}</p>
        <div className={`${styles.btns}`}>
          <ButtonLink variant="github" sizes="md" href="#">
            <img src="/github.svg" />
            github
          </ButtonLink>
          <ButtonLink variant="linkedin" sizes="md" href="#">
            <img src="/linkedin.svg" />
            linkedin
          </ButtonLink>
          <ButtonLink variant="default" sizes="md" href="#">
            <FileDownIcon color="#fff" />
            CV
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
