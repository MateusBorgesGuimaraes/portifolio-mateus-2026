import ButtonLink from "../buttonLink";
import styles from "./styles.module.css";

type ProjectCardProps = {
  imageUrl: string;
  alt: string;
  title: string;
  content: string;
  githubLink: string;
  youtubeLink: string;
};

export default function ProjectCard({
  imageUrl,
  alt,
  title,
  content,
  githubLink,
  youtubeLink,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img alt={alt} src={imageUrl} />
      </div>
      <h4>{title}</h4>
      <p>{content}</p>
      <div className={styles.btns}>
        <ButtonLink href={githubLink} sizes="sm" variant="github">
          <img src="/github.svg" />
          github
        </ButtonLink>
        <ButtonLink href={youtubeLink} sizes="sm" variant="youtube">
          <img src="/youtube.svg" />
          youtube
        </ButtonLink>
      </div>
    </div>
  );
}
