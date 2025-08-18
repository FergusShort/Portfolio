import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './GalleryStyles.module.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Sample gallery images - you can replace these with your actual images
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coding Setup',
      description: 'My development workspace'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'University Life',
      description: 'Campus at University of Otago'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Team Collaboration',
      description: 'Working on group projects'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Learning Journey',
      description: 'Continuous skill development'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Innovation',
      description: 'Building the future with code'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Problem Solving',
      description: 'Tackling complex challenges'
    }
  ];

  // Check if mobile on resize
  useState(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setCurrentImageIndex(galleryImages.findIndex(img => img.id === image.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  // Mobile carousel for gallery grid
  const [mobileIndex, setMobileIndex] = useState(0);
  const imagesPerView = 4;
  const maxMobileIndex = Math.max(0, galleryImages.length - imagesPerView);

  const nextMobileSlide = () => {
    setMobileIndex(prev => Math.min(prev + 1, maxMobileIndex));
  };

  const prevMobileSlide = () => {
    setMobileIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section id="gallery" className={styles.container}>
      <h1 className="sectionTitle">Gallery</h1>
      <p className={styles.subtitle}>
        A visual journey through my experiences, projects, and the world of technology
      </p>
      
      {isMobile ? (
        <div className={styles.mobileGallery}>
          <div className={styles.mobileControls}>
            <button 
              onClick={prevMobileSlide} 
              disabled={mobileIndex === 0}
              className={styles.mobileArrow}
              aria-label="Previous images"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextMobileSlide} 
              disabled={mobileIndex >= maxMobileIndex}
              className={styles.mobileArrow}
              aria-label="Next images"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className={styles.mobileGalleryContainer}>
            <div 
              className={styles.mobileGalleryTrack}
              style={{ transform: `translateX(-${mobileIndex * 25}%)` }}
            >
              {galleryImages.map((image) => (
                <div 
                  key={image.id} 
                  className={styles.mobileGalleryItem}
                  onClick={() => openModal(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    loading="lazy"
                  />
                  <div className={styles.mobileOverlay}>
                    <h4>{image.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={styles.galleryItem}
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.modalArrow} 
              onClick={prevImage}
              style={{ left: '20px' }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className={styles.modalArrow} 
              onClick={nextImage}
              style={{ right: '20px' }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <button className={styles.closeButton} onClick={closeModal}>
              <X size={20} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
            />
            <div className={styles.modalInfo}>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <span className={styles.imageCounter}>
                {currentImageIndex + 1} of {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;