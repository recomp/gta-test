let isDev = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDev ? '' : 'gta-test',
  outputDir: 'dist',
}