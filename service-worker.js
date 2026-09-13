const CACHE_NAME='toan3-static-v7';
const STATIC_ASSETS=['./','./index.html','./manifest.json','./assets/js/app.js'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(STATIC_ASSETS)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',event=>{
  const req=event.request,url=new URL(req.url);
  if(req.method!=='GET')return;
  if(url.hostname.includes('script.google.com')||url.hostname.includes('googleusercontent.com')||url.hostname.includes('translate.google.com'))return;
  if(url.origin!==self.location.origin)return;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(r=>{const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put('./index.html',copy));return r;}).catch(()=>caches.match('./index.html')));return;
  }
  event.respondWith(fetch(req).then(r=>{if(r&&r.ok){const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(req,copy));}return r;}).catch(()=>caches.match(req)));
});
