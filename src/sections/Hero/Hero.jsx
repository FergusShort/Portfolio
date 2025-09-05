import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';

function Hero() {

    const { theme } = useTheme();

    const twitterIcon = theme === 'light' ? twitterLight: twitterDark;
    const githubIcon = theme === 'light' ? githubLight: githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight: linkedinDark;

  const typingTexts = [
    "Software Engineering Student",
    "Computer Science Student", 
    "Full Stack Developer",
    "Problem Solver",
    "Creative Thinker"
  ];

  return (
    <section id="hero" className={styles.container}>
      <img
        className={styles.hero}
        src={heroImg}
        alt="Profile Picture of Fergus Short "
      />
      <div className={styles.info}>
        <h1>
          Fergus
          <br />
          Short
        </h1>
        <h2>
          <TypingAnimation texts={typingTexts} />
        </h2>
        <span>
          <a href="https://x.com" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/FergusShort" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/in/fergus-short" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p>
         Bachelor of Science at University of Otago
        </p>
        <a href={CV} download>
            <button className="hover"> Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
