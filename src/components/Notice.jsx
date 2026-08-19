import React from 'react';
import { ShieldAlert, Scale, AlertTriangle, BookOpen } from 'lucide-react';
import AdBanner from './AdBanner';
import { ShieldGplIcon } from './MinecraftIcons';

export default function Notice({ branding, activeVersion }) {
  return (
    <div className="tab-transition-wrapper">
      {/* MCTools Styled Section Header */}
      <div className="home-hero-wrap" style={{ padding: '0.8rem 0 1.2rem' }}>
        <div className="mctools-title-block">
          <h2 className="mctools-title-main" style={{ fontSize: 'clamp(1.4rem, 5vw, 2.1rem)' }}>
            Legal Notice
          </h2>
        </div>
        <div>
          <div className="mctools-sub-pill">
            <span className="mctools-sub-text">GNU GPLv3 & Trademarks</span>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner slotId="notice-top" format="banner" />

      {/* Main Legal Card */}
      <div className="app-card" style={{ borderLeft: '4px solid var(--mc-red)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <ShieldGplIcon size={32} />
          <div>
            <h3 style={{ fontSize: '0.92rem', color: 'var(--mc-yellow)' }}>
              Open Source Licensing (GNU GPLv3)
            </h3>
            <div style={{ fontSize: '0.66rem', color: 'var(--mc-grey)' }}>Free Software Foundation Compliance</div>
          </div>
        </div>
        <p style={{ fontSize: '0.74rem', color: 'var(--mc-grey)', lineHeight: 1.6 }}>
          CS Launcher is free and open-source software distributed under the <strong>GNU General Public License v3.0 (GPLv3)</strong>. You are free to inspect, modify, and redistribute this software according to the terms of the GPLv3 license.
        </p>
      </div>

      {/* Trademarks & Disclaimer */}
      <div className="app-card" style={{ borderLeft: '4px solid var(--mc-gold)', marginBottom: 16 }}>
        <div style={{ fontSize: '0.88rem', color: 'var(--mc-gold)', marginBottom: 10 }}>
          Mojang & Microsoft Disclaimer
        </div>
        <p style={{ fontSize: '0.74rem', color: 'var(--mc-grey)', lineHeight: 1.6 }}>
          <strong>NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</strong>
        </p>
        <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.6, marginTop: 8 }}>
          Minecraft is a trademark of Mojang Synergies AB. All trademarks and registered trademarks are the property of their respective owners. CS Launcher does not distribute any proprietary Minecraft game assets. Users must authenticate with their valid Mojang / Microsoft accounts.
        </p>
      </div>

      {/* Privacy & Safe Usage */}
      <div className="app-card" style={{ borderLeft: '4px solid var(--mc-green)' }}>
        <div style={{ fontSize: '0.88rem', color: 'var(--mc-green)', marginBottom: 10 }}>
          Client Privacy Guarantee
        </div>
        <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.6 }}>
          This website does not store or process user account credentials. Game authentication happens directly on the client device through official Mojang / Microsoft OAuth endpoints.
        </p>
      </div>
    </div>
  );
}
