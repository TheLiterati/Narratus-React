'use strict'

const dotenv = require('dotenv')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

dotenv.load()

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   historyApiFallback: true,
  // },
  entry: `${__dirname}/src/main.js`,
  output: {
    publicPath: '/',
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
  },
  plugins: [
    new ExtractPlugin('bundle-[hash].css'),
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify(process.env.API_URL),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
}
