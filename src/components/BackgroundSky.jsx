import React, { useMemo } from 'react';

// ══════════════════════════════════════════════════════════════════════
// ☁️ ULTRA-OPTIMIZED HARDWARE-ACCELERATED MINECRAFT CLOUD & SKY ENGINE
// GPU Composited Translate3d • 0% CPU Load • 60/120 FPS Mobile Performance
// ══════════════════════════════════════════════════════════════════════

export default function BackgroundSky() {
  // Pre-generate 60 lightweight CSS stars once
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 60; i++) {
      const isTwinkle = Math.random() > 0.45;
      const size = Math.random() > 0.8 ? 2.5 : Math.random() > 0.4 ? 2 : 1.5;
      const left = (Math.random() * 100).toFixed(2);
      const top = (Math.random() * 75).toFixed(2);
      const delay = (Math.random() * 4).toFixed(2);
      const duration = (2.2 + Math.random() * 2.5).toFixed(2);

      arr.push({
        id: i,
        className: `mc-star ${isTwinkle ? 'tw' : ''}`,
        style: {
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: (0.35 + Math.random() * 0.55).toFixed(2),
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }
      });
    }
    return arr;
  }, []);

  return (
    <div className="mc-sky-viewport">
      {/* 🌌 Deep Gaming Sky Gradient */}
      <div className="mc-sky-gradient" />

      {/* ✨ Lightweight Ambient Stars */}
      <div className="mc-stars-container">
        {stars.map(star => (
          <div key={star.id} className={star.className} style={star.style} />
        ))}
      </div>

      {/* ☁️ LAYER 1: Fast Minecraft Pixel Clouds (GPU Accelerated SVG) */}
      <div className="mc-clouds-track track-fast">
        <div className="mc-cloud-svg-strip">
          <svg viewBox="0 0 1600 200" preserveAspectRatio="none" className="mc-cloud-svg">
            {/* Cloud 1 */}
            <rect x="60" y="20" width="180" height="30" fill="#2d2656" />
            <rect x="80" y="10" width="140" height="10" fill="#2d2656" />
            <rect x="60" y="45" width="180" height="8" fill="#1b163b" />

            {/* Cloud 2 */}
            <rect x="420" y="60" width="240" height="36" fill="#2d2656" />
            <rect x="460" y="45" width="160" height="15" fill="#2d2656" />
            <rect x="420" y="90" width="240" height="9" fill="#1b163b" />

            {/* Cloud 3 */}
            <rect x="840" y="25" width="200" height="32" fill="#2d2656" />
            <rect x="880" y="15" width="120" height="10" fill="#2d2656" />
            <rect x="840" y="52" width="200" height="8" fill="#1b163b" />

            {/* Cloud 4 */}
            <rect x="1240" y="50" width="220" height="34" fill="#2d2656" />
            <rect x="1280" y="38" width="140" height="12" fill="#2d2656" />
            <rect x="1240" y="78" width="220" height="8" fill="#1b163b" />
          </svg>
        </div>
        <div className="mc-cloud-svg-strip">
          <svg viewBox="0 0 1600 200" preserveAspectRatio="none" className="mc-cloud-svg">
            {/* Cloud 1 */}
            <rect x="60" y="20" width="180" height="30" fill="#2d2656" />
            <rect x="80" y="10" width="140" height="10" fill="#2d2656" />
            <rect x="60" y="45" width="180" height="8" fill="#1b163b" />

            {/* Cloud 2 */}
            <rect x="420" y="60" width="240" height="36" fill="#2d2656" />
            <rect x="460" y="45" width="160" height="15" fill="#2d2656" />
            <rect x="420" y="90" width="240" height="9" fill="#1b163b" />

            {/* Cloud 3 */}
            <rect x="840" y="25" width="200" height="32" fill="#2d2656" />
            <rect x="880" y="15" width="120" height="10" fill="#2d2656" />
            <rect x="840" y="52" width="200" height="8" fill="#1b163b" />

            {/* Cloud 4 */}
            <rect x="1240" y="50" width="220" height="34" fill="#2d2656" />
            <rect x="1280" y="38" width="140" height="12" fill="#2d2656" />
            <rect x="1240" y="78" width="220" height="8" fill="#1b163b" />
          </svg>
        </div>
      </div>

      {/* ☁️ LAYER 2: Slow Ambient Minecraft Pixel Clouds (GPU Accelerated SVG) */}
      <div className="mc-clouds-track track-slow">
        <div className="mc-cloud-svg-strip">
          <svg viewBox="0 0 1600 200" preserveAspectRatio="none" className="mc-cloud-svg">
            {/* Ambient Cloud A */}
            <rect x="180" y="110" width="220" height="28" fill="#241e48" />
            <rect x="220" y="98" width="140" height="12" fill="#241e48" />
            <rect x="180" y="134" width="220" height="7" fill="#15112f" />

            {/* Ambient Cloud B */}
            <rect x="680" y="130" width="260" height="32" fill="#241e48" />
            <rect x="730" y="118" width="160" height="12" fill="#241e48" />
            <rect x="680" y="156" width="260" height="8" fill="#15112f" />

            {/* Ambient Cloud C */}
            <rect x="1100" y="100" width="200" height="30" fill="#241e48" />
            <rect x="1140" y="90" width="120" height="10" fill="#241e48" />
            <rect x="1100" y="125" width="200" height="7" fill="#15112f" />
          </svg>
        </div>
        <div className="mc-cloud-svg-strip">
          <svg viewBox="0 0 1600 200" preserveAspectRatio="none" className="mc-cloud-svg">
            {/* Ambient Cloud A */}
            <rect x="180" y="110" width="220" height="28" fill="#241e48" />
            <rect x="220" y="98" width="140" height="12" fill="#241e48" />
            <rect x="180" y="134" width="220" height="7" fill="#15112f" />

            {/* Ambient Cloud B */}
            <rect x="680" y="130" width="260" height="32" fill="#241e48" />
            <rect x="730" y="118" width="160" height="12" fill="#241e48" />
            <rect x="680" y="156" width="260" height="8" fill="#15112f" />

            {/* Ambient Cloud C */}
            <rect x="1100" y="100" width="200" height="30" fill="#241e48" />
            <rect x="1140" y="90" width="120" height="10" fill="#241e48" />
            <rect x="1100" y="125" width="200" height="7" fill="#15112f" />
          </svg>
        </div>
      </div>

      {/* ⛰️ Minecraft Stepped Mountain Silhouette */}
      <div className="mc-mountain-ridge">
        <svg viewBox="0 0 1440 280" preserveAspectRatio="none" className="mc-mountain-svg">
          <path 
            d="M0,280 L0,220 L60,220 L60,200 L120,200 L120,180 L180,180 L180,150 L240,150 L240,180 L300,180 L300,210 L360,210 L360,230 L440,230 L440,190 L500,190 L500,160 L560,160 L560,130 L620,130 L620,160 L680,160 L680,200 L760,200 L760,170 L820,170 L820,140 L880,140 L880,110 L940,110 L940,140 L1000,140 L1000,180 L1080,180 L1080,210 L1160,210 L1160,160 L1220,160 L1220,130 L1280,130 L1280,160 L1340,160 L1340,210 L1440,210 L1440,280 Z" 
            fill="#120e2c" 
            opacity="0.85" 
          />
          <path 
            d="M0,280 L0,240 L80,240 L80,220 L160,220 L160,190 L220,190 L220,220 L320,220 L320,240 L460,240 L460,210 L520,210 L520,170 L580,170 L580,210 L680,210 L680,240 L800,240 L800,200 L860,200 L860,160 L920,160 L920,200 L1020,200 L1020,230 L1140,230 L1140,190 L1200,190 L1200,160 L1260,160 L1260,200 L1360,200 L1360,240 L1440,240 L1440,280 Z" 
            fill="#0b081e" 
            opacity="0.98" 
          />
        </svg>
      </div>
    </div>
  );
}
