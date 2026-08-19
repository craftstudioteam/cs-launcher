import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DownloadHub from './components/DownloadHub';
import Features from './components/Features';
import Videos from './components/Videos';
import Team from './components/Team';
import Notice from './components/Notice';
import Help from './components/Help';
import BottomNav from './components/BottomNav';
import VideoModal from './components/VideoModal';
import Toast from './components/Toast';

// ─── EXACT REAL GITHUB V3 RELEASE DATA ───
const APP_DATA = {
  branding: {
    appName: "CS LAUNCHER",
    tagline: "Minecraft Java on Mobile Android",
    logoImage: "https://i.ibb.co/jv7ZS03W/favicon.png",
    bgImage: "https://i.ibb.co/HvzwkRF/992e6382ef96e29b26397f1b35ccd1e5.gif",
    copyright: "© 2026 Craft Studio Development Group. All Rights Reserved.",
    screenshots: [
      "https://i.ibb.co/6zh10Ph/333231.jpg",
      "https://i.ibb.co/tTF5F3JL/333232.jpg",
      "https://i.ibb.co/M5VMw9qf/333233.jpg",
      "https://i.ibb.co/CKFjXs1x/333234.jpg",
      "https://i.ibb.co/qLHHH4sh/333235.jpg"
    ]
  },
  hero: {
    badgeText: "CS LAUNCHER V3 OFFICIAL",
    subtitle: "The all-new CS Launcher V3 is here! Improved launcher performance, better profile management, cleaner UI, and enhanced Minecraft Java experience on Android.",
    statsBar: "Android 7.0+"
  },
  latestDownload: {
    version: "v3",
    downloadUrl: "https://github.com/craftstudioteam/CS-LAUNCHER-v3/releases/download/v3/CS-LAUNCHER-V3.apk",
    fileSize: "185.8 MB",
    compatibility: "Android 7.0+",
    requirements: "2GB / 4GB RAM",
    releaseName: "CS Launcher V3",
    releaseDate: "August 2026",
    changelog: "• Improved launcher performance and stability\n• Better profile management\n• Improved download and installation system\n• Cleaner and more modern UI\n• Improved Minecraft version and profile handling\n• Various bug fixes and optimizations"
  },
  archiveDownloads: {
    "v1.0.0": {
      version: "v1.0.0",
      releaseName: "Legacy Build",
      downloadUrl: "https://github.com/Mineradi/CS-LAUNCHER/releases/download/v.1.0.0/CSLauncher.apk",
      fileSize: "300 MB",
      releaseDate: "2026",
      compatibility: "Android 7+",
      changelog: "Original PojavLauncher base build",
      enabled: true
    }
  },
  features: {
    "f1": {
      title: "SKIN AND CAPE CHANGE FEATURE",
      imageUrl: "https://i.ibb.co/wN4DmcNH/296556.jpg",
      text: "Dynamic custom skin & cape applicator for Minecraft Java accounts on Android."
    }
  },
  team: {
    "m1": {
      name: "ROHIT_45",
      role: "DEVELOPER",
      highlight: true,
      avatar: "https://i.ibb.co/zWDH0Jh0/deu21r1-2848045c-3843-4ad6-a7d9-64a1673a7e9f.jpg",
      discord: "https://discord.gg/bpgYQMA59D"
    },
    "m2": {
      name: "NOT DANGER",
      role: "FOUNDER",
      highlight: true,
      avatar: "https://i.ibb.co/Vc45DdMp/db6dabd7053933428b647c0599c14e8f.png"
    },
    "m3": {
      name: "Ender_Warrrior",
      role: "FOUNDER",
      highlight: true,
      avatar: "https://i.ibb.co/hJ6HSQQz/Tokyo-Revengers-Mikey-Profile.jpg",
      discord: "https://discord.gg/28mMQTmsg9",
      youtube: "https://www.youtube.com/@Craft-Studio-Official"
    }
  },
  videos: {
    "v1": {
      title: "CS Launcher V2 is Here! The Best Minecraft Launcher for Android in 2026?",
      videoId: "vEmRhDehLjQ"
    },
    "v2": {
      title: "CS Launcher V3 — Minecraft Android Just Got BETTER!",
      videoId: "DjJKUylHCSA"
    },
    "v3": {
      title: "I FOUND THE BEST MINECRAFT LAUNCHER FOR ANDROID IN 2026! 🤯🔥",
      videoId: "w8kw54pHgaU"
    }
  },
  social: {
    discord: "https://discord.gg/bpgYQMA59D"
  }
};

const VALID_ROUTES = ['home', 'download', 'features', 'videos', 'team', 'notice', 'help'];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [routeParams, setRouteParams] = useState({});
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [toast, setToast] = useState(null);

  // 🚀 LIVE AUTO-INCREMENTING DOWNLOAD COUNTER (GitHub API + Real-time Clicks)
  const [githubBaseCount, setGithubBaseCount] = useState(4091);
  const [extraClicks, setExtraClicks] = useState(() => {
    const saved = localStorage.getItem('cs_v3_extra_downloads');
    return saved ? parseInt(saved, 10) : 0;
  });

  // Fetch real GitHub base count
  useEffect(() => {
    async function fetchV3Releases() {
      try {
        const res = await fetch('https://api.github.com/repos/craftstudioteam/CS-LAUNCHER-v3/releases');
        if (res.ok) {
          const releases = await res.json();
          let count = 0;
          if (Array.isArray(releases)) {
            releases.forEach(r => {
              (r.assets || []).forEach(a => {
                count += (a.download_count || 0);
              });
            });
          }
          if (count > 0) {
            setGithubBaseCount(count);
          }
        }
      } catch (e) {
        console.log('GitHub download count sync:', e);
      }
    }
    fetchV3Releases();
  }, []);

  const totalDownloads = githubBaseCount + extraClicks;

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // ─── 🚀 CLEAN URL ROUTING & SEO METADATA ───
  const updatePageMetadata = useCallback((tab) => {
    const titles = {
      home: `CS Launcher — Minecraft Java on Mobile Android (v3)`,
      download: `Download APK (v3) — CS Launcher V3 Official`,
      features: `Features & Capabilities — CS Launcher`,
      videos: `Gameplay Showcases & Setup Tutorials — CS Launcher`,
      team: `Craft Studio Team & Credits — CS Launcher`,
      notice: `Legal Notice, GPLv3 & Licenses — CS Launcher`,
      help: `Help Center & FAQs — CS Launcher`
    };
    document.title = titles[tab] || titles.home;
  }, []);

  const parseCurrentPath = useCallback(() => {
    let rawPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
    const searchStr = window.location.search;
    const hashStr = window.location.hash;

    if (hashStr && hashStr.length > 1) {
      const cleanHash = hashStr.replace(/^#\/?/, '').split('?')[0];
      if (VALID_ROUTES.includes(cleanHash)) {
        rawPath = cleanHash;
        window.history.replaceState({}, '', '/' + cleanHash + (searchStr || ''));
      }
    }

    const targetTab = VALID_ROUTES.includes(rawPath) ? rawPath : 'home';

    const params = {};
    if (searchStr) {
      const sp = new URLSearchParams(searchStr);
      for (const [k, v] of sp.entries()) {
        params[k] = v;
      }
    }

    if (targetTab === 'videos' && params.v) {
      setActiveVideoId(params.v);
    }

    setActiveTab(targetTab);
    setRouteParams(params);
    updatePageMetadata(targetTab);
  }, [updatePageMetadata]);

  useEffect(() => {
    parseCurrentPath();
    window.addEventListener('popstate', parseCurrentPath);
    return () => window.removeEventListener('popstate', parseCurrentPath);
  }, [parseCurrentPath]);

  const handleNavigate = (tab, paramsObj = null) => {
    if (!VALID_ROUTES.includes(tab)) tab = 'home';

    const cleanPath = tab === 'home' ? '/' : '/' + tab;
    let newUrl = cleanPath;

    if (paramsObj && Object.keys(paramsObj).length > 0) {
      const sp = new URLSearchParams(paramsObj);
      newUrl += '?' + sp.toString();
    }

    if (window.location.pathname + window.location.search !== newUrl) {
      window.history.pushState({}, '', newUrl);
    }

    setActiveTab(tab);
    setRouteParams(paramsObj || {});
    updatePageMetadata(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 🔥 DIRECT APK DOWNLOAD TRIGGER + AUTOMATIC DOWNLOAD COUNTER INCREMENT (+1)
  const handleDownload = (url, versionTag) => {
    const targetUrl = url || APP_DATA.latestDownload.downloadUrl;

    // Automatic download counter increment
    setExtraClicks(prev => {
      const updated = prev + 1;
      localStorage.setItem('cs_v3_extra_downloads', updated.toString());
      return updated;
    });

    showToast(`Starting CS Launcher ${versionTag || 'v3'} download... (${totalDownloads + 1} downloads)`, 'success');

    const a = document.createElement('a');
    a.href = targetUrl;
    a.download = '';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      {/* Background Layer */}
      <div className="bg-layer-container">
        <img 
          className="bg-layer-gif" 
          src={APP_DATA.branding.bgImage} 
          alt="Background" 
        />
      </div>
      <div className="bg-layer-overlay"></div>

      {/* Top Header with Clean URL Sharing */}
      <Header 
        branding={APP_DATA.branding} 
        activeVersion={APP_DATA.latestDownload.version} 
        activeTab={activeTab}
        onNavigate={handleNavigate} 
      />

      {/* Main Viewport */}
      <main className="app-viewport">
        {activeTab === 'home' && (
          <Hero 
            hero={APP_DATA.hero} 
            branding={APP_DATA.branding} 
            activeVersion={APP_DATA.latestDownload.version}
            liveDownloadCount={totalDownloads}
            discordUrl={APP_DATA.social.discord}
            onNavigate={handleNavigate} 
            onDownload={handleDownload}
          />
        )}

        {activeTab === 'download' && (
          <DownloadHub 
            latest={APP_DATA.latestDownload} 
            archive={APP_DATA.archiveDownloads} 
            routeParams={routeParams}
            liveDownloadCount={totalDownloads}
            onDownload={handleDownload} 
          />
        )}

        {activeTab === 'features' && (
          <Features features={APP_DATA.features} />
        )}

        {activeTab === 'videos' && (
          <Videos 
            videos={APP_DATA.videos} 
            onOpenVideo={(id) => {
              setActiveVideoId(id);
              handleNavigate('videos', { v: id });
            }} 
          />
        )}

        {activeTab === 'team' && (
          <Team team={APP_DATA.team} />
        )}

        {activeTab === 'notice' && (
          <Notice branding={APP_DATA.branding} activeVersion={APP_DATA.latestDownload.version} />
        )}

        {activeTab === 'help' && (
          <Help discordUrl={APP_DATA.social.discord} />
        )}

        {/* Footer */}
        <footer className="app-footer">
          <div className="footer-credits">
            {APP_DATA.branding.copyright}
          </div>
        </footer>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav activeTab={activeTab} onNavigate={handleNavigate} />

      {/* Video Modal */}
      <VideoModal 
        videoId={activeVideoId} 
        onClose={() => {
          setActiveVideoId(null);
          if (activeTab === 'videos') {
            handleNavigate('videos');
          }
        }} 
      />

      {/* Toast Notification */}
      <Toast toast={toast} />
    </div>
  );
}
