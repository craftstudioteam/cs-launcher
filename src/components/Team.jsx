import React from 'react';
import { Users, ExternalLink } from 'lucide-react';
import AdBanner from './AdBanner';
import { PlayerHeadIcon, DiscordIcon } from './MinecraftIcons';

export default function Team({ team }) {
  const members = team ? Object.entries(team).map(([k, v]) => ({ id: k, ...v })) : [];

  return (
    <div className="tab-transition-wrapper">
      {/* MCTools Styled Section Header */}
      <div className="home-hero-wrap" style={{ padding: '0.8rem 0 1.2rem' }}>
        <div className="mctools-title-block">
          <h2 className="mctools-title-main" style={{ fontSize: 'clamp(1.4rem, 5vw, 2.1rem)' }}>
            Craft Studio Team
          </h2>
        </div>
        <div>
          <div className="mctools-sub-pill">
            <span className="mctools-sub-text">Developers & Credits</span>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdBanner slotId="team-top" format="banner" />

      {/* Team Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginBottom: 24 }}>
        {members.map((member) => (
          <div key={member.id} className="team-member-card">
            <div className="team-avatar-box">
              <img 
                src={member.avatar || "https://i.ibb.co/zWDH0Jh0/deu21r1-2848045c-3843-4ad6-a7d9-64a1673a7e9f.jpg"} 
                alt={member.name || 'Team Member'} 
                loading="lazy" 
              />
            </div>
            
            <h3 style={{ fontSize: '0.9rem', color: 'var(--mc-yellow)', textShadow: '1px 1px 0 #000' }}>
              {member.name || 'Member'}
            </h3>
            
            <div style={{ fontSize: '0.66rem', color: 'var(--mc-gold)', marginTop: 4, letterSpacing: '1px' }}>
              [{member.role || 'Contributor'}]
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              {member.discord && (
                <a 
                  href={member.discord} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="Discord"
                >
                  <DiscordIcon size={16} color="currentColor" />
                </a>
              )}
              {member.youtube && (
                <a 
                  href={member.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="YouTube"
                >
                  <span style={{ fontSize: '0.72rem', color: '#ff5555' }}>▶</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* PojavLauncher Attribution Box */}
      <div className="app-card" style={{ borderLeft: '4px solid var(--mc-cyan)' }}>
        <div style={{ fontSize: '0.88rem', color: 'var(--mc-cyan)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>PojavLauncher Attribution & Thanks</span>
        </div>
        <p style={{ fontSize: '0.72rem', color: 'var(--mc-grey)', lineHeight: 1.6 }}>
          CS Launcher is built upon the open-source foundations of the PojavLauncher project (licensed under GNU GPLv3). We express immense gratitude to the PojavLauncher contributors and the Minecraft Java modding community.
        </p>
      </div>
    </div>
  );
}
