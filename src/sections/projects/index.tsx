import { useTranslation } from "react-i18next";
import { useState } from "react";
import ProjectCard from "../../components/projectCard";
import { SectionTitle } from "../../components/sectionTitle";
import styles from "./styles.module.css";
import projectsInfos from "../../utils/projects-infos";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();
  const displayedProjects = showAll ? projectsInfos : projectsInfos.slice(0, 4);

  return (
    <section className={styles.projects}>
      <SectionTitle>Projetos</SectionTitle>
      {displayedProjects.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          imageUrl={p.imageUrl}
          content={t(p.content)}
          githubLink={p.githubLink}
          youtubeLink={p.youtubeLink}
        />
      ))}
      <div className={styles.showButton}>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Mostrar menos" : "Mostrar mais"}
        </button>
      </div>
    </section>
  );
}
