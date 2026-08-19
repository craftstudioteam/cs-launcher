import React, { useState, useEffect } from 'react';
import { Download, Copy, Check, Share2, Sparkles, Archive, ArrowRight, ShieldCheck } from 'lucide-react';
import AdBanner from './AdBanner';

export default function DownloadHub({ downloads, routeParams, liveDownloadCount, onNavigate, onDownload, showToast }) {
  // Determine selected version from URL route (/download/v1, /download/v2, /download/v3)
  const initialVer = routeParams.version ? routeParams.version.toLowerCase() : 'v3';
  const [selectedVer, setSelectedVer] = useState(downloads[initialVer] ? initialVer : 'v3');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedApkUrl, setCopiedApkUrl] = useState(false);

  // Sync state when route changes
  useEffect(() => {
    if (routeParams.version && downloads[routeParams.version.toLowerCase()]) {
      setSelectedVer(routeParams.version.toLowerCase());
    }
  }, [routeParams.version, downloads]);

  const activeBuild = downloads[selectedVer] || downloads.v3;

  const handleSelectVersion = (vTag) => {
    setSelectedVer(vTag);
    onNavigate('download', { version: vTag });
  };

  const getPageUrl = (vTag) => {
    const base = window.location.origin;
    return `${base}/download/${vTag}`;
  };

  const handleCopyPageLink = () => {
    const url = getPageUrl(selectedVer);
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    if (showToast) showToast(`Copied direct ${selectedVer.toUpperCase()} page link!`, 'success');
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyDirectApk = () => {
    if (activeBuild.downloadUrl) {
      navigator.clipboard.writeText(activeBuild.downloadUrl);
      setCopiedApkUrl(true);
      if (showToast) showToast(`Copied ${selectedVer.toUpperCase()} APK download link!`, 'success');
      setTimeout(() => setCopiedApkUrl(false), 2000);
    }
  };

  const changelogLines = (activeBuild.changelog || "")
    .split(/[\r\n]+/)
    .map(l => l.replace(/^[•\-\*]\s*/, '').trim())
    .filter(Boolean);

  return (
    <div className="tab-transition-wrapper">
      {/* 🕹️ Header Section */}
      <div className="home-hero-wrap" style={{ padding: '0.8rem 0 1rem' }}>
        <div className="mctools-title-block">
          <h2 className="mctools-title-main" style={{ fontSize: 'clamp(1.4rem, 5vw, 2.1rem)' }}>
            Download Hub
          </h2>
        </div>
        <div>
          <div className="mctools-sub-pill">
            <span className="mctools-sub-text">Official Builds • Clean Direct URLs</span>
          </div>
        </div>
      </div>

      {/* 🚀 QUICK VERSION SELECTOR TABS (/download/v3, /download/v2, /download/v1) */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
        <button
          className={`btn-mc-3d ${selectedVer === 'v3' ? 'active-tab-glow' : ''}`}
          style={{
            padding: '8px 16px',
            fontSize: '0.8rem',
            background: selectedVer === 'v3' ? '#237829' : '#18143a',
            borderColor: selectedVer === 'v3' ? '#5cad3e' : '#2e2664',
            color: selectedVer === 'v3' ? '#ffff55' : '#fff'
          }}
          onClick={() => handleSelectVersion('v3')}
        >
          <span>V3 (Latest)</span>
        </button>

        <button
          className={`btn-mc-3d ${selectedVer === 'v2' ? 'active-tab-glow' : ''}`}
          style={{
            padding: '8px 16px',
            fontSize: '0.8rem',
            background: selectedVer === 'v2' ? '#5b3daa' : '#18143a',
            borderColor: selectedVer === 'v2' ? '#7b5dca' : '#2e2664',
            color: selectedVer === 'v2' ? '#ffff55' : '#fff'
          }}
          onClick={() => handleSelectVersion('v2')}
        >
          <span>V2 (Stable)</span>
        </button>

        <button
          className={`btn-mc-3d ${selectedVer === 'v1' ? 'active-tab-glow' : ''}`}
          style={{
            padding: '8px 16px',
            fontSize: '0.8rem',
            background: selectedVer === 'v1' ? '#0891b2' : '#18143a',
            borderColor: selectedVer === 'v1' ? '#38bdf8' : '#2e2664',
            color: selectedVer === 'v1' ? '#ffff55' : '#fff'
          }}
          onClick={() => handleSelectVersion('v1')}
        >
          <span>V1 (Legacy)</span>
        </button>
      </div>

      {/* 📦 ACTIVE SELECTED VERSION HERO CARD */}
      <div className="featured-release-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div className="featured-badge">
            <span>● {activeBuild.badge || 'Official Release'}</span>
          </div>

          <div style={{ display: 'flex', gap: 6 }}>
            {/* Copy Direct Page URL (/download/v1, /download/v2, /download/v3) */}
            <button 
              className="social-icon-btn" 
              onClick={handleCopyPageLink}
              title={`Copy /download/${selectedVer} page link`}
              style={{ width: 32, height: 32 }}
            >
              {copiedLink ? <Check size={14} color="#55FF55" /> : <Share2 size={14} />}
            </button>

            {/* Copy Raw APK Link */}
            <button 
              className="social-icon-btn" 
              onClick={handleCopyDirectApk}
              title="Copy direct APK download URL"
              style={{ width: 32, height: 32 }}
            >
              {copiedApkUrl ? <Check size={14} color="#55FF55" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        <div className="release-main-row">
          <div>
            <div className="release-version-title">
              {activeBuild.releaseName || `CS Launcher ${selectedVer.toUpperCase()}`}
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--mc-grey)', marginTop: 2 }}>
              Release Date: {activeBuild.releaseDate || '2026'} • Direct Clean URL: <span style={{ color: 'var(--mc-cyan)' }}>/download/{selectedVer}</span>
            </div>
          </div>
          <div>
            <span className="brand-version-pill" style={{ fontSize: '0.75rem', padding: '4px 10px', background: '#100d28', border: '1px solid #282054', color: 'var(--mc-yellow)' }}>
              {activeBuild.fileSize || '185.8 MB'}
            </span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="release-specs-grid">
          <div className="spec-item">
            <span className="spec-key">Compatibility</span>
            <span className="spec-val">{activeBuild.compatibility || 'Android 7.0+'}</span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Memory Req.</span>
            <span className="spec-val">{activeBuild.requirements || '2GB / 4GB RAM'}</span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Architecture</span>
            <span className="spec-val">{activeBuild.architecture || 'ARM64 / ARM32'}</span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Status</span>
            <span className="spec-val" style={{ color: selectedVer === 'v3' ? 'var(--mc-green)' : 'var(--mc-gold)' }}>
              {activeBuild.status || 'Verified'}
            </span>
          </div>
        </div>

        {/* Changelog */}
        {changelogLines.length > 0 && (
          <div className="changelog-box">
            <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--mc-yellow)', marginBottom: 6 }}>
              Features & Changelog ({selectedVer.toUpperCase()}):
            </div>
            <ul className="changelog-list">
              {changelogLines.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 🟢 Big 3D Green Download APK Button */}
        <button 
          className="btn-mc-green-3d"
          onClick={() => onDownload(activeBuild.downloadUrl, selectedVer)}
        >
          <Download size={18} />
          <span>Download {activeBuild.releaseName || `CS Launcher ${selectedVer.toUpperCase()}`}</span>
        </button>
      </div>

      {/* 📢 AD BANNER */}
      <AdBanner slotId="download-mid" format="responsive" />

      {/* 🗂️ ALL VERSIONS DIRECT LINKS GRID */}
      <div style={{ marginTop: 24 }}>
        <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--mc-yellow)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Archive size={16} />
          <span>All CS Launcher Builds</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
          {Object.entries(downloads).map(([k, item]) => {
            const isSelected = selectedVer === k;
            return (
              <div 
                key={k} 
                className="app-card"
                style={{
                  borderColor: isSelected ? 'var(--mc-yellow)' : '#2a2258',
                  background: isSelected ? '#1c1744' : '#161234',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--mc-yellow)' }}>
                        {item.releaseName || `CS Launcher ${k.toUpperCase()}`}
                      </span>
                      {item.isLatest && (
                        <span style={{ fontSize: '0.62rem', background: '#237829', color: '#fff', padding: '2px 6px', borderRadius: 3 }}>
                          Latest
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', marginTop: 2 }}>
                      {item.releaseDate} • Clean Link: <span style={{ color: 'var(--mc-cyan)' }}>/download/{k}</span>
                    </div>
                  </div>

                  <span style={{ fontSize: '0.74rem', color: 'var(--mc-white)', background: '#100d28', padding: '3px 8px', border: '1px solid #282054' }}>
                    {item.fileSize}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid #241c52', flexWrap: 'wrap', gap: 8 }}>
                  <button
                    className="btn-mc-3d"
                    style={{ padding: '6px 12px', fontSize: '0.72rem', background: '#18143a' }}
                    onClick={() => handleSelectVersion(k)}
                  >
                    <span>View /download/{k} Details →</span>
                  </button>

                  <button 
                    className="btn-mc-3d"
                    style={{ padding: '6px 14px', fontSize: '0.74rem', background: item.isLatest ? '#237829' : '#3a2580' }}
                    onClick={() => onDownload(item.downloadUrl, k)}
                  >
                    <Download size={13} />
                    <span>Download APK</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
