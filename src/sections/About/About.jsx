import styles from './AboutStyles.module.css';
import { useState, useEffect } from 'react';
import ScrollableQuotes from '../../components/ScrollableQuotes/ScrollableQuotes';

function About() {
  const [stats, setStats] = useState({
    yearsExperience: 0,
    projectsCompleted: 0,
    skillsLearned: 0
  });

  useEffect(() => {
    const currentDate = new Date();
    const startDate = new Date(2023, 2, 1);
    const diffTime = currentDate - startDate;
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    const yearsExperience = Math.floor(diffYears);

    const projectsCompleted = 7;
    const skillsLearned = 36;

    setStats({
      yearsExperience,
      projectsCompleted,
      skillsLearned
    });
  }, []);

  return (
    <section id="about" className={styles.container}>
      <div className={styles.content}>
        <h1 className="sectionTitle">About Me</h1>

        <div className={styles.aboutGrid}>
          <div className={styles.textContent}>
            <div className={styles.intro}>
              <h3>Hello! I&apos;m Fergus Short</h3>
              <p>
                I&apos;m a passionate Computer Science & Software Engineering student at Otago University, 
                I enjoy learning anything I can about technology and software development. In my free time,
                I like watching basketball, spending time with friends and family, and trying new foods.
              </p>
            </div>

            {/* Education Section */}
            <div className={styles.education}>
              <h3>Education</h3>
              <div className={styles.logos}>
                <a target="_blank" rel="noopener noreferrer">
                  <img src="/images/wellingtoncollege.png" alt="Wellington College Logo" />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                  <img src="/images/otagouni.png" alt="Otago University Logo" />
                </a>
              </div>
              <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px', opacity: 0.9 }}>
                Wellington College: 2018 - 2022 | Otago University: 2023 - 2025
              </p>
            </div>

            <div className={styles.interests}>
              <h3>What Drives Me</h3>
              <ul>
                <li>🚀 Creating user-friendly web applications</li>
                <li>🎮 Game development and interactive experiences</li>
                <li>🤝 Collaborative software engineering projects</li>
                <li>📚 Continuous learning and skill development</li>
                <li>🌟 Turning complex problems into elegant solutions</li>
              </ul>
            </div>

            {/* Proudly Backing Section */}
            <div className={styles.proudlyBacking}>
              <h3>Proudly Backing</h3>
              <div className={styles.logos}>
                <a target="_blank" rel="noopener noreferrer">
                  <img src="/images/trailblazers.png" alt="Trailblazers Logo" />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                  <img src="/images/hurricanes.png" alt="Hurricanes Logo" />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                  <img src="/images/allblacks.png" alt="All Blacks Logo" />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                  <img src="/images/westrooster.png" alt="West Roosters Logo" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.statsCard}>
            <h3>Quick Stats</h3>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.number}>{stats.yearsExperience}+</span>
                <span className={styles.label}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>{stats.projectsCompleted}+</span>
                <span className={styles.label}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>{stats.skillsLearned}+</span>
                <span className={styles.label}>Skills Learned</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>∞</span>
                <span className={styles.label}>Passion for Learning</span>
              </div>
            </div>
          </div>
        </div>

        <ScrollableQuotes />
      </div>
    </section>
  );
}

export default About;
