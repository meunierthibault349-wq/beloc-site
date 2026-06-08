var CACHE='beloc-v1';
var SHELL=[
  '/beloc-site/',
  '/beloc-site/index.html',
  '/beloc-site/vehicule.html',
  '/beloc-site/mentions-legales.html',
  '/beloc-site/assets/rs3-action.avif',
  '/beloc-site/assets/clio6-red.jpg',
  '/beloc-site/assets/clio5-blue.jpg',
  '/beloc-site/assets/golf8-black.png',
  '/beloc-site/assets/rs3-placeholder.svg',
  '/beloc-site/assets/golfr-placeholder.svg'
];

self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL);}));
  self.skipWaiting();
});

self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
  }));
  self.clients.claim();
});

self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.match(e.request).then(function(cached){
      var net=fetch(e.request).then(function(r){
        if(r&&r.status===200&&r.type==='basic'){
          var c=r.clone();
          caches.open(CACHE).then(function(cache){cache.put(e.request,c);});
        }
        return r;
      });
      return cached||net;
    })
  );
});
