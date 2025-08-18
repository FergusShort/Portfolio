import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart, Star, Rocket } from 'lucide-react';
import styles from './FloatingElementsStyles.module.css';

function FloatingElements() {
  const elements = [
    { Icon: Code, delay: 0, duration: 20 },
    { Icon: Palette, delay: 2, duration: 25 },
    { Icon: Zap, delay: 4, duration: 18 },
    { Icon: Heart, delay: 6, duration: 22 },
    { Icon: Star, delay: 8, duration: 24 },
    { Icon: Rocket, delay: 10, duration: 19 }
  ];

  return (
    <div className={styles.container}>
      {elements.map(({ Icon, delay, duration }, index) => (
        <motion.div
          key={index}
          className={styles.floatingElement}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ 
            y: '-100vh', 
            opacity: [0, 1, 1, 0],
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            left: `${10 + index * 15}%`,
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingElements;