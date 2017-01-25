const webpack = require('webpack')
const browserSync = require('browser-sync')
const proxy = require('http-proxy-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const historyApiFallback = require('connect-history-api-fallback')

const config = require('./webpack.config')
const bundler = webpack(config)

const apiProxy = proxy('/api', {
  pathRewrite: {'^/api' : ''},
  target: 'https://jsonplaceholder.typicode.com',
  changeOrigin: true,
  logLevel: 'debug'
})

browserSync({
  open: false,
  server: {
    baseDir: config.output.path,
    index: "index.html",
    middleware: [
      apiProxy,
      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        stats: { colors: true }
      }),
      webpackHotMiddleware(bundler),
      historyApiFallback()
    ]
  },
  files: [
    'www/*.html'
  ]
})
