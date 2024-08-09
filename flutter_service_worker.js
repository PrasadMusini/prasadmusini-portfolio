'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "42b91da680b0a5420fad0c3eeb9e52dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "9591ab60d434eefc9a01676ca73aca02",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f22ff7c968cadf38fceddec3c431d154",
".git/logs/refs/heads/main": "d63cd8548ce7e7ffa771fd0d630c76ae",
".git/logs/refs/remotes/origin/main": "9808fe7dacc381faf558bc30e36495da",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/07/55623a649f56ace9139e49ecca5a04e39814d6": "28c8861f3d480d84d2dee044e0641f38",
".git/objects/07/8f5e72496737f844c0a3974ad7f4623b285ede": "15bc3cd924797130a5a1b06b05580c56",
".git/objects/09/0744365d4c5c53bdfecb01f1c026bdc27a5c68": "7f0afe40dca57eb96181d4f7679e2b47",
".git/objects/0a/90151b9376ed5b8419e11dd65ff3c0fd610d53": "8dbc5dcdcd5898e2805193b1d35a3b09",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/13/415f38f9084bbb8527f41831fd338919279290": "415b0ca25d06fe62c70911ce5a5c10ce",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/fac2515139548dddf5cfddf467c561cfe3d7ed": "1f3b752c8ed1568673471492f113fc99",
".git/objects/24/6bfd0259c554dc25ab90ef909bbf2442c50497": "4eeac56ae52445a8bf5e20f67eff8800",
".git/objects/25/6dc674d8f2a8c25ef640cd8806e3de184244e3": "bbfe76079fff3223804fd8f08404e987",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/37/9a34fcdcf8618b12bb366c22ceee86a0ae8dd3": "cc09f5b54c4febb259ee8e76b3e4179c",
".git/objects/3a/be2e41317ac1983d83285d9a6c660ecef83572": "c66e5a2709ec25630d7eedc72dc2c802",
".git/objects/3b/826245c397cd0bdcc9579bb427dc567cd36fd1": "a0d00e5daacff3f3f634f6714669cc6f",
".git/objects/3c/7a97a7b2ace9e0e02d3364c4b3ba6ae9544efd": "1234e2587860ad457fef6e06ac9bf268",
".git/objects/3d/05aa428b8a1b8b34cfacda043c06edaa986043": "5ff009bff14023f2ae44199d452a5b21",
".git/objects/3d/19b961a4b3735edc03deb047945530eea8d837": "7496ec4516df600bc72653fc1b844e0a",
".git/objects/49/629abc6776133ed17c42280fb7a29004cfaa0a": "5fc2a1633edc5473920fc30c5641dbe2",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/707fb673f3586df2cfa60e76fc8a960ec42619": "21380aae66ec861c7ed705fdf1334cf0",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/60/7e0bf33ea9ef42350414677bec0d37bb830227": "1ba3eff9fcf89615fb454007be3ee41b",
".git/objects/61/b9cbbf97f8535dee903d8578348e16b454a01f": "bfaaf130b354eb75090b4fefae232d02",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/6a22e4f1f3dd2ec74af35cf1f3d9e695b5ea76": "778468cb35af8bf09c2fc726b529ab7d",
".git/objects/6a/be576e33e322ffefde57281cf343409feb05e1": "86439a47d00d84c2bc6a76e5cc5b5d09",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/eb6110311e555c4ae35b4a549366e355efb3e4": "84363ebe68af48386c57d43f0916712d",
".git/objects/70/5c58f5f87feed2351827fcdd57ac3592506baf": "514fbb005f1025355da60e4340b42120",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/73/2ecb35344f22c5a192cf7dcc46907a650fdc24": "d10cf5f075ecfbdb980bcef18be664bf",
".git/objects/76/8f0986d1b5074067c55bb935559d7f6784e877": "71719395c31b6aa38180be3fcad361d3",
".git/objects/76/c66af0a0f234764246361b1300afe8cdd5ea8e": "41514f712e78709bb2362da97259df2f",
".git/objects/77/c5db32fc1c5e56827951ba76724d9a6d582f7e": "36a1207f8894fecd13ddc353757a511f",
".git/objects/7c/2845e9fe0f51d59a731cfeb2d3472697b4aff6": "8f74dc7bec97607435374cb0bc5aca59",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a0e8d672b4252c11816c92066ff993372538ec": "6f1be8136a48a4e996d6321b55fdc855",
".git/objects/8f/5d0cd1d1841adda8fe58deac45cec231f77058": "274d25c72efe6cce5a6a45a4c70c039c",
".git/objects/90/c8f3e80da8a33410b60e84624c486d329b7931": "e057083b9648fd4209d80922d0009f93",
".git/objects/91/a3caa8f409325b13699adf83a5218141948790": "0b29519ad0162e33686a3f573c1ae08e",
".git/objects/91/a4985c9a8a0c731c6358d138b8f378587cc1d9": "f417efc75d9d6898ba5c12700e21636f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/26f09377327968b61a992bc487df639ca9fa5e": "c32f05db67bc34bc9c1039349163f672",
".git/objects/98/647da8b5365d821fc8f4de00f4ea11cb8f1b2f": "7141c1523920ff13254181bf473939f4",
".git/objects/99/8f78ca159ceb3708079b15ac502bbd87777ad1": "28edb52796f6e9aa5b9c6292235a719e",
".git/objects/9c/23a22306b8d554bc5a48200c7a13c658ca953d": "bc8a437feedf78f8a48c5305910172ef",
".git/objects/9c/57e2ef15c8a4eed4c04823a07e24e50d53725a": "e811a9df28affb2dda44b32c386d7d28",
".git/objects/9d/bb732a41330afa654caf17741552dc2b7d86c0": "8b628229518147b847bf250d0dd79cfa",
".git/objects/ab/28362c6dedb6941d48ae2e838c05af6e8b7534": "5a5752d10237d7aa9a1fc3616e2e2f0c",
".git/objects/ac/5fff7c74070c8ce8c1f1f3d321d6b4d5ac6b61": "f907963c23762357da6c304844ab5e17",
".git/objects/ad/5173a26031c9ba6ac97b91c0f049675877e4c1": "b0fc2d6f8a667db74deb37a53703dbb2",
".git/objects/ae/a86fc7847fc4ec3dc94e3075d283b8ac89b3ce": "a8a51f7f13badc53218ae7d2a5c1e634",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/99e8d998755c1f7d74ec49a3f2989a68f2d350": "b0a3ade03f67df48990d4f9998f4701f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/b1baf8de6565c556de0765c118a01a1657cadd": "4c53dbfcae1df3abde201bd9951c9553",
".git/objects/c2/8a2508566b8b195c2334b59fd47daa3d488857": "6cdade3a68af1c22353fa8e626d2c683",
".git/objects/c8/af284de128a6eec5e2fc02cc92194d072675a4": "6ae787cd236b68f63eecc6534c77284e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/78d8bf68c72fd10da2ca2d1caf962dcb560987": "c5fed7e010d02867a5810f97a41d8184",
".git/objects/dc/3ca99743c78edc434d329c3f043c34f616a50c": "afb238f065fb140bd4cbecec79bb2fa9",
".git/objects/dd/0103bb64d53722bd4d3c78058481c5a2d53ddf": "a206ceba8ebab1684da34512e9bf26ca",
".git/objects/de/50a4eed8a99c354c3e66b9865bde63bd5d1317": "cfbeeacbc08a010499e5aacbd3ebb5d2",
".git/objects/df/1bec1ce30d4a082228f2f2766b0a144e2908c8": "d5f54bb634de137ffe8944c7e4c75526",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/ea/117e8b457161313e70af44661d26ad08869850": "b3a475967c1f8debb3e8224255a24ac2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/87befcbbfbda5f230c74799c2ec839275e5bcc": "199d0c1cb8e4a3f6326e02ee8f040859",
".git/objects/ef/b70043fe332703a63a126b966c4ef30e19a25a": "ec664a1fcf7abf9f090f7213c89bc36b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/cecbd826cefd3fe4e6fa2b411652c1c7520180": "f67bab07d2cbdc07b2855f9cdfda1e9e",
".git/objects/f8/0db0aab42ac7c62896eacff3d4df0c2377a649": "7aaa763056fddc2d82729f9bedb85b16",
".git/objects/fa/a0935bd0af9c149ae5e49346d10a724bfca662": "cbcdf9a96f720a0be5ff1843f17a3058",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/fe/fc778c9934067f89b984b5b726016f36591fcd": "ffd2ccdd571e76596100e7712a44b206",
".git/refs/heads/main": "428acf56f1c41421ed8875bc9e791042",
".git/refs/remotes/origin/main": "428acf56f1c41421ed8875bc9e791042",
"assets/AssetManifest.bin": "561d4acdf29989417613cc2ffc1a6777",
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
"assets/NOTICES": "576952ac16b56245009da63687f58151",
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
"flutter_bootstrap.js": "e0b6a6f097b27b2842ae70d5e523ac5f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7abdec0c1de5c321745588e0bc043e0a",
"/": "7abdec0c1de5c321745588e0bc043e0a",
"main.dart.js": "3d093b4e6193f70030b000d58824b662",
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
