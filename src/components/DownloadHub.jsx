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
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.7rem', fontWeight: 900 }}>Download CS Launcher APK</h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-grey)', marginTop: 6 }}>
          Direct official GitHub release build for Minecraft Java on Android
        </p>
      </div>

      {/* Latest Featured Release Card (v3) */}
      <div className="featured-release-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="featured-badge">
            <span className="status-dot"></span>
            <span>Latest Official Release</span>
          </div>

          <button 
            className="social-icon-btn" 
            onClick={handleCopyApkLink}
            title="Copy Direct APK Download Link"
            style={{ width: 32, height: 32, marginBottom: 12 }}
          >
            {copiedLink ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
          </button>
        </div>

        <div className="release-main-row">
          <div>
            <div className="release-version-title">
              CS Launcher {latest.version || 'v3'}
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: 2 }}>
              {latest.releaseName || 'CS Launcher V3'} • {latest.releaseDate || 'August 2026'}
            </div>
          </div>
          <div>
            <span className="brand-version-pill" style={{ fontSize: '0.88rem', padding: '5px 14px' }}>
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
            <span className="spec-val" style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle2 size={13} />
              <span>Verified Stable</span>
            </span>
          </div>
        </div>

        {/* Changelog */}
        <div className="changelog-box">
          <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-grey)', letterSpacing: '0.5px' }}>
            What's New in V3 Release:
          </div>
          <ul className="changelog-list">
            {changelogLines.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        {/* Download Button */}
        <button 
          className="btn-download-large"
          onClick={() => onDownload(latest.downloadUrl, latest.version || 'v3')}
        >
          <Download size={22} />
          <span>Download CS Launcher APK ({latest.version || 'v3'})</span>
        </button>
      </div>

      {/* Download Section Ad Banner */}
      <AdBanner slotId="download-mid" format="responsive" />

      {/* Archive / Previous Versions Section */}
      {archiveEntries.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Space Grotesk', fontSize: '1.2rem', fontWeight: 800, marginBottom: 14 }}>
            <Archive size={20} />
            <span>Previous Version Archive</span>
          </div>

          <div className="archive-grid">
            {archiveEntries.map(([key, item]) => (
              <div key={key} className="archive-card">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div className="archive-version-tag">CS Launcher {item.version || 'v1.0'}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {item.releaseName || 'Legacy Build'} • {item.releaseDate || '2026'}
                      </div>
                    </div>
                    <span className="brand-version-pill">{item.fileSize || 'APK'}</span>
                  </div>
                  <div className="archive-desc" style={{ marginTop: 10 }}>
                    {item.changelog || 'Original PojavLauncher base build'}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{item.compatibility || 'Android 7+'}</span>
                  <button 
                    className="btn-archive-dl"
                    onClick={() => onDownload(item.downloadUrl, item.version || 'Archive')}
                  >
                    <Download size={14} />
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
