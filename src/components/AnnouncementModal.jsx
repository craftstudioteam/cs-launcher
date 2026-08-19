import React from 'react';
import { X } from 'lucide-react';

export default function AnnouncementModal({ announcement, isOpen, onClose }) {
  if (!isOpen || !announcement || !announcement.text) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="status-dot"></span>
            <strong style={{ fontSize: '0.95rem', color: 'var(--text-white)' }}>
              {announcement.title || 'Announcement'}
            </strong>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {(announcement.gifUrl || announcement.mediaUrl) && (
            <div style={{ width: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: 14 }}>
              <img 
                src={announcement.gifUrl || announcement.mediaUrl} 
                alt="Announcement" 
                style={{ width: '100%', display: 'block', objectFit: 'cover' }} 
              />
            </div>
          )}
          <div style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-grey)', whiteSpace: 'pre-wrap' }}>
            {announcement.text}
          </div>
        </div>

        <div style={{ padding: '14px 20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn-primary-action" style={{ padding: '8px 20px', fontSize: '0.84rem' }} onClick={onClose}>
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
