import styles from './AboutStyles.module.css';

function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.content}>
        <h1 className="sectionTitle">About Me</h1>
        
        <div className={styles.aboutGrid}>
          <div className={styles.textContent}>
            <div className={styles.intro}>
              <h3>Hello! I'm Fergus Short</h3>
              <p>
                I'm a passionate Computer Science student at the University of Otago, 
                currently pursuing my Bachelor of Science degree. My journey in technology 
                began with curiosity and has evolved into a deep love for creating 
                innovative solutions through code.
              </p>
            </div>

            <div className={styles.journey}>
              <h3>My Journey</h3>
              <p>
                From building my first website about birds to developing complex 
                software applications, I've been constantly pushing myself to learn 
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
                <span className={styles.number}>3+</span>
                <span className={styles.label}>Years Coding</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>15+</span>
                <span className={styles.label}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>10+</span>
                <span className={styles.label}>Technologies Learned</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>∞</span>
                <span className={styles.label}>Passion for Learning</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.philosophy}>
          <blockquote>
            "I believe that great software is built not just with code, but with 
            empathy, creativity, and a genuine desire to make people's lives better 
            through technology."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default About;