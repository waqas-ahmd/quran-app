let cacheData = "cache1";

var arrayOfImages = [null];

for (var i = 1; i <= 550; i++) {
  var num = null;
  if (i < 10) {
    num = "000" + i;
  } else if (i < 100) {
    num = "00" + i;
  } else if (i < 1000) {
    num = "0" + i;
  }
  arrayOfImages[i - 1] = `/page-images/${num}.png`;
}

this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheData).then((cache) =>
      cache.addAll([
        //deployed site:
        // ...arrayOfImages,
        "https://quran16.netlify.app/",
        "/static/css/main.b19943bb.chunk.css",
        "/static/js/2.b02f468c.chunk.js",
        "/static/js/main.03e66cbc.chunk.js",
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
