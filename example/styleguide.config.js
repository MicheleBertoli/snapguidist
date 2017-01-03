const path = require('path')
const snapguidist = require('snapguidist')

module.exports = snapguidist({
  title: 'Snapguidist Styleguide',

  components: 'src/components/**/[A-Z]*.js',

  updateWebpackConfig(webpackConfig) {
    const sourceFolder = path.resolve(__dirname, 'src')
    webpackConfig.module.loaders.push({
      test: /\.jsx?$/,
      include: sourceFolder,
      loader: 'babel',
    })

    return webpackConfig
  },
})
