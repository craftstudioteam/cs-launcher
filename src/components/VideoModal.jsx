import React from 'react';

export default function VideoModal({ videoId, onClose }) {
  if (!videoId) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-dialog" 
        style={{ maxWidth: 780, background: '#000000', padding: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ width: '100%', aspectRatio: '16/9' }}>
          <iframe 
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`} 
            style={{ width: '100%', height: '100%', border: 'none' }}
            allowFullScreen 
            allow="autoplay; encrypted-media" 
            title="Video Player"
          />
        </div>
      </div>
    </div>
  );
}
