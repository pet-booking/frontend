require('dotenv').config()

const { DefinePlugin, EnvironmentPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FaviconWebpackPlugin = require('favicons-webpack-plugin')

const production = process.env.NODE_ENV === 'production'

const plugins = [
  new HtmlWebpackPlugin({
    template: `${__dirname}/public/index.html`,
  }),
  new CleanWebpackPlugin(['dist']),
  new DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
  new EnvironmentPlugin({
    NODE_ENV: process.env.NODE_ENV,
  }),
  new ExtractTextPlugin('bundle.[hash].css'),

  new FaviconWebpackPlugin({
    logo: `${__dirname}/public/favicon.png`,
    emitStats: false,
    background: '#333',
    icons: {
      android: false,
      appleIcon: true,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
  }),
]

const optimization = {}

if (production) {
  optimization.minimizer = [new UglifyJsPlugin()]
}

module.exports = {
  plugins,
  optimization,
  devtool: production ? undefined : 'source-map',
  mode: process.env.NODE_ENV,
  entry: `${__dirname}/src/main.js`,

  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/dist`,
    publicPath: process.env.CDN_URL,
  },

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', 'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !production,
                includePaths: [`${__dirname}/src/style`],
              },
            },
          ],
        }),
      },
      {
        test: /\.(woff|woff2|ttf|eot).*/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        exclude: /\.icon\.svg$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'image/[name].[hash].[ext]',
          },
        }],
      },
      {
        test: /\.icon\.svg$/,
        loader: 'raw-loader',
      },

    ],
  },
}
