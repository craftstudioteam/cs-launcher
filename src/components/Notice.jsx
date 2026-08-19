import React from 'react';
import { ShieldAlert, Scale, AlertTriangle, BookOpen, ExternalLink, Code2, HeartHandshake } from 'lucide-react';
import AdBanner from './AdBanner';
import { CsGplShieldIcon, CsTeamDevIcon } from './MinecraftIcons';

export default function Notice({ branding, activeVersion }) {
  const ver = activeVersion || "v3";

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
            <span className="mctools-sub-text">GNU GPLv3 • PojavLauncher Attribution</span>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner slotId="notice-top" format="banner" />

      {/* 1. 📌 PROJECT INFORMATION CARD (HIGHLIGHTED) */}
      <div className="app-card" style={{ borderLeft: '5px solid var(--mc-yellow)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 38, height: 38, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <CsTeamDevIcon size={30} />
          </div>
          <div>
            <h3 style={{ fontSize: '0.94rem', color: 'var(--mc-yellow)', lineHeight: 1.3 }}>
              Project Information
            </h3>
            <div style={{ fontSize: '0.66rem', color: 'var(--mc-grey)', marginTop: 2 }}>
              Official development metadata & credentials
            </div>
          </div>
        </div>

        <div className="release-specs-grid" style={{ marginBottom: 12 }}>
          <div className="spec-item">
            <span className="spec-key">Project Name</span>
            <span className="spec-val"><mark className="hl-yellow">CS Launcher ({ver})</mark></span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Organization</span>
            <span className="spec-val"><mark className="hl-cyan">Craft Studio Development Group</mark></span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Lead Developer</span>
            <span className="spec-val"><mark className="hl-green">ROHIT_45</mark></span>
          </div>
          <div className="spec-item">
            <span className="spec-key">License</span>
            <span className="spec-val"><mark className="hl-green">GNU GPLv3 (Open Source)</mark></span>
          </div>
        </div>

        <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.5, marginTop: 4 }}>
          <mark className="hl-gold">Copyright © 2026 Craft Studio Development Group. All Rights Reserved.</mark>
        </p>
      </div>

      {/* 2. 🌟 UPSTREAM OPEN SOURCE ATTRIBUTION (POJAVLAUNCHER EXCLUSIVE) */}
      <div className="app-card" style={{ borderLeft: '5px solid var(--mc-cyan)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 38, height: 38, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <HeartHandshake size={22} color="var(--mc-cyan)" />
          </div>
          <div>
            <h3 style={{ fontSize: '0.94rem', color: 'var(--mc-cyan)', lineHeight: 1.3 }}>
              Open Source Attribution (PojavLauncher Base)
            </h3>
            <div style={{ fontSize: '0.66rem', color: 'var(--mc-grey)', marginTop: 2 }}>
              Built upon official PojavLauncher foundations
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.74rem', color: 'var(--mc-white)', lineHeight: 1.6, marginBottom: 12 }}>
          CS Launcher is based on and contains modified source code derived from the <mark className="hl-cyan">PojavLauncher</mark> project:
        </p>

        {/* PojavLauncher Attribution Box */}
        <div style={{ background: '#0e0b24', border: '2px solid #000', borderLeft: '4px solid var(--mc-cyan)', padding: '12px 14px', marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, flexWrap: 'wrap', gap: 6 }}>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--mc-cyan)' }}>
              <mark className="hl-cyan">PojavLauncher Team & Contributors</mark>
            </div>
            <a 
              href="https://github.com/PojavLauncherTeam/PojavLauncher" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '0.66rem', color: 'var(--mc-yellow)', display: 'inline-flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}
            >
              <mark className="hl-gold">github.com/PojavLauncherTeam/PojavLauncher ↗</mark>
            </a>
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.6 }}>
            CS Launcher utilizes mobile Java runtime bridges, input mapping, OpenGL / Vulkan wrappers (GL4ES, LWJGL), and runtime hooks created by the <mark className="hl-white">PojavLauncher Team</mark>, distributed under the <mark className="hl-green">GNU General Public License Version 3 (GPLv3)</mark>.
          </p>
        </div>

        <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.5 }}>
          <mark className="hl-purple">All modifications and enhancements made by Craft Studio Development Group are 100% compliant with GPLv3 copyleft terms.</mark>
        </p>
      </div>

      {/* 3. 📜 GNU GPLv3 LICENSE INFORMATION (HIGHLIGHTED CLAUSES) */}
      <div className="app-card" style={{ borderLeft: '5px solid var(--mc-green)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 38, height: 38, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <CsGplShieldIcon size={30} />
          </div>
          <div>
            <h3 style={{ fontSize: '0.94rem', color: 'var(--mc-green)', lineHeight: 1.3 }}>
              GNU General Public License v3.0
            </h3>
            <div style={{ fontSize: '0.66rem', color: 'var(--mc-grey)', marginTop: 2 }}>
              Copyleft free software guarantees & user freedoms
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.74rem', color: 'var(--mc-grey)', lineHeight: 1.6, marginBottom: 12 }}>
          CS Launcher is free software: you are permitted to redistribute it and/or modify it under the terms of the <mark className="hl-green">GNU General Public License (Version 3)</mark> published by the Free Software Foundation.
        </p>

        <div style={{ background: '#0e0b24', border: '2px solid #000', padding: '12px 14px', marginBottom: 14 }}>
          <div style={{ fontSize: '0.74rem', color: 'var(--mc-yellow)', marginBottom: 8 }}>
            GPLv3 Core Freedoms:
          </div>
          <ul className="changelog-list">
            <li><mark className="hl-green">Freedom 0:</mark> The freedom to run the program as you wish, for any purpose.</li>
            <li><mark className="hl-cyan">Freedom 1:</mark> The freedom to study how the program works, and modify it.</li>
            <li><mark className="hl-yellow">Freedom 2:</mark> The freedom to redistribute copies to help others.</li>
            <li><mark className="hl-purple">Freedom 3:</mark> The freedom to distribute copies of your modified versions to the public.</li>
          </ul>
        </div>

        <a 
          href="https://www.gnu.org/licenses/gpl-3.0.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-mc-3d"
          style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '0.76rem' }}
        >
          <span>View Full GNU GPLv3 Official License Text ↗</span>
        </a>
      </div>

      {/* 4. ⚖️ TRADEMARK NOTICE & DISCLAIMER */}
      <div className="app-card" style={{ borderLeft: '5px solid var(--mc-gold)', marginBottom: 16 }}>
        <div style={{ fontSize: '0.92rem', color: 'var(--mc-gold)', marginBottom: 10 }}>
          Mojang Studios & Microsoft Trademark Disclaimer
        </div>
        <p style={{ fontSize: '0.74rem', color: 'var(--mc-white)', lineHeight: 1.6, marginBottom: 10 }}>
          <mark className="hl-red">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</mark>
        </p>
        <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.6 }}>
          <mark className="hl-white">Minecraft</mark>, <mark className="hl-white">Mojang</mark>, and related assets are trademarks of <mark className="hl-gold">Mojang Synergies AB</mark> and <mark className="hl-gold">Microsoft Corporation</mark>. CS Launcher is an independent community project and does not distribute any proprietary Minecraft game assets. Valid account login is required.
        </p>
      </div>

      {/* 5. ⚠️ NO WARRANTY NOTICE (GPLV3 SECTIONS 15 & 16) */}
      <div className="app-card" style={{ borderLeft: '5px solid var(--mc-red)' }}>
        <div style={{ fontSize: '0.92rem', color: 'var(--mc-red)', marginBottom: 10 }}>
          Disclaimer of Warranty
        </div>
        <p style={{ fontSize: '0.7rem', color: 'var(--mc-grey)', lineHeight: 1.55 }}>
          <mark className="hl-red">THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</mark>
        </p>
      </div>
    </div>
  );
}
