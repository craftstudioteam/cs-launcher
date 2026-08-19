import React, { useState } from 'react';
import { Download, Sparkles, Image, X, Video, Archive, Palette, ShieldCheck, Users, HelpCircle, ExternalLink } from 'lucide-react';
import AdBanner from './AdBanner';
import {
  TotemIcon,
  MusicDiscIcon,
  PaintingIcon,
  PlayerHeadIcon,
  CapeIcon,
  ArmorStandIcon,
  ApkPackageIcon,
  ShieldGplIcon,
  DiscordIcon
} from './MinecraftIcons';

export default function Hero({ hero, branding, activeVersion, liveDownloadCount, discordUrl, onNavigate, onDownload }) {
  const [lightboxImg, setLightboxImg] = useState(null);

  const currentVer = activeVersion || 'v3';
  const count = liveDownloadCount || 4091;

  const screenshots = branding.screenshots && Array.isArray(branding.screenshots) && branding.screenshots.length > 0
    ? branding.screenshots
    : [];

  return (
    <div className="tab-transition-wrapper">

      {/* ══════════════════════════════════════════════════════════════
          🕹️ AUTHENTIC MCTOOLS HERO TITLE BOX
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
            <span style={{ fontSize: '0.64rem', color: 'var(--mc-green)', background: '#0e0b24', padding: '4px 10px', border: '1px solid #000', boxShadow: '2px 2px 0 #000' }}>
              ● v3 Official Release (185.8 MB)
            </span>
            <span style={{ fontSize: '0.64rem', color: 'var(--mc-gold)', background: '#0e0b24', padding: '4px 10px', border: '1px solid #000', boxShadow: '2px 2px 0 #000' }}>
              {count.toLocaleString()}+ Downloads
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          🧱 2-COLUMN MINECRAFT GRID CARDS (EXACT MC-TOOLS.NET STYLE)
          ══════════════════════════════════════════════════════════════ */}
      <div className="section-label-mctools">
        <span>Launcher Tools</span>
        <span style={{ fontSize: '0.62rem', color: 'var(--mc-grey)', letterSpacing: 0 }}>Tap any tool</span>
      </div>

      <div className="mctools-grid-2col">
        {/* Card 1: Download V3 (Yellow Stripe) */}
        <div className="mctools-card stripe-yellow" onClick={() => onDownload(null, currentVer)}>
          <span className="mctools-card-badge">v3</span>
          <div className="mctools-card-icon">
            <ApkPackageIcon size={46} />
          </div>
          <div>
            <div className="mctools-card-title">Download APK</div>
            <div className="mctools-card-desc">185.8 MB • Android 7+</div>
          </div>
        </div>

        {/* Card 2: Skin & Cape Changer (Purple Stripe) */}
        <div className="mctools-card stripe-purple" onClick={() => onNavigate('features')}>
          <span className="mctools-card-badge" style={{ background: 'var(--mc-purple)', color: '#000' }}>NEW</span>
          <div className="mctools-card-icon">
            <CapeIcon size={46} />
          </div>
          <div>
            <div className="mctools-card-title">Skin & Cape</div>
            <div className="mctools-card-desc">Custom Java Skins</div>
          </div>
        </div>

        {/* Card 3: Video Guides & Showcases (Green Stripe) */}
        <div className="mctools-card stripe-green" onClick={() => onNavigate('videos')}>
          <span className="mctools-card-badge" style={{ background: 'var(--mc-green)', color: '#000' }}>HD</span>
          <div className="mctools-card-icon">
            <MusicDiscIcon size={46} />
          </div>
          <div>
            <div className="mctools-card-title">Video Guides</div>
            <div className="mctools-card-desc">Gameplay & Setup</div>
          </div>
        </div>

        {/* Card 4: Archive Builds (Cyan Stripe) */}
        <div className="mctools-card stripe-cyan" onClick={() => onNavigate('download')}>
          <div className="mctools-card-icon">
            <PaintingIcon size={46} />
          </div>
          <div>
            <div className="mctools-card-title">Old Builds</div>
            <div className="mctools-card-desc">v1.0.0 Archive</div>
          </div>
        </div>

        {/* Card 5: Craft Studio Team (Yellow Stripe) */}
        <div className="mctools-card stripe-yellow" onClick={() => onNavigate('team')}>
          <div className="mctools-card-icon">
            <PlayerHeadIcon size={46} />
          </div>
          <div>
            <div className="mctools-card-title">Craft Team</div>
            <div className="mctools-card-desc">Credits & Pojav</div>
          </div>
        </div>

        {/* Card 6: Legal Notice & GPLv3 (Red Stripe) */}
        <div className="mctools-card stripe-red" onClick={() => onNavigate('notice')}>
          <div className="mctools-card-icon">
            <ShieldGplIcon size={46} />
          </div>
          <div>
            <div className="mctools-card-title">Legal & GPL</div>
            <div className="mctools-card-desc">Open Source GNU</div>
          </div>
        </div>

        {/* Card 7: Armor Stand / Setup (Orange Stripe) */}
        <div className="mctools-card stripe-orange" onClick={() => onNavigate('help')}>
          <div className="mctools-card-icon">
            <ArmorStandIcon size={46} />
          </div>
          <div>
            <div className="mctools-card-title">Setup Help</div>
            <div className="mctools-card-desc">RAM & Controls</div>
          </div>
        </div>

        {/* Card 8: Totem / FAQs (Purple Stripe) */}
        <div className="mctools-card stripe-purple" onClick={() => onNavigate('help')}>
          <div className="mctools-card-icon">
            <TotemIcon size={46} />
          </div>
          <div>
            <div className="mctools-card-title">Community FAQ</div>
            <div className="mctools-card-desc">Discord & Guides</div>
          </div>
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
            <span style={{ fontSize: '0.62rem', color: 'var(--mc-grey)' }}>Tap to expand</span>
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
