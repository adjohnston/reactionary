import { resolve } from 'path'

export default {
  entry: resolve(__dirname, 'src/Stencil.js'),

  output: {
    filename: 'Stencil.js',
    path: resolve(__dirname, 'dist'),
    library: 'Stencil',
    libraryTarget: 'umd'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  resolve: {
    alias: {
      helpers: resolve(__dirname, 'src/helpers.js'),
      components: resolve(__dirname, 'src/components')
    }
  }
}
