import React from 'react';
import { ShieldAlert, Scale, AlertTriangle, BookOpen, ExternalLink, Code2, HeartHandshake } from 'lucide-react';
import AdBanner from './AdBanner';
import { ShieldGplIcon, PlayerHeadIcon } from './MinecraftIcons';

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
            <span className="mctools-sub-text">GNU GPLv3 • Bases & Attributions</span>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner slotId="notice-top" format="banner" />

      {/* 1. 📌 PROJECT INFORMATION CARD */}
      <div className="app-card" style={{ borderLeft: '5px solid var(--mc-yellow)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 38, height: 38, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <PlayerHeadIcon size={26} />
          </div>
          <div>
            <h3 style={{ fontSize: '0.94rem', color: 'var(--mc-yellow)', lineHeight: 1.3 }}>
              Project Information
            </h3>
            <div style={{ fontSize: '0.66rem', color: 'var(--mc-grey)', marginTop: 2 }}>
              Official metadata & development team credits
            </div>
          </div>
        </div>

        <div className="release-specs-grid" style={{ marginBottom: 12 }}>
          <div className="spec-item">
            <span className="spec-key">Project Name</span>
            <span className="spec-val">CS Launcher ({ver})</span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Organization</span>
            <span className="spec-val">Craft Studio Development Group</span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Lead Developer</span>
            <span className="spec-val">ROHIT_45</span>
          </div>
          <div className="spec-item">
            <span className="spec-key">License</span>
            <span className="spec-val" style={{ color: 'var(--mc-green)' }}>GNU GPLv3 (Open Source)</span>
          </div>
        </div>

        <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.5, marginTop: 4 }}>
          Copyright © 2026 Craft Studio Development Group. All Rights Reserved.
        </p>
      </div>

      {/* 2. 🌟 UPSTREAM OPEN SOURCE ATTRIBUTIONS (POJAVLAUNCHER & AMETHYST LAUNCHER) */}
      <div className="app-card" style={{ borderLeft: '5px solid var(--mc-purple)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 38, height: 38, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <HeartHandshake size={22} color="var(--mc-purple)" />
          </div>
          <div>
            <h3 style={{ fontSize: '0.94rem', color: 'var(--mc-purple)', lineHeight: 1.3 }}>
              Open Source Attributions & Bases
            </h3>
            <div style={{ fontSize: '0.66rem', color: 'var(--mc-grey)', marginTop: 2 }}>
              Built upon PojavLauncher & Amethyst Launcher foundations
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.74rem', color: 'var(--mc-white)', lineHeight: 1.6, marginBottom: 12 }}>
          CS Launcher is built upon and contains modified source code derived from the following incredible open-source projects:
        </p>

        {/* PojavLauncher Attribution Box */}
        <div style={{ background: '#0e0b24', border: '2px solid #000', borderLeft: '4px solid var(--mc-cyan)', padding: '12px 14px', marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6, flexWrap: 'wrap', gap: 6 }}>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--mc-cyan)' }}>
              1. PojavLauncher Project
            </div>
            <a 
              href="https://github.com/PojavLauncherTeam/PojavLauncher" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '0.64rem', color: 'var(--mc-yellow)', display: 'inline-flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}
            >
              <span>github.com/PojavLauncherTeam</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.55 }}>
            CS Launcher utilizes core Java runtime bridge implementations, native rendering wrappers (GL4ES, LWJGL), and input management created by the <strong>PojavLauncher Team & Contributors</strong>, distributed under the <strong>GNU General Public License v3.0</strong>.
          </p>
        </div>

        {/* Amethyst Launcher Attribution Box */}
        <div style={{ background: '#0e0b24', border: '2px solid #000', borderLeft: '4px solid var(--mc-purple)', padding: '12px 14px', marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6, flexWrap: 'wrap', gap: 6 }}>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--mc-purple)' }}>
              2. Amethyst Launcher Base
            </div>
            <a 
              href="https://github.com/AmethystLauncher" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '0.64rem', color: 'var(--mc-yellow)', display: 'inline-flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}
            >
              <span>github.com/AmethystLauncher</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.55 }}>
            CS Launcher integrates optimizations, enhancements, skin handling routines, and custom feature sets inspired by and derived from the <strong>Amethyst Launcher</strong> open-source project, distributed under the <strong>GNU General Public License v3.0</strong>.
          </p>
        </div>

        <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.5 }}>
          We express our deepest gratitude to the PojavLauncher developers, Amethyst Launcher contributors, and the entire open-source Minecraft modding community for making Minecraft Java on Android possible.
        </p>
      </div>

      {/* 3. 📜 GNU GPLv3 LICENSE INFORMATION */}
      <div className="app-card" style={{ borderLeft: '5px solid var(--mc-green)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 38, height: 38, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ShieldGplIcon size={26} />
          </div>
          <div>
            <h3 style={{ fontSize: '0.94rem', color: 'var(--mc-green)', lineHeight: 1.3 }}>
              GNU General Public License v3.0
            </h3>
            <div style={{ fontSize: '0.66rem', color: 'var(--mc-grey)', marginTop: 2 }}>
              Copyleft free software compliance & freedoms
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.74rem', color: 'var(--mc-grey)', lineHeight: 1.6, marginBottom: 12 }}>
          CS Launcher is free software: you can redistribute it and/or modify it under the terms of the <strong>GNU General Public License as published by the Free Software Foundation</strong>, either version 3 of the License, or (at your option) any later version.
        </p>

        <div style={{ background: '#0e0b24', border: '2px solid #000', padding: '12px 14px', marginBottom: 14 }}>
          <div style={{ fontSize: '0.74rem', color: 'var(--mc-yellow)', marginBottom: 8 }}>
            GPLv3 Core Guarantees:
          </div>
          <ul className="changelog-list">
            <li><strong>Freedom 0:</strong> The freedom to run the program as you wish, for any purpose.</li>
            <li><strong>Freedom 1:</strong> The freedom to study how the program works, and change it.</li>
            <li><strong>Freedom 2:</strong> The freedom to redistribute copies to help your friends.</li>
            <li><strong>Freedom 3:</strong> The freedom to distribute copies of your modified versions to others.</li>
          </ul>
        </div>

        <a 
          href="https://www.gnu.org/licenses/gpl-3.0.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-mc-3d"
          style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '0.76rem' }}
        >
          <span>View Full GNU GPLv3 License Official Text ↗</span>
        </a>
      </div>

      {/* 4. ⚖️ TRADEMARK NOTICE & DISCLAIMER */}
      <div className="app-card" style={{ borderLeft: '5px solid var(--mc-gold)', marginBottom: 16 }}>
        <div style={{ fontSize: '0.92rem', color: 'var(--mc-gold)', marginBottom: 10 }}>
          Mojang Studios & Microsoft Trademark Disclaimer
        </div>
        <p style={{ fontSize: '0.74rem', color: 'var(--mc-white)', lineHeight: 1.6, marginBottom: 10 }}>
          <strong>NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</strong>
        </p>
        <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.6 }}>
          "Minecraft", "Mojang", and associated trademarks, assets, and branding are registered trademarks of Mojang Synergies AB and Microsoft Corporation. CS Launcher is an independent community client wrapper and does not distribute any copyrighted Minecraft game assets. Users must log in with their valid Microsoft / Mojang account to download and play Minecraft Java Edition.
        </p>
      </div>

      {/* 5. ⚠️ NO WARRANTY (GPLv3 SECTIONS 15 & 16) */}
      <div className="app-card" style={{ borderLeft: '5px solid var(--mc-red)' }}>
        <div style={{ fontSize: '0.92rem', color: 'var(--mc-red)', marginBottom: 10 }}>
          Disclaimer of Warranty
        </div>
        <p style={{ fontSize: '0.7rem', color: 'var(--mc-grey)', lineHeight: 1.55, textTransform: 'none' }}>
          THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE.
        </p>
      </div>
    </div>
  );
}
