/* Incrémenter CACHE_VER à chaque déploiement pour invalider l'ancien cache */
var CACHE_VER='beloc-v2';
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
  e.waitUntil(caches.open(CACHE_VER).then(function(c){return c.addAll(SHELL);}));
  self.skipWaiting();
});

self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE_VER;}).map(function(k){return caches.delete(k);}));
  }));
  self.clients.claim();
});

self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  /* Stratégie stale-while-revalidate : on sert le cache immédiatement
     et on met à jour en arrière-plan pour le prochain chargement */
  e.respondWith(
    caches.open(CACHE_VER).then(function(cache){
      return cache.match(e.request).then(function(cached){
        var netFetch=fetch(e.request).then(function(r){
          if(r&&r.status===200&&r.type==='basic'){
            cache.put(e.request,r.clone());
          }
          return r;
        }).catch(function(){return cached;});
        return cached||netFetch;
      });
    })
  );
});
