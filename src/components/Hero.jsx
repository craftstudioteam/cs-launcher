import React from 'react';
import { Download } from 'lucide-react';
import AdBanner from './AdBanner';
import ShowcaseGallery from './ShowcaseGallery';
import { DiscordIcon } from './MinecraftIcons';

export default function Hero({ hero, branding, activeVersion, liveDownloadCount, discordUrl, onNavigate, onDownload }) {
  const currentVer = activeVersion || 'v3';
  const count = liveDownloadCount || 4091;

  return (
    <div className="tab-transition-wrapper">

      {/* ══════════════════════════════════════════════════════════════
          🕹️ CLEAN & ELEGANT HERO TITLE BOX
          ══════════════════════════════════════════════════════════════ */}
      <div className="home-hero-wrap">
        <div className="mctools-title-block">
          <h1 className="mctools-title-main">CS Launcher</h1>
        </div>

        <div>
          <div className="mctools-sub-pill">
            <span className="mctools-sub-text">Minecraft Java on Android</span>
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
            <span style={{ fontSize: '0.72rem', color: 'var(--mc-green)', background: '#100d28', padding: '5px 12px', border: '1px solid #282054', borderRadius: 4 }}>
              ● v3 Official Release (185.8 MB)
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--mc-gold)', background: '#100d28', padding: '5px 12px', border: '1px solid #282054', borderRadius: 4 }}>
              {count.toLocaleString()}+ Downloads
            </span>
          </div>
        </div>
      </div>

      {/* 📢 AD BANNER */}
      <AdBanner slotId="hero-mid" format="banner" />

      {/* 📸 SHOWCASE GALLERY (Homescreen First) */}
      <ShowcaseGallery />

      {/* 💬 COMMUNITY DISCORD CARD */}
      {discordUrl && (
        <div className="app-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="nav-discord-btn" style={{ width: 42, height: 42 }}>
              <DiscordIcon size={24} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--mc-yellow)' }}>
                Join CS Launcher Discord
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--mc-grey)', marginTop: 2 }}>
                Get instant help, game configs & updates
              </div>
            </div>
          </div>

          <a 
            href={discordUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-mc-3d"
            style={{ fontSize: '0.78rem', padding: '9px 16px' }}
          >
            <span>Join Server ↗</span>
          </a>
        </div>
      )}
    </div>
  );
}
