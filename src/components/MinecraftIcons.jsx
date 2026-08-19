import React from 'react';

// ═══════════════════════════════════════════════════════════════════
// AUTHENTIC MINECRAFT PIXEL ART ICONS (MCTOOLS PIXEL-PERFECT SVGS)
// ═══════════════════════════════════════════════════════════════════

export function TotemIcon({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={`mc-pixel-icon ${className}`} style={{ imageRendering: 'pixelated' }}>
      {/* Totem Head */}
      <rect x="11" y="2" width="10" height="9" fill="#c99718" stroke="#1c1404" strokeWidth="1" />
      <rect x="13" y="3" width="6" height="7" fill="#f5d033" />
      {/* Brow & Eyes */}
      <rect x="11" y="5" width="10" height="2" fill="#8c650d" />
      <rect x="12" y="6" width="2" height="2" fill="#3cd643" />
      <rect x="18" y="6" width="2" height="2" fill="#3cd643" />
      <rect x="13" y="6" width="1" height="1" fill="#ffffff" />
      <rect x="19" y="6" width="1" height="1" fill="#ffffff" />
      {/* Nose */}
      <rect x="15" y="7" width="2" height="3" fill="#9e7510" />
      {/* Wings / Arms */}
      <rect x="5" y="11" width="22" height="4" fill="#38a3a5" stroke="#0a2a2b" strokeWidth="1" />
      <rect x="7" y="12" width="18" height="2" fill="#57cc99" />
      <rect x="3" y="9" width="4" height="4" fill="#22577a" />
      <rect x="25" y="9" width="4" height="4" fill="#22577a" />
      {/* Body Core */}
      <rect x="12" y="15" width="8" height="11" fill="#c99718" stroke="#1c1404" strokeWidth="1" />
      <rect x="14" y="16" width="4" height="9" fill="#f5d033" />
      <rect x="13" y="18" width="6" height="2" fill="#38a3a5" />
      <rect x="14" y="18" width="4" height="2" fill="#57cc99" />
      {/* Base Legs */}
      <rect x="11" y="26" width="10" height="4" fill="#8c650d" stroke="#1c1404" strokeWidth="1" />
      <rect x="13" y="27" width="6" height="2" fill="#c99718" />
    </svg>
  );
}

export function MusicDiscIcon({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={`mc-pixel-icon ${className}`} style={{ imageRendering: 'pixelated' }}>
      {/* Outer Vinyl Disc */}
      <circle cx="16" cy="16" r="13" fill="#18181b" stroke="#09090b" strokeWidth="1" />
      {/* Grooves */}
      <circle cx="16" cy="16" r="10" fill="none" stroke="#27272a" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="7" fill="none" stroke="#1f1f23" strokeWidth="1" />
      {/* Center Label (Green Cat Disc) */}
      <circle cx="16" cy="16" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
      <circle cx="16" cy="16" r="3" fill="#4ade80" />
      {/* Center Hole */}
      <circle cx="16" cy="16" r="1.5" fill="#000000" />
      {/* Highlight Shine */}
      <path d="M 6 12 A 12 12 0 0 1 12 6" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PaintingIcon({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={`mc-pixel-icon ${className}`} style={{ imageRendering: 'pixelated' }}>
      {/* Wooden Frame */}
      <rect x="3" y="5" width="26" height="22" fill="#78350f" stroke="#451a03" strokeWidth="1" />
      <rect x="5" y="7" width="22" height="18" fill="#92400e" />
      {/* Canvas */}
      <rect x="6" y="8" width="20" height="16" fill="#f8fafc" stroke="#1e293b" strokeWidth="0.5" />
      {/* Painting Scene (Minecraft Mountains & Sun) */}
      <rect x="7" y="9" width="18" height="8" fill="#38bdf8" />
      <rect x="8" y="10" width="3" height="3" fill="#facc15" />
      {/* Mountain */}
      <polygon points="7,17 13,11 18,17" fill="#64748b" />
      <polygon points="12,17 18,10 24,17" fill="#475569" />
      <polygon points="16,12 18,10 20,12" fill="#ffffff" />
      {/* Grass Ground */}
      <rect x="7" y="17" width="18" height="6" fill="#4ade80" />
      <rect x="7" y="19" width="18" height="4" fill="#15803d" />
    </svg>
  );
}

export function PlayerHeadIcon({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={`mc-pixel-icon ${className}`} style={{ imageRendering: 'pixelated' }}>
      {/* Steve / Mob 3D Isometric Head */}
      {/* Top Face */}
      <polygon points="16,4 27,9 16,14 5,9" fill="#583822" stroke="#26170d" strokeWidth="1" />
      {/* Left Face (Shadowed) */}
      <polygon points="5,9 16,14 16,26 5,21" fill="#9f6d4d" stroke="#26170d" strokeWidth="1" />
      {/* Right Face (Lit) */}
      <polygon points="16,14 27,9 27,21 16,26" fill="#b98462" stroke="#26170d" strokeWidth="1" />
      {/* Hair on Front */}
      <polygon points="16,14 27,9 27,13 16,18" fill="#4a2e1b" />
      {/* Eyes */}
      <rect x="18" y="17" width="3" height="2" fill="#2563eb" transform="skewY(-15)" />
      <rect x="23" y="15" width="3" height="2" fill="#2563eb" transform="skewY(-15)" />
      <rect x="18" y="17" width="1" height="2" fill="#ffffff" transform="skewY(-15)" />
      <rect x="23" y="15" width="1" height="2" fill="#ffffff" transform="skewY(-15)" />
      {/* Nose & Beard */}
      <rect x="20" y="19" width="3" height="2" fill="#8c5837" transform="skewY(-15)" />
      <polygon points="16,23 27,18 27,21 16,26" fill="#4a2e1b" />
    </svg>
  );
}

export function CapeIcon({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={`mc-pixel-icon ${className}`} style={{ imageRendering: 'pixelated' }}>
      {/* Cape Cloth */}
      <rect x="9" y="4" width="14" height="24" rx="1" fill="#7c3aed" stroke="#3b0764" strokeWidth="1" />
      <rect x="10" y="5" width="12" height="22" fill="#8b5cf6" />
      {/* Inner Cape Pattern (Mojang / Founder Star) */}
      <rect x="12" y="8" width="8" height="8" fill="#c4b5fd" />
      <rect x="14" y="6" width="4" height="12" fill="#ddd6fe" />
      <rect x="11" y="9" width="10" height="6" fill="#ede9fe" />
      {/* Cape Clasp */}
      <rect x="13" y="3" width="6" height="3" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
      <circle cx="16" cy="4.5" r="1" fill="#fef08a" />
      {/* Cape Bottom Trim */}
      <rect x="10" y="24" width="12" height="3" fill="#6d28d9" />
      <rect x="12" y="25" width="2" height="2" fill="#fbbf24" />
      <rect x="18" y="25" width="2" height="2" fill="#fbbf24" />
    </svg>
  );
}

export function ArmorStandIcon({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={`mc-pixel-icon ${className}`} style={{ imageRendering: 'pixelated' }}>
      {/* Stone Base */}
      <rect x="6" y="27" width="20" height="3" fill="#71717a" stroke="#27272a" strokeWidth="1" />
      <rect x="8" y="28" width="16" height="1" fill="#a1a1aa" />
      {/* Wooden Poles (Legs) */}
      <rect x="10" y="16" width="3" height="11" fill="#b45309" stroke="#451a03" strokeWidth="0.5" />
      <rect x="19" y="16" width="3" height="11" fill="#b45309" stroke="#451a03" strokeWidth="0.5" />
      {/* Hip Bar */}
      <rect x="9" y="15" width="14" height="2" fill="#d97706" stroke="#451a03" strokeWidth="0.5" />
      {/* Torso Sticks */}
      <rect x="12" y="7" width="3" height="8" fill="#b45309" stroke="#451a03" strokeWidth="0.5" />
      <rect x="17" y="7" width="3" height="8" fill="#b45309" stroke="#451a03" strokeWidth="0.5" />
      {/* Shoulders Bar */}
      <rect x="6" y="6" width="20" height="3" fill="#d97706" stroke="#451a03" strokeWidth="1" />
      {/* Neck Post */}
      <rect x="14" y="2" width="4" height="4" fill="#92400e" stroke="#451a03" strokeWidth="0.5" />
    </svg>
  );
}

export function ApkPackageIcon({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={`mc-pixel-icon ${className}`} style={{ imageRendering: 'pixelated' }}>
      {/* 3D Minecraft Chest / Package */}
      <polygon points="16,3 28,9 16,15 4,9" fill="#eab308" stroke="#713f12" strokeWidth="1" />
      <polygon points="4,9 16,15 16,27 4,21" fill="#a16207" stroke="#713f12" strokeWidth="1" />
      <polygon points="16,15 28,9 28,21 16,27" fill="#ca8a04" stroke="#713f12" strokeWidth="1" />
      {/* Lock latch */}
      <rect x="15" y="13" width="2" height="4" fill="#fef08a" stroke="#000" strokeWidth="0.5" />
      {/* Android Antenna / Java Spark */}
      <line x1="10" y1="5" x2="7" y2="2" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="5" x2="25" y2="2" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldGplIcon({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={`mc-pixel-icon ${className}`} style={{ imageRendering: 'pixelated' }}>
      {/* Minecraft 3D Shield */}
      <polygon points="6,3 26,3 26,18 16,29 6,18" fill="#475569" stroke="#0f172a" strokeWidth="1.5" />
      <polygon points="8,5 24,5 24,17 16,26 8,17" fill="#94a3b8" />
      {/* Wooden Center Planks */}
      <rect x="10" y="7" width="12" height="11" fill="#b45309" />
      <rect x="12" y="8" width="8" height="9" fill="#d97706" />
      {/* Iron Boss Center */}
      <circle cx="16" cy="12" r="3" fill="#cbd5e1" stroke="#334155" strokeWidth="1" />
      <circle cx="16" cy="12" r="1" fill="#ffffff" />
    </svg>
  );
}

export function DiscordIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}
