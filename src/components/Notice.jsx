import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Scale, 
  AlertTriangle, 
  ExternalLink, 
  Code, 
  Award,
  Globe
} from 'lucide-react';
import AdBanner from './AdBanner';

export default function Notice({ branding, activeVersion }) {
  const [showFullLicense, setShowFullLicense] = useState(false);

  const cleanName = (branding.appName || "CS LAUNCHER")
    .replace(/\s+v\d+(\.\d+)*\b/gi, '').trim().toUpperCase() || "CS LAUNCHER";
  const ver = activeVersion || "v3";

  return (
    <div className="tab-transition-wrapper">
      {/* 🛡️ TOP HEADER */}
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div className="featured-badge" style={{ marginBottom: 10 }}>
          <ShieldCheck size={14} color="#55FF55" />
          <span>LEGAL COMPLIANCE</span>
        </div>

        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', fontWeight: 900, color: 'var(--mc-text-yellow)' }}>
          LEGAL NOTICE & LICENSES
        </h2>
        <p style={{ fontSize: '0.78rem', color: 'var(--mc-text-grey)', marginTop: 4, maxWidth: 540, margin: '4px auto 0' }}>
          Open source licensing, PojavLauncher attribution, and terms of use.
        </p>
      </div>

      {/* Ad Banner Slot */}
      <AdBanner slotId="notice-top" format="banner" />

      {/* 1. PROJECT IDENTITY */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <Award size={18} color="#FFAA00" />
          <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '0.98rem', fontWeight: 800, color: 'var(--mc-text-yellow)' }}>PROJECT OWNERSHIP</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #000' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--mc-text-grey)' }}>PROJECT:</span>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--mc-text-white)' }}>{cleanName} ({ver})</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #000' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--mc-text-grey)' }}>ORGANIZATION:</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--mc-text-white)' }}>Craft Studio Team</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #000' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--mc-text-grey)' }}>DEVELOPER:</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', fontWeight: 800, color: 'var(--mc-text-gold)' }}>ROHIT_45</span>
          </div>
        </div>

        <p style={{ fontSize: '0.68rem', color: 'var(--mc-text-muted)', marginTop: 10 }}>
          {branding.copyright || "Copyright © 2026 Craft Studio Development Group."}
        </p>
      </div>

      {/* 2. UPSTREAM POJAVLAUNCHER ATTRIBUTION */}
      <div className="app-card" style={{ borderLeft: '4px solid var(--mc-text-yellow)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Code size={18} color="#FFFF55" />
          <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '0.98rem', fontWeight: 800, color: 'var(--mc-text-yellow)' }}>POJAVLAUNCHER ATTRIBUTION</h3>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--mc-text-grey)', lineHeight: 1.55, marginBottom: 12 }}>
          <strong>CS Launcher</strong> is based on and contains code derived from the upstream open-source <strong>PojavLauncher</strong> project licensed under GNU GPLv3.
        </p>

        <div className="app-card-elevated" style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--mc-text-grey)' }}>REPOSITORY:</span>
            <a href="https://github.com/PojavLauncherTeam/PojavLauncher" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.74rem', color: 'var(--mc-text-yellow)', wordBreak: 'break-all' }}>
              github.com/PojavLauncherTeam ↗
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--mc-text-grey)' }}>LICENSE:</span>
            <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--mc-text-green)' }}>GNU GPLv3 (Copyleft)</span>
          </div>
        </div>
      </div>

      {/* 3. GNU GPLv3 LICENSE INFO */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Scale size={18} color="#55FF55" />
          <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '0.98rem', fontWeight: 800, color: 'var(--mc-text-yellow)' }}>GNU GPLv3 LICENSE</h3>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--mc-text-grey)', lineHeight: 1.55, marginBottom: 12 }}>
          This project is licensed under the <strong>GNU General Public License Version 3 (GPLv3)</strong>.
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <a 
            href="https://www.gnu.org/licenses/gpl-3.0.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-mc-3d"
            style={{ fontSize: '0.74rem', padding: '8px 12px' }}
          >
            <span>VIEW GPLv3 LICENSE ↗</span>
          </a>

          <button 
            type="button"
            className="btn-mc-3d"
            style={{ fontSize: '0.74rem', padding: '8px 12px' }}
            onClick={() => setShowFullLicense(!showFullLicense)}
          >
            <span>{showFullLicense ? 'HIDE PREAMBLE' : 'VIEW PREAMBLE'}</span>
          </button>
        </div>

        {showFullLicense && (
          <div style={{ marginTop: 10, padding: 10, background: '#000', border: '1px solid #333', fontSize: '0.68rem', color: 'var(--mc-text-grey)', lineHeight: 1.5, maxHeight: 180, overflowY: 'auto' }}>
            <p style={{ color: '#fff', marginBottom: 4 }}>GNU GENERAL PUBLIC LICENSE — Version 3, 29 June 2007</p>
            <p>Copyright © 2007 Free Software Foundation, Inc.</p>
            <p style={{ marginTop: 4 }}>
              The GNU General Public License is a free, copyleft license for software. It is intended to guarantee your freedom to share and change all versions of a program.
            </p>
          </div>
        )}
      </div>

      {/* 4. TRADEMARKS */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Globe size={18} color="#fff" />
          <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '0.98rem', fontWeight: 800, color: 'var(--mc-text-yellow)' }}>TRADEMARKS</h3>
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--mc-text-grey)', lineHeight: 1.55 }}>
          "Minecraft", "Mojang", and related assets are trademarks of <strong>Mojang Studios</strong> and <strong>Microsoft Corporation</strong>. CS Launcher is an independent open-source client utility and is not affiliated with or endorsed by Mojang Studios or Microsoft.
        </p>
      </div>

      {/* 5. NO WARRANTY */}
      <div className="app-card" style={{ borderColor: '#660000' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, color: 'var(--mc-text-red)' }}>
          <AlertTriangle size={16} />
          <span style={{ fontFamily: 'Space Grotesk', fontSize: '0.88rem', fontWeight: 800 }}>DISCLAIMER OF WARRANTY</span>
        </div>

        <p style={{ fontSize: '0.7rem', color: 'var(--mc-text-muted)', lineHeight: 1.5, textTransform: 'uppercase', fontFamily: 'JetBrains Mono' }}>
          THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR LIABILITY.
        </p>
      </div>
    </div>
  );
}
