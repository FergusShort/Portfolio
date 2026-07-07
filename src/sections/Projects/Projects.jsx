import styles from './ProjectsStyles.module.css';
import TheBus from '../../assets/the-bus.png';
import TheBus2 from '../../assets/the-bus2.png';
import TheBus3 from '../../assets/the-bus3.png';
import birds1 from '../../assets/birds-1.png';
import ANDIE from '../../assets/ANDIE.png';
import ProjectCard from '../../common/ProjectCard';
import favicon from '/favicon.ico';
import COSC360 from '../../assets/COSC360.png';
import COSC360_2 from '../../assets/COSC360-2.png';
import COSC360_3 from '../../assets/COSC360-3.png';
import COSC360_4 from '../../assets/COSC360-4.png';
import COSC360_5 from '../../assets/COSC360-5.png';
import SharedSpace from '../../assets/SharedSpace.png';
import Simmer from '../../assets/Simmer.png';
import Simmer2 from '../../assets/Simmer2.png';
import Simmer3 from '../../assets/Simmer3.png';
import TaskRoulette from '../../assets/TaskRoulette.png';

function Projects() {
  const projects = [
    {
      images: [TheBus, TheBus2, TheBus3],
      link: "https://github.com/FergusShort/THE-BUS",
      h3: "The Bus",
      p: "Party Card Game designed for students",
    },
    {
      images: [Simmer, Simmer2, Simmer3],
      link: "https://github.com/FergusShort/simmer",
      h3: "Simmer",
      p: "A personal macOS app that organises recipes and generates shopping lists",
    },
    {
      images: [TaskRoulette],
      link: "https://github.com/FergusShort/FocusRoulette",
      h3: "Task Roulette",
      p: "A fun app that randomly selects a task to help you decide what to work on",
    },
    {
      images: [ANDIE],
      link: "https://github.com/FergusShort/ANDIE",
      h3: "ANDIE",
      p: "A non-destructive image editor and first group software project",
    },
    {
      images: [COSC360, COSC360_2, COSC360_3, COSC360_4, COSC360_5],
      link: "https://cosc360.otago.ac.nz/games/2025/EclipseOfDunedin",
      h3: "Eclipse of Dunedin",
      p: "A video game created for COSC360",
    },
    {
      images: [SharedSpace],
      link: "https://github.com/FergusShort/INFO310-SharedSpace/settings",
      h3: "Shared Space",
      p: "A flat management system created as an INFO310 group project",
    },
    {
      images: [birds1],
      link: "https://github.com/FergusShort/Birds-Website-1",
      h3: "Birds Website",
      p: "The first website I ever made",
    },
    {
      images: [favicon],
      link: "https://github.com/FergusShort/Portfolio",
      h3: "Portfolio Website",
      p: "This website, built to show my work and background",
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard key={project.h3} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
