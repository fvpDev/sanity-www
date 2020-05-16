const withOptimizedImages = require('next-optimized-images')
require('dotenv').config()

module.exports = withOptimizedImages({
  optimizeImages: false,
  optimizeImagesInDev: false,
  env: {
    NEXT_EXAMPLE_CMS_SANITY_PROJECT_ID:
      process.env.NEXT_EXAMPLE_CMS_SANITY_PROJECT_ID,
  }
})
