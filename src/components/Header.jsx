import React, { useState } from 'react';
import { Download, Share2, Check } from 'lucide-react';

export default function Header({ branding, activeVersion, activeTab, onNavigate }) {
  const [copied, setCopied] = useState(false);

  const rawName = branding.appName || "CS LAUNCHER";
  const cleanName = rawName.replace(/\s+v\d+(\.\d+)*\b/gi, '').trim().toUpperCase() || "CS LAUNCHER";
  const ver = activeVersion || "v3";

  // Clean URL generation (Zero Hashtags)
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
        text: `Check out ${cleanName} (${ver}) on Android!`,
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
              src={branding.logoImage || branding.logoUrl || "https://i.ibb.co/jv7ZS03W/favicon.png"} 
              alt="CS Launcher Logo" 
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

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button 
            className="social-icon-btn" 
            onClick={handleShare} 
            title={`Copy Direct Link to ${activeTab || 'page'}`}
            style={{ width: 36, height: 36, position: 'relative' }}
          >
            {copied ? <Check size={16} color="#10B981" /> : <Share2 size={16} />}
          </button>
          
          <button className="header-btn-primary" onClick={() => onNavigate('download')}>
            <Download size={15} />
            <span>Get APK</span>
          </button>
        </div>
      </div>
    </header>
  );
}
