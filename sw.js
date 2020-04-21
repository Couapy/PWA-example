/** Add files to cache **/
var cacheName = 'myapp';
var contentToCache = [
    '/css/theme.css',
    '/img/icon/icon-192.png',
    '/img/icon/icon-512.png',
    '/js/todo.js',
    '/index.html',
    '/manifest.webmanifest',
];

/** Log install **/
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installation');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] All files to cache');
            return cache.addAll(contentToCache);
        })
    );
});

/** Requests **/
self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request)
        })
    )
})

console.log('[Service Worker] Started')
