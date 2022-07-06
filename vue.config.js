const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pwa: {
    name: 'Exhnge',
    themeColor: '#fff',
    icons: {
      favicon32: '@/assets/Icons/favicon-32x32.png',
      favicon16: '@/assets/Icons/favicon-16x16.png',
      appleTouchIcon: '@/assets/Icons/apple-touch-icon-152x152.png',
      maskIcon: '@/assets/Icons/safari-pinned-tab.svg',
      msTileImage: '@/assets/Icons/msapplication-icon-144x144.png'
    },
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions:{
      //swSrc is required in injectManifest mode.
      swSrc:'src/service-worker.js',
      //...other workbox options
     }
  },
});
