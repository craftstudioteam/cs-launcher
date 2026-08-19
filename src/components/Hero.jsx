import React from 'react';
import { Download } from 'lucide-react';
import AdBanner from './AdBanner';
import ShowcaseGallery from './ShowcaseGallery';
import TypewriterText from './TypewriterText';
import { DiscordIcon } from './MinecraftIcons';

export default function Hero({ hero, branding, activeVersion, liveDownloadCount, discordUrl, onNavigate, onDownload }) {
  const currentVer = activeVersion || 'v3';
  const count = liveDownloadCount || 4091;

  return (
    <div className="tab-transition-wrapper">

      {/* ══════════════════════════════════════════════════════════════
          🕹️ AUTHENTIC MCTOOLS HERO TITLE BOX WITH TYPEWRITER ANIMATION
          ══════════════════════════════════════════════════════════════ */}
      <div className="home-hero-wrap">
        <div className="mctools-title-block">
          <h1 className="mctools-title-main">CS Launcher</h1>
        </div>

        <div>
          <div className="mctools-sub-pill">
            <span className="mctools-sub-text">
              <TypewriterText />
            </span>
          </div>
        </div>

        {/* 🟢 Big In-Game 3D Green Download Button */}
        <div className="hero-actions-container">
          <button 
            className="btn-mc-green-3d" 
            onClick={() => onDownload(null, currentVer)}
          >
            <Download size={20} />
            <span>Download APK ({currentVer})</span>
          </button>

          {/* Quick Info Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.64rem', color: 'var(--mc-green)', background: '#0e0b24', padding: '4px 10px', border: '1px solid #000', boxShadow: '2px 2px 0 #000' }}>
              ● v3 Official Release (185.8 MB)
            </span>
            <span style={{ fontSize: '0.64rem', color: 'var(--mc-gold)', background: '#0e0b24', padding: '4px 10px', border: '1px solid #000', boxShadow: '2px 2px 0 #000' }}>
              {count.toLocaleString()}+ Downloads
            </span>
          </div>
        </div>
      </div>

      {/* 📢 AD BANNER */}
      <AdBanner slotId="hero-mid" format="banner" />

      {/* 📸 MCTOOLS AUTHENTIC AUTO-SLIDING GALLERY CAROUSEL */}
      <ShowcaseGallery />

      {/* 💬 COMMUNITY DISCORD CARD */}
      {discordUrl && (
        <div className="app-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="nav-discord-btn" style={{ width: 42, height: 42 }}>
              <DiscordIcon size={24} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--mc-yellow)' }}>
                Join CS Launcher Discord
              </div>
              <div style={{ fontSize: '0.66rem', color: 'var(--mc-grey)', marginTop: 2 }}>
                Get instant help, game configs & updates
              </div>
            </div>
          </div>

          <a 
            href={discordUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-mc-3d"
            style={{ fontSize: '0.74rem', padding: '8px 14px' }}
          >
            <span>Join Server ↗</span>
          </a>
        </div>
      )}
    </div>
  );
}
