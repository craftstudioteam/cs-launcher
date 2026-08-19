import React from 'react';

export default function AdBanner({ slotId = 'default', format = 'responsive' }) {
  return (
    <div 
      className="ad-banner-container"
      id={`ad-slot-${slotId}`}
      style={{
        width: '100%',
        margin: '18px auto',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px dashed rgba(255, 255, 255, 0.08)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 8px',
        overflow: 'hidden',
        minHeight: format === 'banner' ? 60 : 90,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 4 }}>
        Advertisement / Sponsored
      </div>
      <div className="ad-content-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {/* Ad container ready for Monetag / Adsterra / Google Ads / In-feed Banner */}
        <div style={{ fontSize: '0.78rem', color: 'var(--text-grey)', opacity: 0.8 }}>
          🎮 CS Launcher High Performance Boost • Minecraft Java on Android
        </div>
      </div>
    </div>
  );
}
