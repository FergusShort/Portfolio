import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

function ProjectCard({ src = "", images = [], link, h3, p }) {
  const projectImages = useMemo(() => {
    const imageList = images.length > 0 ? images : [src];

    return imageList
      .map((image) => {
        if (typeof image === "string") {
          return { src: image, alt: h3 };
        }

        return {
          alt: h3,
          ...image,
        };
      })
      .filter((image) => image.src);
  }, [h3, images, src]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeImage = projectImages[currentIndex];
  const hasMultipleImages = projectImages.length > 1;

  const showPreviousImage = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? projectImages.length - 1 : previousIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % projectImages.length);
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageShell}>
        <a
          className={styles.imageLink}
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${h3}`}
        >
          {activeImage ? (
            <img className={styles.image} src={activeImage.src} alt={activeImage.alt} />
          ) : (
            <span className={styles.imageFallback}>Project image coming soon</span>
          )}
        </a>

        {hasMultipleImages && (
          <>
            <button
              className={`${styles.carouselButton} ${styles.previousButton}`}
              type="button"
              onClick={showPreviousImage}
              aria-label={`Show previous ${h3} image`}
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              className={`${styles.carouselButton} ${styles.nextButton}`}
              type="button"
              onClick={showNextImage}
              aria-label={`Show next ${h3} image`}
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
            <span className={styles.imageCounter}>
              {currentIndex + 1}/{projectImages.length}
            </span>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className={styles.dots} aria-label={`${h3} image selector`}>
          {projectImages.map((image, index) => (
            <button
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
              type="button"
              key={`${image.src}-${index}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show ${h3} image ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className={styles.content}>
        <h3>{h3}</h3>
        <p>{p}</p>
        <a className={styles.projectLink} href={link} target="_blank" rel="noreferrer">
          View project
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }),
    ])
  ),
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default ProjectCard;
