import React, { useState } from 'react';
import { Download, Share2, Check } from 'lucide-react';
import { DiscordIcon } from './MinecraftIcons';

export default function Header({ branding, activeVersion, activeTab, onNavigate }) {
  const [copied, setCopied] = useState(false);

  const rawName = branding.appName || "CS Launcher";
  const cleanName = rawName.replace(/\s+v\d+(\.\d+)*\b/gi, '').trim() || "CS Launcher";
  const ver = activeVersion || "v3";
  const logoUrl = branding.logoImage || "https://i.ibb.co/jv48XLds/Picsart-26-05-04-20-20-15-578.png";

  const getPageUrl = () => {
    const base = window.location.origin;
    return activeTab === 'home' ? `${base}/` : `${base}/${activeTab}`;
  };

  const handleShare = () => {
    const pageUrl = getPageUrl();
    const tabName = activeTab ? activeTab.charAt(0).toUpperCase() + activeTab.slice(1) : 'Home';

    if (navigator.share) {
      navigator.share({
        title: `${cleanName} — ${tabName}`,
        text: `Download ${cleanName} (${ver}) on Android!`,
        url: pageUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Left: Brand Logo & Title */}
        <div className="brand-wrapper" onClick={() => onNavigate('home')}>
          <div className="brand-icon-box">
            <img 
              src={logoUrl} 
              alt="CS Logo" 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="brand-title">
              <span>{cleanName}</span>
            </div>
            <div className="brand-tagline">
              {branding.tagline || "Minecraft Java on Android"}
            </div>
          </div>
        </div>

        {/* Right: Actions (About, Discord, Get APK, Share) — NO TOOLS DROPDOWN */}
        <div className="header-actions">
          {/* About Link */}
          <button 
            className="nav-link-btn"
            onClick={() => onNavigate('team')}
          >
            About
          </button>

          {/* Discord Icon Button */}
          <a 
            href="https://discord.gg/bpgYQMA59D" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-discord-btn"
            title="Official Discord"
          >
            <DiscordIcon size={18} color="currentColor" />
          </a>

          {/* Get APK Quick Button */}
          <button 
            className="btn-mc-3d" 
            style={{ padding: '6px 12px', fontSize: '0.7rem' }}
            onClick={() => onNavigate('download')}
          >
            <Download size={13} />
            <span>Get APK</span>
          </button>

          {/* Share Button */}
          <button 
            className="social-icon-btn" 
            onClick={handleShare} 
            title="Share link"
          >
            {copied ? <Check size={15} color="var(--mc-green)" /> : <Share2 size={15} />}
          </button>
        </div>
      </div>
    </header>
  );
}
