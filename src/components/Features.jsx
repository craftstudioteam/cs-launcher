import React from 'react';
import { Sparkles, Palette } from 'lucide-react';
import AdBanner from './AdBanner';

export default function Features({ features }) {
  const featureList = features ? Object.entries(features).map(([k, v]) => ({ id: k, ...v })) : [];

  return (
    <div className="tab-transition-wrapper">
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.7rem', fontWeight: 900 }}>Client Features & Capabilities</h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-grey)', marginTop: 6 }}>
          Official capabilities and enhancements built into CS Launcher
        </p>
      </div>

      {/* Ad Banner */}
      <AdBanner slotId="features-top" format="banner" />

      {featureList.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {featureList.map((item) => (
            <div key={item.id} className="app-card" style={{ padding: 0, overflow: 'hidden' }}>
              {item.imageUrl && (
                <div style={{ width: '100%', height: 210, background: '#050508', overflow: 'hidden' }}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title || 'Feature'} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                    loading="lazy" 
                  />
                </div>
              )}
              <div style={{ padding: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <Palette size={18} color="#F59E0B" />
                  <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.12rem', fontWeight: 800, color: 'var(--text-white)' }}>
                    {item.title || 'Feature'}
                  </h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-grey)', lineHeight: 1.6 }}>
                  {item.text || 'Dynamic custom skin & cape applicator for Minecraft Java accounts on Android.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="app-card" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '28px' }}>
          No extra client features configured.
        </div>
      )}
    </div>
  );
}
