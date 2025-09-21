const CACHE_NAME = 'sales-on-demand-v1';
const STATIC_RESOURCES = [
  '/',
  'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2',
  'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Caching static resources
        return cache.addAll(STATIC_RESOURCES);
      })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            // Deleting old cache
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event with cache-first strategy for static assets
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip external APIs and analytics
  if (event.request.url.includes('google-analytics') || 
      event.request.url.includes('recaptcha') ||
      event.request.url.includes('api/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if available
        if (response) {
          return response;
        }

        // Fetch from network and cache for future use
        return fetch(event.request)
          .then(response => {
            // Check if response is valid
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Add to cache if it's a static asset
            if (event.request.url.includes('.js') || 
                event.request.url.includes('.css') ||
                event.request.url.includes('.woff') ||
                event.request.url.includes('.jpg') ||
                event.request.url.includes('.png') ||
                event.request.url.includes('.webp')) {
              
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          })
          .catch(() => {
            // Fallback for offline scenario
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});