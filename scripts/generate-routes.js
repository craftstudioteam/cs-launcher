import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://craftstudioteam.github.io';
const LOGO_URL = 'https://i.ibb.co/ccSzBW5P/file-00000000e1cc821195ed9a7324d2b765.png';

const ROUTES = [
  {
    path: 'download/v3',
    title: 'Download CS Launcher V3 APK (Latest) — Minecraft Java on Android',
    description: 'Download official CS Launcher V3 APK (185.8 MB) for Android. Play Minecraft Java Edition with 60+ FPS, custom skins, HD capes, and zero lag.',
    image: LOGO_URL
  },
  {
    path: 'download/v2',
    title: 'Download CS Launcher V2 APK (Stable) — Minecraft Java on Android',
    description: 'Download CS Launcher V2 APK (160 MB) for Android. Stable release with high FPS rendering and custom skin & cape support.',
    image: LOGO_URL
  },
  {
    path: 'download/v1',
    title: 'Download CS Launcher V1 APK (Legacy) — Minecraft Java on Android',
    description: 'Download CS Launcher V1.0.0 Legacy Archive Build (300 MB) for Android. Original PojavLauncher base build archive.',
    image: LOGO_URL
  },
  {
    path: 'download',
    title: 'Download CS Launcher APK (V3, V2, V1) — Official Releases',
    description: 'Official download hub for CS Launcher APK. Direct downloads for V3 Latest (185.8 MB), V2 Stable (160 MB), and V1 Archive (300 MB) on Android.',
    image: LOGO_URL
  },
  {
    path: 'features',
    title: 'CS Launcher Features — Skin & Cape Changer on Android',
    description: 'Explore CS Launcher capabilities: dynamic custom Minecraft Java skin applicator, HD capes, and 60+ FPS optimizations on Android.',
    image: 'https://i.ibb.co/spqkyRXb/skin-and-Cap.jpg'
  },
  {
    path: 'videos',
    title: 'CS Launcher Video Showcases & Setup Guides',
    description: 'Watch CS Launcher gameplay showcases, 60 FPS optimization tutorials, and Android setup guides.',
    image: 'https://i.ibb.co/20dMMmQJ/In-game-mod-eresource-pack-shades-download.jpg'
  },
  {
    path: 'team',
    title: 'Craft Studio Team & Credits — CS Launcher',
    description: 'Meet the team behind CS Launcher (ROHIT_45, Not Danger, Ender_Warrrior) and PojavLauncher open-source credits.',
    image: LOGO_URL
  },
  {
    path: 'notice',
    title: 'Legal Notice & GNU GPLv3 — CS Launcher',
    description: 'CS Launcher licensing details, GNU General Public License v3.0 compliance, and PojavLauncher open-source attributions.',
    image: LOGO_URL
  },
  {
    path: 'help',
    title: 'Help Center & FAQs — CS Launcher',
    description: 'CS Launcher setup help, installation troubleshooting, RAM allocation tips, and Discord community support.',
    image: LOGO_URL
  }
];

const distDir = path.resolve('dist');
const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const route of ROUTES) {
  const targetDir = path.join(distDir, route.path);
  fs.mkdirSync(targetDir, { recursive: true });

  const url = `${BASE_URL}/${route.path}`;

  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/gi, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/gi, `<meta name="title" content="${route.title}" />`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/gi, `<meta name="description" content="${route.description}" />`);

  // Replace Canonical & OG URL
  html = html.replace(/<link rel="canonical" href=".*?" \/>/gi, `<link rel="canonical" href="${url}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/gi, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/gi, `<meta name="twitter:url" content="${url}" />`);

  // Replace OG Title & Twitter Title
  html = html.replace(/<meta property="og:title" content=".*?" \/>/gi, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/gi, `<meta name="twitter:title" content="${route.title}" />`);

  // Replace OG Description & Twitter Description
  html = html.replace(/<meta property="og:description" content=".*?" \/>/gi, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/gi, `<meta name="twitter:description" content="${route.description}" />`);

  // Replace OG Image & Twitter Image
  html = html.replace(/<meta property="og:image" content=".*?" \/>/gi, `<meta property="og:image" content="${route.image}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/gi, `<meta name="twitter:image" content="${route.image}" />`);

  fs.writeFileSync(path.join(targetDir, 'index.html'), html);
  console.log(`Generated: ${route.path}/index.html`);
}

console.log('✅ All static route previews generated successfully!');
