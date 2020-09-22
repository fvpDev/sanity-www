require('dotenv').config() // for Sanity, Google reCaptcha, and Analytics to work in dev environment
const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()

module.exports = withPlugins([
  /*[withPWA, {
    pwa: {
      disable: true,
      register: true,
      scope: '/',
      dest: 'public'
    },
  }],*/
  /*[withOptimizedImages, {
    optimizeImages: true,
    optimizeImagesInDev: true,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    webp: {
      preset: 'default',
      quality: 100,
    },
  }]*/
], {
  env: { // for Sanity, Google reCaptcha, and Analytics to work in dev environment
    NEXT_EXAMPLE_CMS_SANITY_PROJECT_ID: process.env.NEXT_EXAMPLE_CMS_SANITY_PROJECT_ID,
    ETHEREAL_FAKE_EMAIL_USER: process.env.ETHEREAL_FAKE_EMAIL_USER,
    ETHEREAL_FAKE_EMAIL_PASS: process.env.ETHEREAL_FAKE_EMAIL_PASS,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    GOOGLE_RECAPTCHA_SITEKEY: process.env.GOOGLE_RECAPTCHA_SITEKEY,
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    FULLSTORY_ORG: process.env.FULLSTORY_ORG,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => { // Generate Sitemap + Robots + RSS on build time
    if (isServer) {
      require('./utils/generate-sitemap')
      require('./utils/generate-robots')
      // require('./utils/generate-rss')
      // config.plugins.push(gitRevisionPlugin)
      // config.plugins.push(new webpack.DefinePlugin({
      //   APP_VERSION_INFO: {
      //     VERSION: gitRevisionPlugin.version(), //returns the output of git-describe command
      //     COMMITHASH: gitRevisionPlugin.commithash(), // returns last commit hash
      //     BRANCH: gitRevisionPlugin.branch() // returns the branch name from which the build was run
      //   }
      // }))
      // console.log(config)
    }
    return config
  },
  /*webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  }*/
})
