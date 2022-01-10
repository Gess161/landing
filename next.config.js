const withImages = require('next-images')
module.exports = withImages()
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  reactStrictMode: true,
})
