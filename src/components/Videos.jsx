import React from 'react';
import { Play, Video } from 'lucide-react';
import AdBanner from './AdBanner';

export default function Videos({ videos, onOpenVideo }) {
  const videoList = videos ? Object.entries(videos).map(([k, v]) => ({ id: k, ...v })) : [];

  return (
    <div className="tab-transition-wrapper">
      {/* MCTools Styled Section Header */}
      <div className="home-hero-wrap" style={{ padding: '0.8rem 0 1.2rem' }}>
        <div className="mctools-title-block">
          <h2 className="mctools-title-main" style={{ fontSize: 'clamp(1.4rem, 5vw, 2.1rem)' }}>
            Video Guides
          </h2>
        </div>
        <div>
          <div className="mctools-sub-pill">
            <span className="mctools-sub-text">Showcases & Tutorials</span>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner slotId="videos-top" format="banner" />

      {videoList.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {videoList.map((item) => {
            const thumbUrl = item.videoId 
              ? `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
              : 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80';

            return (
              <div 
                key={item.id} 
                className="video-card-item"
                onClick={() => item.videoId && onOpenVideo(item.videoId)}
              >
                <div className="video-thumb-wrap">
                  <img 
                    src={thumbUrl} 
                    alt={item.title || 'Video Showcase'} 
                    className="video-thumb-img" 
                    loading="lazy" 
                  />
                  <div className="video-play-overlay">
                    <Play size={20} fill="#fff" />
                  </div>
                </div>
                <div style={{ padding: 14 }}>
                  <h3 style={{ fontSize: '0.78rem', color: 'var(--mc-yellow)', lineHeight: 1.45, textShadow: '1px 1px 0 #000' }}>
                    {item.title || 'CS Launcher Showcase'}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: '0.64rem', color: 'var(--mc-green)' }}>
                    <span>▶ Tap to play video</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="app-card" style={{ textAlign: 'center', color: 'var(--mc-grey)', padding: '28px' }}>
          No video tutorials available yet.
        </div>
      )}
    </div>
  );
}
