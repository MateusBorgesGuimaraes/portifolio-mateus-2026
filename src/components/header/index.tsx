import {
  LanguagesIcon,
  MoonIcon,
  SunIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ToggleBtn from "../toggleBtn";
import { useTheme } from "../../hooks/useTheme";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ptbr" : "en";
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 48) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.fixedBtns} ${isFixed ? styles.fixed : ""}`}>
        <ToggleBtn onClickAction={toggleTheme}>
          {theme === "dark" ? <SunIcon size={24} /> : <MoonIcon size={24} />}
        </ToggleBtn>
        <ToggleBtn onClickAction={toggleLanguage}>
          <LanguagesIcon size={24} />
        </ToggleBtn>
      </div>

      <h1 className={`${styles.logo}`}>MBGuimaraes</h1>

      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul className={`${styles.list}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              <span className={styles.itemNumber}>1 - </span> {t("menu1")}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              <span className={styles.itemNumber}>2 - </span> {t("menu2")}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              <span className={styles.itemNumber}>3 - </span> {t("menu3")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              <span className={styles.itemNumber}>4 - </span> {t("menu4")}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
