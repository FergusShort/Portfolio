import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ScrollableQuotesStyles.module.css';

function ScrollableQuotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Hand-picked quotes - you can customize these
  const quotes = [
    {
      text: "I believe that great software is built not just with code, but with empathy, creativity, and a genuine desire to make people's lives better through technology.",
      author: "My Philosophy"
    },
    {
      text: "Every problem is an opportunity to learn something new and create something better.",
      author: "On Problem Solving"
    },
    {
      text: "The best code is not just functional, but readable, maintainable, and elegant.",
      author: "On Clean Code"
    },
    {
      text: "Collaboration and continuous learning are the keys to growth in technology.",
      author: "On Teamwork"
    },
    {
      text: "Innovation happens when curiosity meets determination and the willingness to fail forward.",
      author: "On Innovation"
    }
  ];

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => prev === 0 ? quotes.length - 1 : prev - 1);
  };

  // Auto-advance quotes every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextQuote, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.quotesContainer}>
      <button className={styles.quoteArrow} onClick={prevQuote} aria-label="Previous quote">
        <ChevronLeft size={20} />
      </button>
      
      <div className={styles.quoteContent}>
        <blockquote className={styles.quote}>
          "{quotes[currentQuoteIndex].text}"
        </blockquote>
        <cite className={styles.author}>— {quotes[currentQuoteIndex].author}</cite>
      </div>
      
      <button className={styles.quoteArrow} onClick={nextQuote} aria-label="Next quote">
        <ChevronRight size={20} />
      </button>
      
      <div className={styles.quoteIndicators}>
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentQuoteIndex ? styles.active : ''}`}
            onClick={() => setCurrentQuoteIndex(index)}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ScrollableQuotes;