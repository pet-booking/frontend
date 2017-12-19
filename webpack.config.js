'use strict'

require('dotenv').config()

const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = [  new HtmlWebpackPlugin({
  title: 'Pet Booking',
  template: `${__dirname}/public/index.html`,
}),]

module.exports = {
  plugins,
  entry: `${__dirname}/src/main.js`,

  output: {
    filename: 'bundle.js',
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