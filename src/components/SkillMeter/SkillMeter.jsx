import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './SkillMeterStyles.module.css';

function SkillMeter({ skill, percentage, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.skillMeter}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{skill}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </div>
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progress}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default SkillMeter;