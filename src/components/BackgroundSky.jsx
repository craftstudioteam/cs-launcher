import React, { useEffect, useRef, useMemo } from 'react';

// ══════════════════════════════════════════════════════════════════════
// 🎮 60 FPS ULTRA-SMOOTH MINECRAFT ATMOSPHERE & PARTICLE ENGINE
// Interactive 3D Pixel Cubes • Glowing Starfield • Aurora Pulse • Cloud Parallax
// ══════════════════════════════════════════════════════════════════════

export default function BackgroundSky() {
  const canvasRef = useRef(null);

  // 60 FPS Hardware-Accelerated Floating Minecraft Pixel Cubes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle Palette (Diamond, Amethyst, Emerald, Gold, Redstone)
    const CUBE_COLORS = [
      { top: '#67e8f9', left: '#0891b2', right: '#06b6d4', glow: 'rgba(6, 182, 212, 0.6)' }, // Cyan Diamond
      { top: '#c084fc', left: '#7e22ce', right: '#a855f7', glow: 'rgba(168, 85, 247, 0.6)' }, // Purple Amethyst
      { top: '#86efac', left: '#15803d', right: '#22c55e', glow: 'rgba(34, 197, 94, 0.6)' },  // Green Emerald
      { top: '#fef08a', left: '#b45309', right: '#eab308', glow: 'rgba(234, 179, 8, 0.6)' },  // Gold Core
      { top: '#fca5a5', left: '#991b1b', right: '#ef4444', glow: 'rgba(239, 68, 68, 0.6)' },  // Redstone
    ];

    // Create 32 persistent floating 3D Minecraft cubes
    const cubes = Array.from({ length: 28 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 10 + Math.random() * 12,
      speedY: 0.35 + Math.random() * 0.55,
      speedX: (Math.random() - 0.5) * 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.015,
      palette: CUBE_COLORS[i % CUBE_COLORS.length],
      opacity: 0.4 + Math.random() * 0.5,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.02 + Math.random() * 0.02
    }));

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw floating cubes
      for (let i = 0; i < cubes.length; i++) {
        const c = cubes[i];

        // Update positions
        c.y -= c.speedY;
        c.wobble += c.wobbleSpeed;
        c.x += Math.sin(c.wobble) * 0.5 + c.speedX;
        c.rotation += c.rotSpeed;

        // Wrap around screen
        if (c.y < -40) {
          c.y = height + 30;
          c.x = Math.random() * width;
        }
        if (c.x < -40) c.x = width + 30;
        if (c.x > width + 40) c.x = -30;

        // Draw 3D Isometric Minecraft Pixel Cube
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation);
        ctx.globalAlpha = c.opacity;

        const s = c.size;
        const h = s * 0.58;

        // Glow aura
        ctx.shadowColor = c.palette.glow;
        ctx.shadowBlur = 12;

        // Top Isometric Face
        ctx.fillStyle = c.palette.top;
        ctx.beginPath();
        ctx.moveTo(0, -h);
        ctx.lineTo(s, 0);
        ctx.lineTo(0, h);
        ctx.lineTo(-s, 0);
        ctx.closePath();
        ctx.fill();

        // Left Face
        ctx.shadowBlur = 0; // Clear blur for crisp inner edges
        ctx.fillStyle = c.palette.left;
        ctx.beginPath();
        ctx.moveTo(-s, 0);
        ctx.lineTo(0, h);
        ctx.lineTo(0, h + s);
        ctx.lineTo(-s, s);
        ctx.closePath();
        ctx.fill();

        // Right Face
        ctx.fillStyle = c.palette.right;
        ctx.beginPath();
        ctx.moveTo(0, h);
        ctx.lineTo(s, 0);
        ctx.lineTo(s, s);
        ctx.lineTo(0, h + s);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Generate randomized stars once
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 110; i++) {
      const isTwinkle = Math.random() > 0.25;
      const size = Math.random() > 0.8 ? 3 : Math.random() > 0.4 ? 2 : 1.5;
      const left = (Math.random() * 100).toFixed(2);
      const top = (Math.random() * 85).toFixed(2);
      const delay = (Math.random() * 5).toFixed(2);
      const duration = (1.8 + Math.random() * 3).toFixed(2);
      const opacity = (0.4 + Math.random() * 0.6).toFixed(2);

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

  return (
    <div className="mc-sky-viewport">
      {/* 🌌 Sky Deep Gradient */}
      <div className="mc-sky-gradient" />

      {/* 🌌 Vibrant Animated Aurora Wave */}
      <div className="mc-aurora-glow" />

      {/* ✨ Twinkling Starfield */}
      <div className="mc-stars-container">
        {stars.map(star => (
          <div key={star.id} className={star.className} style={star.style} />
        ))}
      </div>

      {/* 🎮 60 FPS HTML5 Canvas Floating Minecraft Cubes */}
      <canvas ref={canvasRef} className="mc-canvas-cubes" />

      {/* ☁️ 3-Layer Scrolling Minecraft Pixel Clouds */}
      <div className="cloud-scroll">
        {/* Layer 1 - Fast Strip */}
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

        {/* Layer 2 - Mid Strip */}
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

        {/* Layer 3 - Slow Ambient Strip */}
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
          <path 
            d="M0,280 L0,220 L60,220 L60,200 L120,200 L120,180 L180,180 L180,150 L240,150 L240,180 L300,180 L300,210 L360,210 L360,230 L440,230 L440,190 L500,190 L500,160 L560,160 L560,130 L620,130 L620,160 L680,160 L680,200 L760,200 L760,170 L820,170 L820,140 L880,140 L880,110 L940,110 L940,140 L1000,140 L1000,180 L1080,180 L1080,210 L1160,210 L1160,160 L1220,160 L1220,130 L1280,130 L1280,160 L1340,160 L1340,210 L1440,210 L1440,280 Z" 
            fill="#140e33" 
            opacity="0.75" 
          />
          <path 
            d="M0,280 L0,240 L80,240 L80,220 L160,220 L160,190 L220,190 L220,220 L320,220 L320,240 L460,240 L460,210 L520,210 L520,170 L580,170 L580,210 L680,210 L680,240 L800,240 L800,200 L860,200 L860,160 L920,160 L920,200 L1020,200 L1020,230 L1140,230 L1140,190 L1200,190 L1200,160 L1260,160 L1260,200 L1360,200 L1360,240 L1440,240 L1440,280 Z" 
            fill="#0f0a28" 
            opacity="0.95" 
          />
        </svg>
      </div>
    </div>
  );
}
