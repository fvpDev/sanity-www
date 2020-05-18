require('dotenv').config()
const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  optimizeImages: false,
  optimizeImagesInDev: false,
  env: {
    NEXT_EXAMPLE_CMS_SANITY_PROJECT_ID:
      process.env.NEXT_EXAMPLE_CMS_SANITY_PROJECT_ID,
  },
  webpack: (config, { isServer }) => { // Generate Sitemap + RSS on build time
    if (isServer) {
      require('./utils/generate-sitemap')
      require('./utils/generate-robots')
      // require('./utils/generate-rss')
    }
    return config
  }
})
