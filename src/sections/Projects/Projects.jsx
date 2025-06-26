import styles from './ProjectsStyles.module.css';
import TheBus from '../../assets/the-bus.png';
import birds1 from '../../assets/birds-1.png';
import birds2 from '../../assets/birds-2.png';
import ANDIE from '../../assets/ANDIE.png';
import ProjectCard from '../../common/ProjectCard';
import favicon from '/favicon.ico';
import COSC360 from '../../assets/COSC360.png';
import SharedSpace from '../../assets/SharedSpace.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={TheBus} 
          link="https://github.com/FergusShort/THE-BUS"
          h3="The Bus"
          p="Drinking Card Game"
        />
        <ProjectCard 
          src={birds1} 
          link="https://github.com/FergusShort/Birds-Website-1"
          h3="Birds Website 1 (University Project)"
          p="First Ever Website I Made"
        />
        <ProjectCard 
          src={birds2} 
          link="https://github.com/FergusShort/Birds-Website-2"
          h3="Birds Website 2 (University Project)"
          p="Second Website I Made"
        />
        <ProjectCard 
          src={ANDIE} 
          link="https://github.com/FergusShort/ANDIE"
          h3="ANDIE (First Group Software Project)"
          p="A-NON-DESTRUCTIVE-IMAGE-EDITOR"
        />

          <ProjectCard 
          src={COSC360} 
          link="https://cosc360.otago.ac.nz/games/2025/EclipseOfDunedin"
          h3="Video Game: Eclipse of Dunedin"
          p="Created for COSC360"
        />

          <ProjectCard 
          src={SharedSpace} 
          link="https://github.com/FergusShort/INFO310-SharedSpace/settings"
          h3="Shared Space (Group Project)"
          p="Flat Management System for INFO310"
        />
        <ProjectCard 
          src={favicon} 
          link="https://github.com/FergusShort/Portfolio"
          h3="Portfolio Website"
          p="This Website !!!"
        />
      </div>
    </section>
  );
}

export default Projects;
