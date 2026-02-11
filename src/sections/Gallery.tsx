import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/images/photo_2026-02-02_22-24-14.jpg', alt: 'Nordic Sauna - ночная подсветка' },
  { src: '/images/photo_2026-02-02_22-24-15.jpg', alt: 'Nordic Sauna - вид сбоку' },
  { src: '/images/photo_2026-02-02_22-24-18.jpg', alt: 'Nordic Sauna - фасад' },
  { src: '/images/photo_2026-02-02_22-24-19.jpg', alt: 'Nordic Sauna - зимний вид' },
  { src: '/images/photo_2026-02-02_22-24-23.jpg', alt: 'Nordic Sauna - дневной свет' },
  { src: '/images/photo_2026-02-02_22-24-26.jpg', alt: 'Nordic Sauna - снежный пейзаж' },
  { src: '/images/photo_2026-02-07_22-32-26.jpg', alt: 'Nordic Sauna - детали' },
  { src: '/images/photo_2026-02-07_22-32-28.jpg', alt: 'Nordic Sauna - интерьер' },
  { src: '/images/photo_2026-02-07_22-32-30.jpg', alt: 'Nordic Sauna - печь' },
  { src: '/images/photo_2026-02-07_22-32-33.jpg', alt: 'Nordic Sauna - отделка' },
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section 
      id="gallery"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-serif text-amber text-sm tracking-[0.2em] uppercase mb-4 block">
            Галерея
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-warm-white mb-6">
            Каждая деталь — <span className="font-serif italic text-amber">продумана</span>
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer
                         border border-dark-graphite hover:border-amber/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glow border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_0_1px_rgba(212,165,116,0.3)]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-warm-silver hover:text-amber transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-warm-silver hover:text-amber transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-warm-silver hover:text-amber transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <div 
            className="max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-warm-silver text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
