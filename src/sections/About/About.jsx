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
    // Calculate years since March 2023
    const currentDate = new Date();
    const startDate = new Date(2023, 2, 1); // March 1, 2023 (month is 0-indexed)
    const diffTime = currentDate - startDate;
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    const yearsExperience = Math.floor(diffYears);
    
    // Count projects from Projects section (you have 7 projects currently)
    const projectsCompleted = 7;
    
    // Count skills from Skills section (count all unique skills)
    const skillsLearned = 30; // Based on your current skills list
    
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
                I&apos; m a passionate Computer Science student at the University of Otago, 
                currently pursuing my Bachelor of Science degree. My journey in technology 
                began with curiosity and has evolved into a deep love for creating 
                innovative solutions through code.
              </p>
            </div>

            <div className={styles.journey}>
              <h3>My Journey</h3>
              <p>
                From building my first website about birds to developing complex 
                software applications, I&apos;ve been constantly pushing myself to learn 
                and grow. I thrive on challenges and enjoy working both independently 
                and as part of a team to bring ideas to life.
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