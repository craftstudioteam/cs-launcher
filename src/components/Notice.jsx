import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Scale, 
  AlertTriangle, 
  ExternalLink, 
  Code, 
  CheckCircle2, 
  Lock, 
  ChevronDown, 
  Info,
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
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div className="featured-badge" style={{ marginBottom: 12 }}>
          <ShieldCheck size={14} color="#55FF55" />
          <span>OFFICIAL COMPLIANCE & NOTICES</span>
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--mc-text-yellow)' }}>
          LEGAL NOTICE & LICENSES
        </h2>
        <p style={{ fontSize: '0.74rem', color: 'var(--mc-text-grey)', marginTop: 6, maxWidth: 580, margin: '6px auto 0' }}>
          Complete licensing disclosures, upstream PojavLauncher attribution, and terms.
        </p>
      </div>

      {/* Ad Banner Slot */}
      <AdBanner slotId="notice-top" format="banner" />

      {/* 1. PROJECT IDENTITY */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <Award size={18} color="#FFAA00" />
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--mc-text-yellow)' }}>PROJECT IDENTITY & OWNERSHIP</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #000' }}>
            <span style={{ fontSize: '0.68rem', color: 'var(--mc-text-grey)' }}>PROJECT:</span>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--mc-text-white)' }}>{cleanName} ({ver})</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #000' }}>
            <span style={{ fontSize: '0.68rem', color: 'var(--mc-text-grey)' }}>ORGANIZATION:</span>
            <span style={{ fontSize: '0.76rem', color: 'var(--mc-text-white)' }}>Craft Studio Development Group</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #000' }}>
            <span style={{ fontSize: '0.68rem', color: 'var(--mc-text-grey)' }}>DEVELOPER:</span>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--mc-text-gold)' }}>ROHIT_45</span>
          </div>
        </div>

        <p style={{ fontSize: '0.65rem', color: 'var(--mc-text-grey)', marginTop: 12 }}>
          {branding.copyright || "Copyright © 2026 Craft Studio Development Group."}
        </p>
      </div>

      {/* 2. UPSTREAM POJAVLAUNCHER ATTRIBUTION */}
      <div className="app-card" style={{ borderLeft: '4px solid var(--mc-text-yellow)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <Code size={18} color="#FFFF55" />
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--mc-text-yellow)' }}>UPSTREAM POJAVLAUNCHER ATTRIBUTION</h3>
        </div>

        <p style={{ fontSize: '0.76rem', color: 'var(--mc-text-grey)', lineHeight: 1.6, marginBottom: 14 }}>
          <strong>CS Launcher</strong> is based on and contains code derived from the upstream open-source <strong>PojavLauncher</strong> project licensed under GNU GPLv3.
        </p>

        <div className="app-card-elevated" style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--mc-text-grey)' }}>UPSTREAM REPOSITORY:</span>
            <a href="https://github.com/PojavLauncherTeam/PojavLauncher" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.7rem', color: 'var(--mc-text-yellow)' }}>
              github.com/PojavLauncherTeam ↗
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--mc-text-grey)' }}>LICENSE:</span>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--mc-text-green)' }}>GNU GPLv3 (Copyleft)</span>
          </div>
        </div>
      </div>

      {/* 3. GNU GPLv3 LICENSE INFO */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <Scale size={18} color="#55FF55" />
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--mc-text-yellow)' }}>GNU GPLv3 LICENSE</h3>
        </div>

        <p style={{ fontSize: '0.76rem', color: 'var(--mc-text-grey)', lineHeight: 1.6, marginBottom: 14 }}>
          This project is licensed under the <strong>GNU General Public License Version 3 (GPLv3)</strong>.
        </p>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a 
            href="https://www.gnu.org/licenses/gpl-3.0.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-mc-3d"
            style={{ fontSize: '0.7rem', padding: '8px 14px' }}
          >
            <span>VIEW OFFICIAL GPLv3 LICENSE ↗</span>
          </a>

          <button 
            type="button"
            className="btn-mc-3d"
            style={{ fontSize: '0.7rem', padding: '8px 14px' }}
            onClick={() => setShowFullLicense(!showFullLicense)}
          >
            <span>{showFullLicense ? 'HIDE PREAMBLE' : 'VIEW PREAMBLE'}</span>
          </button>
        </div>

        {showFullLicense && (
          <div style={{ marginTop: 12, padding: 12, background: '#000', border: '1px solid #333', fontSize: '0.66rem', color: 'var(--mc-text-grey)', lineHeight: 1.5, maxHeight: 180, overflowY: 'auto' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Globe size={18} color="#fff" />
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--mc-text-yellow)' }}>TRADEMARK DISCLAIMER</h3>
        </div>

        <p style={{ fontSize: '0.74rem', color: 'var(--mc-text-grey)', lineHeight: 1.6 }}>
          "Minecraft", "Mojang", and related assets are trademarks of <strong>Mojang Studios</strong> and <strong>Microsoft Corporation</strong>. CS Launcher is an independent open-source client utility and is not affiliated with or endorsed by Mojang Studios or Microsoft.
        </p>
      </div>

      {/* 5. NO WARRANTY */}
      <div className="app-card" style={{ borderColor: '#550000' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, color: 'var(--mc-text-red)' }}>
          <AlertTriangle size={16} />
          <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>NO WARRANTY DISCLAIMER</span>
        </div>

        <p style={{ fontSize: '0.66rem', color: 'var(--mc-text-grey)', lineHeight: 1.5, textTransform: 'uppercase' }}>
          THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY.
        </p>
      </div>
    </div>
  );
}
