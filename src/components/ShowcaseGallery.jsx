import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const SCREENSHOTS_DATA = [
  {
    url: "https://i.ibb.co/BDP6t2f/homescreen.jpg",
    title: "CS Launcher Home UI",
    subtitle: "Modern Launcher Home Screen & Profiles",
    icon: "📱"
  },
  {
    url: "https://i.ibb.co/spqkyRXb/skin-and-Cap.jpg",
    title: "Skin & Cape Changer",
    subtitle: "Custom Java Skin & HD Cape System",
    icon: "🎨"
  },
  {
    url: "https://i.ibb.co/20dMMmQJ/In-game-mod-eresource-pack-shades-download.jpg",
    title: "Mod & Shaders Downloader",
    subtitle: "In-Game Mods, Resource Packs & Shaders",
    icon: "📦"
  }
];

export default function ShowcaseGallery() {
  const [currIndex, setCurrIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const total = SCREENSHOTS_DATA.length;

  // Auto-slide effect (every 3.5 seconds)
  useEffect(() => {
    if (isPaused || lightboxImg) return;
    const timer = setInterval(() => {
      setCurrIndex(prev => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, lightboxImg, total]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrIndex(prev => (prev - 1 + total) % total);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrIndex(prev => (prev + 1) % total);
  };

  return (
    <div className="app-card" style={{ padding: '16px 14px', marginBottom: 20 }}>
      {/* Gallery Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: 'var(--mc-yellow)' }}>
          <span style={{ fontSize: '1.05rem' }}>🖼️</span>
          <span>Official Gallery</span>
        </div>
        <span style={{ fontSize: '0.62rem', color: 'var(--mc-grey)' }}>
          {currIndex + 1} of {total} • Auto Slide
        </span>
      </div>

      {/* 🎠 MCTOOLS AUTO-SLIDING CAROUSEL */}
      <div 
        className="showcase-carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left Arrow */}
        <button 
          className="gal-nav-arrow ga-left" 
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Slides Track */}
        <div className="gal-slider-viewport">
          <div 
            className="gal-slider-track"
            style={{ transform: `translateX(-${currIndex * 100}%)` }}
          >
            {SCREENSHOTS_DATA.map((item, idx) => (
              <div 
                key={idx} 
                className="gal-slide-card"
                onClick={() => setLightboxImg(item.url)}
              >
                <div className="gal-img-container">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="gal-slide-img" 
                    loading="lazy" 
                  />
                  {/* Caption Bar */}
                  <div className="sc-caption-bar">
                    <span className="sc-caption-icon">{item.icon}</span>
                    <div>
                      <div className="sc-caption-name">{item.title}</div>
                      <div style={{ fontSize: '0.58rem', color: 'var(--mc-grey)', marginTop: 1 }}>{item.subtitle}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          className="gal-nav-arrow ga-right" 
          onClick={handleNext}
          aria-label="Next Slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="gal-dots-row">
        {SCREENSHOTS_DATA.map((_, idx) => (
          <button
            key={idx}
            className={`gal-dot-btn ${currIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="modal-overlay" onClick={() => setLightboxImg(null)}>
          <div 
            style={{ maxWidth: '92vw', maxHeight: '85vh', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setLightboxImg(null)}
              style={{ position: 'absolute', top: -36, right: 0, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
            >
              <X size={26} />
            </button>
            <img 
              src={lightboxImg} 
              alt="Expanded Preview" 
              style={{ width: '100%', height: '100%', maxHeight: '80vh', objectFit: 'contain', border: '3px solid #000', boxShadow: '0 20px 50px rgba(0,0,0,0.9)' }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
