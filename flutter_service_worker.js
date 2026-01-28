'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c0eb7ebddf73d3322257d124a80d4d38",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5580b2aa9cfd40665a8f937f8690a137",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d1ffe8dd94a230a3cba932b3a717aee",
".git/logs/refs/heads/master": "9d1ffe8dd94a230a3cba932b3a717aee",
".git/objects/0e/3d619492b68c3303252cd9846fd4b5d1a7257b": "d3fcbb32ea6d99e362134218b964d196",
".git/objects/61/b9cbbf97f8535dee903d8578348e16b454a01f": "bfaaf130b354eb75090b4fefae232d02",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/285c186924cb6a616e920b2a9e9d01e314d935": "a19f7ebac670d7f234746eb1788a0c16",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/810db5bdb9670f747cd2f91b7dd5e1f77e9e21": "d6eb78f0df4ded2b4b10a9464acc6099",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "821bb4c989ab040891f909925ff578c1",
"assets/AssetManifest.bin": "082d5802ec39046cc3b25e11330ff2ee",
"assets/AssetManifest.bin.json": "25c7e06188d4bb84b544ccdae335e634",
"assets/AssetManifest.json": "82c929d4e32d25fc7ff09405838a74f0",
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
"assets/assets/images/amoung_us.png": "4f208bc05208f7e0517c3819e9c01fa5",
"assets/assets/images/angular_logo.png": "bef4293d7f80d33c98a3082938dd1399",
"assets/assets/images/billify_logo.png": "c1abc10ec9f987913011de30fed7377e",
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
"assets/assets/images/ic_akshayalogo.png": "4a98f60fb88edb08571142e47dc22826",
"assets/assets/images/ic_portfolio.png": "c0638d4dfa50e7fb80f94e16946eb6be",
"assets/assets/images/image1.png": "d10514763d52437e3c1c40a2e09f31ec",
"assets/assets/images/image2.png": "80f994a4ad6bd6b7e81ef74867ddac74",
"assets/assets/images/image3.png": "c219544282c8ba651a9b410ebbecc0dc",
"assets/assets/images/Javascript_logo.png": "6891ca53c103035866b0bd4fbacf0b2a",
"assets/assets/images/java_logo.png": "2cbb8cf5baf82d6bb18c1d1f06b86577",
"assets/assets/images/nativeandroid_logo.webp": "c5b30e6c7bd133fcb0788b26c6f3acb9",
"assets/assets/images/nodejs_logo.png": "77bf0cc2e5511f841e5019415cc1ca31",
"assets/assets/images/no_image.png": "c4924f81a6b24f58b638f9d0b76eae5d",
"assets/assets/images/Prasad_Image-removebg.png": "fb5d404c78cdd633872d39c94a418cfe",
"assets/assets/images/springboot_logo.png": "0f63d05208f10982bea6ca94c93f2e02",
"assets/assets/images/sql_logo.jpg": "8b0f927095f6487920bdc6a99609feb3",
"assets/assets/images/srikargroups_logo.png": "24f7b037c0c403cabe30cd9fe1442cb7",
"assets/assets/images/stacked-steps-haikei.png": "89e6aace2ccfe9b2df13dd58fcd42877",
"assets/assets/images/undraw_Male_avatar.png": "fc7cf96cdd21efc49853f1eb75594c30",
"assets/assets/images/undraw_Male_avatar2.png": "5c3f7fc430dfb414083efab81f9e57e6",
"assets/assets/images/wave_lines.svg": "fbbe70373e57ebf793cd321e18807f84",
"assets/FontManifest.json": "490e88848d8a0780f19a23e3e09cdaed",
"assets/fonts/MaterialIcons-Regular.otf": "df40e605907c6d3cc7b4e50239456b3c",
"assets/NOTICES": "89d4486377b797236fe4354d07b5a25a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "c0638d4dfa50e7fb80f94e16946eb6be",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "a86f59adaec4b8cf13e3da69c96b24c8",
"icons/Icon-192.png": "b30c648d2f84a88e41742eaa6ee2e1cd",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon_512.png": "0cd76c37c20aacc5d0287595ec2e4e7e",
"index.html": "76f0c6df5fc744100d0cacfc8c228680",
"/": "76f0c6df5fc744100d0cacfc8c228680",
"main.dart.js": "e121f6230f031c5bfcf79f7df8d4b663",
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
