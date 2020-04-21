/** Add files to cache **/
var cacheName = 'myapp';
var contentToCache = [
    '/css/theme.css',
    '/img/icon/icon-192.png',
    '/img/icon/icon-512.png'
    '/js/serviceworker.js',
    '/js/todo.js',
    '/index.html',
    '/manifest.webmanifest',
    '/',
];

/** Log install **/
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installation');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Mise en cache globale: app shell et contenu');
            return cache.addAll(contentToCache);
        })
    );
});


