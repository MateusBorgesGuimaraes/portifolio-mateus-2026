import type { MouseEventHandler } from "react";
import styles from "./styles.module.css";

type ToggleBtnProps = {
  children: React.ReactNode;
  onClickAction: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ToggleBtn({ children, onClickAction }: ToggleBtnProps) {
  return (
    <button onClick={onClickAction} className={`${styles.toggleBtn}`}>
      {children}
    </button>
  );
}
