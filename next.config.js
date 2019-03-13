const webpack = require('webpack')
const runtimeConfig = require("./config")

module.exports = (phase, { defaultConfig }) => {
  return {
    serverRuntimeConfig: runtimeConfig,
    publicRuntimeConfig: runtimeConfig,

    webpack: (config) => {
      config.plugins = config.plugins || []

      config.plugins = [
        ...config.plugins,

        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env['NODE_ENV'])
        })
      ]

      config.module.rules.push({
        test: /\.(txt|jpg|png|svg|mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: '',
              emitFile: true,
              name: '[path][name].[ext]'
            }
          }
        ]
      // },
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   exclude: [/node_modules/, '/.next'],
      //   loader: 'eslint-loader',
      //   options: {
      //     emitError: false,
      //     emitWarning: true,
      //     failOnWarning: false,
      //     failOnError: false
      //   }
      })

      return config
    }
  }
}
