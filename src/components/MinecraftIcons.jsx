import React from 'react';

// ══════════════════════════════════════════════════════════════════════
// EXCLUSIVE CS LAUNCHER ANIMATED 3D GAMING ICONS
// Custom Crafted SVGs • 60 FPS Micro-Animations • Pixel Gaming Aesthetics
// ══════════════════════════════════════════════════════════════════════

// 1. 📥 CS LAUNCHER V3 APK DOWNLOAD BOX (Pulsing Download Arrow & Glowing Core)
export function CsDownloadIcon({ size = 44, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      className={`cs-icon cs-icon-download ${className}`}
    >
      {/* 3D Isometric Game Box */}
      <polygon points="24,4 42,13 24,22 6,13" fill="#fbbf24" stroke="#78350f" strokeWidth="2" strokeLinejoin="round" />
      <polygon points="6,13 24,22 24,42 6,33" fill="#b45309" stroke="#78350f" strokeWidth="2" strokeLinejoin="round" />
      <polygon points="24,22 42,13 42,33 24,42" fill="#d97706" stroke="#78350f" strokeWidth="2" strokeLinejoin="round" />
      
      {/* Golden Corner Accents */}
      <rect x="22" y="20" width="4" height="6" fill="#fef08a" stroke="#000" strokeWidth="1" />
      <circle cx="24" cy="13" r="3" fill="#22c55e" />

      {/* Floating Animated Download Arrow */}
      <g className="anim-dl-arrow">
        <path d="M24 2 L24 16 M19 11 L24 16 L29 11" stroke="#55ff55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// 2. 🦹 SKIN & CAPE CHANGER (Animated Waving Elytra Cape & 3D Steve Model)
export function CsSkinCapeIcon({ size = 44, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      className={`cs-icon cs-icon-cape ${className}`}
    >
      {/* Animated Fluttering Cape in Background */}
      <g className="anim-cape-flutter">
        <path d="M12 16 C8 24 10 38 15 42 L24 40 L33 42 C38 38 40 24 36 16 Z" fill="#7c3aed" stroke="#3b0764" strokeWidth="1.5" />
        <path d="M16 18 C13 25 15 36 18 39 L24 37 L30 39 C33 36 35 25 32 18 Z" fill="#a855f7" />
        <rect x="21" y="22" width="6" height="6" fill="#fef08a" />
      </g>

      {/* 3D Steve Character Head & Shoulders */}
      <rect x="18" y="6" width="12" height="12" rx="1" fill="#b45309" stroke="#000" strokeWidth="1.5" />
      <rect x="19" y="7" width="10" height="4" fill="#451a03" />
      {/* Eyes */}
      <rect x="20" y="11" width="3" height="2" fill="#2563eb" />
      <rect x="25" y="11" width="3" height="2" fill="#2563eb" />
      <rect x="20" y="11" width="1" height="2" fill="#fff" />
      <rect x="25" y="11" width="1" height="2" fill="#fff" />

      {/* Golden Clasp */}
      <circle cx="24" cy="18" r="2.5" fill="#fbbf24" stroke="#000" strokeWidth="1" />
    </svg>
  );
}

// 3. 🎬 VIDEO GUIDES & GAMEPLAY (Hologram Controller & 60 FPS Pulse)
export function CsVideoGuidesIcon({ size = 44, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      className={`cs-icon cs-icon-video ${className}`}
    >
      {/* Glowing Neon Gamepad Body */}
      <path 
        d="M10 18 C10 12 38 12 38 18 C41 24 43 36 38 40 C34 43 30 36 28 32 L20 32 C18 36 14 43 10 40 C5 36 7 24 10 18 Z" 
        fill="#14532d" 
        stroke="#22c55e" 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />
      {/* D-Pad */}
      <rect x="14" y="22" width="6" height="2" fill="#55ff55" />
      <rect x="16" y="20" width="2" height="6" fill="#55ff55" />
      {/* Action Buttons */}
      <circle cx="31" cy="21" r="1.5" fill="#facc15" />
      <circle cx="34" cy="24" r="1.5" fill="#ef4444" />
      <circle cx="28" cy="24" r="1.5" fill="#38bdf8" />
      <circle cx="31" cy="27" r="1.5" fill="#55ff55" />

      {/* Animated Glowing Play Triangle */}
      <g className="anim-pulse-play">
        <polygon points="21,18 29,23 21,28" fill="#ffffff" stroke="#166534" strokeWidth="1" />
      </g>
    </svg>
  );
}

// 4. 🌀 BUILD ARCHIVE (Ancient Nether Portal Vault & Swirling Runes)
export function CsArchiveVaultIcon({ size = 44, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      className={`cs-icon cs-icon-portal ${className}`}
    >
      {/* Obsidian Portal Frame */}
      <rect x="10" y="6" width="28" height="36" rx="2" fill="#18181b" stroke="#09090b" strokeWidth="2.5" />
      <rect x="16" y="12" width="16" height="24" fill="#3b0764" stroke="#581c87" strokeWidth="1.5" />

      {/* Swirling Nether Energy Layers */}
      <g className="anim-portal-swirl">
        <circle cx="24" cy="24" r="8" fill="#9333ea" opacity="0.85" />
        <rect x="20" y="16" width="8" height="16" fill="#c084fc" opacity="0.6" />
        <rect x="16" y="20" width="16" height="8" fill="#e9d5ff" opacity="0.7" />
        <circle cx="24" cy="24" r="3" fill="#ffffff" />
      </g>

      {/* Obsidian Corner Highlights */}
      <rect x="10" y="6" width="6" height="6" fill="#27272a" />
      <rect x="32" y="6" width="6" height="6" fill="#27272a" />
    </svg>
  );
}

// 5. 👑 CRAFT STUDIO TEAM (Developer Crown & 3D Diamond Helmet)
export function CsTeamDevIcon({ size = 44, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      className={`cs-icon cs-icon-team ${className}`}
    >
      {/* 3D Diamond Helmet Face */}
      <polygon points="24,8 40,16 24,24 8,16" fill="#38bdf8" stroke="#0369a1" strokeWidth="2" />
      <polygon points="8,16 24,24 24,40 8,32" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
      <polygon points="24,24 40,16 40,32 24,40" fill="#0ea5e9" stroke="#0369a1" strokeWidth="2" />

      {/* Eye Slits */}
      <rect x="14" y="22" width="6" height="3" fill="#082f49" />
      <rect x="28" y="22" width="6" height="3" fill="#082f49" />
      <rect x="16" y="23" width="2" height="1" fill="#bae6fd" />
      <rect x="30" y="23" width="2" height="1" fill="#bae6fd" />

      {/* Animated Floating Founder Crown */}
      <g className="anim-crown-float">
        <polygon points="16,6 18,2 24,5 30,2 32,6" fill="#fbbf24" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="24" cy="4" r="1.5" fill="#ef4444" />
      </g>
    </svg>
  );
}

// 6. ⚖️ LEGAL & GPLV3 NOTICE (Diamond Shield with GNU Scales of Justice)
export function CsGplShieldIcon({ size = 44, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      className={`cs-icon cs-icon-shield ${className}`}
    >
      {/* Heavy 3D Diamond Shield */}
      <path 
        d="M8 8 L40 8 L40 26 C40 36 24 44 24 44 C24 44 8 36 8 26 Z" 
        fill="#991b1b" 
        stroke="#450a0a" 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
      />
      <path 
        d="M12 12 L36 12 L36 25 C36 33 24 39 24 39 C24 39 12 33 12 25 Z" 
        fill="#dc2626" 
      />

      {/* GPL Scales of Justice Emblem */}
      <g className="anim-shield-shine">
        <line x1="24" y1="16" x2="24" y2="32" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="20" x2="32" y2="20" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="24" r="3" fill="#facc15" stroke="#78350f" strokeWidth="1" />
        <circle cx="32" cy="24" r="3" fill="#facc15" stroke="#78350f" strokeWidth="1" />
      </g>
    </svg>
  );
}

// 7. ⚡ RAM & SETUP OPTIMIZATION (Turbo Memory Chipset & FPS Speedometer)
export function CsRamSetupIcon({ size = 44, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      className={`cs-icon cs-icon-ram ${className}`}
    >
      {/* RAM Motherboard Chipset */}
      <rect x="8" y="10" width="32" height="28" rx="3" fill="#7c2d12" stroke="#431407" strokeWidth="2" />
      <rect x="14" y="16" width="20" height="16" rx="1" fill="#ea580c" stroke="#9a3412" strokeWidth="1.5" />

      {/* Gold Connectors */}
      <rect x="11" y="38" width="4" height="4" fill="#fbbf24" />
      <rect x="18" y="38" width="4" height="4" fill="#fbbf24" />
      <rect x="25" y="38" width="4" height="4" fill="#fbbf24" />
      <rect x="32" y="38" width="4" height="4" fill="#fbbf24" />

      {/* Animated Turbo Lightning Bolt */}
      <g className="anim-bolt-spark">
        <polygon points="26,14 18,24 23,24 20,32 30,22 25,22" fill="#fef08a" stroke="#d97706" strokeWidth="1" />
      </g>
    </svg>
  );
}

// 8. 🛡️ COMMUNITY SUPPORT & FAQS (Magic Totem with Heartbeat & Fluttering Wings)
export function CsSupportTotemIcon({ size = 44, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      className={`cs-icon cs-icon-totem ${className}`}
    >
      {/* Animated Wing Flap */}
      <g className="anim-totem-wings">
        <polygon points="4,16 16,20 16,28 4,22" fill="#0d9488" stroke="#042f2e" strokeWidth="1.5" />
        <polygon points="44,16 32,20 32,28 44,22" fill="#0d9488" stroke="#042f2e" strokeWidth="1.5" />
      </g>

      {/* Totem Golden Body */}
      <rect x="16" y="8" width="16" height="14" rx="2" fill="#facc15" stroke="#78350f" strokeWidth="2" />
      <rect x="18" y="10" width="12" height="10" fill="#fef08a" />
      <rect x="16" y="24" width="16" height="16" rx="2" fill="#eab308" stroke="#78350f" strokeWidth="2" />
      <rect x="19" y="27" width="10" height="10" fill="#fde047" />

      {/* Emerald Eyes */}
      <g className="anim-totem-eyes">
        <rect x="18" y="13" width="3" height="3" fill="#22c55e" />
        <rect x="27" y="13" width="3" height="3" fill="#22c55e" />
        <rect x="19" y="13" width="1" height="1" fill="#fff" />
        <rect x="28" y="13" width="1" height="1" fill="#fff" />
      </g>
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
