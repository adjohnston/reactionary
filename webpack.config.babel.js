import { resolve } from 'path'

export default {
  entry: resolve(__dirname, 'src/index.js'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
