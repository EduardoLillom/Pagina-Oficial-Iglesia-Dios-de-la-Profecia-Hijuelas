import { galleryImages } from '../data/galleryData';
import SectionTitle from '../components/SectionTitle';
import '../styles/gallery.css';

const Galeria = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionTitle
        number="04"
        title="Nuestra Galería"
        subtitle="Momentos especiales de nuestra comunidad"
      />

      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-card">
            <div className="gallery-image-container">
              <img
                src={image.src}
                alt={image.title}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <h3 className="gallery-title">{image.title}</h3>
                  <p className="gallery-description">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Galeria;