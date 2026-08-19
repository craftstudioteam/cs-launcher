import React, { useState } from 'react';
import { Download, Sparkles, Image, X, Video, Archive, Palette, ShieldCheck, Users } from 'lucide-react';
import AdBanner from './AdBanner';

export default function Hero({ hero, branding, activeVersion, liveDownloadCount, discordUrl, onNavigate, onDownload }) {
  const [lightboxImg, setLightboxImg] = useState(null);

  const currentVer = activeVersion || 'v3';
  const count = liveDownloadCount || 4091;

  const screenshots = branding.screenshots && Array.isArray(branding.screenshots) && branding.screenshots.length > 0
    ? branding.screenshots
    : [];

  return (
    <div className="tab-transition-wrapper">

      {/* 🕹️ MCTOOLS RETRO HERO BOX (NORMAL CASE - NO ALL-CAPS) */}
      <div className="mctools-hero-box">
        <div className="mctools-title-frame">
          <div className="mctools-title-text">CS Launcher</div>
        </div>

        <div>
          <div className="mctools-subtitle-pill">
            Minecraft Java on Android
          </div>
        </div>

        {/* 🟢 Big 3D Green Download Button */}
        <button 
          className="btn-mc-green-3d" 
          onClick={() => onDownload(null, currentVer)}
        >
          <Download size={18} />
          <span>Download APK ({currentVer})</span>
        </button>

        {/* Status Tag */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.66rem', color: 'var(--mc-green)', background: '#0d0a22', padding: '4px 10px', border: '1px solid #000' }}>
            ● v3 Official Release
          </span>
          <span style={{ fontSize: '0.66rem', color: 'var(--mc-gold)', background: '#0d0a22', padding: '4px 10px', border: '1px solid #000' }}>
            {count.toLocaleString()}+ Downloads
          </span>
        </div>
      </div>

      {/* 🧱 2-COLUMN MINECRAFT GRID CARDS (EXACT MCTOOLS STYLE) */}
      <div className="mctools-section-header">
        <span>Launcher Tools</span>
      </div>

      <div className="mctools-grid-2col">
        {/* Card 1: Download V3 */}
        <div className="mctools-card stripe-yellow" onClick={() => onDownload(null, currentVer)}>
          <span className="mctools-card-badge">v3</span>
          <div className="mctools-card-icon">
            <div style={{ width: 36, height: 36, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Download size={20} color="#FFAA00" />
            </div>
          </div>
          <div className="mctools-card-title">Download APK</div>
        </div>

        {/* Card 2: Skin & Cape */}
        <div className="mctools-card stripe-purple" onClick={() => onNavigate('features')}>
          <span className="mctools-card-badge" style={{ background: 'var(--mc-purple)', color: '#fff' }}>New</span>
          <div className="mctools-card-icon">
            <div style={{ width: 36, height: 36, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Palette size={20} color="#B388FF" />
            </div>
          </div>
          <div className="mctools-card-title">Skin & Cape</div>
        </div>

        {/* Card 3: Video Tutorials */}
        <div className="mctools-card stripe-green" onClick={() => onNavigate('videos')}>
          <span className="mctools-card-badge" style={{ background: 'var(--mc-green)', color: '#000' }}>HD</span>
          <div className="mctools-card-icon">
            <div style={{ width: 36, height: 36, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Video size={20} color="#55FF55" />
            </div>
          </div>
          <div className="mctools-card-title">Video Guides</div>
        </div>

        {/* Card 4: Archive Builds */}
        <div className="mctools-card stripe-cyan" onClick={() => onNavigate('download')}>
          <div className="mctools-card-icon">
            <div style={{ width: 36, height: 36, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Archive size={20} color="#55FFFF" />
            </div>
          </div>
          <div className="mctools-card-title">Old Builds</div>
        </div>

        {/* Card 5: Team */}
        <div className="mctools-card stripe-yellow" onClick={() => onNavigate('team')}>
          <div className="mctools-card-icon">
            <div style={{ width: 36, height: 36, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={20} color="#FFAA00" />
            </div>
          </div>
          <div className="mctools-card-title">Craft Team</div>
        </div>

        {/* Card 6: Legal */}
        <div className="mctools-card stripe-red" onClick={() => onNavigate('notice')}>
          <div className="mctools-card-icon">
            <div style={{ width: 36, height: 36, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={20} color="#FF5555" />
            </div>
          </div>
          <div className="mctools-card-title">Legal & GPL</div>
        </div>
      </div>

      {/* 📢 AD BANNER */}
      <AdBanner slotId="hero-mid" format="banner" />

      {/* 📸 SCREENSHOT GALLERY */}
      {screenshots.length > 0 && (
        <div className="app-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: 'var(--mc-yellow)' }}>
              <Image size={15} />
              <span>Screenshots</span>
            </div>
            <span style={{ fontSize: '0.62rem', color: 'var(--mc-grey)' }}>Tap to preview</span>
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

      {/* 💬 COMMUNITY DISCORD CARD */}
      {discordUrl && (
        <div className="app-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--mc-yellow)' }}>
              Join CS Launcher Discord
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--mc-grey)', marginTop: 2 }}>
              Get instant setup help and updates
            </div>
          </div>

          <a 
            href={discordUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-mc-3d"
            style={{ fontSize: '0.72rem', padding: '8px 14px' }}
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
              style={{ width: '100%', height: '100%', maxHeight: '80vh', objectFit: 'contain', border: '3px solid #000', boxShadow: '0 20px 50px rgba(0,0,0,0.9)' }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
