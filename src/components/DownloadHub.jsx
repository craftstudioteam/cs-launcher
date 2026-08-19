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
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', fontWeight: 900, color: 'var(--mc-text-yellow)' }}>
          DOWNLOAD CS LAUNCHER
        </h2>
        <p style={{ fontSize: '0.78rem', color: 'var(--mc-text-grey)', marginTop: 4 }}>
          Direct official GitHub release build for Minecraft Java on Android
        </p>
      </div>

      {/* Latest Featured Release Card (v3) */}
      <div className="featured-release-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="featured-badge">
            <span className="status-dot"></span>
            <span>LATEST OFFICIAL BUILD</span>
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
          <div>
            <div className="release-version-title">
              CS LAUNCHER {latest.version || 'v3'}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--mc-text-grey)', marginTop: 2 }}>
              {latest.releaseName || 'CS Launcher V3'} • {latest.releaseDate || 'August 2026'}
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
            <span className="spec-val" style={{ color: 'var(--mc-text-green)' }}>
              VERIFIED STABLE
            </span>
          </div>
        </div>

        {/* Changelog */}
        <div className="changelog-box">
          <div style={{ fontFamily: 'Silkscreen', fontSize: '0.68rem', fontWeight: 700, color: 'var(--mc-text-yellow)', letterSpacing: '0.5px' }}>
            What's New in V3 Release:
          </div>
          <ul className="changelog-list">
            {changelogLines.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        {/* 🟢 3D Green Minecraft Download Button (Zero Overflow) */}
        <button 
          className="btn-mc-green-3d"
          onClick={() => onDownload(latest.downloadUrl, latest.version || 'v3')}
        >
          <Download size={18} />
          <span>DOWNLOAD APK ({latest.version ? latest.version.toUpperCase() : 'V3'})</span>
        </button>
      </div>

      {/* Download Section Ad Banner */}
      <AdBanner slotId="download-mid" format="responsive" />

      {/* Archive / Previous Versions Section */}
      {archiveEntries.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.92rem', fontWeight: 800, color: 'var(--mc-text-yellow)', marginBottom: 12, fontFamily: 'Space Grotesk' }}>
            <Archive size={16} />
            <span>PREVIOUS BUILD ARCHIVE</span>
          </div>

          <div className="archive-grid">
            {archiveEntries.map(([key, item]) => (
              <div key={key} className="archive-card">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div>
                      <div className="archive-version-tag">CS Launcher {item.version || 'v1.0'}</div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--mc-text-grey)', marginTop: 2 }}>
                        {item.releaseName || 'Legacy Build'} • {item.releaseDate || '2026'}
                      </div>
                    </div>
                    <span className="brand-version-pill">{item.fileSize || 'APK'}</span>
                  </div>
                  <div className="archive-desc" style={{ marginTop: 8, fontSize: '0.74rem', color: 'var(--mc-text-grey)', lineHeight: 1.45 }}>
                    {item.changelog || 'Original PojavLauncher base build'}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid #000' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--mc-text-grey)' }}>{item.compatibility || 'Android 7+'}</span>
                  <button 
                    className="btn-mc-3d"
                    style={{ padding: '6px 12px', fontSize: '0.72rem' }}
                    onClick={() => onDownload(item.downloadUrl, item.version || 'Archive')}
                  >
                    <Download size={12} />
                    <span>DOWNLOAD</span>
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
