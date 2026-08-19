import React from 'react';
import { Home, Download, Sparkles, Video, Users, FileText, HelpCircle } from 'lucide-react';

export default function BottomNav({ activeTab, onNavigate }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'download', label: 'Download', icon: Download },
    { id: 'features', label: 'Features', icon: Sparkles },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'notice', label: 'Legal', icon: FileText },
    { id: 'help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <nav className="mobile-bottom-nav">
      {tabs.map((t) => {
        const Icon = t.icon;
        const isActive = activeTab === t.id;
        return (
          <button
            key={t.id}
            className={`nav-tab-btn ${isActive ? 'active' : ''}`}
            onClick={() => onNavigate(t.id)}
          >
            <Icon size={19} strokeWidth={isActive ? 2.5 : 2} />
            <span>{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
