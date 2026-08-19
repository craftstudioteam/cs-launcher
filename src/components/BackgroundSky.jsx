import React, { useEffect, useMemo } from 'react';

// ══════════════════════════════════════════════════════════════════════
// AUTHENTIC MC-TOOLS.NET ANIMATED SKY SYSTEM
// Twinkling Starfield • 3-Layer Scrolling Pixel Clouds • Mountain Ridge • Floating Embers
// ══════════════════════════════════════════════════════════════════════

export default function BackgroundSky() {
  // Generate randomized stars once
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 90; i++) {
      const isTwinkle = Math.random() > 0.35;
      const size = Math.random() > 0.75 ? 3 : Math.random() > 0.4 ? 2 : 1;
      const left = (Math.random() * 100).toFixed(2);
      const top = (Math.random() * 85).toFixed(2);
      const delay = (Math.random() * 4).toFixed(2);
      const duration = (2.5 + Math.random() * 3).toFixed(2);
      const opacity = (0.35 + Math.random() * 0.65).toFixed(2);

      arr.push({
        id: i,
        className: `mc-star ${isTwinkle ? 'tw' : ''}`,
        style: {
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: opacity,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }
      });
    }
    return arr;
  }, []);

  // Generate floating Minecraft embers (sparks rising upwards)
  const embers = useMemo(() => {
    const colors = ['#b388ff', '#55ffff', '#55ff55', '#ffff55', '#ffaa00'];
    const arr = [];
    for (let i = 0; i < 28; i++) {
      const size = Math.random() > 0.6 ? 4 : 3;
      const left = (Math.random() * 100).toFixed(2);
      const delay = (Math.random() * 8).toFixed(2);
      const duration = (6 + Math.random() * 8).toFixed(2);
      const color = colors[i % colors.length];

      arr.push({
        id: i,
        style: {
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: color,
          boxShadow: `0 0 ${size * 2}px ${color}`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }
      });
    }
    return arr;
  }, []);

  return (
    <div className="mc-sky-viewport">
      {/* 🌌 Sky Base Gradient */}
      <div className="mc-sky-gradient" />

      {/* ✨ Twinkling Starfield */}
      <div className="mc-stars-container">
        {stars.map(star => (
          <div key={star.id} className={star.className} style={star.style} />
        ))}
      </div>

      {/* ☁️ 3-Layer Scrolling Minecraft Pixel Clouds (mc-tools.net authentic engine) */}
      <div className="cloud-scroll">
        {/* Layer 1 - High Speed Strip */}
        <div className="cstrip cs1">
          <div className="cstrip-block">
            <div className="c ca" style={{ top: '5%', left: '60px' }} />
            <div className="c cb" style={{ top: '12%', left: '380px' }} />
            <div className="c cc" style={{ top: '3%', left: '750px' }} />
            <div className="c ca" style={{ top: '16%', left: '1100px' }} />
            <div className="c cb" style={{ top: '7%', left: '1450px' }} />
            <div className="c cc" style={{ top: '13%', left: '1850px' }} />
            <div className="c ca" style={{ top: '2%', left: '2250px' }} />
            <div className="c cb" style={{ top: '10%', left: '2650px' }} />
          </div>
          <div className="cstrip-block">
            <div className="c ca" style={{ top: '5%', left: '60px' }} />
            <div className="c cb" style={{ top: '12%', left: '380px' }} />
            <div className="c cc" style={{ top: '3%', left: '750px' }} />
            <div className="c ca" style={{ top: '16%', left: '1100px' }} />
            <div className="c cb" style={{ top: '7%', left: '1450px' }} />
            <div className="c cc" style={{ top: '13%', left: '1850px' }} />
            <div className="c ca" style={{ top: '2%', left: '2250px' }} />
            <div className="c cb" style={{ top: '10%', left: '2650px' }} />
          </div>
        </div>

        {/* Layer 2 - Mid Speed Strip */}
        <div className="cstrip cs2">
          <div className="cstrip-block">
            <div className="c cc" style={{ top: '26%', left: '120px' }} />
            <div className="c ca" style={{ top: '33%', left: '550px' }} />
            <div className="c cb" style={{ top: '22%', left: '1000px' }} />
            <div className="c cc" style={{ top: '37%', left: '1450px' }} />
            <div className="c ca" style={{ top: '28%', left: '1900px' }} />
            <div className="c cb" style={{ top: '34%', left: '2450px' }} />
          </div>
          <div className="cstrip-block">
            <div className="c cc" style={{ top: '26%', left: '120px' }} />
            <div className="c ca" style={{ top: '33%', left: '550px' }} />
            <div className="c cb" style={{ top: '22%', left: '1000px' }} />
            <div className="c cc" style={{ top: '37%', left: '1450px' }} />
            <div className="c ca" style={{ top: '28%', left: '1900px' }} />
            <div className="c cb" style={{ top: '34%', left: '2450px' }} />
          </div>
        </div>

        {/* Layer 3 - Ambient Slow Strip */}
        <div className="cstrip cs3">
          <div className="cstrip-block">
            <div className="c cb" style={{ top: '50%', left: '80px' }} />
            <div className="c ca" style={{ top: '55%', left: '480px' }} />
            <div className="c cc" style={{ top: '44%', left: '880px' }} />
            <div className="c cb" style={{ top: '60%', left: '1300px' }} />
            <div className="c ca" style={{ top: '52%', left: '1750px' }} />
            <div className="c cc" style={{ top: '46%', left: '2150px' }} />
          </div>
          <div className="cstrip-block">
            <div className="c cb" style={{ top: '50%', left: '80px' }} />
            <div className="c ca" style={{ top: '55%', left: '480px' }} />
            <div className="c cc" style={{ top: '44%', left: '880px' }} />
            <div className="c cb" style={{ top: '60%', left: '1300px' }} />
            <div className="c ca" style={{ top: '52%', left: '1750px' }} />
            <div className="c cc" style={{ top: '46%', left: '2150px' }} />
          </div>
        </div>
      </div>

      {/* ⛰️ Minecraft Stepped Mountain & Ridge Silhouette */}
      <div className="mc-mountain-ridge">
        <svg viewBox="0 0 1440 280" preserveAspectRatio="none" className="mc-mountain-svg">
          {/* Back distant pyramid peaks */}
          <path 
            d="M0,280 L0,220 L60,220 L60,200 L120,200 L120,180 L180,180 L180,150 L240,150 L240,180 L300,180 L300,210 L360,210 L360,230 L440,230 L440,190 L500,190 L500,160 L560,160 L560,130 L620,130 L620,160 L680,160 L680,200 L760,200 L760,170 L820,170 L820,140 L880,140 L880,110 L940,110 L940,140 L1000,140 L1000,180 L1080,180 L1080,210 L1160,210 L1160,160 L1220,160 L1220,130 L1280,130 L1280,160 L1340,160 L1340,210 L1440,210 L1440,280 Z" 
            fill="#140e33" 
            opacity="0.75" 
          />
          {/* Front stepped peaks */}
          <path 
            d="M0,280 L0,240 L80,240 L80,220 L160,220 L160,190 L220,190 L220,220 L320,220 L320,240 L460,240 L460,210 L520,210 L520,170 L580,170 L580,210 L680,210 L680,240 L800,240 L800,200 L860,200 L860,160 L920,160 L920,200 L1020,200 L1020,230 L1140,230 L1140,190 L1200,190 L1200,160 L1260,160 L1260,200 L1360,200 L1360,240 L1440,240 L1440,280 Z" 
            fill="#0f0a28" 
            opacity="0.95" 
          />
        </svg>
      </div>

      {/* 🔥 Rising Minecraft Floating Embers */}
      <div className="mc-embers-layer">
        {embers.map(ember => (
          <div key={ember.id} className="mc-floating-ember" style={ember.style} />
        ))}
      </div>
    </div>
  );
}
