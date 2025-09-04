import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ScrollableQuotesStyles.module.css";

function ScrollableQuotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Hand-picked quotes - you can customize these
  const quotes = [
    {
      text: "Excellence is not an act, but a habit. We are what we repeatedly do.",
      author: "Aristotle",
    },
    {
      text: "The day I stopped worrying about stats was the day I started winning.",
      author: "Shaquille O'Neal",
    },
    {
      text: "Talent wins games, but teamwork and intelligence win championships.",
      author: "Michael Jordan",
    },
    {
      text: "If you don't fall how will you know what getting up is like?",
      author: "Steph Curry",
    },
    {
      text: "I Don't wanna be the next Michael Jordan, I only wanna be Kobe Bryant.",
      author: "Kobe Bryant",
    },
    {
      text: "Hard work beats talent when talent fails to work hard.",
      author: "Kevin Durant",
    },


    { text: "In anger, we should refrain both from speech and action.",
      author: "Pythagoras"
    },


    { text: "The two hardest things to say in life are hello for the first time and goodbye for the last.",
      author: "Unknown"
    },


    { text: "Those who do not understand true pain can never understand true peace.",
      author: "Nagato Uzumaki"
    },


    { text: "Ones reality might be another's illusion.",
      author: "Itachi Uchiha"
    },


    { text: "The truth does not change according to our ability to stomach it.",
      author: "Flannery O'Connor"
    },


    { text: "Nothing changes, if nothing changes.",
      author: "Unknown"
    },


    { text: "Never put off till tomorrow what you can do today.",
      author: "Sensei Wu"
    },


    { text: "No man ever steps in the same river twice, for it is not the same river, and he is not the same man",
      author: "Heraclitus"
    },
  ];

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  // Auto-advance quotes every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextQuote, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.quotesContainer}>
      <button
        className={styles.quoteArrow}
        onClick={prevQuote}
        aria-label="Previous quote"
      >
        <ChevronLeft size={20} />
      </button>

      <div className={styles.quoteContent}>
        <blockquote className={styles.quote}>
          &quot;{quotes[currentQuoteIndex].text}&quot;
        </blockquote>
        <cite className={styles.author}>
          — {quotes[currentQuoteIndex].author}
        </cite>
      </div>

      <button
        className={styles.quoteArrow}
        onClick={nextQuote}
        aria-label="Next quote"
      >
        <ChevronRight size={20} />
      </button>

      <div className={styles.quoteIndicators}>
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentQuoteIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentQuoteIndex(index)}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ScrollableQuotes;
