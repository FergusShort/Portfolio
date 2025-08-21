import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import styles from './ProjectRatingStyles.module.css';

function ProjectRating({ projectName }) {
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [recentReviews, setRecentReviews] = useState([]);
  const [hasRated, setHasRated] = useState(false);

  useEffect(() => {
    // Load existing ratings from localStorage
    const ratingsKey = `ratings_${projectName}`;
    const reviewsKey = `reviews_${projectName}`;
    const savedRatings = localStorage.getItem(ratingsKey);
    const savedReviews = localStorage.getItem(reviewsKey);
    const userRatingKey = `user_rated_${projectName}`;
    const userHasRated = localStorage.getItem(userRatingKey);

    if (savedRatings) {
      const ratings = JSON.parse(savedRatings);
      const total = ratings.reduce((sum, r) => sum + r, 0);
      setAverageRating(total / ratings.length);
      setTotalRatings(ratings.length);
    }

    if (savedReviews) {
      const reviews = JSON.parse(savedReviews);
      setRecentReviews(reviews.slice(-3)); // Get last 3 reviews
    }
    if (userHasRated) {
      setHasRated(true);
      setRating(parseInt(userHasRated));
    }
  }, [projectName]);

  const handleRating = (newRating, userReview = '') => {
    if (hasRated) return;

    const ratingsKey = `ratings_${projectName}`;
    const reviewsKey = `reviews_${projectName}`;
    const userRatingKey = `user_rated_${projectName}`;
    
    // Get existing ratings
    const savedRatings = localStorage.getItem(ratingsKey);
    const savedReviews = localStorage.getItem(reviewsKey);
    const ratings = savedRatings ? JSON.parse(savedRatings) : [];
    const reviews = savedReviews ? JSON.parse(savedReviews) : [];
    
    // Add new rating
    ratings.push(newRating);
    
    // Add user review if provided
    if (userReview.trim()) {
      reviews.push({
        rating: newRating,
        review: userReview.trim(),
        date: new Date().toLocaleDateString()
      });
    }
    
    // Save to localStorage
    localStorage.setItem(ratingsKey, JSON.stringify(ratings));
    localStorage.setItem(reviewsKey, JSON.stringify(reviews));
    localStorage.setItem(userRatingKey, newRating.toString());
    
    // Update state
    const total = ratings.reduce((sum, r) => sum + r, 0);
    setAverageRating(total / ratings.length);
    setTotalRatings(ratings.length);
    setRecentReviews(reviews.slice(-3));
    setRating(newRating);
    setHasRated(true);
    setReviewText('');
  };

  const handleSubmitRating = () => {
    if (rating > 0) {
      handleRating(rating, reviewText);
    }
  };

  return (
    <div className={styles.projectRating}>
      <div className={styles.ratingSection}>
        <span className={styles.label}>Rate this project:</span>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`${styles.star} ${star <= rating ? styles.filled : ''} ${hasRated ? styles.disabled : ''}`}
              onClick={() => setRating(star)}
              disabled={hasRated}
            >
              <Star size={16} />
            </button>
          ))}
        </div>
        {!hasRated && rating > 0 && (
          <div className={styles.reviewInput}>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Leave a review (optional, max 50 chars)..."
              maxLength={50}
              rows={3}
            />
            <button 
              className={styles.submitButton}
              onClick={handleSubmitRating}
            >
              Submit Rating
            </button>
          </div>
        )}
      </div>
      
      {totalRatings > 0 && (
        <div className={styles.averageSection}>
          <div className={styles.averageStars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                className={`${styles.averageStar} ${star <= Math.round(averageRating) ? styles.filled : ''}`}
              />
            ))}
          </div>
          <span className={styles.averageText}>
            {averageRating.toFixed(1)} ({totalRatings} rating{totalRatings !== 1 ? 's' : ''})
          </span>
        </div>
      )}
      
      {recentReviews.length > 0 && (
        <div className={styles.reviewsSection}>
          <h4>Recent Reviews:</h4>
          {recentReviews.map((review, index) => (
            <div key={index} className={styles.review}>
              <div className={styles.reviewStars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    className={`${styles.reviewStar} ${star <= review.rating ? styles.filled : ''}`}
                  />
                ))}
              </div>
              <p className={styles.reviewText}>"{review.review}"</p>
              <span className={styles.reviewDate}>{review.date}</span>
            </div>
          ))}
        </div>
      )}
      {hasRated && (
        <span className={styles.thanksMessage}>Thanks for rating!</span>
      )}
    </div>
  );
}

export default ProjectRating;