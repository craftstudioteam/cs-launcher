import React from 'react';
import { Play, Video } from 'lucide-react';

function extractYouTubeId(urlOrId) {
  if (!urlOrId) return null;
  const str = String(urlOrId).trim();
  if (str.length === 11 && !str.includes('/') && !str.includes('.')) return str;
  const match = str.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

export default function Videos({ videos, onOpenVideo }) {
  const videoList = videos ? Object.entries(videos).map(([k, v]) => {
    const id = extractYouTubeId(v.videoId || v.videoID);
    return id ? { ...v, id, key: k } : null;
  }).filter(Boolean) : [];

  return (
    <div className="tab-transition-wrapper">
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.7rem', fontWeight: 900 }}>Videos & Tutorials</h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-grey)', marginTop: 6 }}>
          Gameplay showcases, setup guides, and FPS boosting tutorials
        </p>
      </div>

      {videoList.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {videoList.map((v) => (
            <div key={v.key} className="video-card-item" onClick={() => onOpenVideo(v.id)}>
              <div className="video-thumb-wrap">
                <img 
                  className="video-thumb-img" 
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} 
                  alt={v.title || 'Video'} 
                  loading="lazy" 
                />
                <div className="video-play-overlay">
                  <Play size={22} fill="#ffffff" />
                </div>
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-white)', lineHeight: 1.45 }}>
                  {v.title || 'CS Launcher Showcase'}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="app-card" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '28px' }}>
          No videos loaded yet.
        </div>
      )}
    </div>
  );
}
