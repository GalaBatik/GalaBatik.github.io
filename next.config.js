module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    // basePath: '/NextJsDemoPage',
    // images:{
    //       loader:"custom",
    //       loaderFile:"/NextJsDemoPage/custom-image-loader.js",
    // },
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    }
  };