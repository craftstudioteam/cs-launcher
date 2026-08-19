import React from 'react';

// ══════════════════════════════════════════════════════════════════════
// 100% AUTHENTIC MINECRAFT PIXEL ART ICONS (PIXEL-PERFECT MC RENDER)
// ══════════════════════════════════════════════════════════════════════

// 1. 🛡️ MINECRAFT TOTEM OF UNDYING (Exact Vanilla Texture Proportion)
export function TotemIcon({ size = 48, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      className={`mc-pixel-svg ${className}`}
      style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    >
      {/* Head Outline & Gold Base */}
      <rect x="5" y="0" width="6" height="5" fill="#facc15" />
      <rect x="6" y="1" width="4" height="4" fill="#fef08a" />
      <rect x="5" y="2" width="6" height="1" fill="#ca8a04" />
      {/* Green Emerald Eyes */}
      <rect x="5" y="2" width="2" height="1" fill="#22c55e" />
      <rect x="9" y="2" width="2" height="1" fill="#22c55e" />
      <rect x="6" y="2" width="1" height="1" fill="#ffffff" />
      <rect x="10" y="2" width="1" height="1" fill="#ffffff" />
      {/* Nose */}
      <rect x="7" y="3" width="2" height="2" fill="#a16207" />
      {/* Wings / Arms */}
      <rect x="1" y="5" width="14" height="2" fill="#0d9488" />
      <rect x="2" y="6" width="12" height="1" fill="#14b8a6" />
      <rect x="0" y="4" width="3" height="3" fill="#0f766e" />
      <rect x="13" y="4" width="3" height="3" fill="#0f766e" />
      {/* Body Core */}
      <rect x="5" y="7" width="6" height="6" fill="#facc15" />
      <rect x="6" y="8" width="4" height="4" fill="#fef08a" />
      <rect x="6" y="9" width="4" height="1" fill="#0d9488" />
      {/* Base / Skirt */}
      <rect x="5" y="13" width="6" height="3" fill="#ca8a04" />
      <rect x="6" y="14" width="4" height="2" fill="#a16207" />
    </svg>
  );
}

// 2. 💿 MINECRAFT GREEN MUSIC DISC ("Cat" / "13" Record)
export function MusicDiscIcon({ size = 48, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      className={`mc-pixel-svg ${className}`}
      style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    >
      {/* Vinyl Outer Rim */}
      <rect x="5" y="0" width="6" height="1" fill="#1e1e24" />
      <rect x="3" y="1" width="10" height="1" fill="#1e1e24" />
      <rect x="2" y="2" width="12" height="1" fill="#1e1e24" />
      <rect x="1" y="3" width="14" height="2" fill="#1e1e24" />
      <rect x="0" y="5" width="16" height="6" fill="#1e1e24" />
      <rect x="1" y="11" width="14" height="2" fill="#1e1e24" />
      <rect x="2" y="13" width="12" height="1" fill="#1e1e24" />
      <rect x="3" y="14" width="10" height="1" fill="#1e1e24" />
      <rect x="5" y="15" width="6" height="1" fill="#1e1e24" />
      {/* Vinyl Groove Rings */}
      <rect x="3" y="3" width="10" height="10" fill="#2d2d38" />
      <rect x="4" y="4" width="8" height="8" fill="#1e1e24" />
      {/* Green Disc Center Label */}
      <rect x="5" y="5" width="6" height="6" fill="#16a34a" />
      <rect x="6" y="6" width="4" height="4" fill="#4ade80" />
      {/* Center Hole */}
      <rect x="7" y="7" width="2" height="2" fill="#000000" />
      {/* Shine Highlight */}
      <rect x="4" y="2" width="3" height="1" fill="#ffffff" opacity="0.4" />
      <rect x="2" y="4" width="1" height="3" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}

// 3. 🖼️ MINECRAFT PAINTING (Wooden Frame + Sunset Scene)
export function PaintingIcon({ size = 48, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      className={`mc-pixel-svg ${className}`}
      style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    >
      {/* Wood Frame */}
      <rect x="0" y="0" width="16" height="16" fill="#451a03" />
      <rect x="1" y="1" width="14" height="14" fill="#78350f" />
      {/* Canvas */}
      <rect x="2" y="2" width="12" height="12" fill="#e2e8f0" />
      {/* Sky */}
      <rect x="2" y="2" width="12" height="6" fill="#38bdf8" />
      {/* Sun */}
      <rect x="3" y="3" width="2" height="2" fill="#facc15" />
      {/* Mountain */}
      <polygon points="2,8 6,4 10,8" fill="#64748b" />
      <polygon points="7,8 11,3 14,8" fill="#475569" />
      <polygon points="10,5 11,3 12,5" fill="#ffffff" />
      {/* Grass Ground */}
      <rect x="2" y="8" width="12" height="6" fill="#16a34a" />
      <rect x="2" y="11" width="12" height="3" fill="#15803d" />
    </svg>
  );
}

// 4. 🗿 MINECRAFT ARMOR STAND
export function ArmorStandIcon({ size = 48, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      className={`mc-pixel-svg ${className}`}
      style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    >
      {/* Stone Smooth Slab Base */}
      <rect x="2" y="14" width="12" height="2" fill="#52525b" />
      <rect x="3" y="14" width="10" height="1" fill="#71717a" />
      {/* Wooden Legs */}
      <rect x="5" y="9" width="1" height="5" fill="#b45309" />
      <rect x="10" y="9" width="1" height="5" fill="#b45309" />
      {/* Hip Bar */}
      <rect x="4" y="8" width="8" height="1" fill="#d97706" />
      {/* Torso Sticks */}
      <rect x="6" y="4" width="1" height="4" fill="#b45309" />
      <rect x="9" y="4" width="1" height="4" fill="#b45309" />
      {/* Shoulders Bar */}
      <rect x="3" y="3" width="10" height="1" fill="#d97706" />
      {/* Neck Post */}
      <rect x="7" y="1" width="2" height="2" fill="#92400e" />
    </svg>
  );
}

// 5. 🎭 MINECRAFT PLAYER HEAD (3D Isometric Steve / Wither Head)
export function PlayerHeadIcon({ size = 48, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      className={`mc-pixel-svg ${className}`}
      style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    >
      {/* 3D Isometric Player Head */}
      {/* Top Face (Hair) */}
      <polygon points="8,1 14,4 8,7 2,4" fill="#451a03" />
      {/* Left Face (Shadowed Skin) */}
      <polygon points="2,4 8,7 8,14 2,11" fill="#9a6540" />
      {/* Right Face (Lit Skin) */}
      <polygon points="8,7 14,4 14,11 8,14" fill="#c48a5e" />
      {/* Steve Face Details on Right Face */}
      {/* Front Hair */}
      <polygon points="8,7 14,4 14,6 8,9" fill="#381804" />
      {/* Blue Eyes */}
      <rect x="10" y="7" width="2" height="1" fill="#2563eb" transform="skewY(-15)" />
      <rect x="10" y="7" width="1" height="1" fill="#ffffff" transform="skewY(-15)" />
      {/* Beard / Mouth */}
      <rect x="10" y="10" width="2" height="1" fill="#582a12" transform="skewY(-15)" />
    </svg>
  );
}

// 6. 🧥 MINECRAFT CAPE (Elytra / Custom Java Cape)
export function CapeIcon({ size = 48, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      className={`mc-pixel-svg ${className}`}
      style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    >
      {/* Cape Gold Clasp */}
      <rect x="6" y="1" width="4" height="1" fill="#f59e0b" />
      {/* Cape Main Fabric */}
      <rect x="4" y="2" width="8" height="13" fill="#6b21a8" />
      <rect x="5" y="3" width="6" height="11" fill="#9333ea" />
      {/* Minecraft Mojang / Founder Star Emblem */}
      <rect x="6" y="4" width="4" height="4" fill="#e9d5ff" />
      <rect x="7" y="3" width="2" height="6" fill="#f5f3ff" />
      <rect x="5" y="5" width="6" height="2" fill="#f5f3ff" />
      {/* Cape Bottom Gold Trim */}
      <rect x="4" y="13" width="8" height="2" fill="#581c87" />
      <rect x="5" y="14" width="2" height="1" fill="#facc15" />
      <rect x="9" y="14" width="2" height="1" fill="#facc15" />
    </svg>
  );
}

// 7. 📦 MINECRAFT CHEST / APK PACKAGE (Download Build Box)
export function ApkPackageIcon({ size = 48, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      className={`mc-pixel-svg ${className}`}
      style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    >
      {/* 3D Gold / Wood Chest */}
      {/* Top Lid */}
      <polygon points="8,1 14,4 8,7 2,4" fill="#eab308" />
      {/* Left Wall */}
      <polygon points="2,4 8,7 8,14 2,11" fill="#a16207" />
      {/* Right Wall */}
      <polygon points="8,7 14,4 14,11 8,14" fill="#ca8a04" />
      {/* Iron Lock Clasp */}
      <rect x="7" y="6" width="2" height="3" fill="#fef08a" stroke="#000" strokeWidth="0.4" />
      {/* Green Android Antennas */}
      <line x1="5" y1="2" x2="3" y2="0" stroke="#22c55e" strokeWidth="1" strokeLinecap="square" />
      <line x1="11" y1="2" x2="13" y2="0" stroke="#22c55e" strokeWidth="1" strokeLinecap="square" />
    </svg>
  );
}

// 8. 🛡️ MINECRAFT SHIELD (GPLv3 Open Source Defense)
export function ShieldGplIcon({ size = 48, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      className={`mc-pixel-svg ${className}`}
      style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}
    >
      {/* Shield Iron Border */}
      <polygon points="3,1 13,1 13,10 8,15 3,10" fill="#475569" />
      {/* Shield Wooden Face */}
      <polygon points="4,2 12,2 12,9 8,13 4,9" fill="#92400e" />
      <rect x="5" y="3" width="6" height="6" fill="#b45309" />
      {/* Shield Center Iron Boss */}
      <circle cx="8" cy="6" r="1.8" fill="#e2e8f0" />
      <rect x="7.5" y="5.5" width="1" height="1" fill="#ffffff" />
    </svg>
  );
}

// 9. 💬 DISCORD ICON
export function DiscordIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}
