import { useState } from 'react';
import styles from './GalleryStyles.module.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className={styles.container}>
      <h1 className="sectionTitle">Gallery</h1>
      <p className={styles.subtitle}>
        A visual journey through my experiences, projects, and the world of technology
      </p>
      
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

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
            />
            <div className={styles.modalInfo}>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;