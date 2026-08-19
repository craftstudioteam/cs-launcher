import React from 'react';
import { Palette, Sparkles, CheckCircle2 } from 'lucide-react';
import AdBanner from './AdBanner';

export default function Features({ features }) {
  const featureList = features ? Object.entries(features).map(([k, v]) => ({ id: k, ...v })) : [];

  return (
    <div className="tab-transition-wrapper">
      {/* MCTools Styled Section Header */}
      <div className="home-hero-wrap" style={{ padding: '0.8rem 0 1.2rem' }}>
        <div className="mctools-title-block">
          <h2 className="mctools-title-main" style={{ fontSize: 'clamp(1.4rem, 5vw, 2.1rem)' }}>
            Client Features
          </h2>
        </div>
        <div>
          <div className="mctools-sub-pill">
            <span className="mctools-sub-text">Built-in Capabilities</span>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner slotId="features-top" format="banner" />

      {featureList.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 16 }}>
          {featureList.map((item) => (
            <div key={item.id} className="app-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ width: '100%', height: 210, background: '#09071c', borderBottom: '2px solid #000', overflow: 'hidden' }}>
                <img 
                  src={item.imageUrl || "https://i.ibb.co/spqkyRXb/skin-and-Cap.jpg"} 
                  alt={item.title || 'Feature'} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  loading="lazy" 
                />
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 38, height: 38, background: '#0e0b24', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src="/icons/icon-capebuilder.png" alt="Cape Icon" style={{ height: 30, width: 'auto', imageRendering: 'pixelated' }} />
                  </div>
                  <h3 style={{ fontSize: '0.92rem', color: 'var(--mc-yellow)', textShadow: '1px 1px 0 #000', lineHeight: 1.3 }}>
                    {item.title || 'Skin and Cape Changer'}
                  </h3>
                </div>
                <p style={{ fontSize: '0.74rem', color: 'var(--mc-grey)', lineHeight: 1.6, textShadow: '1px 1px 0 #000' }}>
                  {item.text || 'Dynamic custom skin & cape applicator for Minecraft Java accounts on Android.'}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
                  <span style={{ fontSize: '0.62rem', background: '#0d0a22', border: '1px solid #000', color: 'var(--mc-green)', padding: '3px 8px' }}>
                    ✓ Java 1.8 - 1.21.x
                  </span>
                  <span style={{ fontSize: '0.62rem', background: '#0d0a22', border: '1px solid #000', color: 'var(--mc-cyan)', padding: '3px 8px' }}>
                    ✓ Custom Capes
                  </span>
                  <span style={{ fontSize: '0.62rem', background: '#0d0a22', border: '1px solid #000', color: 'var(--mc-gold)', padding: '3px 8px' }}>
                    ✓ Offline/Online Mode
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="app-card" style={{ textAlign: 'center', color: 'var(--mc-grey)', padding: '28px' }}>
          No extra client features configured.
        </div>
      )}
    </div>
  );
}
