import { useTranslation } from "react-i18next";
import { useState } from "react";
import ProjectCard from "../../components/projectCard";
import { SectionTitle } from "../../components/sectionTitle";
import styles from "./styles.module.css";
import projectsInfos from "../../utils/projects-infos";
import Button from "../../components/button";
import { CircleEllipsisIcon } from "lucide-react";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();
  const displayedProjects = showAll ? projectsInfos : projectsInfos.slice(0, 4);

  return (
    <section id="projects" className={styles.projects}>
      <SectionTitle>{t("projects")}</SectionTitle>
      {displayedProjects.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          imageUrl={p.imageUrl}
          alt={p.alt}
          content={t(p.content)}
          githubLink={p.githubLink}
          youtubeLink={p.youtubeLink}
        />
      ))}
      <div className={styles.showButton}>
        <Button onClick={() => setShowAll(!showAll)}>
          <CircleEllipsisIcon />{" "}
          {showAll ? t("projectsBtn1") : t("projectsBtn2")}
        </Button>
      </div>
    </section>
  );
}
