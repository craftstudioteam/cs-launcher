import React, { useState } from 'react';
import { Download, Share2, Check, ChevronDown, Wrench, Sparkles, Video, Archive, ShieldCheck, Users, HelpCircle } from 'lucide-react';
import { DiscordIcon } from './MinecraftIcons';

export default function Header({ branding, activeVersion, activeTab, onNavigate }) {
  const [copied, setCopied] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

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
        {/* Left: Brand Logo & Title (mc-tools.net Gold Brand Style) */}
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
            </div>
            <div className="brand-tagline">
              {branding.tagline || "Minecraft Java on Android"}
            </div>
          </div>
        </div>

        {/* Right: Actions (About, Discord, Tools Dropdown, Share) */}
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

          {/* Tools ▾ Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              className="nav-tools-btn"
              onClick={() => setToolsOpen(!toolsOpen)}
            >
              <Wrench size={13} color="var(--mc-cyan)" />
              <span>Tools</span>
              <ChevronDown size={12} />
            </button>

            {toolsOpen && (
              <>
                <div 
                  style={{ position: 'fixed', inset: 0, zIndex: 90 }} 
                  onClick={() => setToolsOpen(false)} 
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: 6,
                    background: 'rgba(14, 11, 36, 0.98)',
                    border: '2px solid #000',
                    borderTopColor: '#3a2f6a',
                    borderLeftColor: '#3a2f6a',
                    boxShadow: '3px 3px 0 #000, 0 8px 24px rgba(0,0,0,0.8)',
                    minWidth: 170,
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <button 
                    onClick={() => { onNavigate('download'); setToolsOpen(false); }}
                    style={{ padding: '8px 12px', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--mc-yellow)', fontSize: '0.68rem', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <Download size={13} color="var(--mc-gold)" />
                    <span>Download V3</span>
                  </button>
                  <button 
                    onClick={() => { onNavigate('features'); setToolsOpen(false); }}
                    style={{ padding: '8px 12px', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--mc-purple)', fontSize: '0.68rem', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <Sparkles size={13} color="var(--mc-purple)" />
                    <span>Skin & Cape</span>
                  </button>
                  <button 
                    onClick={() => { onNavigate('videos'); setToolsOpen(false); }}
                    style={{ padding: '8px 12px', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--mc-green)', fontSize: '0.68rem', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <Video size={13} color="var(--mc-green)" />
                    <span>Video Guides</span>
                  </button>
                  <button 
                    onClick={() => { onNavigate('download'); setToolsOpen(false); }}
                    style={{ padding: '8px 12px', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--mc-cyan)', fontSize: '0.68rem', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <Archive size={13} color="var(--mc-cyan)" />
                    <span>Old Builds</span>
                  </button>
                  <button 
                    onClick={() => { onNavigate('team'); setToolsOpen(false); }}
                    style={{ padding: '8px 12px', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--mc-gold)', fontSize: '0.68rem', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <Users size={13} color="var(--mc-gold)" />
                    <span>Craft Team</span>
                  </button>
                  <button 
                    onClick={() => { onNavigate('notice'); setToolsOpen(false); }}
                    style={{ padding: '8px 12px', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'var(--mc-red)', fontSize: '0.68rem', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <ShieldCheck size={13} color="var(--mc-red)" />
                    <span>Legal & GPL</span>
                  </button>
                  <button 
                    onClick={() => { onNavigate('help'); setToolsOpen(false); }}
                    style={{ padding: '8px 12px', background: 'none', border: 'none', color: '#fff', fontSize: '0.68rem', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <HelpCircle size={13} color="var(--mc-grey)" />
                    <span>Help & FAQs</span>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Share Button */}
          <button 
            className="social-icon-btn" 
            onClick={handleShare} 
            title={`Share link`}
          >
            {copied ? <Check size={15} color="var(--mc-green)" /> : <Share2 size={15} />}
          </button>
        </div>
      </div>
    </header>
  );
}
