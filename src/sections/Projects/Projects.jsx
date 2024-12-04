import styles from './ProjectsStyles.module.css';
import TheBus from '../../assets/the-bus.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={StyleSheet.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
       <ProjectCard 
       src={TheBus} 
       link="https://github.com/FergusShort/THE-BUS"
       h3="The Bus"
       p="Drinking Card Game"
       />
      </div>
    </section>
  );
}

export default Projects;
