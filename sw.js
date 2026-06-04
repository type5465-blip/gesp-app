/* ============================================
   Python GESP 一级助考 - Service Worker
   提供离线缓存支持
   ============================================ */

const CACHE_NAME = 'gesp-app-v1';
const ASSETS_TO_CACHE = [
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
];

// 安装事件 - 缓存核心资源
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// 请求拦截 - 缓存优先策略
self.addEventListener('fetch', (event) => {
    // 跳过非GET请求
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // 缓存命中，返回缓存内容
            if (cachedResponse) {
                return cachedResponse;
            }

            // 否则发起网络请求
            return fetch(event.request).then(response => {
                // 只缓存成功的响应
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                // 克隆响应并缓存
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            }).catch(() => {
                // 网络失败时，对于导航请求返回首页
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
                // 其他请求静默失败
                return new Response('', { status: 408 });
            });
        })
    );
});
