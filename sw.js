// Terranova CRM service worker — web push + pass-through fetch (offline mode lands in Phase 3)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('push', e => {
  let data = { title: 'Terranova CRM', body: '' };
  try { data = e.data.json(); } catch (_) { try { data.body = e.data.text(); } catch (_) {} }
  e.waitUntil(self.registration.showNotification(data.title || 'Terranova CRM', {
    body: data.body || '',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: data.kind || 'terranova',
    data: { url: self.registration.scope },
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || self.registration.scope;
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if ('focus' in c) return c.focus(); }
    return clients.openWindow(url);
  }));
});
