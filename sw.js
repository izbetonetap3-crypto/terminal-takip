// Terminal Takip - çevrimdışı önbellek. Uygulamayı güncellediğinizde VERSION değerini artırın.
const VERSION = 'tt-v01-1';
const ASSETS = [
  "./",
  "css/all.min.css",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "img/app_icon.png",
  "img/logo.png",
  "index.html",
  "js/html2pdf.bundle.min.js",
  "js/jspdf.plugin.autotable.min.js",
  "js/jspdf.umd.min.js",
  "js/mammoth.browser.min.js",
  "js/tailwind.js",
  "manifest.webmanifest",
  "webfonts/fa-brands-400.woff2",
  "webfonts/fa-regular-400.ttf",
  "webfonts/fa-regular-400.woff2",
  "webfonts/fa-solid-900.ttf",
  "webfonts/fa-solid-900.woff2",
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))
  );
});
