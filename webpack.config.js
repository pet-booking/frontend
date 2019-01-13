'use strict'

require('dotenv').config()


const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

const production = process.env.NODE_ENV === 'production'

const plugins = [  
  new HtmlWebpackPlugin({
    template: `${__dirname}/public/index.html`,
  }),
  new CleanWebpackPlugin(['dist']),
]

module.exports = {
  plugins,
  devtool: production ? undefined : 'source-map',
  mode: process.env.NODE_ENV,
  entry: `${__dirname}/src/main.js`,

  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/dist`,
    publicPath: process.env.CDN_URL,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
    ],
  }
}