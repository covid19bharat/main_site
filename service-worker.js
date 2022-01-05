if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"aa6fd7634dbbf2e57326d61b046bc5a1","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"aa6fd7634dbbf2e57326d61b046bc5a1","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"e1b4bb7171f893224fd40d3fb983c9a2","url":"static/css/22.80df4701.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"d4a116a53a313991809b42dbf3583222","url":"static/js/1.f61ca46f.chunk.js"},{"revision":"cadaa579472c8e19a731d977e49b8cec","url":"static/js/11.e1480358.chunk.js"},{"revision":"ba57d9cc248135a12041a530af4f310b","url":"static/js/12.d150ff3d.chunk.js"},{"revision":"07b8898d758c89c434cad2e0af905b91","url":"static/js/13.cd8bf458.chunk.js"},{"revision":"04e5be20bf5ed9be071f7f4fa2f4de07","url":"static/js/14.61f8457b.chunk.js"},{"revision":"4f87ced6bbd0eba95d8c08cdc388fabe","url":"static/js/15.d5336327.chunk.js"},{"revision":"18b34fb6ae538e91d1877f2e58a5b0f8","url":"static/js/16.04a273d2.chunk.js"},{"revision":"03cc56bd499fea578ca8d0fb042d2aaa","url":"static/js/17.aa0e7b75.chunk.js"},{"revision":"058ae0d94d0513028dc28f4c9fdb59e1","url":"static/js/18.87c7b61a.chunk.js"},{"revision":"cdf97efc9dcb61262d51d133b920fb71","url":"static/js/19.c16989df.chunk.js"},{"revision":"f0fbd43ae3c7cb2bce87ae3f37d9b816","url":"static/js/2.b9040596.chunk.js"},{"revision":"18196513b00036f7752386ecb086f50a","url":"static/js/20.031f55d2.chunk.js"},{"revision":"ade2a8d6f2928d45b5b7d493091b8853","url":"static/js/21.c9ebc84b.chunk.js"},{"revision":"ca040da8c513ec4085cb02a861a59c19","url":"static/js/22.ee3d6867.chunk.js"},{"revision":"67f3073a7a06fc87e22cf8d7b72b05d2","url":"static/js/23.18371aa3.chunk.js"},{"revision":"c2656bf1a2d63d39ad27f6b251c37b05","url":"static/js/24.c2f62e02.chunk.js"},{"revision":"35d5f6ac8944a128a53f0c635ac8f1b4","url":"static/js/25.54fd797d.chunk.js"},{"revision":"23deca0c1af81b70fc4d458fbc84ca03","url":"static/js/26.4d1c5a86.chunk.js"},{"revision":"265fbf3fdef7edcd60dd39d9406387a9","url":"static/js/27.5339dd08.chunk.js"},{"revision":"e77339993aa362cb25c5eb2f3dc2df87","url":"static/js/28.d8c5e234.chunk.js"},{"revision":"b0a0037fdce0e7a78449151263fc5ba9","url":"static/js/29.40f59c61.chunk.js"},{"revision":"5d4083688d581fdff4262e9d0a3cbb9e","url":"static/js/3.27335a4c.chunk.js"},{"revision":"eaac3b9c84ac729c5ba7f32b827cf5df","url":"static/js/30.6bbf6009.chunk.js"},{"revision":"812f233e81dacdb8901a983b2dcc207b","url":"static/js/31.24fa1645.chunk.js"},{"revision":"74e9680b365c7186b3643f1f9cce9db0","url":"static/js/32.177efa5e.chunk.js"},{"revision":"97470936ee2c13625645b010b4ee7355","url":"static/js/33.169a5f31.chunk.js"},{"revision":"0202f5ff133b477167517b18c23c3cc0","url":"static/js/34.e03848e2.chunk.js"},{"revision":"fc54f39ef1b46bbbee8e993fc93a32da","url":"static/js/35.802bd85c.chunk.js"},{"revision":"c48ef6a4ab3b1ecb00f5aac1a76e291b","url":"static/js/36.b4ab0ca9.chunk.js"},{"revision":"a6a821c09122cca59b3b685f1c7bde23","url":"static/js/37.4987e953.chunk.js"},{"revision":"b24688c6a695857defc1eb13db8f416d","url":"static/js/38.6e31e155.chunk.js"},{"revision":"07b4b31d050e348a868a1183ce640561","url":"static/js/39.a35b80c8.chunk.js"},{"revision":"6f2d773a71432e513a78fcdf2626b9a0","url":"static/js/4.2c0898e3.chunk.js"},{"revision":"e4d1fb0519669bf473b16042232750aa","url":"static/js/40.79523ead.chunk.js"},{"revision":"1a2540b0cfa90209bbfb7d350700bd6a","url":"static/js/41.b77c03ba.chunk.js"},{"revision":"adfada1acdd197f53a4f65ab01506e2f","url":"static/js/42.5f2bcd83.chunk.js"},{"revision":"df80e0c8fad3305813f57238fb984d45","url":"static/js/43.81ff518d.chunk.js"},{"revision":"c690c27a722a0ee91b520dbfe87fec40","url":"static/js/44.908f46ed.chunk.js"},{"revision":"13cefcd0461769506093a21639276e12","url":"static/js/45.bd4ac566.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"bd711b1ac47a19b3866ce4b24c098071","url":"static/js/5.dba75c67.chunk.js"},{"revision":"2586bf0c80b72ae133c72b656d3f23b3","url":"static/js/6.59de0973.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"ce1dec0f23a9d48e962543bf35a7f7ea","url":"static/js/8.ec0e1839.chunk.js"},{"revision":"7a80ea91ae1cf63821cbd3c951181c1e","url":"static/js/main.2d1bc1d6.chunk.js"},{"revision":"8ef624e4dee9a1c63869c55d62627e53","url":"static/js/runtime-main.7ac64882.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
