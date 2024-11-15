'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "561d4acdf29989417613cc2ffc1a6777",
"assets/AssetManifest.bin.json": "fbae161a8638f0d0c2e458d14e8fe757",
"assets/AssetManifest.json": "d39b3529a810afd9e9abb88bd5095f32",
"assets/assets/fonts/PlaywriteMX-ExtraLight.ttf": "6a11b2d63abbdac16b1c4fd4c91cba80",
"assets/assets/fonts/PlaywriteMX-Regular.ttf": "fd0b2325db1674afd6d9878e1351f848",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Sora-Bold.ttf": "59f1a10513024e9d080536ea7a744293",
"assets/assets/fonts/Sora-ExtraBold.ttf": "d788f18b38a544fce1c35733d9d1a676",
"assets/assets/fonts/Sora-ExtraLight.ttf": "39c9de554ff1a68219b5cdabc554bcc1",
"assets/assets/fonts/Sora-Light.ttf": "5662cb4703d0aeb2e42e9301ae42e0d3",
"assets/assets/fonts/Sora-Medium.ttf": "e3bb21ba620d898557d6537bbe0e9f10",
"assets/assets/fonts/Sora-Regular.ttf": "e771c55096d16865a23c2795806fb01b",
"assets/assets/fonts/Sora-SemiBold.ttf": "921341e5f1c4ef800e1ee926676791e0",
"assets/assets/fonts/Sora-Thin.ttf": "cf19f5c4ac432cd736815c489aa692d5",
"assets/assets/images/angular_logo.png": "bef4293d7f80d33c98a3082938dd1399",
"assets/assets/images/bootstrap_logo.png": "d012e3c7188f09ae03490cc9b4a3154b",
"assets/assets/images/curve_lines.svg": "d1149fda80d6ea7191d81a2e0ff1de00",
"assets/assets/images/dart_logo.png": "55fcf3fc1bff0c00ab8463c33ebfbbc0",
"assets/assets/images/dragon.jpg": "2965d642082b53892fa8bdc8ec4d5104",
"assets/assets/images/expressjs_logo.png": "60a21276044075902e5d23e33ec96a21",
"assets/assets/images/facebook_logo.png": "1043cb7c25852cad6d449d09e7ce621e",
"assets/assets/images/flutter_logo.png": "31c10f0165a9ffeeb313a0754835403e",
"assets/assets/images/g1.png": "689dc100f7502fabf5b44e21b91fd2ca",
"assets/assets/images/g2.png": "4aa108082e7d3cbd55add79f84612aaa",
"assets/assets/images/google_logo.png": "c78a104e4f0c1ed859149d7a69025489",
"assets/assets/images/hair_fixing_logo.png": "2fcb81ee556cca1a901bf93364df5f91",
"assets/assets/images/hrms_logo.png": "79f412551efacc47a872d3c2a36f70ca",
"assets/assets/images/html_logo.png": "7993a17fc16202999005e9d2b9ae40e7",
"assets/assets/images/image1.png": "d10514763d52437e3c1c40a2e09f31ec",
"assets/assets/images/image2.png": "80f994a4ad6bd6b7e81ef74867ddac74",
"assets/assets/images/image3.png": "c219544282c8ba651a9b410ebbecc0dc",
"assets/assets/images/Javascript_logo.png": "6891ca53c103035866b0bd4fbacf0b2a",
"assets/assets/images/java_logo.png": "2cbb8cf5baf82d6bb18c1d1f06b86577",
"assets/assets/images/nativeandroid_logo.webp": "c5b30e6c7bd133fcb0788b26c6f3acb9",
"assets/assets/images/nodejs_logo.png": "77bf0cc2e5511f841e5019415cc1ca31",
"assets/assets/images/Prasad_Image-removebg.png": "fb5d404c78cdd633872d39c94a418cfe",
"assets/assets/images/springboot_logo.png": "0f63d05208f10982bea6ca94c93f2e02",
"assets/assets/images/sql_logo.jpg": "8b0f927095f6487920bdc6a99609feb3",
"assets/assets/images/srikargroups_logo.png": "24f7b037c0c403cabe30cd9fe1442cb7",
"assets/assets/images/stacked-steps-haikei.png": "89e6aace2ccfe9b2df13dd58fcd42877",
"assets/assets/images/undraw_Male_avatar.png": "fc7cf96cdd21efc49853f1eb75594c30",
"assets/assets/images/undraw_Male_avatar2.png": "5c3f7fc430dfb414083efab81f9e57e6",
"assets/assets/images/wave_lines.svg": "fbbe70373e57ebf793cd321e18807f84",
"assets/FontManifest.json": "490e88848d8a0780f19a23e3e09cdaed",
"assets/fonts/MaterialIcons-Regular.otf": "93938d1bea1e9cf3e58e0c8501aaaba6",
"assets/NOTICES": "2655c65506bc4fabeee4061962c03371",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "886d9a3bc0061766c573b5ee294644bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c7d7086f3c0cfd5e7f2548bd16d430e6",
"/": "c7d7086f3c0cfd5e7f2548bd16d430e6",
"main.dart.js": "cee9b4ac6c908eee5c930ae4a9f012cb",
"manifest.json": "a66af55d31bf25dc1c189947f390b59e",
"version.json": "0503794e5d03284c7a7f09e3c20b1cfe"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
