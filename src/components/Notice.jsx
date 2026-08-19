import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Scale, 
  AlertTriangle, 
  ExternalLink, 
  Code, 
  CheckCircle2, 
  Lock, 
  ChevronDown, 
  Info,
  Award,
  Globe
} from 'lucide-react';
import AdBanner from './AdBanner';

export default function Notice({ branding, activeVersion }) {
  const [showFullLicense, setShowFullLicense] = useState(false);

  const cleanName = (branding.appName || "CS LAUNCHER")
    .replace(/\s+v\d+(\.\d+)*\b/gi, '')
    .trim() || "CS Launcher";
  const ver = activeVersion || "v3";

  return (
    <div className="tab-transition-wrapper">
      {/* 🛡️ TOP HEADER */}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 16px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-pill)',
          fontFamily: 'JetBrains Mono',
          fontSize: '0.74rem',
          fontWeight: 700,
          color: 'var(--text-white)',
          marginBottom: 12
        }}>
          <ShieldCheck size={15} color="#10B981" />
          <span>OFFICIAL COMPLIANCE & LEGAL NOTICES</span>
        </div>

        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.8rem', fontWeight: 900 }}>
          Legal Notice & Open Source Licenses
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-grey)', marginTop: 6, maxWidth: 580, margin: '6px auto 0' }}>
          Complete licensing disclosures, upstream PojavLauncher attribution, terms of service, and trademark statements.
        </p>
      </div>

      {/* Ad Banner Slot */}
      <AdBanner slotId="notice-top" format="banner" />

      {/* 1. PROJECT & DEVELOPER IDENTITY CARD */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Award size={18} color="#F59E0B" />
          </div>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.12rem', fontWeight: 800 }}>Project Identity & Ownership</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Official project release metadata</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>PROJECT NAME</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-white)' }}>
              {cleanName} ({ver})
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>ORGANIZATION</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-white)' }}>
              Craft Studio Development Group
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>LEAD DEVELOPER</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.88rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
              ROHIT_45
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>TARGET PLATFORM</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-grey)' }}>
              Android (ARM64 / ARM32)
            </span>
          </div>
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 14 }}>
          {branding.copyright || "Copyright © 2026 Craft Studio Development Group. All Rights Reserved."}
        </p>
      </div>

      {/* 2. UPSTREAM POJAVLAUNCHER ATTRIBUTION CARD */}
      <div className="app-card" style={{ borderLeft: '3px solid #ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Code size={18} color="#ffffff" />
          </div>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.12rem', fontWeight: 800 }}>Upstream PojavLauncher Attribution</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Open-source derivative compliance</p>
          </div>
        </div>

        <p style={{ fontSize: '0.86rem', color: 'var(--text-grey)', lineHeight: 1.6, marginBottom: 14 }}>
          <strong>CS Launcher</strong> is built upon, inspired by, and contains derivative code from the upstream open-source <strong>PojavLauncher</strong> project. In accordance with the GNU General Public License v3.0, we provide full public credit to the original authors and contributors.
        </p>

        <div style={{ background: 'var(--bg-card-elevated)', padding: 14, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 9 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>UPSTREAM REPO:</span>
            <a 
              href="https://github.com/PojavLauncherTeam/PojavLauncher" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '0.84rem', color: '#ffffff', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: 4 }}
            >
              <span>PojavLauncherTeam/PojavLauncher</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>PRIMARY LICENSE:</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-white)' }}>
              GNU GPLv3 (Copyleft)
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>ORIGINAL AUTHORS:</span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-grey)' }}>
              PojavLauncher Team & Community Contributors
            </span>
          </div>
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 12, lineHeight: 1.5 }}>
          All custom modifications, native Android UI layers, rendering optimizations, and configuration tools developed by Craft Studio Development Group are also licensed and distributed under the terms of the GNU GPLv3.
        </p>
      </div>

      {/* 3. GNU GPLv3 LICENSE BREAKDOWN GRID */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Scale size={18} color="#10B981" />
          </div>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.12rem', fontWeight: 800 }}>GNU GPLv3 License Breakdown</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Rights, permissions, and conditions</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 16 }}>
          <div style={{ background: 'var(--bg-card-elevated)', padding: 14, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-emerald)', textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <CheckCircle2 size={14} />
              <span>Permissions Granted</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5, fontSize: '0.8rem', color: 'var(--text-grey)' }}>
              <li>✓ Commercial Use</li>
              <li>✓ Source Code Modification</li>
              <li>✓ Free Distribution</li>
              <li>✓ Patent Grant Protection</li>
              <li>✓ Private & Personal Use</li>
            </ul>
          </div>

          <div style={{ background: 'var(--bg-card-elevated)', padding: 14, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Info size={14} />
              <span>Mandatory Conditions</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5, fontSize: '0.8rem', color: 'var(--text-grey)' }}>
              <li>• Disclose Source Code</li>
              <li>• Include License & Copyright</li>
              <li>• Same License (Copyleft)</li>
              <li>• Document All Modifications</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
          <a 
            href="https://www.gnu.org/licenses/gpl-3.0.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary-action"
            style={{ textDecoration: 'none', fontSize: '0.82rem', padding: '10px 18px' }}
          >
            <span>Read Official GNU GPLv3 License</span>
            <ExternalLink size={14} />
          </a>

          <button 
            type="button"
            onClick={() => setShowFullLicense(!showFullLicense)}
            style={{ background: 'none', border: 'none', color: 'var(--text-grey)', fontSize: '0.82rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <span>{showFullLicense ? 'Hide License Preamble' : 'View License Preamble'}</span>
            <ChevronDown size={16} style={{ transform: showFullLicense ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
          </button>
        </div>

        {showFullLicense && (
          <div style={{ marginTop: 14, padding: 14, background: '#09090d', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)', fontFamily: 'JetBrains Mono', fontSize: '0.74rem', color: 'var(--text-grey)', lineHeight: 1.6, maxHeight: 220, overflowY: 'auto' }}>
            <p style={{ fontWeight: 800, color: '#fff', marginBottom: 6 }}>GNU GENERAL PUBLIC LICENSE — Version 3, 29 June 2007</p>
            <p style={{ marginBottom: 6 }}>Copyright © 2007 Free Software Foundation, Inc. &lt;https://fsf.org/&gt;</p>
            <p style={{ marginBottom: 6 }}>
              Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
            </p>
            <p style={{ marginBottom: 6 }}>
              The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users.
            </p>
          </div>
        )}
      </div>

      {/* 4. TRADEMARKS & THIRD-PARTY NOTICE */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Globe size={18} color="#ffffff" />
          </div>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.12rem', fontWeight: 800 }}>Trademarks & Third-Party Notice</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Intellectual property disclaimer</p>
          </div>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-grey)', lineHeight: 1.6 }}>
          <p style={{ marginBottom: 10 }}>
            "Minecraft", "Mojang", and related assets, graphics, and trademarks are the intellectual property of <strong>Mojang Studios</strong> and/or <strong>Microsoft Corporation</strong>.
          </p>
          <p>
            CS Launcher is an independent open-source launcher utility. It is not created by, affiliated with, sponsored by, or endorsed by Mojang Studios or Microsoft Corporation. All trademarks belong to their respective holders.
          </p>
        </div>
      </div>

      {/* 5. PRIVACY & DATA TRANSPARENCY NOTICE */}
      <div className="app-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-xs)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Lock size={18} color="#10B981" />
          </div>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.12rem', fontWeight: 800 }}>Privacy & Data Transparency</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Zero personal tracking pledge</p>
          </div>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-grey)', lineHeight: 1.6 }}>
          <p style={{ marginBottom: 8 }}>
            • <strong>No Personal Data Collection:</strong> CS Launcher does not collect, sell, or harvest any personal data, passwords, or device identifiers.
          </p>
          <p>
            • <strong>Local Device Storage:</strong> Session tokens and launcher preferences remain stored locally on your device.
          </p>
        </div>
      </div>

      {/* 6. NO WARRANTY DISCLAIMER */}
      <div className="app-card" style={{ borderColor: 'rgba(244, 63, 94, 0.25)', background: 'rgba(244, 63, 94, 0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, fontFamily: 'Space Grotesk', fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-rose)' }}>
          <AlertTriangle size={18} />
          <span>No Warranty & Limitation of Liability</span>
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.55, textTransform: 'uppercase', fontFamily: 'JetBrains Mono' }}>
          THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS, DEVELOPERS, OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY ARISING FROM THE USE OF THIS SOFTWARE.
        </p>
      </div>
    </div>
  );
}
