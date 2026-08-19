import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import AdBanner from './AdBanner';
import { DiscordIcon, CsSupportTotemIcon } from './MinecraftIcons';

const FAQ_ITEMS = [
  {
    q: "How do I install CS Launcher V3 APK on Android?",
    a: "Download the CS-LAUNCHER-V3.apk file from the Download Hub. Open your device's file manager, tap the APK, and enable 'Install from unknown sources' if prompted. Once installed, launch the app, log in with your account, and download your preferred Minecraft version."
  },
  {
    q: "What are the minimum system requirements?",
    a: "CS Launcher runs on Android 7.0 (Nougat) and higher. We recommend at least 3GB - 4GB of device RAM and a 64-bit ARM processor (ARM64) for smooth 60 FPS gameplay."
  },
  {
    q: "How to allocate more RAM in CS Launcher?",
    a: "Go to CS Launcher Settings > Java Tweaks > Memory Allocation. Adjust the slider to allocate between 1024 MB (1GB) and 3072 MB (3GB) depending on your device's total RAM capacity."
  },
  {
    q: "How do I use the Skin & Cape changer?",
    a: "In CS Launcher, navigate to your Account/Profile settings, tap 'Skin & Cape', select your custom .png skin or cape file from your phone storage, and click 'Apply'."
  },
  {
    q: "Is CS Launcher free to use?",
    a: "Yes! CS Launcher is 100% free and open-source under GNU GPLv3. There are no paywalls or hidden fees."
  }
];

export default function Help({ discordUrl }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="tab-transition-wrapper">
      {/* MCTools Styled Section Header */}
      <div className="home-hero-wrap" style={{ padding: '0.8rem 0 1.2rem' }}>
        <div className="mctools-title-block">
          <h2 className="mctools-title-main" style={{ fontSize: 'clamp(1.4rem, 5vw, 2.1rem)' }}>
            Help & FAQs
          </h2>
        </div>
        <div>
          <div className="mctools-sub-pill">
            <span className="mctools-sub-text">Setup & Troubleshooting</span>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner slotId="help-top" format="banner" />

      {/* Discord Quick Support Card */}
      {discordUrl && (
        <div className="app-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 18, borderLeft: '4px solid var(--mc-purple)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="nav-discord-btn" style={{ width: 40, height: 40 }}>
              <DiscordIcon size={22} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '0.86rem', color: 'var(--mc-yellow)' }}>
                Need Direct Support?
              </div>
              <div style={{ fontSize: '0.66rem', color: 'var(--mc-grey)', marginTop: 2 }}>
                Join our Discord server for fast developer help
              </div>
            </div>
          </div>

          <a 
            href={discordUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-mc-3d"
            style={{ fontSize: '0.72rem', padding: '8px 14px' }}
          >
            <span>Ask on Discord ↗</span>
          </a>
        </div>
      )}

      {/* Accordion FAQs */}
      <div style={{ marginBottom: 20 }}>
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="accordion-item">
              <button 
                className="accordion-trigger"
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              >
                <span>{item.q}</span>
                {isOpen ? <ChevronUp size={16} color="var(--mc-yellow)" /> : <ChevronDown size={16} />}
              </button>
              {isOpen && (
                <div className="accordion-content">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
