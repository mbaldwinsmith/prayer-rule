// Service worker — implemented in Phase 9.
// Placeholder so the manifest reference does not 404.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
