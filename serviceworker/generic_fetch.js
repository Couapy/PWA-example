self.addEventListener('fetch', function (event) {
    event.respondWith(
        // Try the cache
        caches.match(event.request).then(function (response) {
            // Fall back to network
            return response || fetch(event.request);
        }).catch(function () {
            // If both fail, show a generic fallback:
            return caches.match('/offline.html');
            // However, in reality you'd have many different
            // fallbacks, depending on URL & headers.
            // Eg, a fallback silhouette image for avatars.
        })
    );
});


/**
 * OR
 */


self.addEventListener('fetch', function (event) {
    event.respondWith(
        // Try the cache
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request).then(function (response) {
                if (response.status === 404) {
                    return caches.match('pages/404.html');
                }
                return response
            });
        }).catch(function () {
            // If both fail, show a generic fallback:
            return caches.match('/offline.html');
        })
    );
});