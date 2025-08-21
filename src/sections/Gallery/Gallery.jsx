import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './GalleryStyles.module.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [desktopCarouselIndex, setDesktopCarouselIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample gallery images - you can replace these with your actual images
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coding Setup',
      description: 'My development workspace',
      category: 'computing'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'University Life',
      description: 'Campus at University of Otago',
      category: 'computing'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Team Collaboration',
      description: 'Working on group projects',
      category: 'computing'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Learning Journey',
      description: 'Continuous skill development',
      category: 'computing'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Innovation',
      description: 'Building the future with code',
      category: 'computing'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Problem Solving',
      description: 'Tackling complex challenges',
      category: 'computing'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Weekend Adventures',
      description: 'Exploring the outdoors',
      category: 'life'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coffee & Contemplation',
      description: 'Daily moments of reflection',
      category: 'life'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Travel Memories',
      description: 'Capturing beautiful moments',
      category: 'life'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Friends & Fun',
      description: 'Good times with great people',
      category: 'life'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Hobbies & Interests',
      description: 'Pursuing passions outside tech',
      category: 'life'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Life Balance',
      description: 'Finding harmony in daily life',
      category: 'life'
    }
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Desktop carousel
  const imagesPerRow = 3;
  const rowsPerView = 2;
  const imagesPerView = imagesPerRow * rowsPerView;

  const nextDesktopSlide = () => {
    setDesktopCarouselIndex(prev => prev + imagesPerRow);
  };

  const prevDesktopSlide = () => {
    setDesktopCarouselIndex(prev => prev - imagesPerRow);
  };

  // Reset carousel index when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setDesktopCarouselIndex(0);
  };
  return (
    <section id="gallery" className={styles.container}>
      <h1 className="sectionTitle">Gallery</h1>
      <p className={styles.subtitle}>
        A visual journey through my experiences, projects, and the world of technology
      </p>
      
      <div className={styles.categoryFilters}>
        <button 
          className={`${styles.filterButton} ${activeCategory === 'all' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          All ({galleryImages.length})
        </button>
        <button 
          className={`${styles.filterButton} ${activeCategory === 'computing' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('computing')}
        >
          Computing ({galleryImages.filter(img => img.category === 'computing').length})
        </button>
        <button 
          className={`${styles.filterButton} ${activeCategory === 'life' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('life')}
        >
          Life ({galleryImages.filter(img => img.category === 'life').length})
        </button>
      </div>
      
      <div className={styles.carouselGallery}>
        <div className={styles.carouselControls}>
          <button 
            onClick={prevDesktopSlide} 
            className={styles.carouselArrow}
            aria-label="Previous images"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextDesktopSlide} 
            className={styles.carouselArrow}
            aria-label="Next images"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className={styles.carouselContainer}>
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${desktopCarouselIndex * (100 / imagesPerRow)}%)` }}
          >
            {/* Create infinite scroll by duplicating images */}
            {[...filteredImages, ...filteredImages, ...filteredImages].map((image, index) => (
              <div 
                key={`${image.id}-${index}`} 
                className={styles.carouselItem}
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
        </div>
      </div>

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