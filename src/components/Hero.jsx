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

      {/* 🎮 HERO SHOWCASE CONSOLE (ZERO OVERLAP) */}
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

        {/* Structured Buttons Stack */}
        <div className="hero-buttons-stack">
          <button 
            className="btn-hero-primary-download" 
            onClick={() => onDownload(null, currentVer)}
          >
            <Download size={20} strokeWidth={2.5} />
            <span>Download CS Launcher ({currentVer})</span>
          </button>

          <div className="hero-sub-buttons-grid">
            <button 
              className="btn-hero-sub-action" 
              onClick={() => onNavigate('features')}
            >
              <Sparkles size={15} />
              <span>Features</span>
            </button>

            <button 
              className="btn-hero-sub-action" 
              onClick={() => onNavigate('videos')}
            >
              <Video size={15} />
              <span>Videos</span>
            </button>

            <button 
              className="btn-hero-sub-action" 
              onClick={() => onNavigate('download')}
            >
              <Archive size={15} />
              <span>Versions</span>
            </button>
          </div>
        </div>

        {/* Feature Badges Strip */}
        <div className="hero-feature-tags-strip">
          <span className="hero-feature-chip">⚡ 60+ FPS Engine</span>
          <span className="hero-feature-chip">🎨 Skin & Cape</span>
          <span className="hero-feature-chip">📱 Android 7.0+</span>
        </div>
      </div>

      {/* 📊 LIVE STATS STRIP (AUTOMATIC LIVE DOWNLOAD COUNTER) */}
      <div className="stats-bar-grid">
        <div className="stat-box">
          <div className="stat-number" style={{ color: 'var(--text-white)' }}>
            {count.toLocaleString()}+
          </div>
          <div className="stat-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            <Github size={11} />
            <span>V3 APK Downloads</span>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-number">Android 7+</div>
          <div className="stat-label">Compatibility</div>
        </div>
        <div className="stat-box">
          <div className="stat-number" style={{ color: 'var(--accent-emerald)' }}>100% Free</div>
          <div className="stat-label">Open Source</div>
        </div>
      </div>

      {/* 📢 AD BANNER */}
      <AdBanner slotId="hero-mid" format="banner" />

      {/* 📸 SCREENSHOT GALLERY */}
      {screenshots.length > 0 && (
        <div className="app-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, fontSize: '1.05rem', fontFamily: 'Space Grotesk' }}>
              <Image size={18} />
              <span>Launcher Screenshots</span>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Tap to preview</span>
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

      {/* ⚡ CORE CAPABILITIES (2 AUTHENTIC CARDS) */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, fontWeight: 800, fontSize: '1.05rem', fontFamily: 'Space Grotesk' }}>
          <Zap size={18} />
          <span>Core Capabilities</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          <div style={{ background: 'var(--bg-card-elevated)', padding: 16, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, marginBottom: 6, fontFamily: 'Space Grotesk' }}>
              <div style={{ width: 28, height: 28, borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={16} color="#ffffff" />
              </div>
              <span>Maximum FPS Boost</span>
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-grey)', lineHeight: 1.5 }}>
              Custom rendering pipeline tuned for maximum frames per second on mobile GPUs.
            </div>
          </div>

          <div style={{ background: 'var(--bg-card-elevated)', padding: 16, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, marginBottom: 6, fontFamily: 'Space Grotesk' }}>
              <div style={{ width: 28, height: 28, borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Palette size={16} color="#F59E0B" />
              </div>
              <span>Skin & Cape Changer</span>
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-grey)', lineHeight: 1.5 }}>
              Dynamic custom skin and HD cape applicator for offline and online Minecraft Java accounts.
            </div>
          </div>
        </div>
      </div>

      {/* 💬 COMMUNITY DISCORD CARD */}
      {discordUrl && (
        <div className="app-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-white)' }}>
              Join CS Launcher Community
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-grey)', marginTop: 2 }}>
              Get instant support, updates, and setup guides on Discord
            </div>
          </div>

          <a 
            href={discordUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary-action"
            style={{ textDecoration: 'none', padding: '10px 20px', fontSize: '0.84rem' }}
          >
            <span>Join Discord ↗</span>
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
              style={{ width: '100%', height: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
