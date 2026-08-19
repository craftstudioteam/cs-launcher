import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { DiscordIcon } from './MinecraftIcons';

export default function Header({ branding, activeTab, onNavigate }) {
  const [copied, setCopied] = useState(false);

  const rawName = branding.appName || "CS Launcher";
  const cleanName = rawName.replace(/\s+v\d+(\.\d+)*\b/gi, '').trim() || "CS Launcher";
  const logoUrl = branding.logoImage || "https://i.ibb.co/ccSzBW5P/file-00000000e1cc821195ed9a7324d2b765.png";

  const getShareData = () => {
    const base = window.location.origin;
    let url = activeTab === 'home' ? `${base}/` : `${base}/${activeTab}`;
    let title = `${cleanName} — Minecraft Java on Android`;
    let text = `Download official ${cleanName} APK on Android. Play Minecraft Java with 60+ FPS!`;

    if (activeTab === 'download') {
      title = `${cleanName} V3 APK — Official Latest Download`;
      text = `Download official ${cleanName} V3 APK (185.8 MB) for Android!`;
    } else if (activeTab === 'features') {
      title = `${cleanName} — Skin & Cape Changer`;
      text = `Dynamic custom skin & cape applicator for Minecraft Java on Android!`;
    } else if (activeTab === 'videos') {
      title = `${cleanName} — Video Guides & Showcases`;
      text = `Watch ${cleanName} gameplay showcases and setup tutorials!`;
    }

    return { url, title, text };
  };

  const handleShare = () => {
    const { url, title, text } = getShareData();

    if (navigator.share) {
      navigator.share({ title, text, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Left: Brand Logo & ONLY "CS Launcher" */}
        <div className="brand-wrapper" onClick={() => onNavigate('home')}>
          <div className="brand-icon-box">
            <img 
              src={logoUrl} 
              alt="CS Logo" 
            />
          </div>
          <div className="brand-title">
            <span>{cleanName}</span>
          </div>
        </div>

        {/* Right: Actions (About, Discord, Share) */}
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
