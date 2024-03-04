'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "8f2f0a874ae9214500fd7c2fb9817889",
"assets/AssetManifest.smcbin": "63fe153f3aea51d7e3368ab5cca1f5eb",
"assets/assets/icons/capsulas.svg": "48c864bb8f7c6c307e52711ae5d860ca",
"assets/assets/icons/home.svg": "c8f3b82da38a910964ce15c2c34d0474",
"assets/assets/icons/pildora.svg": "cfb94ba1c48a2aaf5f975b4b9d23d18b",
"assets/assets/icons/tableta.svg": "2ca085fdd35b77efc39bcea203dbf333",
"assets/assets/icons/tarritoPresc.svg": "770fb35185bea275f18b33666191c9fb",
"assets/assets/icons/tarroTableta.svg": "17093182382268432b672ce58b3229dc",
"assets/assets/images/acetaminofen.png": "c61781dc35e4039e4bbdb36280252389",
"assets/assets/images/acetaminofen2.png": "9795fc76b6ab91209be0c99e83cba12a",
"assets/assets/images/amlodipino.png": "ef912cd57983f9c0f5c8e90439669a61",
"assets/assets/images/amlodipino2.png": "cf36360efd7f47930426749498023e9d",
"assets/assets/images/ampicilina.png": "13e901ebfc0334a68df84b34e423cfe5",
"assets/assets/images/ampicilina2.png": "8a13d622bb51621beddaab83a46f4a5e",
"assets/assets/images/cefazolina.png": "44eac02c6ba3cea08c2d6fcd66671dc9",
"assets/assets/images/cefazolina2.png": "5db29a32431dfc1e721b9b93e4728e73",
"assets/assets/images/cefepima.png": "20d95947787ec40a0aa922fc0efdb6b5",
"assets/assets/images/cefepima2.png": "962bcfc261c4b1bc0b83ce64e315790f",
"assets/assets/images/ciclosporina.png": "c081c1a7e21216c4673a2c557e58d970",
"assets/assets/images/ciclosporina2.png": "0be793a7acb9703579f92c185e444776",
"assets/assets/images/dipirona.png": "57a7bff84e4e3f4031927f3c458be3ee",
"assets/assets/images/dipirona2.png": "1fff4e60924749563d186212ec8bc2c6",
"assets/assets/images/enalapril.png": "afa46feda05d4fbdd0a2afa0716de7d0",
"assets/assets/images/enalapril2.png": "006803892590534d61eb47f599802dc3",
"assets/assets/images/everolimus.png": "784dc2a647f12bbd3b3c04377b389756",
"assets/assets/images/everolimus2.png": "59c09e4016a8e1372be1804de78abd19",
"assets/assets/images/furosemida.png": "16caa20112e6c0e71d39251c5db238d6",
"assets/assets/images/furosemida2.png": "112f3318165476283892d153f63b7051",
"assets/assets/images/grupo4_med1.2.png": "4e2bdbc62446c3116038a9ca940c5961",
"assets/assets/images/grupo4_med1.png": "057af34043807f620944b6b5680e309c",
"assets/assets/images/grupo4_med2.2.png": "9877d642d3d3ddc9152b6d299ab23c19",
"assets/assets/images/grupo4_med2.png": "a146707b41a8cae7aaa2d0f051d4c6e1",
"assets/assets/images/hidromorfona.png": "620da02751511b8fa157b9b9cc706dad",
"assets/assets/images/hidromorfona2.png": "1fe34126ce69329374f639f74e9f91f7",
"assets/assets/images/jeringuilla.png": "c17e4dbaf5daabc196ed7e74a117ce2c",
"assets/assets/images/logo_Urosario.png": "63ed88b1eac2105da126c64f5570f05f",
"assets/assets/images/meropenem.png": "b131a5b9d7a00fdde06d1f37eaf43bc2",
"assets/assets/images/meropenem2.png": "7f2d676277595a5ca3b8710e2e1896bc",
"assets/assets/images/minoxidin1.png": "18017055e9ee24c0e6a87488e6eefcf1",
"assets/assets/images/minoxidin2.png": "68f009c0d2bd27f00f550b0ae06675bb",
"assets/assets/images/morfina.png": "96c716dbe7733171c556373651a8757c",
"assets/assets/images/morfina2.png": "e55d6da4f0d637d85367842dec80ff9f",
"assets/assets/images/piperacilina.png": "85a24ee918edf751221350ca3a69ef00",
"assets/assets/images/piperacilina2.png": "233306065ba1722838cede626e8cbdf5",
"assets/assets/images/prazosina.png": "943115e6dd5145d4e77daea22f08ea62",
"assets/assets/images/prazosina2.png": "5981cab1fbfe33d794b75700c0b34bfd",
"assets/assets/images/prednisolona.png": "7ca60709d60eae9985ad65ee44ddf401",
"assets/assets/images/prednisolona2.png": "64c52ff504cb0a2e9fd2af9f8c7f2b30",
"assets/assets/images/sirolimus.png": "33b4b41248bc2e5c7f1f2027cbe1cdbd",
"assets/assets/images/sirolimus2.png": "06cfb0b9cbf7c278a3552a28068dd82e",
"assets/assets/images/tracolimus.png": "195a493fb9090f3a63dbd8cb59e23621",
"assets/assets/images/tracolimus2.png": "13d166027ecb9596bb25031d9bdd71aa",
"assets/assets/images/vancomicina.png": "2fdc7ba7017c860983b688dd1334f1e2",
"assets/assets/images/vancomicina2.png": "3469521732874f6e0fbf8d20918e94b8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b369b318bfd110e3e7f6d9651d8ff589",
"assets/NOTICES": "1f5bc221821ef3d26fd79ff9be1ecfef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "fba7ac8a06be0d4b549d39d812d70892",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "40d76f52cec1f70bedf3a6e54a0a7359",
"canvaskit/skwasm.js": "9265c6c0cdc6b28cff3e81701d8fd707",
"canvaskit/skwasm.wasm": "324d6e1e638739e7f76b86c0fa13d280",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ffe4245907aed155c4f0b8f9c65fba4",
"/": "2ffe4245907aed155c4f0b8f9c65fba4",
"main.dart.js": "89367e8c7035170a505f05d12e307fde",
"manifest.json": "f81fcb6ec8d4315a10c6ba479548ee78",
"version.json": "42130c525ac6097590271865b5a4a10a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
