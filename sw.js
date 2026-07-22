// Terranova CRM - pass-through SW (offline mode lands in Phase 3)
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>self.clients.claim());
