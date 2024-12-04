import styles from "./SkillsStyles.module.css";
import checkmarkLight from "../../assets/checkmark-light.svg";
import checkmarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "./SkillList";
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();

    const checkmarkIcon = theme === 'light' ? checkmarkLight: checkmarkDark;


  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle"> Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="HTML" />
        <SkillList src={checkmarkIcon} skill="CSS" />
        <SkillList src={checkmarkIcon} skill="Vue" />
        <SkillList src={checkmarkIcon} skill="React" />
        <SkillList src={checkmarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="Java" />
        <SkillList src={checkmarkIcon} skill="Python" />
        <SkillList src={checkmarkIcon} skill="PostgreSQL" />
        <SkillList src={checkmarkIcon} skill="CI" />
        <SkillList src={checkmarkIcon} skill="Determination" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="Git" />
        <SkillList src={checkmarkIcon} skill="Teamwork" />
        <SkillList src={checkmarkIcon} skill="Communication" />
        <SkillList src={checkmarkIcon} skill="Leadership" />
        <SkillList src={checkmarkIcon} skill="C" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
