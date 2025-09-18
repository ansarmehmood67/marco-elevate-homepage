// Service Worker for Performance Optimization
const CACHE_NAME = 'marco-business-v1';
const STATIC_CACHE = 'marco-static-v1';
const IMAGE_CACHE = 'marco-images-v1';
const VIDEO_CACHE = 'marco-videos-v1';

// Static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/src/main.tsx',
  '/src/index.css',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
      self.skipWaiting()
    ])
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (![CACHE_NAME, STATIC_CACHE, IMAGE_CACHE, VIDEO_CACHE].includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle Cloudinary images with cache-first strategy
  if (url.hostname.includes('cloudinary.com') && request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(async (cache) => {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }

        try {
          const response = await fetch(request);
          if (response.status === 200) {
            cache.put(request, response.clone());
          }
          return response;
        } catch (error) {
          // Return offline fallback if available
          return new Response('Image unavailable offline', {
            status: 408,
            statusText: 'Request Timeout'
          });
        }
      })
    );
    return;
  }

  // Handle Cloudinary videos with cache-first strategy
  if (url.hostname.includes('cloudinary.com') && request.destination === 'video') {
    event.respondWith(
      caches.open(VIDEO_CACHE).then(async (cache) => {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }

        try {
          const response = await fetch(request);
          if (response.status === 200) {
            cache.put(request, response.clone());
          }
          return response;
        } catch (error) {
          return fetch(request);
        }
      })
    );
    return;
  }

  // Handle static assets with cache-first strategy
  if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }

        try {
          const response = await fetch(request);
          if (response.status === 200) {
            cache.put(request, response.clone());
          }
          return response;
        } catch (error) {
          return cachedResponse || fetch(request);
        }
      })
    );
    return;
  }

  // For all other requests, use network-first strategy
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle offline form submissions, etc.
      console.log('Background sync triggered')
    );
  }
});

// Push notifications (for future use)
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      vibrate: [100, 50, 100]
    };
    
    event.waitUntil(
      self.registration.showNotification('Marco Business', options)
    );
  }
});