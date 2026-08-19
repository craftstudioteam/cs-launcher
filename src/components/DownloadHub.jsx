import React, { useState } from 'react';
import { Download, CheckCircle2, Archive, Copy, Check } from 'lucide-react';
import AdBanner from './AdBanner';

export default function DownloadHub({ latest, archive, onDownload }) {
  const [copiedLink, setCopiedLink] = useState(false);

  const changelogLines = (latest.changelog || "Improved launcher performance and stability\nBetter profile management\nImproved download and installation system\nCleaner and more modern UI\nImproved Minecraft version and profile handling\nVarious bug fixes and optimizations")
    .split(/[\r\n]+/)
    .map(l => l.replace(/^[•\-\*]\s*/, '').trim())
    .filter(Boolean);

  const archiveEntries = archive ? Object.entries(archive).reverse() : [];

  const handleCopyApkLink = () => {
    if (latest.downloadUrl) {
      navigator.clipboard.writeText(latest.downloadUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="tab-transition-wrapper">
      {/* MCTools Styled Section Header */}
      <div className="home-hero-wrap" style={{ padding: '0.8rem 0 1.2rem' }}>
        <div className="mctools-title-block">
          <h2 className="mctools-title-main" style={{ fontSize: 'clamp(1.4rem, 5vw, 2.1rem)' }}>
            Download Hub
          </h2>
        </div>
        <div>
          <div className="mctools-sub-pill">
            <span className="mctools-sub-text">Direct Official Releases</span>
          </div>
        </div>
      </div>

      {/* Latest Featured Release Card (v3) */}
      <div className="featured-release-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="featured-badge">
            <span>● Official V3 Release</span>
          </div>

          <button 
            className="social-icon-btn" 
            onClick={handleCopyApkLink}
            title="Copy Direct APK Download Link"
            style={{ width: 32, height: 32, marginBottom: 10 }}
          >
            {copiedLink ? <Check size={14} color="#55FF55" /> : <Copy size={14} />}
          </button>
        </div>

        <div className="release-main-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <img src="/icons/icon-converter.png" alt="Release Box" style={{ height: 32, width: 'auto', imageRendering: 'pixelated' }} />
            </div>
            <div>
              <div className="release-version-title">
                CS Launcher {latest.version || 'v3'}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', marginTop: 2, lineHeight: 1.3 }}>
                {latest.releaseName || 'CS Launcher V3'} • {latest.releaseDate || 'August 2026'}
              </div>
            </div>
          </div>
          <div>
            <span className="brand-version-pill" style={{ fontSize: '0.7rem', padding: '4px 8px' }}>
              {latest.fileSize || '185.8 MB'}
            </span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="release-specs-grid">
          <div className="spec-item">
            <span className="spec-key">Compatibility</span>
            <span className="spec-val">{latest.compatibility || 'Android 7.0+'}</span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Memory Req.</span>
            <span className="spec-val">{latest.requirements || '2GB / 4GB RAM'}</span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Architecture</span>
            <span className="spec-val">ARM64 / ARM32</span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Status</span>
            <span className="spec-val" style={{ color: 'var(--mc-green)' }}>
              Verified Stable
            </span>
          </div>
        </div>

        {/* Changelog */}
        <div className="changelog-box">
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--mc-yellow)', marginBottom: 6 }}>
            What's New in V3 Release:
          </div>
          <ul className="changelog-list">
            {changelogLines.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        {/* 🟢 3D Green Minecraft Download Button */}
        <button 
          className="btn-mc-green-3d"
          onClick={() => onDownload(latest.downloadUrl, latest.version || 'v3')}
        >
          <Download size={18} />
          <span>Download APK ({latest.version || 'v3'})</span>
        </button>
      </div>

      {/* Download Section Ad Banner */}
      <AdBanner slotId="download-mid" format="responsive" />

      {/* Archive / Previous Versions Section */}
      {archiveEntries.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <div className="section-label-mctools">
            <span>Previous Build Archive</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
            {archiveEntries.map(([key, item]) => (
              <div key={key} className="app-card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="/icons/icon-portal.png" alt="Portal Icon" style={{ height: 26, width: 'auto', imageRendering: 'pixelated' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--mc-yellow)' }}>CS Launcher {item.version || 'v1.0'}</div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--mc-grey)', marginTop: 2 }}>
                        {item.releaseName || 'Legacy Build'} • {item.releaseDate || '2026'}
                      </div>
                    </div>
                  </div>
                  <span className="brand-version-pill">{item.fileSize || '300 MB'}</span>
                </div>

                <div style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.45 }}>
                  {item.changelog || 'Original PojavLauncher base build'}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid #000' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--mc-grey)' }}>{item.compatibility || 'Android 7+'}</span>
                  <button 
                    className="btn-mc-3d"
                    style={{ padding: '6px 12px', fontSize: '0.72rem' }}
                    onClick={() => onDownload(item.downloadUrl, item.version || 'Archive')}
                  >
                    <Download size={12} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
