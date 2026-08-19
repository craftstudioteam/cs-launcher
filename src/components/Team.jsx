import React from 'react';
import { Crown, Users } from 'lucide-react';

export default function Team({ team }) {
  const memberList = team ? Object.entries(team).map(([k, v]) => ({ id: k, ...v })) : [];

  return (
    <div className="tab-transition-wrapper">
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.7rem', fontWeight: 900 }}>Craft Studio Team & Credits</h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-grey)', marginTop: 6 }}>
          The developers and contributors behind CS Launcher
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {memberList.map((m) => {
          const isVip = !!m.highlight;
          const initial = (m.name || 'T')[0].toUpperCase();

          return (
            <div key={m.id} className={`team-member-card ${isVip ? 'vip' : ''}`} style={{ position: 'relative' }}>
              {isVip && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#1c1608', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: 'var(--radius-pill)', padding: '2px 8px', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Crown size={12} color="#F59E0B" />
                  <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#F59E0B', letterSpacing: '0.5px' }}>LEADER</span>
                </div>
              )}

              <div className="team-avatar-box">
                {m.avatar ? (
                  <img src={m.avatar} alt={m.name} loading="lazy" />
                ) : (
                  <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-white)' }}>
                    {initial}
                  </span>
                )}
              </div>

              <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: 4 }}>
                {m.name || 'Team Member'}
              </div>

              <div style={{ 
                display: 'inline-block', 
                padding: '4px 12px', 
                borderRadius: 'var(--radius-pill)', 
                fontSize: '0.68rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.6px', 
                background: isVip ? 'var(--accent-gold-soft)' : 'rgba(255, 255, 255, 0.06)', 
                color: isVip ? 'var(--accent-gold)' : 'var(--text-grey)', 
                border: isVip ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid var(--border-subtle)',
                marginBottom: 14 
              }}>
                {m.role || 'Contributor'}
              </div>

              <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                {m.discord && (
                  <a href={m.discord} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Discord">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                  </a>
                )}
                {m.youtube && (
                  <a href={m.youtube} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="YouTube">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                  </a>
                )}
                {m.github && (
                  <a href={m.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* PojavLauncher Attribution */}
      <div className="app-card" style={{ marginTop: 24, borderLeft: '3px solid #ffffff' }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: 6 }}>
          Open Source PojavLauncher Attribution
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-grey)', lineHeight: 1.6 }}>
          CS Launcher is built upon and inspired by the incredible open-source <strong>PojavLauncher</strong> project licensed under GNU GPLv3. We express our deepest gratitude to the PojavLauncher team and the entire Minecraft mobile modding community.
        </p>
      </div>
    </div>
  );
}
