import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import styles from './VisitorCounterStyles.module.css';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get visitor count from localStorage
    const currentCount = localStorage.getItem('visitorCount');
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toDateString();

    if (!lastVisit || lastVisit !== today) {
      // New visitor or new day
      const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
      localStorage.setItem('visitorCount', newCount.toString());
      localStorage.setItem('lastVisit', today);
      setVisitorCount(newCount);
    } else {
      // Returning visitor same day
      setVisitorCount(currentCount ? parseInt(currentCount) : 1);
    }
  }, []);

  return (
    <div className={styles.visitorCounter}>
      <Eye size={16} />
      <span className={styles.count}>{visitorCount.toLocaleString()}</span>
      <span className={styles.label}>visitors</span>
    </div>
  );
}

export default VisitorCounter;