import React from 'react';

// ══════════════════════════════════════════════════════════════════════
// ⚡ LIGHTWEIGHT, ZERO-LAG MINECRAFT NIGHT SKY
// Pure CSS Gradient • Smooth Mountain Ridge • 0% CPU Load • Instant 60/120 FPS
// ══════════════════════════════════════════════════════════════════════

export default function BackgroundSky() {
  return (
    <div className="mc-sky-viewport">
      {/* 🌌 Deep Gaming Sky Gradient */}
      <div className="mc-sky-gradient" />

      {/* ✨ Lightweight Ambient Star Dust Pattern */}
      <div className="mc-stars-static" />

      {/* ⛰️ Minecraft Stepped Mountain Silhouette */}
      <div className="mc-mountain-ridge">
        <svg viewBox="0 0 1440 280" preserveAspectRatio="none" className="mc-mountain-svg">
          <path 
            d="M0,280 L0,220 L60,220 L60,200 L120,200 L120,180 L180,180 L180,150 L240,150 L240,180 L300,180 L300,210 L360,210 L360,230 L440,230 L440,190 L500,190 L500,160 L560,160 L560,130 L620,130 L620,160 L680,160 L680,200 L760,200 L760,170 L820,170 L820,140 L880,140 L880,110 L940,110 L940,140 L1000,140 L1000,180 L1080,180 L1080,210 L1160,210 L1160,160 L1220,160 L1220,130 L1280,130 L1280,160 L1340,160 L1340,210 L1440,210 L1440,280 Z" 
            fill="#120e2c" 
            opacity="0.8" 
          />
          <path 
            d="M0,280 L0,240 L80,240 L80,220 L160,220 L160,190 L220,190 L220,220 L320,220 L320,240 L460,240 L460,210 L520,210 L520,170 L580,170 L580,210 L680,210 L680,240 L800,240 L800,200 L860,200 L860,160 L920,160 L920,200 L1020,200 L1020,230 L1140,230 L1140,190 L1200,190 L1200,160 L1260,160 L1260,200 L1360,200 L1360,240 L1440,240 L1440,280 Z" 
            fill="#0b081e" 
            opacity="0.95" 
          />
        </svg>
      </div>
    </div>
  );
}
