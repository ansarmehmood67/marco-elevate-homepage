// Enhanced Service Worker for Performance Optimization

const CACHE_NAME = 'sales-on-demand-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const IMAGE_CACHE = 'images-v2';

// Resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2'
];

// Images to cache with different strategies
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.svg', '.gif'];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => {
        return cache.addAll(CRITICAL_RESOURCES).catch(error => {
          console.warn('Failed to cache some critical resources:', error);
          // Continue installation even if some resources fail
        });
      }),
      caches.open(IMAGE_CACHE),
      caches.open(DYNAMIC_CACHE)
    ]).then(() => {
      // Skip waiting to activate immediately
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE];
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!currentCaches.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Claim all clients
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external APIs and analytics
  if (shouldSkipRequest(url)) return;

  // Determine caching strategy based on resource type
  if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
  } else if (isStaticResource(request)) {
    event.respondWith(handleStaticResource(request));
  } else if (isDynamicContent(request)) {
    event.respondWith(handleDynamicContent(request));
  } else {
    event.respondWith(handleGenericRequest(request));
  }
});

// Helper functions
function shouldSkipRequest(url) {
  return (
    url.hostname !== self.location.hostname ||
    url.pathname.includes('/api/') ||
    url.pathname.includes('google-analytics') ||
    url.pathname.includes('recaptcha') ||
    url.pathname.includes('facebook') ||
    url.pathname.includes('twitter') ||
    url.pathname.includes('linkedin')
  );
}

function isImageRequest(request) {
  return IMAGE_EXTENSIONS.some(ext => request.url.includes(ext)) ||
         request.destination === 'image';
}

function isStaticResource(request) {
  return request.url.includes('.js') ||
         request.url.includes('.css') ||
         request.url.includes('.woff') ||
         request.url.includes('.woff2') ||
         request.url.includes('.ttf');
}

function isDynamicContent(request) {
  return request.mode === 'navigate' ||
         request.destination === 'document';
}

// Image caching strategy - Cache first with fallback
async function handleImageRequest(request) {
  try {
    const cache = await caches.open(IMAGE_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Clone and cache the response
      const responseToCache = networkResponse.clone();
      
      // Cache management - limit cache size
      manageImageCacheSize(cache, responseToCache, request);
    }
    
    return networkResponse;
  } catch (error) {
    // Return a fallback image or empty response
    return new Response('', { status: 408, statusText: 'Request timeout' });
  }
}

// Static resource caching - Cache first
async function handleStaticResource(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Try to serve from any cache as fallback
    const response = await caches.match(request);
    return response || new Response('', { status: 408, statusText: 'Request timeout' });
  }
}

// Dynamic content - Network first with cache fallback
async function handleDynamicContent(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fall back to cached version
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Ultimate fallback for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/');
    }
    
    return new Response('', { status: 408, statusText: 'Request timeout' });
  }
}

// Generic request handler
async function handleGenericRequest(request) {
  try {
    return await fetch(request);
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response('', { status: 408, statusText: 'Request timeout' });
  }
}

// Manage image cache size to prevent unlimited growth
async function manageImageCacheSize(cache, response, request) {
  const MAX_IMAGES = 50; // Limit to 50 cached images for better performance
  
  try {
    const keys = await cache.keys();
    
    if (keys.length >= MAX_IMAGES) {
      // Remove oldest cached image (FIFO)
      await cache.delete(keys[0]);
    }
    
    await cache.put(request, response);
  } catch (error) {
    // Silent fail for cache management
  }
}