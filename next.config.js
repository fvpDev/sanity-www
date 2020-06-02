require('dotenv').config()
const withOptimizedImages = require('next-optimized-images')
const withPWA = require('next-pwa')

module.exports = withPWA({
  optimizeImages: false,
  optimizeImagesInDev: false,
  env: {
    NEXT_EXAMPLE_CMS_SANITY_PROJECT_ID: process.env.NEXT_EXAMPLE_CMS_SANITY_PROJECT_ID,
    ETHEREAL_FAKE_EMAIL_USER: process.env.ETHEREAL_FAKE_EMAIL_USER,
    ETHEREAL_FAKE_EMAIL_PASS: process.env.ETHEREAL_FAKE_EMAIL_PASS,
  },
  pwa: {
    disable: false,
    register: true,
    scope: '/',
    dest: 'public'
  },
  webpack: (config, { isServer }) => { // Generate Sitemap + Robots + RSS on build time
    if (isServer) {
      require('./utils/generate-sitemap')
      require('./utils/generate-robots')
      // require('./utils/generate-rss')
      // console.log(config)
    }
    return config
  }
})
