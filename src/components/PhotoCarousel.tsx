import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: string;
  url: string;
  title: string;
  alt: string;
}

interface PhotoCarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

const PhotoCarousel = ({ items, autoPlayInterval = 5000 }: PhotoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlayInterval) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [items.length, autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        aspectRatio: '16/9',
        overflow: 'hidden',
        borderRadius: 'var(--radius-md)',
        background: '#043666',
        border: '1px solid var(--surface-border)'
      }}
      className="glass-panel"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={items[currentIndex].url}
          alt={items[currentIndex].alt}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        />
      </AnimatePresence>

      {/* Caption Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '2rem 1.5rem 1.5rem',
          background: 'linear-gradient(to top, rgba(6, 69, 127, 0.9), transparent)',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary)' }}>
          {items[currentIndex].title}
        </h3>
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(6, 69, 127, 0.6)',
          border: '1px solid rgba(246, 201, 146, 0.3)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'var(--primary)',
          backdropFilter: 'blur(4px)'
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(6, 69, 127, 0.6)',
          border: '1px solid rgba(246, 201, 146, 0.3)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'var(--primary)',
          backdropFilter: 'blur(4px)'
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '1rem', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: currentIndex === i ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: currentIndex === i ? 'var(--primary)' : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
