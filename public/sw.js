let cacheData = "cache1";

this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheData).then((cache) =>
      cache.addAll([
        //deployed site:
        // "https://cocky-galileo-58f5a9.netlify.app/",
        // "/static/css/main.21ca11e7.chunk.css",
        // "/static/js/2.d8b0c408.chunk.js",
        // "/static/js/main.1cb9d11d.chunk.js",
        "https://quran16.netlify.app/",
        "/static/css/main.98f2faf0.chunk.css",
        "/static/js/2.b02f468c.chunk.js",
        "/page-images/*",
        "/static/media/mosque.1a799f13.jpg",
        "manifest.json",
        "sw.js",
        "logo192.png",
        "favicon.ico",
      ])
    )
  );
});

this.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(cacheData).then(function (cache) {
      return cache.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((response) => {
            // cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
