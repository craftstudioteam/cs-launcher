import React, { useState } from 'react';
import { Download, Share2, Check } from 'lucide-react';

export default function Header({ branding, activeVersion, activeTab, onNavigate }) {
  const [copied, setCopied] = useState(false);

  const rawName = branding.appName || "CS Launcher";
  const cleanName = rawName.replace(/\s+v\d+(\.\d+)*\b/gi, '').trim() || "CS Launcher";
  const ver = activeVersion || "v3";

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
        <div className="brand-wrapper" onClick={() => onNavigate('home')}>
          <div className="brand-icon-box">
            <img 
              src={branding.logoImage || "https://i.ibb.co/jv7ZS03W/favicon.png"} 
              alt="CS Logo" 
            />
          </div>
          <div>
            <div className="brand-title">
              <span>{cleanName}</span>
              <span className="brand-version-pill">{ver}</span>
            </div>
            <div className="brand-tagline">
              {branding.tagline || "Minecraft Java on Android"}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button 
            className="social-icon-btn" 
            onClick={handleShare} 
            title={`Copy link to ${activeTab || 'page'}`}
          >
            {copied ? <Check size={16} color="#55FF55" /> : <Share2 size={16} />}
          </button>
          
          <button className="btn-mc-3d" style={{ padding: '7px 12px', fontSize: '0.72rem' }} onClick={() => onNavigate('download')}>
            <Download size={13} />
            <span>Get APK</span>
          </button>
        </div>
      </div>
    </header>
  );
}
