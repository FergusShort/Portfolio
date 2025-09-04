import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './GalleryStyles.module.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [desktopCarouselIndex, setDesktopCarouselIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  const carouselTrackRef = useRef(null);

  const galleryImages = [
    { id: 1, src: '/images/3leg.JPG', title: '3 Legged Race', description: 'My brother and I competing in the 3 legged race when we were younger', category: 'life' },
    { id: 2, src: '/images/660.jpeg', title: '660', description: 'My brother and I outside of a famous castle street flat that the band 660 are named after', category: 'life' },
    { id: 3, src: '/images/award.JPG', title: 'NCEA Top of Science Award', description: 'My parents and I after I had been awarded top of general science for Year 13 at my Highschool', category: 'life' },
    { id: 4, src: '/images/ball.JPG', title: 'Bedroom Setup', description: 'My cozy bedroom setup', category: 'life' },
    { id: 5, src: '/images/boogie.JPG', title: 'Boogie Boards', description: 'My siblings and cousin about to go boogie boarding', category: 'life' },
    { id: 6, src: '/images/brainstorm.JPG', title: 'Group Brainstorm', description: 'The work my group was doing during the 2025 AI Hackathon at Otago Uni', category: 'computing' },
    { id: 7, src: '/images/clan.JPG', title: 'Clan Munro', description: 'My cousins/siblings in our scottish attire', category: 'life' },
    { id: 8, src: '/images/cray.JPG', title: 'Crayfish!', description: 'A Crayfish I had caught from a craypot', category: 'life' },
    { id: 9, src: '/images/dame.jpeg', title: 'Governor General', description: 'Meeting the Governor General Dame Cindy Kiro after my father received a medal from her', category: 'life' },
    { id: 10, src: '/images/drums.jpg', title: 'Old Drumset', description: 'My old drumset from when I used to play', category: 'life' },
    { id: 11, src: '/images/firstday.JPG', title: 'First Day of Highscholl', description: 'A photo with my mum before my first day of highschool', category: 'life' },
    { id: 12, src: '/images/fishing.JPG', title: 'Snapper!', description: 'Snapper I caught fishing with my grandfather', category: 'life' },
    { id: 13, src: '/images/group.JPG', title: 'My groups presentation at 2025 AI Hackathon', description: 'My group during our preentation', category: 'life' },
    { id: 14, src: '/images/lake.JPG', title: 'Naseby Dam', description: 'My siblings and cousins at the Naseby Dam', category: 'life' },
    { id: 15, src: '/images/monkey.JPG', title: 'Bali Monkey', description: 'Whilst in Bali I got to have an encounter with this monkey', category: 'life' },
    { id: 16, src: '/images/muay.JPG', title: 'Muay Thai', description: 'Whilst in Thailand I got to train in Muay Thai, here I am sparring my brother', category: 'life' },
    { id: 17, src: '/images/mum.JPG', title: 'My Brother and Mum', description: 'Whilst at a 21st celebration my mother and brother took this photo with me', category: 'life' },
    { id: 18, src: '/images/ocss.JPG', title: 'OCSS', description: 'A photo of the Otago Computer Science Society members that took place in the 2025 AI Hackathon', category: 'computing' },
    { id: 19, src: '/images/robot.JPG', title: 'AI Robot', description: 'A Robot a group I was in coded to follow this black line', category: 'computing' },
    { id: 20, src: '/images/row.JPG', title: 'Rowing Double', description: 'An image from when I used to row', category: 'life' },
    { id: 21, src: '/images/Rugby.JPG', title: 'Rugby', description: 'Myself and a good mate making a run during a rugby game', category: 'life' },
    { id: 22, src: '/images/skiing.JPG', title: 'Skiing', description: 'My mates and I on a skiing trip', category: 'life' },
    { id: 23, src: '/images/speech.JPG', title: 'Hackathon Speech', description: 'Me speaking during the 2025 AI Hackathon', category: 'computing' },
    { id: 24, src: '/images/wests.JPG', title: 'West Roosters', description: 'My childhood rugby club', category: 'life' }
  ];

  const imagesPerRow = 3;
  const rowsPerView = 2;
  const imagesPerView = imagesPerRow * rowsPerView;

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const extendedImages = [
    ...filteredImages.slice(-imagesPerView),
    ...filteredImages,
    ...filteredImages.slice(0, imagesPerView)
  ];

  useEffect(() => {
    setDesktopCarouselIndex(imagesPerView); // reset to middle (original images)
  }, [activeCategory]);

  const openModal = (image) => {
    const realIndex = filteredImages.findIndex(img => img.id === image.id);
    setSelectedImage(image);
    setCurrentImageIndex(realIndex);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const nextDesktopSlide = () => {
    setDesktopCarouselIndex(prev => prev + imagesPerRow);
  };

  const prevDesktopSlide = () => {
    setDesktopCarouselIndex(prev => prev - imagesPerRow);
  };

  useEffect(() => {
    const track = carouselTrackRef.current;
    const handleTransitionEnd = () => {
      if (desktopCarouselIndex >= filteredImages.length + imagesPerView) {
        setIsTransitionEnabled(false);
        setDesktopCarouselIndex(imagesPerView);
      } else if (desktopCarouselIndex < imagesPerView) {
        setIsTransitionEnabled(false);
        setDesktopCarouselIndex(filteredImages.length + imagesPerView - imagesPerRow);
      }
    };

    track?.addEventListener('transitionend', handleTransitionEnd);
    return () => track?.removeEventListener('transitionend', handleTransitionEnd);
  }, [desktopCarouselIndex, filteredImages.length]);

  useEffect(() => {
    if (!isTransitionEnabled) {
      const id = requestAnimationFrame(() => setIsTransitionEnabled(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitionEnabled]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className={styles.container}>
      <h1 className="sectionTitle">Gallery</h1>
      <p className={styles.subtitle}>
        A visual journey through my experiences, projects, and the world of technology
      </p>

      <div className={styles.categoryFilters}>
        <button className={`${styles.filterButton} ${activeCategory === 'all' ? styles.active : ''}`} onClick={() => handleCategoryChange('all')}>
          All ({galleryImages.length})
        </button>
        <button className={`${styles.filterButton} ${activeCategory === 'computing' ? styles.active : ''}`} onClick={() => handleCategoryChange('computing')}>
          Computing ({galleryImages.filter(img => img.category === 'computing').length})
        </button>
        <button className={`${styles.filterButton} ${activeCategory === 'life' ? styles.active : ''}`} onClick={() => handleCategoryChange('life')}>
          Life ({galleryImages.filter(img => img.category === 'life').length})
        </button>
      </div>

      <div className={styles.carouselGallery}>
        <div className={styles.carouselControls}>
          <button onClick={prevDesktopSlide} className={styles.carouselArrow} aria-label="Previous images">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextDesktopSlide} className={styles.carouselArrow} aria-label="Next images">
            <ChevronRight size={24} />
          </button>
        </div>
        <div className={styles.carouselContainer}>
          <div
            ref={carouselTrackRef}
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${desktopCarouselIndex * (100 / imagesPerRow)}%)`,
              transition: isTransitionEnabled ? 'transform 0.3s ease' : 'none',
            }}
          >
            {extendedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className={styles.carouselItem}
                onClick={() => openModal(image)}
              >
                <img src={image.src} alt={image.title} loading="lazy" />
                <div className={styles.overlay}>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalArrow} onClick={prevImage} style={{ left: '20px' }} aria-label="Previous image">
              <ChevronLeft size={24} />
            </button>
            <button className={styles.modalArrow} onClick={nextImage} style={{ right: '20px' }} aria-label="Next image">
              <ChevronRight size={24} />
            </button>
            <button className={styles.closeButton} onClick={closeModal}>
              <X size={20} />
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className={styles.modalInfo}>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <span className={styles.imageCounter}>
                {currentImageIndex + 1} of {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
