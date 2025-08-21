import styles from "./SkillsStyles.module.css";
import checkmarkLight from "../../assets/checkmark-light.svg";
import checkmarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "./SkillList";
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();

    const checkmarkIcon = theme === 'light' ? checkmarkLight: checkmarkDark;

  return (
    <section id="skills" className={styles.container} style={{paddingTop: '100px'}}>
      <h1 className="sectionTitle"> Skills</h1>
      
      <div className={styles.skillList}>
  <SkillList src={checkmarkIcon} skill="HTML" />
  <SkillList src={checkmarkIcon} skill="CSS" />
  <SkillList src={checkmarkIcon} skill="Vue" />
  <SkillList src={checkmarkIcon} skill="React" />
  <SkillList src={checkmarkIcon} skill="JavaScript" />
  <SkillList src={checkmarkIcon} skill="TypeScript" />
</div>
<hr />
<div className={styles.skillList}>
  <SkillList src={checkmarkIcon} skill="Node.js" />
  <SkillList src={checkmarkIcon} skill="Express.js" />
  <SkillList src={checkmarkIcon} skill="Tailwind CSS" />
  <SkillList src={checkmarkIcon} skill="Java" />
  <SkillList src={checkmarkIcon} skill="Python" />
  <SkillList src={checkmarkIcon} skill="PostgreSQL" />
</div>
<hr />
<div className={styles.skillList}>
  <SkillList src={checkmarkIcon} skill="MySQL" />
  <SkillList src={checkmarkIcon} skill="CI/CD" />
  <SkillList src={checkmarkIcon} skill="Git" />
  <SkillList src={checkmarkIcon} skill="Docker" />
  <SkillList src={checkmarkIcon} skill="Agile Methodology" />
  <SkillList src={checkmarkIcon} skill="Scrum" />
</div>
<hr />
<div className={styles.skillList}>
  <SkillList src={checkmarkIcon} skill="Test-Driven Development (TDD)" />
  <SkillList src={checkmarkIcon} skill="Version Control" />
  <SkillList src={checkmarkIcon} skill="VS Code" />
  <SkillList src={checkmarkIcon} skill="Trello" />
  <SkillList src={checkmarkIcon} skill="Slack" />
  <SkillList src={checkmarkIcon} skill="GitHub Actions" />
</div>
<hr />
<div className={styles.skillList}>
  <SkillList src={checkmarkIcon} skill="UML Diagrams" />
  <SkillList src={checkmarkIcon} skill="User Stories" />
  <SkillList src={checkmarkIcon} skill="Prototyping" />
  <SkillList src={checkmarkIcon} skill="Linux" />
  <SkillList src={checkmarkIcon} skill="Ubuntu" />
  <SkillList src={checkmarkIcon} skill="Networking Protocols" />
</div>
<hr />
<div className={styles.skillList}>
  <SkillList src={checkmarkIcon} skill="C" />
  <SkillList src={checkmarkIcon} skill="Teamwork" />
  <SkillList src={checkmarkIcon} skill="Project Management" />
  <SkillList src={checkmarkIcon} skill="Communication" />
  <SkillList src={checkmarkIcon} skill="Leadership" />
  <SkillList src={checkmarkIcon} skill="Determination" />
</div>

      <hr />
    </section>
  );
}

export default Skills;
