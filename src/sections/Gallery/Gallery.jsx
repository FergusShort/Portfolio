import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import styles from "./GalleryStyles.module.css";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [fullscreen, setFullscreen] = useState(false);

  const galleryImages = [
    { id: 1, src: '/images/3leg.JPG', title: '3 Legged Race', description: 'My brother and I competing in the 3 legged race when we were younger', category: 'life' },
    { id: 2, src: '/images/660.jpeg', title: '660', description: 'My brother and I outside of a famous castle street flat that the band 660 are named after', category: 'life' },
    { id: 3, src: '/images/award.JPG', title: 'NCEA Top of Science Award', description: 'My parents and I after I had been awarded top of general science for Year 13 at my Highschool', category: 'life' },
    { id: 4, src: '/images/ball.JPG', title: 'Highschool Ball', description: 'Photo from before the ball my highschool had', category: 'life' },
    { id: 5, src: '/images/boogie.JPG', title: 'Boogie Boards', description: 'My siblings and cousin about to go boogie boarding', category: 'life' },
    { id: 6, src: '/images/brainstorm.JPG', title: 'Group Brainstorm', description: 'The work my group was doing during the 2025 AI Hackathon at Otago Uni', category: 'computing' },
    { id: 7, src: '/images/clan.jpg', title: 'Clan Munro', description: 'My cousins/siblings in our scottish attire', category: 'life' },
    { id: 8, src: '/images/cray.JPG', title: 'Crayfish!', description: 'A Crayfish I had caught from a craypot', category: 'life' },
    { id: 9, src: '/images/dame.jpeg', title: 'Governor General', description: 'Meeting the Governor General Dame Cindy Kiro after my father received a medal from her', category: 'life' },
    { id: 10, src: '/images/drums.jpg', title: 'Old Drumset', description: 'My old drumset from when I used to play', category: 'life' },
    { id: 11, src: '/images/firstday.JPG', title: 'First Day of Highschool', description: 'A photo with my mum before my first day of highschool', category: 'life' },
    { id: 12, src: '/images/fishing.JPG', title: 'Snapper!', description: 'Snapper I caught fishing with my grandfather', category: 'life' },
    { id: 13, src: '/images/group.JPG', title: 'My groups presentation at 2025 AI Hackathon', description: 'My group during our presentation', category: 'life' },
    { id: 14, src: '/images/lake.JPG', title: 'Naseby Dam', description: 'My siblings and cousins at the Naseby Dam', category: 'life' },
    { id: 15, src: '/images/monkey.JPG', title: 'Bali Monkey', description: 'Whilst in Bali I got to have an encounter with this monkey', category: 'life' },
    { id: 16, src: '/images/muay.JPG', title: 'Muay Thai', description: 'Whilst in Thailand I got to train in Muay Thai, here I am sparring my brother', category: 'life' },
    { id: 17, src: '/images/mum.JPG', title: 'My Brother and Mum', description: 'Whilst at a 21st celebration my mother and brother took this photo with me', category: 'life' },
    { id: 18, src: '/images/ocss.JPG', title: 'OCSS', description: 'A photo of the Otago Computer Science Society members that took place in the 2025 AI Hackathon', category: 'computing' },
    { id: 19, src: '/images/robot.jpg', title: 'AI Robot', description: 'A Robot a group I was in coded to follow this black line', category: 'computing' },
    { id: 20, src: '/images/row.JPG', title: 'Rowing Double', description: 'An image from when I used to row', category: 'life' },
    { id: 21, src: '/images/Rugby.JPG', title: 'Rugby', description: 'Myself and a good mate making a run during a rugby game', category: 'life' },
    { id: 22, src: '/images/skiing.JPG', title: 'Skiing', description: 'My mates and I on a skiing trip', category: 'life' },
    { id: 23, src: '/images/speech.jpg', title: 'Hackathon Speech', description: 'Me speaking during the 2025 AI Hackathon', category: 'computing' },
    { id: 24, src: '/images/wests.JPG', title: 'West Roosters', description: 'My childhood rugby club', category: 'life' }
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };
  const currentImage = filteredImages[currentIndex];

  return (
    <section id="gallery" className={styles.container}>
      <h1 className="sectionTitle">Gallery</h1>
      <p className={styles.subtitle}>
        A visual journey through my experiences, projects, and the world of technology - Click to see full images
      </p>

      {/* Category Filters */}
      <div className={styles.categoryFilters}>
        {["all", "computing", "life"].map((cat) => (
          <button
            key={cat}
            className={`${styles.filterButton} ${activeCategory === cat ? styles.active : ""}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)} ({cat === "all" ? galleryImages.length : galleryImages.filter(img => img.category === cat).length})
          </button>
        ))}
      </div>

      {/* Image Viewer */}
      <div className={styles.imageWrapper}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={prevImage} aria-label="Previous image">
          <ChevronLeft size={28} />
        </button>

        <div className={styles.imageContainer} onClick={() => setFullscreen(true)}>
          <img src={currentImage.src} alt={currentImage.title} className={styles.mainImage} />
        </div>

        <button className={`${styles.arrow} ${styles.right}`} onClick={nextImage} aria-label="Next image">
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Caption */}
      <div className={styles.caption}>
        <h3>{currentImage.title}</h3>
        <p>{currentImage.description}</p>
        <span className={styles.counter}>{currentIndex + 1} of {filteredImages.length}</span>
      </div>

      {/* Fullscreen Modal */}
      {fullscreen && (
        <div className={styles.fullscreenOverlay}>
          <button className={styles.closeButton} onClick={() => setFullscreen(false)}>
            <X />
          </button>

          <button className={`${styles.arrow} ${styles.left}`} onClick={prevImage} aria-label="Previous image">
            <ChevronLeft size={28} />
          </button>

          <img src={currentImage.src} alt={currentImage.title} className={styles.fullscreenImage} />

          <button className={`${styles.arrow} ${styles.right}`} onClick={nextImage} aria-label="Next image">
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
