import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;
console.log(assets);

self.addEventListener('install', (event) => {
  // self.skipWaiting();
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  if (!(event.request.url.indexOf('https') === 0)) return;
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
