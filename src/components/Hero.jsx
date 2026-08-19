import React, { useState, useEffect } from 'react';
import { Download, Sparkles, Image, Zap, X, Video, Archive, Palette, Github } from 'lucide-react';
import AdBanner from './AdBanner';

export default function Hero({ hero, branding, activeVersion, liveDownloadCount, discordUrl, onNavigate, onDownload }) {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [typedText, setTypedText] = useState('');

  const currentVer = activeVersion || 'v3';
  const fullStatusText = `CS LAUNCHER ${currentVer.toUpperCase()} OFFICIAL`;
  const count = liveDownloadCount || 4091;

  useEffect(() => {
    let index = 0;
    setTypedText('');
    const timer = setInterval(() => {
      if (index <= fullStatusText.length) {
        setTypedText(fullStatusText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, [currentVer, fullStatusText]);

  const screenshots = branding.screenshots && Array.isArray(branding.screenshots) && branding.screenshots.length > 0
    ? branding.screenshots
    : [];

  return (
    <div className="tab-transition-wrapper">

      {/* 🎮 100% RESPONSIVE MINECRAFT HERO CARD */}
      <div className="hero-card-container">
        <div className="hero-status-tag">
          <span className="status-dot"></span>
          <span>{typedText || fullStatusText}</span>
        </div>

        <h1 className="hero-main-title">
          MINECRAFT JAVA <span>ON MOBILE</span>
        </h1>

        <p className="hero-desc-text">
          {hero.subtitle || "The all-new CS Launcher V3 is here! Improved launcher performance, better profile management, cleaner UI, and enhanced Minecraft Java experience on Android."}
        </p>

        {/* Structured Minecraft 3D Buttons Stack (Zero Overflow Guarantee) */}
        <div className="hero-buttons-stack">
          <button 
            className="btn-mc-green-3d" 
            onClick={() => onDownload(null, currentVer)}
          >
            <Download size={18} />
            <span>DOWNLOAD V3 (185.8 MB)</span>
          </button>

          <div className="hero-sub-buttons-grid">
            <button 
              className="btn-mc-3d" 
              onClick={() => onNavigate('features')}
            >
              <Sparkles size={14} />
              <span>FEATURES</span>
            </button>

            <button 
              className="btn-mc-3d" 
              onClick={() => onNavigate('videos')}
            >
              <Video size={14} />
              <span>VIDEOS</span>
            </button>

            <button 
              className="btn-mc-3d" 
              onClick={() => onNavigate('download')}
            >
              <Archive size={14} />
              <span>BUILDS</span>
            </button>
          </div>
        </div>

        {/* Minecraft Pixel Feature Badges */}
        <div className="hero-feature-tags-strip">
          <span className="hero-feature-chip">⚡ 60+ FPS ENGINE</span>
          <span className="hero-feature-chip">🎨 SKIN & CAPE</span>
          <span className="hero-feature-chip">📱 ANDROID 7.0+</span>
        </div>
      </div>

      {/* 📊 LIVE MINECRAFT STATS STRIP (No Overflow) */}
      <div className="stats-bar-grid">
        <div className="stat-box">
          <div className="stat-number">
            {count.toLocaleString()}+
          </div>
          <div className="stat-label">
            V3 DOWNLOADS
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-number">ANDROID 7+</div>
          <div className="stat-label">COMPATIBILITY</div>
        </div>
        <div className="stat-box">
          <div className="stat-number" style={{ color: 'var(--mc-text-green)' }}>100% FREE</div>
          <div className="stat-label">OPEN SOURCE</div>
        </div>
      </div>

      {/* 📢 AD BANNER */}
      <AdBanner slotId="hero-mid" format="banner" />

      {/* 📸 SCREENSHOT GALLERY */}
      {screenshots.length > 0 && (
        <div className="app-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: '0.9rem', color: 'var(--mc-text-yellow)' }}>
              <Image size={15} />
              <span>SCREENSHOTS</span>
            </div>
            <span style={{ fontSize: '0.6rem', color: 'var(--mc-text-grey)' }}>TAP TO PREVIEW</span>
          </div>
          <div className="gallery-scroll-container">
            {screenshots.map((url, idx) => (
              <div 
                key={idx} 
                className="gallery-card-item"
                onClick={() => setLightboxImg(url)}
              >
                <img src={url} alt={`Screenshot ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ⚡ CORE CAPABILITIES (HIGH-TECH CARDS) */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, fontWeight: 700, fontSize: '0.9rem', color: 'var(--mc-text-yellow)' }}>
          <Zap size={15} />
          <span>LAUNCHER HIGHLIGHTS</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
          <div className="app-card-elevated" style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, marginBottom: 6, color: 'var(--mc-text-yellow)', fontSize: '0.85rem' }}>
              <Zap size={15} color="#FFFF55" />
              <span>MAXIMUM FPS BOOST</span>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--mc-text-grey)', lineHeight: 1.5 }}>
              Custom rendering pipeline tuned for maximum frames per second on mobile GPUs.
            </div>
          </div>

          <div className="app-card-elevated" style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, marginBottom: 6, color: 'var(--mc-text-gold)', fontSize: '0.85rem' }}>
              <Palette size={15} color="#FFAA00" />
              <span>SKIN & CAPE CHANGER</span>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--mc-text-grey)', lineHeight: 1.5 }}>
              Dynamic custom skin and HD cape applicator for offline and online Minecraft Java accounts.
            </div>
          </div>
        </div>
      </div>

      {/* 💬 COMMUNITY DISCORD CARD */}
      {discordUrl && (
        <div className="app-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ minWidth: 180, flex: 1 }}>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--mc-text-yellow)' }}>
              JOIN DISCORD COMMUNITY
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--mc-text-grey)', marginTop: 2 }}>
              Get instant support, updates, and setup guides
            </div>
          </div>

          <a 
            href={discordUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-mc-3d"
            style={{ fontSize: '0.72rem', padding: '8px 14px' }}
          >
            <span>JOIN DISCORD ↗</span>
          </a>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="modal-overlay" onClick={() => setLightboxImg(null)}>
          <div 
            style={{ maxWidth: '90vw', maxHeight: '85vh', position: 'relative' }}
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
