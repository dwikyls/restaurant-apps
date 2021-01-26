import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([
        ...assets,
        './',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        'https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0',
        'https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2',
    ]));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
});